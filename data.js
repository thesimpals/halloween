// Cartas do Tarot Assombrado.
//
// A primeira carta de cada tiragem sorteia um TEMA (a criatura do Sim ou o estilo da casa).
// As outras cartas sorteiam só opções desse tema, então tudo combina.
// Se o tema não tiver opções para uma carta, vale a lista "options" da própria carta.
//
// Opções que terminam com "(Nome do pacote)" precisam desse pacote.
// No site aparece o aviso para sortear de novo quem não tiver.
// "pick: 3" sorteia 3 itens diferentes (personalidade).

window.DECKS = {
  sim: {
    title: "Criar um Sim",
    short: "CAS",
    icon: "🧛",
    themeCat: "Criatura",
    cards: [
      { art: "bruxa", arcana: "A Bruxa", icon: "🎭", cat: "Criatura", options: [] },
      { art: "estrela", arcana: "A Estrela", icon: "🎨", cat: "Paleta de cores", options: ["Roxo e preto", "Laranja abóbora e preto"] },
      { art: "sol", arcana: "O Sol", icon: "🧪", cat: "Pele", options: ["Pálida, quase cinza"] },
      { art: "sacerdotisa", arcana: "A Sacerdotisa", icon: "💇", cat: "Cabelo", options: ["Longo e preto"] },
      { art: "lua", arcana: "A Lua", icon: "👁️", cat: "Olhos", options: ["Totalmente pretos"] },
      { art: "louco", arcana: "O Louco", icon: "👃", cat: "Nariz", options: ["Fininho e pontudo", "Arrebitadinho", "Grandão e torto", "Bem pequenininho", "Aquilino, de nobre", "Nariz de batata"] },
      { art: "forca", arcana: "A Força", icon: "👄", cat: "Boca", options: ["Boca fininha e séria"] },
      { art: "mago", arcana: "O Mago", icon: "💄", cat: "Maquiagem", options: ["Olheiras bem marcadas"] },
      { art: "mundo", arcana: "O Mundo", icon: "👗", cat: "Roupa", options: ["Look gótico com coturno"] },
      { art: "justica", arcana: "A Justiça", icon: "🧠", cat: "Personalidade", pick: 3, options: ["Criativo", "Alegre", "Solitário"] },
      { art: "roda", arcana: "A Roda da Fortuna", icon: "⭐", cat: "Aspiração", options: ["Amigo do Mundo"] },
      { art: "morte", arcana: "A Morte", icon: "🕯️", cat: "Segredo (pra interpretar)", options: ["Guarda um esqueleto no armário"] },
    ],
  },
  casa: {
    title: "Construção",
    short: "construção",
    icon: "🏚️",
    themeCat: "Estilo da casa",
    cards: [
      { art: "lua", arcana: "A Lua", icon: "🏚️", cat: "Estilo da casa", options: [] },
      { art: "mundo", arcana: "O Mundo", icon: "🎨", cat: "Paleta de cores", options: ["Roxo e preto"] },
      { art: "justica", arcana: "A Justiça", icon: "📐", cat: "Desafio do lote", options: [
        "Lote 20x20, dinheiro infinito", "Lote 30x20, no máximo 2 andares", "Lote 20x15: casa compacta",
        "Obrigatório ter porão", "Orçamento máximo de §50.000", "Precisa ter uma torre",
        "Tudo térreo, sem escadas", "Lote 40x30 com área de cemitério", "Livre! Você escolhe", "Pelo menos 1 cômodo secreto",
      ] },
      { art: "louco", arcana: "O Louco", icon: "🚪", cat: "Fachada e entrada", options: ["Lanternas por todo o caminho"] },
      { art: "sacerdotisa", arcana: "A Sacerdotisa", icon: "🛋️", cat: "Sala de estar", options: ["Lareira e poltronas antigas"] },
      { art: "bruxa", arcana: "A Bruxa", icon: "🍳", cat: "Cozinha", options: ["Rústica com ervas penduradas"] },
      { art: "forca", arcana: "A Força", icon: "🛏️", cat: "Quarto", options: ["Teias de aranha e luz de vela"] },
      { art: "estrela", arcana: "A Estrela", icon: "🛁", cat: "Banheiro", options: ["Espelho rachado e luz fraca"] },
      { art: "roda", arcana: "A Roda da Fortuna", icon: "🍽️", cat: "Sala de jantar", options: ["Jantar à luz de velas"] },
      { art: "sol", arcana: "O Sol", icon: "🌳", cat: "Quintal", options: ["Horta de abóboras gigantes"] },
      { art: "mago", arcana: "O Mago", icon: "🗝️", cat: "Cômodo secreto", options: ["Quarto onde ninguém entra"] },
      { art: "morte", arcana: "A Morte", icon: "👻", cat: "Toque assombrado", options: ["Um fantasma mora na casa"] },
    ],
  },
};

