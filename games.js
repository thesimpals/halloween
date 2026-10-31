// Brincadeiras extras da barra da página inicial.
// Opções com "(Nome do pacote)" precisam desse pacote; quem não tiver, sorteia de novo.

(() => {
  const rand = (n) => Math.floor(Math.random() * n);
  const pick = (arr) => arr[rand(arr.length)];
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const packSplit = (x) => (window.splitPack ? window.splitPack(x) : [x, null]);
  const packNote = (p, how) => (p ? `<p class="pack-note">Requer <b>${esc(p)}</b>. Não tem? ${how}</p>` : "");
  const REROLL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/></svg>`;

  // ---------------- Bingo Maluco ----------------
  const BINGO = [
    "Fogo na cozinha", "Bombeiro aparece", "Xixi nas calças", "Privada entupida",
    "Pia vazando", "Choque ao consertar", "Ladrão de noite", "Cobrador leva tudo",
    "Comida queimada", "Comida estragada", "Desmaio de cansaço", "Bebê chorando",
    "Criança de birra", "Flerte rejeitado", "Levou um tapa", "Briga de soco",
    "Vizinho entra sozinho", "Choro no banheiro", "A Morte aparece", "Fantasma à noite",
    "Morreu de rir", "Subiu de cargo", "Foi demitido", "Sim inspirado",
    "Nível 10 em algo", "Ganhou presente", "Namoro aceito", "Casamento negado",
    "Gravidez", "Bolo de parabéns", "Sim muito bravo", "Morto de vergonha",
    "Elogio no espelho", "Visita sem avisar", "Convite no telefone", "Dormiu no chão",
    "Planta morreu", "Canta no chuveiro", "Festa deu errado", "Virou idoso",
    "Barata na cozinha", "Lixo transbordando", "Sim fedido", "Sim gripado",
    "Primeiro beijo", "Amigo novo", "Vendeu um quadro", "Prato perfeito",
    "Soneca no sofá", "Dançou na festa",
  ];
  const BINGO_KEY = "migas-bingo-v2";
  let bingo = null; // { cells: [], marked: [] }

  function newBingo() {
    // a cartela nova não repete nada da cartela anterior
    const before = bingo ? bingo.cells : [];
    const fresh = shuffle(BINGO.filter((t) => !before.includes(t)));
    const cells = fresh.slice(0, 24);
    cells.splice(12, 0, "★ Grátis ★");
    bingo = { cells, marked: cells.map((_, i) => i === 12) };
    saveBingo();
  }
  function saveBingo() { try { localStorage.setItem(BINGO_KEY, JSON.stringify(bingo)); } catch (_) {} }
  function loadBingo() {
    try { const b = JSON.parse(localStorage.getItem(BINGO_KEY)); if (b && b.cells && b.cells.length === 25) bingo = b; } catch (_) {}
    if (!bingo) newBingo();
  }
  const LINES = [];
  for (let r = 0; r < 5; r++) LINES.push([0, 1, 2, 3, 4].map((c) => r * 5 + c));
  for (let c = 0; c < 5; c++) LINES.push([0, 1, 2, 3, 4].map((r) => r * 5 + c));
  LINES.push([0, 6, 12, 18, 24], [4, 8, 12, 16, 20]);
  const bingoLines = () => LINES.filter((l) => l.every((i) => bingo.marked[i]));

  function renderBingo(api) {
    if (!bingo) loadBingo();
    const lines = bingoLines();
    const win = new Set(lines.flat());
    api.body.innerHTML = `
      <div class="bingo-head" aria-hidden="true">${"BINGO".split("").map((l) => `<span>${l}</span>`).join("")}</div>
      <div class="bingo" role="grid">
        ${bingo.cells.map((t, i) => `<button type="button" class="cell${bingo.marked[i] ? " is-on" : ""}${win.has(i) ? " is-win" : ""}${i === 12 ? " is-free" : ""}" data-cell="${i}" aria-pressed="${bingo.marked[i]}">${i === 12 ? `<img src="img/logo-migas.webp?v=1" alt="Migas Sims (casa grátis)">` : esc(t)}</button>`).join("")}
      </div>
      <p class="game-note">${lines.length ? `<b>BINGO!</b> ${lines.length} linha${lines.length > 1 ? "s" : ""} completa${lines.length > 1 ? "s" : ""}. Manda o print no grupo!` : "Jogue normalmente e marque o que acontecer. Linha, coluna ou diagonal completa é BINGO."}</p>`;
    const done = bingo.cells.filter((_, i) => bingo.marked[i] && i !== 12);
    api.setShare(`🎲 *Bingo Maluco · Migas Sims*\n${lines.length ? `BINGO! ${lines.length} linha(s) completa(s)` : `Marquei ${done.length} de 24`}\n${done.map((t) => `✔ ${t}`).join("\n")}`);
    api.body.querySelectorAll("[data-cell]").forEach((b) => b.addEventListener("click", () => {
      const i = Number(b.dataset.cell);
      if (i === 12) return;
      const before = bingoLines().length;
      bingo.marked[i] = !bingo.marked[i];
      saveBingo();
      renderBingo(api);
      if (bingoLines().length > before) api.celebrate();
    }));
  }

  // ---------------- Horóscopo Sim ----------------
  const SIGNS = [
    ["♈", "Áries", ["Ativo", "Esquentado", "Ambicioso"], "Fisiculturista", "Atleta", "Brigar com o vizinho antes do fim de semana.", "Começa a reforma da casa no impulso e larga no meio. Mas com muita energia!"],
    ["♉", "Touro", ["Gourmet", "Materialista", "Preguiçoso"], "Mestre da Culinária", "Culinária", "Cozinhar um prato perfeito antes de domingo.", "Não sai do sofá nem com incêndio na cozinha… a não ser que tenha comida no fogão."],
    ["♊", "Gêmeos", ["Alegre", "Criativo", "Desastrado"], "Estrela da Comédia", "Artista (Entretenimento)", "Fazer 3 amigos novos no mesmo dia.", "Puxa papo com todo mundo da festa, inclusive com o fantasma. E muda de ideia no meio da frase."],
    ["♋", "Câncer", ["Romântico", "Bom", "Melancólico"], "Família Grande e Feliz", "Escritor", "Ter ou adotar um bebê nesta geração.", "Chora no chuveiro, guarda a urna da vovó na sala e faz bolo pra família inteira."],
    ["♌", "Leão", ["Esnobe", "Ambicioso", "Alegre"], "Fabulosamente Rico", "Influenciador de Estilo", "Dar uma festa e ser o centro das atenções.", "Espera aplausos até quando lava a louça. E merece."],
    ["♍", "Virgem", ["Perfeccionista", "Asseado", "Rato de Biblioteca"], "Cérebro Nerd", "Guru da Tecnologia", "Nenhuma louça suja na pia a semana inteira.", "Arruma a casa do vizinho sem ser convidado e ainda reclama do tapete torto."],
    ["♎", "Libra", ["Romântico", "Criativo", "Amante da Música"], "Alma Gêmea", "Pintor", "Pintar um quadro romântico para o crush.", "Passa 3 horas no CAS escolhendo a roupa perfeita… e ainda fica na dúvida."],
    ["♏", "Escorpião", ["Malvado", "Gênio", "Solitário"], "Inimigo Público", "Criminoso", "Fazer alguém ficar Muito Bravo com você.", "Sorri pra você enquanto pensa em tirar a escada da piscina."],
    ["♐", "Sagitário", ["Ativo", "Alegre", "Glutão"], "Amigo do Mundo", "Astronauta", "Visitar um bairro novo e puxar papo com um estranho.", "Já conheceu todos os bairros do jogo, mas nunca pagou uma conta em dia."],
    ["♑", "Capricórnio", ["Ambicioso", "Materialista", "Perfeccionista"], "Barão da Mansão", "Negócios", "Juntar §10.000 até sábado.", "Tem planilha de gastos, meta de promoção e zero tempo pra diversão."],
    ["♒", "Aquário", ["Gênio", "Criativo", "Solitário"], "Gênio da Computação", "Agente Secreto", "Olhar pelo telescópio todas as noites.", "Passa a noite no telescópio esperando ser abduzido… e acha isso normal."],
    ["♓", "Peixes", ["Romântico", "Criativo", "Melancólico"], "Pintor Extraordinário", "Pintor", "Ficar Triste e transformar isso num quadro.", "Pinta um quadro triste, se emociona com ele e dá de presente pro crush."],
  ];
  let sign = null;

  function renderHoroscopo(api) {
    if (sign === null) {
      api.body.innerHTML = `
        <p class="game-lead">Escolha o seu signo e descubra o Sim que as estrelas montaram para você.</p>
        <div class="zodiac">${SIGNS.map((s, i) => `<button type="button" class="zodiac-btn" data-sign="${i}"><span class="zodiac-glyph">${s[0]}&#xFE0E;</span><span>${s[1]}</span></button>`).join("")}</div>`;
      api.body.querySelectorAll("[data-sign]").forEach((b) => b.addEventListener("click", () => { sign = Number(b.dataset.sign); renderHoroscopo(api); api.celebrate(true); }));
      api.setShare(null);
      return;
    }
    const [g, name, traits, asp, career, fate, blurb] = SIGNS[sign];
    api.body.innerHTML = `
      <div class="result-card sign-card">
        <span class="sign-glyph">${g}&#xFE0E;</span>
        <p class="result-kicker">Seu Sim de ${esc(name)}</p>
        <p class="sign-blurb">“${esc(blurb)}”</p>
        <dl class="facts">
          <dt>Traços</dt><dd><span class="traits">${traits.map((t) => `<span class="trait">${esc(t)}</span>`).join("")}</span></dd>
          <dt>Aspiração</dt><dd>${esc(asp)}</dd>
          <dt>Carreira</dt><dd>${esc(career)}</dd>
          <dt>Destino da semana</dt><dd>${esc(fate)}</dd>
        </dl>
      </div>
      <button type="button" class="link-btn" data-other>Ver outro signo</button>`;
    api.body.querySelector("[data-other]").addEventListener("click", () => { sign = null; renderHoroscopo(api); });
    api.setShare(`♈ *Horóscopo Sim · ${name}*\n_${blurb}_\nTraços: ${traits.join(", ")}\nAspiração: ${asp}\nCarreira: ${career}\nDestino da semana: ${fate}`);
  }

  // ---------------- Roleta da Morte ----------------
  const DEATHS = [
    ["Fogo", "Cozinhe com habilidade baixa de Culinária e deixe tapetes perto do fogão."],
    ["Choque elétrico", "Mande consertar algo elétrico com Manutenção baixa (e sem desligar nada)."],
    ["Afogamento", "Coloque para nadar na piscina e… tire a escada."],
    ["Fome", "Tranque num cômodo sem geladeira e sem comida."],
    ["Exaustão", "Faça exercício sem parar com a energia lá embaixo."],
    ["Morrer de rir", "Deixe o Sim Muito Brincalhão: piadas, comédia e mais piadas."],
    ["Vergonha", "Acumule constrangimento: flertes rejeitados, piadas ruins, falhar em público."],
    ["Raiva", "Mantenha o Sim Muito Bravo por bastante tempo."],
    ["Planta-vaca", "Cultive uma planta-vaca, deixe ela com fome e mande o Sim pegar o bolo."],
    ["Velhice", "Deixe o tempo passar… o jeito mais tranquilo de virar fantasma."],
    ["Frio congelante (Estações)", "Mande sair no inverno sem casaco."],
    ["Insolação (Estações)", "Mande ficar no sol de verão com roupa quente."],
    ["Abelhas assassinas (Estações)", "Irrite a colmeia até a abelha atacar."],
    ["Luz do sol (Vampiros)", "Vampiro fraco andando de dia sem proteção."],
  ];
  let death = null;
  let spinning = false;

  function renderMorte(api) {
    api.body.innerHTML = `
      <p class="game-lead">Quer um fantasma novo na família? Gire a roleta e descubra como o seu Sim vai partir.</p>
      <div class="wheel-wrap">
        <div class="wheel${spinning ? " is-spinning" : ""}" aria-hidden="true"><span class="wheel-skull">☠&#xFE0E;</span></div>
        <button type="button" class="btn btn-primary" data-spin ${spinning ? "disabled" : ""}>${death === null ? "Girar a roleta" : "Girar de novo"}</button>
      </div>
      ${death !== null && !spinning ? `
      <div class="result-card">
        <p class="result-kicker">Destino</p>
        <p class="result-big">${esc(packSplit(DEATHS[death][0])[0])}</p>
        ${packNote(packSplit(DEATHS[death][0])[1], "Gire de novo")}
        <p class="result-text">${esc(DEATHS[death][1])}</p>
      </div>` : ""}`;
    api.body.querySelector("[data-spin]").addEventListener("click", () => {
      spinning = true;
      renderMorte(api);
      setTimeout(() => {
        let next; do { next = rand(DEATHS.length); } while (next === death);
        death = next; spinning = false;
        renderMorte(api); api.celebrate(true);
      }, 1400);
    });
    api.setShare(death === null ? null : `☠ *Roleta da Morte*\nDestino: ${DEATHS[death][0]}\nComo fazer: ${DEATHS[death][1]}`);
  }

  // ---------------- Desafio Legado Assombrado ----------------
  // A história do legado em fases: cada geração só sorteia regras da sua fase,
  // então nada aparece antes de poder acontecer (ex.: fantasma da família só depois de alguém morrer).
  // [título, regra, dificuldade 1-3]
  const PHASES = [
    { name: "Fundação", gens: 1, pool: [
      ["A Fundadora do Mal", "O fundador precisa ter o traço Malvado. É daí que vem a maldição.", 1],
      ["Raízes Presas", "O fundador escolhe a casa, e nenhuma geração pode se mudar dela.", 2],
      ["Mão Furada", "O legado começa com só §1.000 no banco.", 3],
      ["Luto Fashion", "A casa da família só pode ter preto e roxo. Para sempre.", 1],
      ["Apagão Eterno", "A casa só pode ter luz de vela, desde o primeiro dia.", 2],
      ["Começo Humilde", "O fundador mora num lote 20x15 até ter §20.000.", 2],
    ] },
    { name: "Crescimento", gens: 3, pool: [
      ["Amor Sombrio", "O herdeiro casa com alguém Melancólico.", 1],
      ["Amor às Cegas", "O cônjuge do herdeiro é criado no botão de dados do CAS.", 2],
      ["Até que a Morte…", "O herdeiro se casa num cemitério.", 1],
      ["Casa Cheia", "O herdeiro tem 3 filhos antes de virar idoso.", 2],
      ["A Sorte Decide", "O próximo herdeiro é escolhido no dado entre os filhos.", 1],
      ["Língua de Prata", "O herdeiro chega ao nível 10 de Carisma.", 2],
      ["Sete Vidas", "A família adota um gato preto (Gatos e Cães).", 1],
      ["Herança de Fio", "O herdeiro tem a mesma cor de cabelo dos pais.", 1],
      ["O Olhar do Fundador", "Pinte um retrato do fundador e pendure na sala. Ele nunca sai de lá.", 1],
    ] },
    { name: "Maldição", gens: 3, pool: [
      ["Tragédia Anunciada", "Alguém desta geração morre de um jeito da Roleta da Morte.", 2],
      ["Hóspede Eterno", "Um fantasma da família continua morando na casa.", 2],
      ["Respeito aos Mortos", "Proibido vender os túmulos e urnas da família. Eles ficam em casa.", 1],
      ["Sangue Novo", "Um Sim desta geração vira vampiro (Vampiros).", 3],
      ["Hora das Bruxas", "Todo aniversário desta geração é comemorado à meia-noite.", 1],
      ["Vizinhança do Mal", "O herdeiro precisa ter um inimigo declarado.", 2],
      ["Faça Você Mesmo", "Proibido contratar empregada ou faz-tudo.", 2],
      ["Quarto no Porão", "O herdeiro passa a infância morando no porão.", 1],
    ] },
    { name: "Decadência", gens: 2, pool: [
      ["Artistas Malditos", "Ninguém tem emprego: só pintar, escrever ou plantar.", 3],
      ["Vida Honesta", "Sem truques de dinheiro nesta geração.", 2],
      ["Sonho Completo", "O herdeiro completa uma aspiração inteira.", 3],
      ["Volta às Raízes", "O herdeiro reforma a casa para ficar igual à do fundador.", 2],
      ["Reunião Macabra", "Dê uma festa com a família viva e os fantasmas da casa.", 2],
    ] },
    { name: "Grand Finale", gens: 1, pool: [
      ["Descanse em Paz", "O último herdeiro completa a aspiração que o fundador escolheu.", 3],
      ["O Mausoléu", "Junte as urnas de todas as gerações num mausoléu no quintal.", 2],
      ["A Maldição Acaba", "O último herdeiro é Bom, e casa por amor. Fim da maldição!", 2],
    ] },
  ];
  const PHASE_OF = PHASES.flatMap((p, k) => Array(p.gens).fill(k)); // geração -> fase
  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  // Cada geração ganha um pacote de desafios: maldição + traço e carreira do herdeiro + 2 objetivos.
  const GEN_TRAITS = [
    ["Ambicioso", "Malvado", "Perfeccionista", "Ativo", "Materialista"],
    ["Romântico", "Alegre", "Criativo", "Bom", "Gourmet"],
    ["Malvado", "Melancólico", "Solitário", "Gênio", "Esquentado"],
    ["Preguiçoso", "Esnobe", "Materialista", "Criativo", "Desleixado"],
    ["Bom", "Romântico", "Alegre", "Ambicioso"],
  ];
  const CAREERS = ["Astronauta", "Atleta", "Negócios", "Criminoso", "Culinária", "Artista (Entretenimento)", "Pintor", "Agente Secreto", "Escritor", "Guru da Tecnologia", "Influenciador de Estilo", "Autônomo(a)"];
  const GEN_GOALS = [
    ["Construir a casa da família do zero", "Ter o primeiro filho", "Juntar §10.000", "Fazer 3 amigos na vizinhança", "Plantar uma horta no quintal"],
    ["Ter pelo menos 2 filhos", "Ensinar uma habilidade ao filho até o nível 5", "Dar uma festa de casamento", "Construir um cômodo novo na casa", "Chegar ao nível 5 da carreira"],
    ["Fazer uma festa de Halloween", "Cultivar uma planta-vaca", "Chegar ao nível 10 em Lógica", "Ter um inimigo na vizinhança", "Pintar um quadro assustador e pendurar na sala"],
    ["Chegar ao topo de uma carreira", "Vender um quadro por mais de §1.000", "Pagar todas as contas atrasadas", "Dar uma festa de aposentadoria pro herdeiro anterior", "Reformar a cozinha"],
    ["Reunir a família inteira num último jantar", "Pendurar o retrato de todos os herdeiros", "Chegar ao nível 10 em Carisma", "Fazer as pazes com o inimigo da família"],
  ];
  const KEYWORDS = ["filho", "festa", "casa", "cômodo", "inimigo", "Carisma", "retrato", "§"];
  let legacy = null;
  let shown = 1;

  function genPack(i, rule) {
    const ph = PHASE_OF[i];
    const [, text] = rule;
    const forced = ["Malvado", "Bom"].find((t) => text.includes(`traço ${t}`) || text.includes(`é ${t}`));
    const noJob = text.startsWith("Ninguém tem emprego");
    const clash = (g) => KEYWORDS.some((k) => g.includes(k) && text.includes(k));
    return {
      rule,
      trait: forced || pick(GEN_TRAITS[ph]),
      career: noJob ? "Nenhuma (é a regra!)" : pick(CAREERS),
      goals: shuffle(GEN_GOALS[ph].filter((g) => !clash(g))).slice(0, 2),
    };
  }
  const newLegacy = () => {
    legacy = PHASES.flatMap((p) => shuffle(p.pool).slice(0, p.gens)).map((r, i) => genPack(i, r));
    shown = 1;
  };
  const skulls = (d) => `<span class="skulls" title="Dificuldade ${d} de 3">${[1, 2, 3].map((k) => `<span class="${k <= d ? "on" : ""}">☠&#xFE0E;</span>`).join("")}</span>`;

  function renderLegado(api) {
    if (!legacy) newLegacy();
    api.body.innerHTML = `
      <p class="game-lead">Cada geração tem uma maldição, um herdeiro e objetivos. Revele uma de cada vez e tente chegar à décima!</p>
      <ol class="gen-list">${legacy.map((g, i) => {
        const [t, r, d] = g.rule;
        return i < shown ? `
        <li class="gen">
          <span class="gen-n">${ROMAN[i]}</span>
          <div class="gen-body">
            <p class="gen-kicker">${i + 1}ª geração · ${PHASES[PHASE_OF[i]].name} ${skulls(d)}</p>
            <p class="gen-title">${esc(t)}</p>
            <p class="gen-rule"><b>Maldição:</b> ${esc(packSplit(r)[0])}</p>
            ${packNote(packSplit(r)[1], "Troque no 🔄")}
            <div class="gen-tags"><span class="gen-tag">Herdeiro <b>${esc(g.trait)}</b></span><span class="gen-tag">Carreira <b>${esc(g.career)}</b></span></div>
            <ul class="gen-goals">${g.goals.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>
          <button type="button" class="reroll gen-reroll" data-gen="${i}" aria-label="Trocar desafios da geração ${i + 1}" title="Trocar">${REROLL}</button>
        </li>` : i === shown ? `
        <li><button type="button" class="gen gen-locked" data-next><span class="gen-n">${ROMAN[i]}</span><span class="gen-body"><span class="gen-title">Revelar a ${i + 1}ª geração</span><span class="gen-rule">Toque quando a geração anterior terminar</span></span></button></li>` : "";
      }).join("")}
      </ol>
      ${shown < 10 ? `<p class="game-note">${10 - shown} geraç${10 - shown > 1 ? "ões" : "ão"} ainda escondida${10 - shown > 1 ? "s" : ""}…</p>` : `<p class="game-note"><b>Legado completo!</b> 10 gerações de pura maldição.</p>`}`;
    api.body.querySelectorAll("[data-gen]").forEach((b) => b.addEventListener("click", () => {
      const i = Number(b.dataset.gen);
      const used = legacy.map((g) => g.rule);
      const pool = PHASES[PHASE_OF[i]].pool.filter((x) => !used.includes(x));
      legacy[i] = genPack(i, pick(pool.length ? pool : PHASES[PHASE_OF[i]].pool));
      renderLegado(api);
    }));
    const next = api.body.querySelector("[data-next]");
    if (next) next.addEventListener("click", () => {
      shown++;
      renderLegado(api);
      api.celebrate(shown < 10);
      const items = api.body.querySelectorAll(".gen:not(.gen-locked)");
      items[items.length - 1].scrollIntoView({ behavior: "smooth", block: "center" });
    });
    const list = legacy.slice(0, shown).map((g, i) => `*${i + 1}ª geração · ${g.rule[0]}* ${"☠".repeat(g.rule[2])}\n   Maldição: ${g.rule[1]}\n   Herdeiro: ${g.trait} · Carreira: ${g.career}\n   Objetivos: ${g.goals.join("; ")}`).join("\n");
    api.setShare(`♛ *Legado Assombrado · Migas Sims*\n${list}`);
  }

  // ---------------- Gerador de Família ----------------
  const STRUCTS = [
    ["Casal com filhos", [["Pai ou mãe", "Adulto"], ["Pai ou mãe", "Adulto"], ["Filho(a)", "Criança"], ["Filho(a)", "Adolescente"]]],
    ["Pai ou mãe solo", [["Pai ou mãe", "Adulto"], ["Filho(a)", "Criança"], ["Bebê", "Bebê"]]],
    ["Irmãos órfãos", [["Irmão(ã) mais velho(a)", "Jovem adulto"], ["Irmão(ã)", "Adolescente"], ["Caçula", "Criança"]]],
    ["Três gerações", [["Avô ou avó", "Idoso"], ["Pai ou mãe", "Adulto"], ["Neto(a)", "Criança"], ["Neto(a)", "Criança"]]],
    ["Colegas de quarto estranhos", [["Colega", "Jovem adulto"], ["Colega", "Jovem adulto"], ["Colega", "Jovem adulto"]]],
    ["Casal recém-casado", [["Cônjuge", "Jovem adulto"], ["Cônjuge", "Jovem adulto"]]],
    ["Família grande", [["Pai ou mãe", "Adulto"], ["Pai ou mãe", "Adulto"], ["Filho(a)", "Adolescente"], ["Gêmeo(a)", "Criança"], ["Gêmeo(a)", "Criança"]]],
  ];
  const TWISTS = [
    "Dois membros da família não se suportam.",
    "Um deles está apaixonado pelo vizinho.",
    "Ninguém sabe cozinhar.",
    "A família está falida: começa com §500.",
    "Um deles fala com fantasmas (e os fantasmas respondem).",
    "Todos odeiam o mesmo vizinho.",
    "Um segredo de família foi escondido no porão.",
    "Herdaram a casa de um parente que sumiu.",
    "Um deles é famoso na cidade, e não do jeito bom.",
  ];
  let family = null;

  // A família inteira segue um tema só (o mesmo das criaturas do tarot):
  // a casa, o visual de cada um (por idade) e os traços combinam entre si.
  const FAM_NOME = {
    Vampiro: "Clã de vampiros", Bruxa: "Coven de bruxas", Lobisomem: "Matilha de lobisomens",
    Alienígena: "Aliens disfarçados", Sereia: "Família do pântano", fantasma: "Fantasmas vitorianos",
    zumbi: "Família zumbi", múmia: "Dinastia de múmias", noiva: "Casamento eterno",
    palhaço: "Trupe do circo abandonado", boneca: "Coleção de porcelana", cientista: "Cientistas malucos",
  };
  const YOUNG = ["Criança", "Adolescente", "Bebê"];

  function newFamily() {
    const [structure, roles] = pick(STRUCTS);
    const themes = window.THEMES.sim;
    const key = pick(Object.keys(themes));
    const t = themes[key];
    const adults = shuffle(t.familia.adultos), kids = shuffle(t.familia.jovens), traits = shuffle(t.Personalidade);
    let a = 0, k = 0;
    family = {
      name: (Object.entries(FAM_NOME).find(([w]) => key.includes(w)) || [0, "Família assombrada"])[1],
      structure,
      pack: window.splitPack ? window.splitPack(key)[1] : null,
      members: roles.map(([role, age], i) => ({
        role, age,
        look: YOUNG.includes(age) ? kids[k++ % kids.length] : adults[a++ % adults.length],
        trait: traits[i % traits.length],
      })),
      twist: pick(TWISTS),
      house: pick(t.familia.casa),
    };
  }

  function renderFamilia(api) {
    if (!family) newFamily();
    api.body.innerHTML = `
      <div class="fam-head result-card">
        <p class="result-kicker">${esc(family.structure)} · ${family.members.length} Sims</p>
        <p class="result-big">${esc(family.name)}</p>
        ${family.pack ? `<p class="pack-note">Requer <b>${esc(family.pack)}</b>. Não tem? Toque em "Outra família"</p>` : ""}
        <p class="result-text"><b>Casa:</b> ${esc(family.house)}</p>
        <p class="result-text"><b>Drama:</b> ${esc(family.twist)}</p>
      </div>
      <div class="fam-grid">${family.members.map((m) => `
        <div class="fam-card">
          <p class="fam-role">${esc(m.role)}</p>
          <p class="fam-age">${esc(m.age)}</p>
          <p class="fam-look">${esc(m.look)}</p>
          <span class="trait">${esc(m.trait)}</span>
        </div>`).join("")}
      </div>`;
    api.setShare(`⚘ *Família Assombrada · ${family.name}*\n${family.structure}\nCasa: ${family.house}\nDrama: ${family.twist}\n${family.members.map((m) => `• ${m.role} (${m.age}): ${m.look} — ${m.trait}`).join("\n")}`);
  }

  window.GAMES = {
    bingo: { title: "Bingo Maluco", eyebrow: "Marque enquanto joga", render: renderBingo, again: () => newBingo(), againLabel: "Nova cartela" },
    horoscopo: { title: "Horóscopo Sim", eyebrow: "O que dizem os astros", render: renderHoroscopo, again: () => { sign = null; }, againLabel: "Outro signo" },
    morte: { title: "Roleta da Morte", eyebrow: "Para ganhar um fantasma", render: renderMorte, again: () => { death = null; }, againLabel: "Recomeçar" },
    legado: { title: "Legado Assombrado", eyebrow: "Desafio de 10 gerações", render: renderLegado, again: () => newLegacy(), againLabel: "Novas regras" },
    familia: { title: "Família Assombrada", eyebrow: "Gerador de família", render: renderFamilia, again: () => newFamily(), againLabel: "Outra família" },
  };
})();
