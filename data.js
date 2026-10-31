// Cartas do Tarot Assombrado.
// Para adicionar ideias, é só colocar mais um texto na lista "options" da carta.
// "pick: 3" faz a carta sortear 3 itens diferentes (usado na personalidade).

window.DECKS = {
  sim: {
    title: "Criar um Sim",
    short: "CAS",
    icon: "🧛",
    cards: [
      {
        numeral: "0", arcana: "O Louco", icon: "🎭", cat: "Criatura",
        options: [
          "Vampiro(a) aristocrata de 300 anos",
          "Bruxa(o) da floresta que coleciona cogumelos",
          "Lobisomem que de dia trabalha de contador(a)",
          "Fantasma vitoriano(a) preso(a) na casa",
          "Uma abóbora que ganhou vida",
          "Múmia que acordou perdida no século 21",
          "Zumbi fashionista",
          "Noiva ou noivo cadáver",
          "Palhaço(a) de um circo abandonado",
          "Alienígena disfarçado(a) de Sim normal",
          "Ceifador(a) estagiário(a) da Morte",
          "Boneco(a) de porcelana amaldiçoado(a)",
          "Espantalho que cansou do milharal",
          "Sereia ou tritão do pântano",
          "Cientista que virou o próprio experimento"
        ]
      },
      {
        numeral: "XI", arcana: "A Justiça", icon: "⏳", cat: "Idade",
        options: [
          "Criança (bem sinistrinha)",
          "Adolescente rebelde",
          "Jovem adulto(a)",
          "Adulto(a)",
          "Idoso(a) ranzinza",
          "Idoso(a) fofo(a)… só que não",
          "Escolha livre: as cartas confiam em você"
        ]
      },
      {
        numeral: "XVII", arcana: "A Estrela", icon: "🎨", cat: "Paleta de cores",
        options: [
          "Roxo, verde-limão e preto",
          "Laranja abóbora e preto",
          "Só preto e branco",
          "Vermelho sangue e preto",
          "Tons pastel assombrados",
          "Verde gosma e roxo",
          "Branco fantasma e cinza",
          "Vinho, dourado e preto",
          "Neon que brilha no escuro",
          "Marrom de outono e laranja"
        ]
      },
      {
        numeral: "VIII", arcana: "A Força", icon: "💪", cat: "Corpo",
        options: [
          "Bem alto(a) e esguio(a)",
          "Baixinho(a) e fofinho(a)",
          "Musculoso(a) que nem lobisomem",
          "Magrinho(a) estilo esqueleto",
          "Corpo cheio de curvas",
          "Ombros largos e postura de vilão",
          "Corcunda de assistente de laboratório",
          "Corpo médio, o terror é no estilo"
        ]
      },
      {
        numeral: "XIX", arcana: "O Sol", icon: "🧪", cat: "Pele",
        options: [
          "Pálida, quase cinza",
          "Verde estilo Frankenstein",
          "Azulada de quem saiu do lago",
          "Cheia de cicatrizes e pontos",
          "Sardas pelo corpo todo",
          "Tatuagens de teia de aranha",
          "Roxa (modo alienígena)",
          "Bronzeada: vampiro(a) que pegou sol",
          "Com detalhes de escamas",
          "Normal: o terror é por dentro"
        ]
      },
      {
        numeral: "II", arcana: "A Sacerdotisa", icon: "💇", cat: "Cabelo",
        options: [
          "Longo, preto e liso até a cintura",
          "Ruivo bagunçado de bruxa",
          "Branco prateado",
          "Verde gosma",
          "Laranja abóbora",
          "Coque alto vitoriano",
          "Careca, e com orgulho",
          "Cacheado, volumoso e roxo",
          "Moicano",
          "Metade preto, metade branco",
          "Franjinha reta e tranças",
          "Tranças longas com fitas"
        ]
      },
      {
        numeral: "XVIII", arcana: "A Lua", icon: "👁️", cat: "Olhos",
        options: [
          "Vermelhos de vampiro",
          "Brancos, sem pupila",
          "Um de cada cor",
          "Amarelos de lobo",
          "Verde neon brilhante",
          "Totalmente pretos",
          "Roxos hipnotizantes",
          "Olheiras de quem não dorme desde 1800",
          "Olhos de gato, pupila fina",
          "Azul gelo, quase transparentes"
        ]
      },
      {
        numeral: "IX", arcana: "O Eremita", icon: "👃", cat: "Nariz",
        options: [
          "De bruxa: longo e pontudo",
          "Arrebitadinho de boneca",
          "Fininho, quase de esqueleto",
          "Grandão e torto",
          "Nariz de batata",
          "Com uma verruga charmosa",
          "Bem pequenininho",
          "Aquilino de vampiro nobre"
        ]
      },
      {
        numeral: "XV", arcana: "O Diabo", icon: "👄", cat: "Boca",
        options: [
          "Batom preto",
          "Sorriso costurado (maquiagem)",
          "Lábios roxos de frio",
          "Batom vermelho escorrendo",
          "Boca fininha e séria",
          "Sorrisão de palhaço",
          "Lábios carnudos verde-escuro",
          "Presas aparecendo"
        ]
      },
      {
        numeral: "III", arcana: "A Imperatriz", icon: "💄", cat: "Maquiagem",
        options: [
          "Caveira estilo Catrina",
          "Olho esfumado preto bem pesado",
          "Lágrimas pretas escorrendo",
          "Pintura de abóbora no rosto",
          "Glitter roxo em tudo",
          "Nenhuma, só a olheira",
          "Teia de aranha desenhada",
          "Bochechas rosadas de boneca"
        ]
      },
      {
        numeral: "XXI", arcana: "O Mundo", icon: "👗", cat: "Roupa",
        options: [
          "Vestido ou terno vitoriano preto",
          "Capa de vampiro com gola alta",
          "Bruxa(o) completo, chapéu pontudo",
          "Pijama de esqueleto",
          "Fantasia de abóbora",
          "Roupas rasgadas de zumbi",
          "Look gótico com coturno",
          "Macacão de caça-fantasmas",
          "Roupa de casamento desbotada",
          "Moletom de fantasma aconchegante",
          "Tudo em veludo roxo",
          "Fantasia de gato preto"
        ]
      },
      {
        numeral: "X", arcana: "A Roda da Fortuna", icon: "🎩", cat: "Acessório",
        options: [
          "Chapéu de bruxa",
          "Colar com pingente de morcego",
          "Óculos redondos escuros",
          "Coroa de flores mortas",
          "Tiara de chifres",
          "Luvas de renda pretas",
          "Brincos de aranha",
          "Um anel em cada dedo",
          "Tapa-olho",
          "Orelhinhas de gato",
          "Véu preto"
        ]
      },
      {
        numeral: "VI", arcana: "Os Enamorados", icon: "🧠", cat: "Personalidade", pick: 3,
        options: [
          "Malvado", "Maldoso", "Maluco", "Solitário", "Esnobe",
          "Melancólico", "Esquentado", "Desastrado", "Gênio", "Romântico",
          "Criativo", "Glutão", "Desleixado", "Perfeccionista", "Ambicioso",
          "Detesta Crianças", "Paranoico", "Preguiçoso", "Alegre", "Gourmet",
          "Rato de Biblioteca", "Amante de Gatos", "Ativo", "Mesquinho"
        ]
      },
      {
        numeral: "XX", arcana: "O Julgamento", icon: "⭐", cat: "Aspiração",
        options: [
          "Dominar todos os poderes de vampiro",
          "Virar gênio do mal",
          "Ser o terror das travessuras",
          "Ficar rico(a) a qualquer custo",
          "Achar o amor, nem que seja um fantasma",
          "Chef de pratos sinistros",
          "Colecionar coisas estranhas",
          "Pintar só quadros assombrados",
          "Viver isolado(a) na floresta",
          "Ter uma família enorme e esquisita",
          "Cientista maluco(a)"
        ]
      },
      {
        numeral: "XIII", arcana: "A Morte", icon: "🕯️", cat: "Segredo sombrio",
        options: [
          "Na verdade tem 400 anos",
          "Tem medo de abóboras",
          "Conversa com fantasmas toda noite",
          "Vira morcego quando fica bravo(a)",
          "Casou 7 vezes, e todos sumiram",
          "Rouba doces das crianças",
          "Tem um(a) gêmeo(a) do mal",
          "Não aparece no espelho",
          "Nunca dorme. Nunca.",
          "Foi demitido(a) pela Morte",
          "Guarda um esqueleto no armário. De verdade."
        ]
      }
    ]
  },

  casa: {
    title: "Construção",
    short: "construção",
    icon: "🏚️",
    cards: [
      {
        numeral: "0", arcana: "O Louco", icon: "🏚️", cat: "Estilo da casa",
        options: [
          "Mansão vitoriana mal-assombrada",
          "Cabana de bruxa no meio da floresta",
          "Castelo de vampiro",
          "Fazenda com milharal sinistro",
          "Funerária que virou casa",
          "Casa torta de conto de fadas sombrio",
          "Hospital abandonado reformado",
          "Casa inspirada em uma abóbora",
          "Mansão de família rica e esquisita",
          "Casa flutuante no pântano",
          "Casinha fofa-assustadora",
          "Igreja antiga que virou casa"
        ]
      },
      {
        numeral: "XVII", arcana: "A Estrela", icon: "🎨", cat: "Paleta de cores",
        options: [
          "Roxo, verde-limão e preto",
          "Laranja abóbora e preto",
          "Só preto e branco",
          "Vermelho sangue e preto",
          "Tons pastel assombrados",
          "Verde gosma e roxo",
          "Branco fantasma e cinza",
          "Vinho, dourado e preto",
          "Madeira escura e verde musgo",
          "Marrom de outono e laranja"
        ]
      },
      {
        numeral: "I", arcana: "O Mago", icon: "📐", cat: "Desafio do lote",
        options: [
          "Lote 20x20, dinheiro infinito",
          "Lote 30x20, no máximo 2 andares",
          "Lote 20x15: casa compacta",
          "Obrigatório ter porão",
          "Orçamento máximo de §50.000",
          "Precisa ter uma torre",
          "Tudo térreo, sem escadas",
          "Lote 40x30 com cemitério",
          "Livre! Você escolhe",
          "Pelo menos 1 cômodo secreto"
        ]
      },
      {
        numeral: "VII", arcana: "O Carro", icon: "🚪", cat: "Fachada e entrada",
        options: [
          "Portão de ferro com gárgulas",
          "Caminho de abóboras iluminadas",
          "Varanda com cadeira de balanço",
          "Cemitério no jardim da frente",
          "Árvores secas cheias de teias",
          "Lanternas por todo o caminho",
          "Fachada coberta de hera",
          "Velas e névoa na porta"
        ]
      },
      {
        numeral: "IV", arcana: "O Imperador", icon: "🛋️", cat: "Sala de estar",
        options: [
          "Lareira enorme e retrato de antepassado",
          "Sofá de veludo roxo e caveiras",
          "Biblioteca de livros de feitiço",
          "Piano antigo e candelabros",
          "Cantinho de ritual com tapete redondo",
          "Sala de cinema de filmes de terror",
          "Sessão espírita com bola de cristal",
          "Paredes cheias de quadros estranhos"
        ]
      },
      {
        numeral: "XIV", arcana: "A Temperança", icon: "🍳", cat: "Cozinha",
        options: [
          "Cozinha de bruxa com caldeirão",
          "Toda preta com detalhes dourados",
          "Laboratório: potes, tubos e frascos",
          "Retrô anos 50 em laranja e preto",
          "Rústica com ervas penduradas",
          "Ilha de mármore escuro",
          "Despensa lotada de doces",
          "Geladeira só de ‘suco vermelho’"
        ]
      },
      {
        numeral: "XVIII", arcana: "A Lua", icon: "🛏️", cat: "Quarto",
        options: [
          "Cama com dossel preto",
          "Caixão no lugar da cama",
          "Quarto de bonecas antigas",
          "Parede inteira de espelhos",
          "Teias de aranha e luz de vela",
          "Decoração lunar e estrelas",
          "Quarto de bruxa: plantas e cristais",
          "Quarto infantil assombrado"
        ]
      },
      {
        numeral: "XII", arcana: "O Enforcado", icon: "🛁", cat: "Banheiro",
        options: [
          "Banheira com pés de garra",
          "Tudo em verde gosma",
          "Mármore preto e velas",
          "Espelho rachado e luz fraca",
          "Luxo vampiro: vermelho e dourado",
          "Chuveiro de pedra estilo caverna",
          "Piso xadrez preto e branco",
          "Minúsculo e escondido"
        ]
      },
      {
        numeral: "V", arcana: "O Hierofante", icon: "🍽️", cat: "Sala de jantar",
        options: [
          "Mesa longa para 12 convidados sinistros",
          "Banquete de Halloween servido",
          "Lustre gigante de velas",
          "Toalha rasgada e pratos antigos",
          "Jantar a dois à luz de velas",
          "Retratos encarando quem come",
          "Mesa redonda de pedra",
          "Cada cadeira de um jeito"
        ]
      },
      {
        numeral: "VIII", arcana: "A Força", icon: "🌳", cat: "Quintal",
        options: [
          "Horta de abóboras gigantes",
          "Cemitério da família",
          "Labirinto de cerca viva",
          "Piscina de água verde",
          "Fogueira com bancos de tronco",
          "Estufa de plantas carnívoras",
          "Casa na árvore assustadora",
          "Lago com névoa e salgueiros"
        ]
      },
      {
        numeral: "II", arcana: "A Sacerdotisa", icon: "🗝️", cat: "Cômodo secreto",
        options: [
          "Laboratório de cientista maluco",
          "Calabouço no porão",
          "Sala de poções atrás da estante",
          "Cripta da família",
          "Salão de jogos escondido",
          "Quarto onde ninguém entra",
          "Sótão cheio de coisas antigas",
          "Adega de ‘suco vermelho’"
        ]
      },
      {
        numeral: "XIII", arcana: "A Morte", icon: "👻", cat: "Toque assombrado",
        options: [
          "Um fantasma mora na casa",
          "Uma abóbora em cada cômodo",
          "Corvos e gatos pretos espalhados",
          "Só luz de vela e luz roxa",
          "Uma árvore morta dentro de casa",
          "Pelo menos 1 caixão escondido",
          "Teias em todos os cômodos",
          "Escada que leva a lugar nenhum",
          "Casa construída sobre um cemitério",
          "Um retrato que encara todo mundo"
        ]
      }
    ]
  }
};