window.THEMES = {
  "sim": {
    "Vampiro (Vampiros)": {
      "Paleta de cores": [
        "Vinho, dourado e preto",
        "Vermelho sangue e preto",
        "Preto e veludo roxo"
      ],
      "Pele": [
        "Pálida, quase cinza",
        "Branca como porcelana",
        "Pálida com olheiras roxas"
      ],
      "Cabelo": [
        "Penteado para trás, bem alinhado",
        "Longo, preto e liso",
        "Coque alto vitoriano",
        "Ondas vermelho-escuras"
      ],
      "Olhos": [
        "Vermelhos de vampiro",
        "Pretos e profundos",
        "Âmbar hipnotizante"
      ],
      "Nariz": [
        "Aquilino, de nobre",
        "Fininho e elegante"
      ],
      "Boca": [
        "Presas aparecendo",
        "Batom vermelho-escuro",
        "Lábios pálidos e sérios"
      ],
      "Maquiagem": [
        "Olho esfumado vinho",
        "Sombra escura bem marcada",
        "Nenhuma: palidez natural"
      ],
      "Roupa": [
        "Capa com gola alta",
        "Terno ou vestido vitoriano preto",
        "Veludo vinho com renda"
      ],
      "Personalidade": [
        "Esnobe",
        "Romântico",
        "Solitário",
        "Ambicioso",
        "Perfeccionista",
        "Gourmet"
      ],
      "Aspiração": [
        "Dominar os poderes de vampiro (Vampiros)",
        "Barão da Mansão",
        "Alma Gêmea"
      ],
      "Segredo (pra interpretar)": [
        "Na verdade tem 400 anos",
        "Não aparece no espelho",
        "Vira morcego quando fica bravo(a)",
        "Odeia o cheiro de alho do vizinho"
      ],
      "familia": {
        "casa": [
          "Castelo de vampiro",
          "Mansão vitoriana mal-assombrada"
        ],
        "adultos": [
          "Vampiro(a) de capa e gola alta",
          "Vampira(o) de veludo vinho",
          "Vampiro(a) grisalho(a) de terno antigo",
          "Humano(a) de visual comum (casou com a família)"
        ],
        "jovens": [
          "Vampirinho(a) de capinha",
          "Vampiro(a) de visual gótico",
          "Humano(a) de pijama de morcego"
        ]
      }
    },
    "Bruxa ou bruxo (Realm of Magic)": {
      "Paleta de cores": [
        "Verde musgo e roxo",
        "Marrom de outono e laranja",
        "Roxo, preto e dourado"
      ],
      "Pele": [
        "Sardas pelo corpo todo",
        "Corada de quem vive ao ar livre",
        "Pálida com pintinhas"
      ],
      "Cabelo": [
        "Ruivo bagunçado",
        "Tranças longas com fitas",
        "Longo, grisalho e solto",
        "Cacheado e volumoso"
      ],
      "Olhos": [
        "Verdes de floresta",
        "Um de cada cor",
        "Roxos misteriosos"
      ],
      "Nariz": [
        "Longo e pontudo",
        "Com uma verruga charmosa",
        "Arrebitadinho"
      ],
      "Boca": [
        "Sorriso torto e misterioso",
        "Lábios roxos",
        "Batom marrom-terra"
      ],
      "Maquiagem": [
        "Bochechas rosadas de sol",
        "Delineado com estrelinhas",
        "Pintinhas desenhadas"
      ],
      "Roupa": [
        "Chapéu pontudo e capa",
        "Vestido rústico com avental",
        "Roupas em camadas, cheias de bolsos"
      ],
      "Personalidade": [
        "Criativo",
        "Alegre",
        "Gourmet",
        "Rato de Biblioteca",
        "Gênio",
        "Romântico"
      ],
      "Aspiração": [
        "Jardineiro(a) Botânico(a)",
        "Mestre da Culinária",
        "Cérebro Nerd"
      ],
      "Segredo (pra interpretar)": [
        "Conversa com os cogumelos",
        "Já transformou o ex em sapo",
        "Esconde um caldeirão no porão"
      ],
      "familia": {
        "casa": [
          "Cabana de bruxa no meio da floresta"
        ],
        "adultos": [
          "Bruxa(o) de chapéu pontudo e capa",
          "Bruxo(a) de túnica verde musgo",
          "Bruxa(o) de cabelo grisalho e avental"
        ],
        "jovens": [
          "Bruxinha(o) de chapéu pontudo",
          "Bruxa(o) de capa roxa curtinha",
          "Pequeno(a) de roupa cheia de bolsos"
        ]
      }
    },
    "Lobisomem (Lobisomens)": {
      "Paleta de cores": [
        "Marrom de outono e laranja",
        "Cinza lua e azul-escuro",
        "Verde musgo e marrom"
      ],
      "Pele": [
        "Bronzeada com cicatrizes",
        "Bem peluda nos braços",
        "Com arranhões recentes"
      ],
      "Cabelo": [
        "Bagunçado e cheio",
        "Barba por fazer e cabelo curto",
        "Grisalho prateado",
        "Rabo de cavalo rebelde"
      ],
      "Olhos": [
        "Amarelos de lobo",
        "Âmbar brilhante",
        "Cinza tempestade"
      ],
      "Boca": [
        "Sorriso cansado",
        "Caninos um pouquinho grandes",
        "Lábios rachados de frio"
      ],
      "Maquiagem": [
        "Olheiras de lua cheia",
        "Nenhuma",
        "Arranhão desenhado no rosto"
      ],
      "Roupa": [
        "Camisa social amassada",
        "Flanela xadrez rasgada",
        "Moletom com gravata por cima"
      ],
      "Personalidade": [
        "Ativo",
        "Esquentado",
        "Glutão",
        "Desleixado",
        "Gênio"
      ],
      "Aspiração": [
        "Fisiculturista",
        "Fabulosamente Rico",
        "Amigo do Mundo"
      ],
      "Segredo (pra interpretar)": [
        "Some toda noite de lua cheia",
        "Mastiga as canetas do escritório",
        "Uiva no chuveiro"
      ],
      "familia": {
        "casa": [
          "Fazenda com milharal sinistro",
          "Cabana de bruxa no meio da floresta"
        ],
        "adultos": [
          "Lobisomem de flanela xadrez",
          "Loba de óculos e camisa social",
          "Lobisomem grisalho prateado",
          "Humano(a) de visual comum"
        ],
        "jovens": [
          "Lobinho(a) de moletom rasgado",
          "Filhote de jardineira",
          "Pequeno(a) de cabelo bagunçado"
        ]
      }
    },
    "Alienígena (Get to Work)": {
      "Paleta de cores": [
        "Verde neon e prata",
        "Roxo e azul elétrico",
        "Branco e cinza metálico"
      ],
      "Pele": [
        "Verde-clara (o disfarce está falhando)",
        "Azulada",
        "Cinza lisinha"
      ],
      "Cabelo": [
        "Careca, e com orgulho",
        "Corte certinho demais",
        "Prateado futurista"
      ],
      "Olhos": [
        "Pretos e enormes",
        "Verde neon brilhante",
        "Azul gelo"
      ],
      "Boca": [
        "Sorriso ensaiado",
        "Lábios prateados",
        "Boca pequenininha"
      ],
      "Maquiagem": [
        "Brilho metálico no rosto",
        "Nenhuma: \"pele humana normal\"",
        "Sardas em forma de constelação"
      ],
      "Roupa": [
        "Macacão prateado",
        "Roupa social que não combina",
        "Look anos 80 \"da moda\""
      ],
      "Personalidade": [
        "Gênio",
        "Solitário",
        "Desastrado",
        "Rato de Biblioteca",
        "Perfeccionista"
      ],
      "Aspiração": [
        "Cérebro Nerd",
        "Gênio da Computação",
        "Amigo do Mundo"
      ],
      "Segredo (pra interpretar)": [
        "Estuda os vizinhos pelo telescópio",
        "Nunca aprendeu a usar o garfo",
        "Liga pra casa toda noite"
      ],
      "familia": {
        "casa": [
          "Laboratório de cientista maluco",
          "Casinha fofa-assustadora"
        ],
        "adultos": [
          "Alien de pele verde-clara e terno",
          "Alien de macacão prateado",
          "Humano(a) de visual comum (não percebeu nada)"
        ],
        "jovens": [
          "Mini alien de olhos enormes",
          "Alien de visual anos 80",
          "Pequeno(a) de pijama de astronauta"
        ]
      }
    },
    "Sereia ou tritão (Island Living)": {
      "Paleta de cores": [
        "Verde gosma e roxo",
        "Azul petróleo e verde musgo",
        "Lilás e verde-água"
      ],
      "Pele": [
        "Com detalhes de escamas",
        "Azulada de quem saiu do lago",
        "Esverdeada e úmida"
      ],
      "Cabelo": [
        "Longo, ondulado e verde",
        "Cheio de algas",
        "Azul-escuro e molhado"
      ],
      "Olhos": [
        "Verde-água",
        "Prateados",
        "Azul gelo"
      ],
      "Boca": [
        "Lábios azul-escuros",
        "Sorriso encantador",
        "Batom verde-escuro"
      ],
      "Maquiagem": [
        "Brilho de escamas nas bochechas",
        "Delineado de peixe",
        "Gotinhas brilhantes"
      ],
      "Roupa": [
        "Vestido de algas",
        "Conchas e redes de pesca",
        "Pijama sempre molhado"
      ],
      "Personalidade": [
        "Romântico",
        "Criativo",
        "Amante da Música",
        "Solitário",
        "Melancólico"
      ],
      "Aspiração": [
        "Alma Gêmea",
        "Gênio da Música",
        "Amigo do Mundo"
      ],
      "Segredo (pra interpretar)": [
        "Toma 3 banhos de banheira por dia",
        "Canta pra atrair visitas pro lago",
        "Guarda tesouros de naufrágios"
      ],
      "familia": {
        "casa": [
          "Casa sobre palafitas no pântano"
        ],
        "adultos": [
          "Sereia de cabelo de algas",
          "Tritão de colete de pescador",
          "Humano(a) de roupa de pesca"
        ],
        "jovens": [
          "Sereinha de cabelo azul",
          "Tritãozinho de conchas",
          "Pequeno(a) de capa de chuva amarela"
        ]
      }
    },
    "Visual de fantasma vitoriano": {
      "Paleta de cores": [
        "Branco fantasma e cinza",
        "Tons pastel apagados",
        "Só preto e branco"
      ],
      "Pele": [
        "Pálida, quase transparente",
        "Azulada",
        "Cinza perolada"
      ],
      "Cabelo": [
        "Coque alto vitoriano",
        "Cachinhos antigos",
        "Longo, branco e solto"
      ],
      "Olhos": [
        "Brancos, sem pupila",
        "Azul gelo",
        "Cinza apagado"
      ],
      "Boca": [
        "Lábios pálidos",
        "Boca fininha e séria",
        "Sorriso triste"
      ],
      "Maquiagem": [
        "Olheiras cinzentas",
        "Pó de arroz",
        "Lágrimas escuras"
      ],
      "Roupa": [
        "Camisola vitoriana",
        "Vestido ou terno de época desbotado",
        "Roupa de luto com véu"
      ],
      "Personalidade": [
        "Melancólico",
        "Solitário",
        "Esnobe",
        "Perfeccionista",
        "Romântico"
      ],
      "Aspiração": [
        "Pintor(a) Extraordinário(a)",
        "Alma Gêmea",
        "O(a) Curador(a)"
      ],
      "Segredo (pra interpretar)": [
        "Ainda espera o noivo voltar",
        "Assusta quem senta na cadeira dele(a)",
        "Morreu de vergonha. Literalmente."
      ],
      "familia": {
        "casa": [
          "Mansão vitoriana mal-assombrada"
        ],
        "adultos": [
          "Dama vitoriana pálida de luto",
          "Cavalheiro de terno de época desbotado",
          "Senhor(a) de camisola antiga"
        ],
        "jovens": [
          "Criança de camisola vitoriana",
          "Pequeno(a) de laço e vestido antigo",
          "Pequeno(a) pálido(a) de suspensório"
        ]
      }
    },
    "Visual de zumbi": {
      "Paleta de cores": [
        "Verde gosma e roxo",
        "Roxo, verde-limão e preto",
        "Neon que brilha no escuro"
      ],
      "Pele": [
        "Verde estilo Frankenstein",
        "Cheia de cicatrizes e pontos",
        "Cinza esverdeada"
      ],
      "Cabelo": [
        "Moicano",
        "Metade preto, metade verde",
        "Desgrenhado, mas com estilo"
      ],
      "Olhos": [
        "Brancos, sem pupila",
        "Um de cada cor",
        "Verde neon"
      ],
      "Boca": [
        "Batom preto",
        "Sorriso costurado (maquiagem)",
        "Lábios roxos"
      ],
      "Maquiagem": [
        "Olho esfumado preto bem pesado",
        "Cicatriz desenhada",
        "Glitter em cima dos pontos"
      ],
      "Roupa": [
        "Roupas rasgadas, mas de grife",
        "Look gótico com coturno",
        "Jaqueta de couro remendada"
      ],
      "Personalidade": [
        "Esnobe",
        "Criativo",
        "Glutão",
        "Desastrado",
        "Alegre"
      ],
      "Aspiração": [
        "Festeiro(a)",
        "Fabulosamente Rico",
        "Amigo do Mundo"
      ],
      "Segredo (pra interpretar)": [
        "Perde um dedo por semana",
        "Não lembra como morreu",
        "Come o almoço dos colegas"
      ],
      "familia": {
        "casa": [
          "Funerária que virou casa"
        ],
        "adultos": [
          "Zumbi de jaqueta de couro remendada",
          "Zumbi vovó(ô) de tricô rasgado",
          "Zumbi de roupa de grife rasgada"
        ],
        "jovens": [
          "Zumbizinho(a) de macacão rasgado",
          "Zumbi de look gótico",
          "Pequeno(a) de pontos e curativos"
        ]
      }
    },
    "Visual de múmia": {
      "Paleta de cores": [
        "Areia, dourado e preto",
        "Turquesa e dourado",
        "Marrom de outono e dourado"
      ],
      "Pele": [
        "Bronzeada e ressecada",
        "Cinza poeirenta",
        "Dourada"
      ],
      "Cabelo": [
        "Careca, só as faixas",
        "Franjinha reta egípcia",
        "Preto, liso e com joias"
      ],
      "Olhos": [
        "Delineados de preto",
        "Dourados",
        "Pretos e profundos"
      ],
      "Boca": [
        "Lábios ressecados",
        "Batom dourado",
        "Sorriso confuso"
      ],
      "Maquiagem": [
        "Delineado egípcio",
        "Sombra turquesa",
        "Poeira de mil anos"
      ],
      "Roupa": [
        "Enfaixado(a) da cabeça aos pés",
        "Túnica com colar dourado",
        "Roupa moderna por cima das faixas"
      ],
      "Personalidade": [
        "Esnobe",
        "Materialista",
        "Desastrado",
        "Rato de Biblioteca",
        "Ambicioso"
      ],
      "Aspiração": [
        "Fabulosamente Rico",
        "O(a) Curador(a)",
        "Barão da Mansão"
      ],
      "Segredo (pra interpretar)": [
        "Não entende o celular",
        "Tem um tesouro enterrado no quintal",
        "Já foi faraó e quer o trono de volta"
      ],
      "familia": {
        "casa": [
          "Mansão vitoriana mal-assombrada"
        ],
        "adultos": [
          "Faraó enfaixado de colar dourado",
          "Rainha de túnica e delineado egípcio",
          "Arqueólogo(a) de chapéu e colete"
        ],
        "jovens": [
          "Mumiazinha(o) enfaixada(o)",
          "Pequeno(a) de túnica e franjinha egípcia",
          "Pequeno(a) de chapéu de explorador"
        ]
      }
    },
    "Visual de noiva ou noivo cadáver": {
      "Paleta de cores": [
        "Azul pálido e cinza",
        "Branco fantasma e cinza",
        "Lilás e preto"
      ],
      "Pele": [
        "Azulada de quem saiu do lago",
        "Pálida com marcas",
        "Cinza azulada"
      ],
      "Cabelo": [
        "Longo, azul e desgrenhado",
        "Coque desfeito com véu",
        "Penteado de casamento antigo"
      ],
      "Olhos": [
        "Azul gelo",
        "Grandes e tristes",
        "Brancos"
      ],
      "Boca": [
        "Lábios azulados",
        "Sorriso triste",
        "Batom vinho apagado"
      ],
      "Maquiagem": [
        "Olheiras profundas",
        "Lágrimas escorrendo",
        "Pó cinza"
      ],
      "Roupa": [
        "Roupa de casamento desbotada",
        "Véu rasgado e luvas",
        "Terno de casamento empoeirado"
      ],
      "Personalidade": [
        "Romântico",
        "Melancólico",
        "Bom",
        "Criativo",
        "Amante da Música"
      ],
      "Aspiração": [
        "Alma Gêmea",
        "Família Grande e Feliz",
        "Gênio da Música"
      ],
      "Segredo (pra interpretar)": [
        "Foi largado(a) no altar",
        "Ainda usa a aliança",
        "Casou 7 vezes, e todos sumiram"
      ],
      "familia": {
        "casa": [
          "Funerária que virou casa",
          "Mansão vitoriana mal-assombrada"
        ],
        "adultos": [
          "Noiva de véu rasgado e pele azulada",
          "Noivo de terno empoeirado",
          "Padre de batina antiga"
        ],
        "jovens": [
          "Daminha pálida de vestido branco",
          "Pajem de terninho antigo",
          "Pequeno(a) de flores secas no cabelo"
        ]
      }
    },
    "Visual de palhaço sinistro": {
      "Paleta de cores": [
        "Vermelho e preto",
        "Listras roxas e brancas",
        "Neon que brilha no escuro"
      ],
      "Pele": [
        "Branca de pó",
        "Pálida",
        "Com sardas"
      ],
      "Cabelo": [
        "Cacheado, volumoso e laranja",
        "Dois coques altos",
        "Verde gosma"
      ],
      "Olhos": [
        "Um de cada cor",
        "Vermelhos",
        "Arregalados e brilhantes"
      ],
      "Nariz": [
        "Nariz de batata",
        "Redondinho e vermelho (maquiagem)"
      ],
      "Boca": [
        "Sorrisão de palhaço",
        "Batom vermelho escorrendo",
        "Sorriso costurado"
      ],
      "Maquiagem": [
        "Rosto de palhaço completo",
        "Lágrima pintada",
        "Losangos nos olhos"
      ],
      "Roupa": [
        "Roupa de palhaço listrada",
        "Gola de babado e suspensório",
        "Macacão colorido e sujo"
      ],
      "Personalidade": [
        "Alegre",
        "Malvado",
        "Desastrado",
        "Esquentado",
        "Criativo"
      ],
      "Aspiração": [
        "Estrela da Comédia",
        "Chefe das Travessuras",
        "Festeiro(a)"
      ],
      "Segredo (pra interpretar)": [
        "Ninguém nunca viu sem maquiagem",
        "Ri sozinho(a) de madrugada",
        "Guarda balões no porão"
      ],
      "familia": {
        "casa": [
          "Fazenda com milharal sinistro",
          "Casinha fofa-assustadora"
        ],
        "adultos": [
          "Palhaço de roupa listrada",
          "Palhaça de gola de babado",
          "Mímico de rosto branco"
        ],
        "jovens": [
          "Palhacinho(a) de suspensório",
          "Pequeno(a) de nariz vermelho",
          "Pequeno(a) de macacão colorido"
        ]
      }
    },
    "Visual de boneca(o) de porcelana": {
      "Paleta de cores": [
        "Tons pastel assombrados",
        "Rosa bebê e preto",
        "Branco e vinho"
      ],
      "Pele": [
        "Branca como porcelana",
        "Com rachadinhas (cicatrizes)",
        "Bochechas rosadas"
      ],
      "Cabelo": [
        "Cachinhos perfeitos",
        "Franjinha reta e tranças",
        "Loiro com laço"
      ],
      "Olhos": [
        "Grandes e vidrados",
        "Azul gelo",
        "Totalmente pretos"
      ],
      "Boca": [
        "Boquinha de coração",
        "Batom rosa",
        "Sorriso que não mexe"
      ],
      "Maquiagem": [
        "Bochechas rosadas de boneca",
        "Cílios desenhados",
        "Rachadura pintada"
      ],
      "Roupa": [
        "Vestido de babados",
        "Roupa de marinheiro antiga",
        "Pijama de renda"
      ],
      "Personalidade": [
        "Perfeccionista",
        "Asseado",
        "Esnobe",
        "Malvado",
        "Solitário"
      ],
      "Aspiração": [
        "Chefe das Travessuras",
        "Inimigo Público",
        "O(a) Curador(a)"
      ],
      "Segredo (pra interpretar)": [
        "Muda de lugar quando ninguém olha",
        "Já teve 13 donos",
        "Odeia que bagunçem o cabelo"
      ],
      "familia": {
        "casa": [
          "Casinha fofa-assustadora",
          "Mansão vitoriana mal-assombrada"
        ],
        "adultos": [
          "Boneca(o) de porcelana de babados",
          "Colecionador(a) de colete e monóculo",
          "Ventríloquo(a) de terno antigo"
        ],
        "jovens": [
          "Bonequinha(o) de cachinhos e laço",
          "Pequeno(a) de roupa de marinheiro",
          "Pequeno(a) de pijama de renda"
        ]
      }
    },
    "Visual de cientista maluco": {
      "Paleta de cores": [
        "Verde gosma e branco",
        "Roxo e verde-limão",
        "Branco e azul hospitalar"
      ],
      "Pele": [
        "Verde estilo Frankenstein",
        "Cheia de pontos",
        "Com manchas brilhantes"
      ],
      "Cabelo": [
        "Branco e espetado (levou choque)",
        "Careca com cicatriz",
        "Bagunçado e chamuscado"
      ],
      "Olhos": [
        "Verde neon brilhante",
        "Um de cada cor",
        "Olheiras de quem não dorme desde 1800"
      ],
      "Boca": [
        "Lábios roxos",
        "Sorriso nervoso",
        "Boca fininha e séria"
      ],
      "Maquiagem": [
        "Fuligem de explosão",
        "Olheiras pesadas",
        "Pontos desenhados"
      ],
      "Roupa": [
        "Jaleco manchado",
        "Óculos de proteção e luvas",
        "Pijama de laboratório"
      ],
      "Personalidade": [
        "Gênio",
        "Desleixado",
        "Solitário",
        "Rato de Biblioteca",
        "Esquentado"
      ],
      "Aspiração": [
        "Cérebro Nerd",
        "Gênio da Computação",
        "Inimigo Público"
      ],
      "Segredo (pra interpretar)": [
        "Guarda um cérebro num pote",
        "Testou a poção em si mesmo(a)",
        "Explode alguma coisa toda semana"
      ],
      "familia": {
        "casa": [
          "Laboratório de cientista maluco"
        ],
        "adultos": [
          "Cientista de jaleco manchado",
          "Assistente de óculos de proteção",
          "Criatura verde de pontos (e carinhosa)"
        ],
        "jovens": [
          "Gênio mirim de jaleco",
          "Pequeno(a) de óculos de proteção",
          "Pequeno(a) de cabelo espetado de choque"
        ]
      }
    }
  },
  "casa": {
    "Mansão vitoriana mal-assombrada": {
      "Paleta de cores": [
        "Vinho, dourado e preto",
        "Verde musgo e madeira escura",
        "Roxo e preto"
      ],
      "Fachada e entrada": [
        "Portão de ferro com gárgulas",
        "Varanda com cadeira de balanço",
        "Fachada coberta de hera"
      ],
      "Sala de estar": [
        "Lareira enorme e retrato de antepassado",
        "Piano antigo e candelabros",
        "Paredes cheias de quadros estranhos"
      ],
      "Cozinha": [
        "Toda preta com detalhes dourados",
        "Fogão antigo e louça de porcelana",
        "Despensa lotada de doces"
      ],
      "Quarto": [
        "Cama com dossel preto",
        "Parede inteira de espelhos",
        "Quarto de bonecas antigas"
      ],
      "Banheiro": [
        "Banheira com pés de garra",
        "Espelho rachado e luz fraca",
        "Piso xadrez preto e branco"
      ],
      "Sala de jantar": [
        "Mesa longa com lustre de velas",
        "Retratos encarando quem come",
        "Jantar servido em prataria"
      ],
      "Quintal": [
        "Labirinto de cerca viva",
        "Cemitério da família",
        "Estufa abandonada"
      ],
      "Cômodo secreto": [
        "Sótão cheio de coisas antigas",
        "Biblioteca atrás da estante",
        "Quarto onde ninguém entra"
      ],
      "Toque assombrado": [
        "Um retrato que encara todo mundo",
        "Escada que leva a lugar nenhum",
        "Um fantasma mora na casa"
      ]
    },
    "Cabana de bruxa no meio da floresta": {
      "Paleta de cores": [
        "Verde musgo e roxo",
        "Marrom de outono e laranja",
        "Madeira escura e verde"
      ],
      "Fachada e entrada": [
        "Caminho de abóboras iluminadas",
        "Árvores secas cheias de teias",
        "Porta torta cheia de ervas"
      ],
      "Sala de estar": [
        "Biblioteca de livros de feitiço",
        "Cantinho de ritual com tapete redondo",
        "Lareira com caldeirão"
      ],
      "Cozinha": [
        "Cozinha de bruxa com caldeirão",
        "Rústica com ervas penduradas",
        "Potes de ingredientes estranhos"
      ],
      "Quarto": [
        "Quarto de bruxa: plantas e cristais",
        "Cama de madeira com colcha de retalhos",
        "Decoração lunar e estrelas"
      ],
      "Banheiro": [
        "Chuveiro de pedra estilo caverna",
        "Banheira de madeira",
        "Cheio de plantas penduradas"
      ],
      "Sala de jantar": [
        "Mesa redonda de madeira rústica",
        "Banquete de abóbora",
        "Cada cadeira de um jeito"
      ],
      "Quintal": [
        "Horta de abóboras gigantes",
        "Jardim de cogumelos",
        "Fogueira com bancos de tronco"
      ],
      "Cômodo secreto": [
        "Sala de poções atrás da estante",
        "Porão de ingredientes",
        "Observatório no sótão"
      ],
      "Toque assombrado": [
        "Corvos e gatos pretos espalhados",
        "Uma árvore morta dentro de casa",
        "Só luz de vela e luz roxa"
      ]
    },
    "Castelo de vampiro": {
      "Paleta de cores": [
        "Vermelho sangue e preto",
        "Vinho, dourado e preto",
        "Cinza pedra e roxo"
      ],
      "Fachada e entrada": [
        "Portão de ferro com gárgulas",
        "Torres altas e janelas estreitas",
        "Velas e névoa na porta"
      ],
      "Sala de estar": [
        "Sofá de veludo roxo e caveiras",
        "Lareira enorme e retrato de antepassado",
        "Piano antigo e candelabros"
      ],
      "Cozinha": [
        "Geladeira só de ‘suco vermelho’",
        "Toda preta com detalhes dourados",
        "Cozinha que ninguém usa (cheia de teias)"
      ],
      "Quarto": [
        "Caixão no lugar da cama (Vampiros)",
        "Cama com dossel vermelho",
        "Quarto sem nenhuma janela"
      ],
      "Banheiro": [
        "Luxo vampiro: vermelho e dourado",
        "Mármore preto e velas",
        "Espelho coberto com um pano"
      ],
      "Sala de jantar": [
        "Mesa longa para 12 convidados",
        "Jantar à luz de velas",
        "Taças de cristal sempre vazias"
      ],
      "Quintal": [
        "Jardim de rosas negras",
        "Cemitério da família",
        "Fonte de pedra seca"
      ],
      "Cômodo secreto": [
        "Cripta da família",
        "Adega de ‘suco vermelho’",
        "Calabouço no porão"
      ],
      "Toque assombrado": [
        "Pelo menos 1 caixão escondido",
        "Morcegos de enfeite no teto",
        "Nenhum espelho na casa inteira"
      ]
    },
    "Fazenda com milharal sinistro": {
      "Paleta de cores": [
        "Marrom de outono e laranja",
        "Vermelho celeiro e preto",
        "Verde musgo e marrom"
      ],
      "Fachada e entrada": [
        "Varanda com cadeira de balanço",
        "Espantalho na entrada",
        "Cerca torta de madeira"
      ],
      "Sala de estar": [
        "Lareira de pedra e poltrona velha",
        "Quadros de família desbotados",
        "Tapete de retalhos e lampião"
      ],
      "Cozinha": [
        "Rústica com ervas penduradas",
        "Fogão a lenha antigo",
        "Despensa de conservas estranhas"
      ],
      "Quarto": [
        "Cama de ferro gótica",
        "Colcha de retalhos e lampião",
        "Quarto infantil assombrado"
      ],
      "Banheiro": [
        "Banheira com pés de garra",
        "Piso de madeira rangendo",
        "Minúsculo e escondido"
      ],
      "Sala de jantar": [
        "Mesa comprida de madeira",
        "Banquete de Halloween servido",
        "Toalha xadrez rasgada"
      ],
      "Quintal": [
        "Milharal com espantalho",
        "Horta de abóboras gigantes",
        "Celeiro abandonado"
      ],
      "Cômodo secreto": [
        "Porão de conservas",
        "Sótão do celeiro",
        "Quarto onde ninguém entra"
      ],
      "Toque assombrado": [
        "Corvos e gatos pretos espalhados",
        "Uma abóbora em cada cômodo",
        "Casa erguida num cemitério"
      ]
    },
    "Funerária que virou casa": {
      "Paleta de cores": [
        "Só preto e branco",
        "Roxo, preto e cinza",
        "Branco fantasma e cinza"
      ],
      "Fachada e entrada": [
        "Velas e névoa na porta",
        "Cemitério no jardim da frente",
        "Placa antiga da funerária"
      ],
      "Sala de estar": [
        "Sessão espírita com bola de cristal",
        "Sofá preto e flores secas",
        "Paredes cheias de quadros estranhos"
      ],
      "Cozinha": [
        "Toda branca e fria",
        "Ilha de mármore escuro",
        "Cozinha que parece necrotério"
      ],
      "Quarto": [
        "Caixão no lugar da cama (Vampiros)",
        "Cama preta com lençóis de seda",
        "Teias de aranha e luz de vela"
      ],
      "Banheiro": [
        "Mármore preto e velas",
        "Tudo branco e frio",
        "Espelho rachado e luz fraca"
      ],
      "Sala de jantar": [
        "Mesa decorada com coroas de flores",
        "Jantar a dois à luz de velas",
        "Retratos encarando quem come"
      ],
      "Quintal": [
        "Cemitério da família",
        "Lago com névoa e salgueiros",
        "Jardim de flores mortas"
      ],
      "Cômodo secreto": [
        "Cripta da família",
        "Antiga sala de preparo (só decoração)",
        "Quarto onde ninguém entra"
      ],
      "Toque assombrado": [
        "Pelo menos 1 caixão escondido",
        "Casa erguida num cemitério",
        "Um fantasma mora na casa"
      ]
    },
    "Laboratório de cientista maluco": {
      "Paleta de cores": [
        "Verde gosma e branco",
        "Roxo e verde-limão",
        "Branco e azul hospitalar"
      ],
      "Fachada e entrada": [
        "Portão enferrujado",
        "Placa de \"não entre\"",
        "Luzes verdes nas janelas"
      ],
      "Sala de estar": [
        "Quadro-negro cheio de fórmulas",
        "Sofá velho e telescópio",
        "Estante de livros e frascos"
      ],
      "Cozinha": [
        "Laboratório: potes, tubos e frascos",
        "Toda branca de hospital",
        "Geladeira com coisas que se mexem"
      ],
      "Quarto": [
        "Cama de hospital",
        "Quarto cheio de computadores",
        "Beliche de metal"
      ],
      "Banheiro": [
        "Azulejo verde de hospital",
        "Banheira com gosma verde",
        "Espelho rachado e luz fraca"
      ],
      "Sala de jantar": [
        "Mesa de metal comprida",
        "Pratos servidos em bandejas de laboratório",
        "Cada cadeira de um jeito"
      ],
      "Quintal": [
        "Estufa de plantas carnívoras",
        "Piscina com luz verde",
        "Gerador barulhento e sucata"
      ],
      "Cômodo secreto": [
        "Laboratório secreto no porão",
        "Sala de experimentos atrás da estante",
        "Calabouço no porão"
      ],
      "Toque assombrado": [
        "Só luz verde e roxa",
        "Uma árvore morta dentro de casa",
        "Escada que leva a lugar nenhum"
      ]
    },
    "Casinha fofa-assustadora": {
      "Paleta de cores": [
        "Tons pastel assombrados",
        "Rosa bebê e preto",
        "Lilás e laranja abóbora"
      ],
      "Fachada e entrada": [
        "Caminho de abóboras iluminadas",
        "Fantasminhas de enfeite na janela",
        "Lanternas por todo o caminho"
      ],
      "Sala de estar": [
        "Sofá rosa com almofadas de morcego",
        "Cantinho de leitura com abajur de lua",
        "Quadros fofos de fantasma"
      ],
      "Cozinha": [
        "Retrô anos 50 em laranja e preto",
        "Despensa lotada de doces",
        "Cozinha pastel com potes de biscoito"
      ],
      "Quarto": [
        "Decoração lunar e estrelas",
        "Quarto de bonecas antigas",
        "Cama cheia de bichinhos de pelúcia"
      ],
      "Banheiro": [
        "Tudo em verde gosma",
        "Banheira rosa com patinhos",
        "Piso xadrez lilás e preto"
      ],
      "Sala de jantar": [
        "Banquete de Halloween servido",
        "Mesa redonda com toalha de morcegos",
        "Cada cadeira de um jeito"
      ],
      "Quintal": [
        "Horta de abóboras gigantes",
        "Casa na árvore assustadora",
        "Balanço velho rangendo"
      ],
      "Cômodo secreto": [
        "Sala de jogos escondida",
        "Sótão cheio de fantasias",
        "Quarto de brinquedos que se mexem"
      ],
      "Toque assombrado": [
        "Uma abóbora em cada cômodo",
        "Corvos e gatos pretos espalhados",
        "Teias em todos os cômodos"
      ]
    },
    "Casa sobre palafitas no pântano": {
      "Paleta de cores": [
        "Verde gosma e roxo",
        "Azul petróleo e verde musgo",
        "Madeira escura e verde"
      ],
      "Fachada e entrada": [
        "Ponte de madeira bamba",
        "Lanternas penduradas na varanda",
        "Barquinho amarrado na porta"
      ],
      "Sala de estar": [
        "Rede e poltrona de vime",
        "Parede cheia de achados do pântano",
        "Lareira de pedra e lampião"
      ],
      "Cozinha": [
        "Rústica com ervas penduradas",
        "Potes de ingredientes estranhos",
        "Fogão a lenha antigo"
      ],
      "Quarto": [
        "Cama de madeira com mosquiteiro",
        "Quarto cheio de plantas",
        "Teias de aranha e luz de vela"
      ],
      "Banheiro": [
        "Chuveiro de pedra estilo caverna",
        "Tudo em verde gosma",
        "Banheira de madeira"
      ],
      "Sala de jantar": [
        "Mesa redonda de madeira rústica",
        "Sopa de pântano servida",
        "Cada cadeira de um jeito"
      ],
      "Quintal": [
        "Lago com névoa e salgueiros",
        "Estufa de plantas carnívoras",
        "Píer de pesca"
      ],
      "Cômodo secreto": [
        "Porão alagado",
        "Sótão cheio de coisas antigas",
        "Quarto onde ninguém entra"
      ],
      "Toque assombrado": [
        "Corvos e gatos pretos espalhados",
        "Uma árvore morta dentro de casa",
        "Só luz de vela e luz roxa"
      ]
    }
  }
};

// A carta de tema mostra os nomes dos temas.
window.DECKS.sim.cards[0].options = Object.keys(window.THEMES.sim);
window.DECKS.casa.cards[0].options = Object.keys(window.THEMES.casa);
