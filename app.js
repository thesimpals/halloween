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

  function drawValue(card, previous) {
    if (card.pick) return shuffle(card.options).slice(0, card.pick);
    const pool = card.options.filter((o) => o !== previous);
    return pool[rand(pool.length)];
  }

  // ---------- Desenho das cartas ----------
  const EMBLEM = `
    <svg class="back-emblem" viewBox="0 0 100 130" aria-hidden="true">
      <polygon points="50,4 94,65 50,126 6,65" fill="#e05cc8"/>
      <polygon points="50,4 94,65 50,65" fill="#b03cc0"/>
      <polygon points="6,65 50,65 50,126" fill="#5a1475" opacity=".6"/>
      <polygon points="50,4 6,65 50,65" fill="#fff" opacity=".28"/>
      <polygon points="50,4 94,65 50,126 6,65" fill="none" stroke="#ffe0f6" stroke-width="3.5" stroke-linejoin="round"/>
      <g fill="rgba(255,224,246,.3)" stroke="#ffe0f6" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
        <path d="M37 52 L34 37 L43 45 L50 33 L57 45 L66 37 L63 52 Z"/>
      </g>
      <path d="M50 96 C44 91 41 88 41 85 a4.5 4.5 0 0 1 9 -1 a4.5 4.5 0 0 1 9 1 c0 3 -3 6 -9 11z" fill="#ffe0f6"/>
      <path d="M86 18 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#ffe0f6"/>
      <path d="M14 104 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6z" fill="#ffe0f6"/>
    </svg>`;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function ideaHTML(value) {
    if (Array.isArray(value)) {
      return `<span class="traits">${value.map((t) => `<span class="trait">${esc(t)}</span>`).join("")}</span>`;
    }
    return esc(value);
  }

  function cardHTML(card, value, i) {
    const r = (Math.random() * 30 - 15).toFixed(1);
    return `
      <div class="card is-dealing" role="button" tabindex="0" data-i="${i}" style="--i:${i};--r:${r}"
           aria-label="Revelar carta ${esc(card.cat)}">
        <div class="card-inner">
          <div class="card-face card-back">
            <span class="back-num">${esc(card.numeral)}</span>
            ${EMBLEM}
            <span class="back-cat">${esc(card.cat)}</span>
          </div>
          <div class="card-face card-front">
            <span class="arcana">${esc(card.numeral)} · ${esc(card.arcana)}</span>
            <span class="front-icon" aria-hidden="true">${card.icon}</span>
            <span class="front-cat">${esc(card.cat)}</span>
            <p class="idea">${ideaHTML(value)}</p>
            <button class="reroll" type="button" data-reroll="${i}" aria-label="Trocar ${esc(card.cat)}" title="Não curtiu? Troca!">🔄</button>
          </div>
        </div>
      </div>`;
  }

  // ---------- Telas ----------
  function startReading(mode) {
    const deck = DECKS[mode];
    state = {
      mode,
      values: deck.cards.map((c) => drawValue(c)),
      revealed: new Set(),
    };
    $("#reading-kicker").textContent = `${deck.icon} Sua tiragem de ${deck.short}`;
    $("#reading-title").textContent = deck.title;
    $("#progress").setAttribute("aria-valuemax", deck.cards.length);
    grid.innerHTML = deck.cards.map((c, i) => cardHTML(c, state.values[i], i)).join("");
    $("#done").hidden = true;
    btnReveal.hidden = false;
    btnShare.classList.remove("is-hot");
    updateProgress();
  }

  function route() {
    const mode = location.hash.replace("#", "");
    if (DECKS[mode]) {
      intro.hidden = true;
      reading.hidden = false;
      startReading(mode);
    } else {
      reading.hidden = true;
      intro.hidden = false;
      state = null;
    }
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
    $("#progress-fill").style.width = `${(n / total) * 100}%`;
    $("#progress").setAttribute("aria-valuenow", n);
    $("#progress-label").textContent =
      n === total ? "Todas as cartas reveladas!" : `${n} de ${total} cartas reveladas`;
  }

  // ---------- Interações ----------
  function sparkle(el) {
    const icons = ["✨", "💖", "🦇", "💜"];
    for (let k = 0; k < 6; k++) {
      const s = document.createElement("span");
      s.className = "spark";
      s.textContent = icons[rand(icons.length)];
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
    el.classList.add("is-flipped");
    el.setAttribute("aria-label", `${DECKS[state.mode].cards[i].cat}: revelada`);
    setTimeout(() => {
      el.classList.add("pop");
      sparkle(el);
    }, 280);
    setTimeout(() => el.classList.remove("pop"), 800);
    if (navigator.vibrate) navigator.vibrate(12);
    updateProgress();
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
    pending.forEach((i, k) => setTimeout(() => flip(i), k * 140));
  }

  function reroll(i) {
    const card = DECKS[state.mode].cards[i];
    const el = grid.querySelector(`.card[data-i="${i}"]`);
    state.values[i] = drawValue(card, state.values[i]);
    el.classList.add("is-rerolling");
    setTimeout(() => {
      el.querySelector(".idea").innerHTML = ideaHTML(state.values[i]);
      el.classList.remove("is-rerolling");
      sparkle(el);
    }, 220);
    if (navigator.vibrate) navigator.vibrate(8);
  }

  function confetti() {
    const items = ["🎃", "👻", "🦇", "💖", "✨", "🕯️", "💜", "🔮"];
    for (let k = 0; k < 36; k++) {
      const c = document.createElement("span");
      c.className = "confetti";
      c.textContent = items[rand(items.length)];
      c.style.left = `${Math.random() * 100}vw`;
      c.style.fontSize = `${18 + rand(20)}px`;
      c.style.setProperty("--t", `${2.6 + Math.random() * 2}s`);
      c.style.setProperty("--drift", `${Math.random() * 120 - 60}px`);
      c.style.setProperty("--rot", `${Math.random() * 720 - 360}deg`);
      c.style.animationDelay = `${Math.random() * 0.6}s`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 5500);
    }
  }

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
      toast("Revele pelo menos uma carta primeiro 👀");
      return;
    }
    const text = shareText();
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
      toast("Copiado! Agora é só colar no grupo 💚");
    } catch (_) {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
  }

  // ---------- Eventos ----------
  document.querySelectorAll(".choice").forEach((b) =>
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
    if (card) flip(Number(card.dataset.i));
  });
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

  // ---------- Céu ----------
  const starsBox = $("#stars");
  const SKY_COLORS = ["#ffffff", "#ffd9f3", "#ff9ee0"];
  for (let k = 0; k < 40; k++) {
    const s = document.createElement("span");
    const kind = k % 5 === 0 ? "heart" : k % 4 === 0 ? "dot" : "star";
    s.className = kind === "star" ? "star" : `star is-${kind}`;
    if (kind === "heart") s.textContent = "♡";
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 100}%`;
    s.style.setProperty("--c", SKY_COLORS[rand(SKY_COLORS.length)]);
    s.style.setProperty("--s", `${kind === "dot" ? 3 + rand(3) : kind === "heart" ? 14 + rand(12) : 8 + rand(14)}px`);
    s.style.setProperty("--d", `${2 + Math.random() * 3}s`);
    s.style.setProperty("--delay", `${-Math.random() * 4}s`);
    starsBox.appendChild(s);
  }

  // Varal: abóboras e fantasminhas pendurados acompanhando o fio
  const garland = $("#garland");
  const BULBS = 12;
  for (let k = 0; k < BULBS; k++) {
    const x = ((k + 0.5) / BULBS) * 100;
    const phase = ((x / 100) * 4) % 1; // 4 curvas no fio
    const sag = Math.sin(phase * Math.PI);
    const b = document.createElement("span");
    const ghost = k % 2 === 1;
    b.className = `bulb ${ghost ? "is-ghost" : "is-pumpkin"}`;
    b.textContent = ghost ? "👻" : "🎃";
    b.style.setProperty("--x", `${x}%`);
    b.style.setProperty("--y", `${10 + sag * 30}px`);
    b.style.setProperty("--delay", `${-Math.random() * 3}s`);
    garland.appendChild(b);
  }

  function releaseBat() {
    if (document.hidden) return;
    const b = document.createElement("span");
    b.className = "bat";
    b.textContent = "🦇";
    b.style.top = `${10 + Math.random() * 50}vh`;
    b.style.left = "0";
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 9500);
  }
  setTimeout(releaseBat, 1500);
  setInterval(releaseBat, 11000);

  route();
})();
