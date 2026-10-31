(() => {
  const DECKS = window.DECKS;
  const SITE_URL = "https://thesimpals.github.io/halloween/";
  const $ = (sel) => document.querySelector(sel);

  const intro = $("#intro");
  const reading = $("#reading");
  const grid = $("#grid");
  const btnReveal = $("#btn-reveal");
  const btnShare = $("#btn-share");

  let state = null; // { mode, values: [], revealed: Set }

  // ---------- Sorteio ----------
  const rand = (n) => Math.floor(Math.random() * n);
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = rand(i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  // opções da carta dentro do tema sorteado (criatura / estilo da casa)
  const optionsFor = (card, theme) => (theme && theme[card.cat]) || card.options;
  const themeOf = (mode, values) => {
    const deck = DECKS[mode];
    const i = deck.cards.findIndex((c) => c.cat === deck.themeCat);
    return i < 0 ? null : (window.THEMES[mode] || {})[values[i]] || null;
  };

  function drawValue(card, previous, theme) {
    card = { ...card, options: optionsFor(card, theme) };
    if (card.pick) {
      // sorteia traços sem pares que o jogo não deixa juntar (ex.: Ativo + Preguiçoso)
      const clash = (a, b) => (card.conflicts || []).some(([x, y]) => (a === x && b === y) || (a === y && b === x));
      const out = [];
      for (const t of shuffle(card.options)) {
        if (out.length === card.pick) break;
        if (!out.some((o) => clash(o, t))) out.push(t);
      }
      return out;
    }
    const pool = card.options.filter((o) => o !== previous);
    return pool[rand(pool.length)];
  }

  // ---------- Cartas ----------
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const REROLL_ICON = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>
    </svg>`;


  // "Texto (Pacote)" -> texto + aviso de pacote
  const PACK_RE = /\s*\(([^)]*(?:Vampiros|Lobisomens|Estações|Gatos e Cães|StrangerVille|Get to Work|Island Living|Realm of Magic)[^)]*)\)\s*$/;
  const splitPack = (s) => { const m = String(s).match(PACK_RE); return m ? [String(s).replace(PACK_RE, ""), m[1]] : [String(s), null]; };
  window.splitPack = splitPack;

  function ideaHTML(value) {
    if (Array.isArray(value)) {
      const packs = value.map((t) => splitPack(t)[1]).filter(Boolean);
      return `<span class="traits">${value.map((t) => `<span class="trait">${esc(splitPack(t)[0])}</span>`).join("")}</span>${packs.length ? packNote(packs[0]) : ""}`;
    }
    const [text, pack] = splitPack(value);
    return `<span class="idea-text">${esc(text)}</span>${pack ? packNote(pack) : ""}`;
  }
  const packNote = (pack) => `<span class="pack-note">Requer <b>${esc(pack)}</b>. Não tem? Gere de novo no 🔄</span>`;

  function cardHTML(card, value, i) {
    const r = (Math.random() * 24 - 12).toFixed(1);
    const back = `img/verso-${(i % 12) + 1}.webp?v=8`;
    return `
      <div class="card is-dealing" role="button" tabindex="0" data-i="${i}" style="--i:${i};--r:${r}"
           aria-label="Revelar carta ${esc(card.cat)}">
        <div class="card-inner">
          <div class="card-face card-back">
            <img src="${back}" alt="" loading="lazy">
            <span class="holo"></span>
          </div>
          <div class="card-face card-front">
            <img src="img/carta-${card.art}.webp?v=3" alt="">
            <div class="front-panel">
              <span class="front-arcana">${esc(card.arcana)}</span>
              <span class="front-cat">${esc(card.cat)}</span>
              <p class="idea">${ideaHTML(value)}</p>
              <button class="reroll" type="button" data-reroll="${i}" aria-label="Trocar ${esc(card.cat)}" title="Trocar esta carta">${REROLL_ICON}</button>
            </div>
            <span class="holo"></span>
          </div>
        </div>
      </div>`;
  }

  // ---------- Telas ----------
  function startReading(mode) {
    const deck = DECKS[mode];
    // primeiro o tema, depois o resto dentro dele
    const values = [];
    const ti = deck.cards.findIndex((c) => c.cat === deck.themeCat);
    if (ti >= 0) values[ti] = drawValue(deck.cards[ti]);
    const theme = themeOf(mode, values);
    deck.cards.forEach((c, i) => { if (i !== ti) values[i] = drawValue(c, undefined, theme); });
    state = { mode, values, revealed: new Set() };
    const title = $("#reading-title");
    title.textContent = deck.title;
    title.dataset.text = deck.title;
    $("#total").textContent = deck.cards.length;
    grid.innerHTML = deck.cards.map((c, i) => cardHTML(c, state.values[i], i)).join("");
    $("#done").hidden = true;
    $("#hint").textContent = "Toque nas cartas para revelar.";
    btnReveal.hidden = false;
    btnShare.classList.remove("is-hot");
    updateProgress();
  }

  const GAMES = window.GAMES || {};
  const gameSec = $("#game");
  let gameMode = null;
  let gameShare = null;
  const gameApi = {
    body: $("#game-body"),
    celebrate: (small) => (small ? sparkle($("#game-title")) : confetti()),
    setShare: (text) => { gameShare = text; },
  };
  function startGame(mode) {
    const g = GAMES[mode];
    gameMode = mode;
    $("#game-eyebrow").textContent = g.eyebrow;
    const t = $("#game-title");
    t.textContent = g.title;
    t.dataset.text = g.title;
    $("#game-again").textContent = g.againLabel;
    g.render(gameApi);
  }

  function route() {
    const mode = location.hash.replace("#", "");
    const screen = DECKS[mode] ? "reading" : GAMES[mode] ? "game" : "intro";
    document.body.dataset.screen = screen;
    intro.hidden = screen !== "intro";
    reading.hidden = screen !== "reading";
    gameSec.hidden = screen !== "game";
    if (screen !== "reading") state = null;
    if (screen === "reading") startReading(mode);
    document.body.dataset.game = screen === "game" ? mode : "";
    if (screen === "game") startGame(mode); else gameMode = null;
    const navKey = screen === "game" ? mode : "";
    document.querySelectorAll(".fnav [data-nav]").forEach((l) => {
      if (l.dataset.nav === navKey) l.setAttribute("aria-current", "page"); else l.removeAttribute("aria-current");
    });
    window.scrollTo({ top: 0 });
  }

  function goHome() {
    if (location.hash) {
      history.pushState(null, "", location.pathname + location.search);
      route();
    }
  }

  function updateProgress() {
    const total = DECKS[state.mode].cards.length;
    const n = state.revealed.size;
    $("#count").textContent = n;
    $("#rule-fill").style.width = `${(n / total) * 100}%`;
  }

  // ---------- Interações ----------
  function sparkle(el) {
    for (let k = 0; k < 6; k++) {
      const s = document.createElement("span");
      s.className = "spark";
      const angle = (Math.PI * 2 * k) / 6 + Math.random() * 0.5;
      s.style.setProperty("--x", `${Math.cos(angle) * 70}px`);
      s.style.setProperty("--y", `${Math.sin(angle) * 70}px`);
      el.appendChild(s);
      setTimeout(() => s.remove(), 850);
    }
  }

  function flip(i) {
    if (!state || state.revealed.has(i)) return;
    const el = grid.querySelector(`.card[data-i="${i}"]`);
    state.revealed.add(i);
    el.classList.remove("is-dealing");
    el.classList.add("is-turning");
    setTimeout(() => el.classList.add("is-flipped"), 280);
    setTimeout(() => el.classList.remove("is-turning"), 600);
    el.setAttribute("aria-label", `${DECKS[state.mode].cards[i].cat}: revelada`);
    setTimeout(() => sparkle(el), 420);
    if (navigator.vibrate) navigator.vibrate(12);
    updateProgress();
    if (state.revealed.size === 1) $("#hint").textContent = "Toque numa carta revelada para ampliar. Não tem o pacote? Use o 🔄 para sortear de novo.";
    if (state.revealed.size === DECKS[state.mode].cards.length) finish();
  }

  function finish() {
    btnReveal.hidden = true;
    $("#done").hidden = false;
    btnShare.classList.add("is-hot");
    setTimeout(confetti, 500);
  }

  function revealAll() {
    const pending = DECKS[state.mode].cards.map((_, i) => i).filter((i) => !state.revealed.has(i));
    pending.forEach((i, k) => setTimeout(() => flip(i), k * 130));
  }

  function reroll(i) {
    const deck = DECKS[state.mode];
    const card = deck.cards[i];
    const isTheme = card.cat === deck.themeCat;
    if (isTheme) {
      // trocou o tema: todas as outras cartas mudam junto para combinar
      state.values[i] = drawValue(card, state.values[i]);
      const theme = themeOf(state.mode, state.values);
      deck.cards.forEach((c, k) => { if (k !== i) state.values[k] = drawValue(c, undefined, theme); });
    } else {
      state.values[i] = drawValue(card, state.values[i], themeOf(state.mode, state.values));
    }
    const changed = isTheme ? deck.cards.map((_, k) => k) : [i];
    changed.forEach((k) => {
      const el = grid.querySelector(`.card[data-i="${k}"]`);
      el.classList.add("is-rerolling");
      setTimeout(() => {
        el.querySelector(".idea").innerHTML = ideaHTML(state.values[k]);
        el.classList.remove("is-rerolling");
        if (state.revealed.has(k)) sparkle(el);
      }, 220);
    });
    if (isTheme && state.revealed.size > 1) toast("Novo tema! As outras cartas mudaram para combinar.");
    if (navigator.vibrate) navigator.vibrate(8);
  }

  const CONFETTI_SHAPES = [
    (c) => `<svg viewBox="0 0 40 40"><path fill="${c}" d="M20 0 C21 12 28 19 40 20 C28 21 21 28 20 40 C19 28 12 21 0 20 C12 19 19 12 20 0Z"/></svg>`,
    (c) => `<svg viewBox="0 0 24 22"><path fill="${c}" d="M12 21 C5 15 1 11 1 7 a5.5 5.5 0 0 1 11 -1 a5.5 5.5 0 0 1 11 1 c0 4 -4 8 -11 14z"/></svg>`,
    (c) => `<svg viewBox="0 0 40 60"><polygon fill="${c}" points="20,2 38,30 20,58 2,30"/></svg>`,
  ];
  const CONFETTI_COLORS = ["#ff4fc8", "#ffd3f2", "#ffa6e6", "#ffd36b", "#fff5fb"];

  function confetti() {
    for (let k = 0; k < 40; k++) {
      const c = document.createElement("span");
      c.className = "confetti";
      c.innerHTML = CONFETTI_SHAPES[rand(CONFETTI_SHAPES.length)](CONFETTI_COLORS[rand(CONFETTI_COLORS.length)]);
      const size = 10 + rand(16);
      c.style.width = `${size}px`;
      c.style.height = `${size}px`;
      c.style.left = `${Math.random() * 100}vw`;
      c.style.setProperty("--t", `${2.6 + Math.random() * 2}s`);
      c.style.setProperty("--drift", `${Math.random() * 140 - 70}px`);
      c.style.setProperty("--rot", `${Math.random() * 720 - 360}deg`);
      c.style.animationDelay = `${Math.random() * 0.6}s`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 5500);
    }
  }

  // ---------- Compartilhar ----------
  function shareText() {
    const deck = DECKS[state.mode];
    const lines = deck.cards.map((c, i) => {
      const v = state.values[i];
      const shown = state.revealed.has(i) ? (Array.isArray(v) ? v.join(", ") : v) : "❓ (ainda não revelada)";
      return `${c.icon} *${c.cat}:* ${shown}`;
    });
    return `🔮 *Tarot Assombrado · Migas Sims*\nMinha tiragem de *${deck.title}*:\n\n${lines.join("\n")}\n\nTire as suas cartas: ${SITE_URL}`;
  }

  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 2600);
  }

  async function share() {
    if (!state) return;
    if (state.revealed.size === 0) {
      toast("Revele pelo menos uma carta primeiro");
      return;
    }
    shareAny(shareText());
  }

  async function shareAny(text) {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch && navigator.share) {
      try { await navigator.share({ text }); } catch (_) { /* cancelado */ }
      return;
    }
    if (isTouch) {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      toast("Copiado! Agora é só colar no grupo.");
    } catch (_) {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
  }

  // ---------- Eventos ----------
  document.querySelectorAll(".pick-card").forEach((b) =>
    b.addEventListener("click", () => {
      history.pushState(null, "", `#${b.dataset.mode}`);
      route();
    })
  );
  document.querySelectorAll("[data-home]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      goHome();
    })
  );
  window.addEventListener("popstate", route);

  grid.addEventListener("click", (e) => {
    const rr = e.target.closest("[data-reroll]");
    if (rr) {
      e.stopPropagation();
      reroll(Number(rr.dataset.reroll));
      return;
    }
    const card = e.target.closest(".card");
    if (!card) return;
    const i = Number(card.dataset.i);
    if (state.revealed.has(i)) openZoom(i); else flip(i);
  });

  // ---------- Carta ampliada (para ler com calma no celular) ----------
  const zoom = $("#zoom");
  function openZoom(i) {
    const front = grid.querySelector(`.card[data-i="${i}"] .card-front`);
    $("#zoom-card").replaceChildren(front.cloneNode(true));
    zoom.hidden = false;
  }
  function closeZoom() { zoom.hidden = true; }
  zoom.addEventListener("click", closeZoom);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeZoom(); });
  grid.addEventListener("animationend", (e) => {
    if (e.animationName === "deal") e.target.classList.remove("is-dealing");
  });
  grid.addEventListener("keydown", (e) => {
    const card = e.target.closest(".card");
    if (card && e.target === card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      flip(Number(card.dataset.i));
    }
  });

  btnReveal.addEventListener("click", revealAll);
  $("#btn-again").addEventListener("click", () => {
    startReading(state.mode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  btnShare.addEventListener("click", share);
  $("#game-again").addEventListener("click", () => {
    if (!GAMES[gameMode]) return;
    GAMES[gameMode].again();
    GAMES[gameMode].render(gameApi);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("#game-share").addEventListener("click", () => {
    if (!gameShare) { toast("Faça a sua jogada primeiro"); return; }
    shareAny(`${gameShare}\n\nJogue também: ${SITE_URL}`);
  });

  // ---------- Inclinação + brilho holográfico (mouse) ----------
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".tilt").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.classList.add("is-tilting");
        el.style.setProperty("--ry", `${(x - 0.5) * 22}deg`);
        el.style.setProperty("--rx", `${(0.5 - y) * 22}deg`);
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
      });
      el.addEventListener("pointerleave", () => {
        el.classList.remove("is-tilting");
        ["--rx", "--ry", "--mx", "--my"].forEach((v) => el.style.removeProperty(v));
      });
    });
  }

  // Carrega as artes das cartas antes de a pessoa escolher
  const preload = () => {
    const arts = new Set(Object.values(DECKS).flatMap((d) => d.cards.map((c) => `img/carta-${c.art}.webp?v=3`)));
    for (let k = 1; k <= 12; k++) arts.add(`img/verso-${k}.webp?v=8`);
    arts.forEach((src) => { const im = new Image(); im.src = src; });
  };
  if ("requestIdleCallback" in window) requestIdleCallback(preload); else setTimeout(preload, 1200);

  route();
})();
