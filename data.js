// Cartas do Tarot Assombrado.
// Cada carta usa uma ilustração (art -> img/carta-<art>.webp).
// Para adicionar ideias, é só colocar mais um texto na lista "options" da carta.
// "pick: 3" faz a carta sortear 3 itens diferentes (usado na personalidade).
// "icon" só aparece no texto compartilhado no WhatsApp.

window.DECKS = {
  "sim": {
    "title": "Criar um Sim",
    "short": "CAS",
    "icon": "🧛",
    "cards": [
      {
        "art": "bruxa",
        "arcana": "A Bruxa",
        "icon": "🎭",
        "cat": "Criatura",
        "options": [
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
        "art": "estrela",
        "arcana": "A Estrela",
        "icon": "🎨",
        "cat": "Paleta de cores",
        "options": [
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
        "art": "sol",
        "arcana": "O Sol",
        "icon": "🧪",
        "cat": "Pele",
        "options": [
          "Pálida, quase cinza",
          "Verde estilo Frankenstein",
          "Azulada de quem saiu do lago",
          "Cheia de cicatrizes e pontos",
          "Sardas pelo corpo todo",
          "Tatuagens de teia de aranha",
          "Roxa (modo alienígena)",
          "Bronzeada: vampiro(a) que pegou sol",
          "Pintinhas e marcas de nascença",
          "Normal: o terror é por dentro",
          "Detalhes de escamas (Ilhas Tropicais)"
        ]
      },
      {
        "art": "sacerdotisa",
        "arcana": "A Sacerdotisa",
        "icon": "💇",
        "cat": "Cabelo",
        "options": [
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
        "art": "lua",
        "arcana": "A Lua",
        "icon": "👁️",
        "cat": "Olhos",
        "options": [
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
        "art": "louco",
        "arcana": "O Louco",
        "icon": "👃",
        "cat": "Nariz",
        "options": [
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
        "art": "forca",
        "arcana": "A Força",
        "icon": "👄",
        "cat": "Boca",
        "options": [
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
        "art": "mago",
        "arcana": "O Mago",
        "icon": "💄",
        "cat": "Maquiagem",
        "options": [
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
        "art": "mundo",
        "arcana": "O Mundo",
        "icon": "👗",
        "cat": "Roupa",
        "options": [
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
        "art": "justica",
        "arcana": "A Justiça",
        "icon": "🧠",
        "cat": "Personalidade",
        "pick": 3,
        "options": [
          "Malvado",
          "Mesquinho",
          "Solitário",
          "Esnobe",
          "Melancólico",
          "Esquentado",
          "Desastrado",
          "Gênio",
          "Romântico",
          "Criativo",
          "Glutão",
          "Desleixado",
          "Perfeccionista",
          "Ambicioso",
          "Detesta Crianças",
          "Preguiçoso",
          "Alegre",
          "Gourmet",
          "Rato de Biblioteca",
          "Ativo",
          "Materialista",
          "Bom",
          "Asseado",
          "Amante da Música",
          "Paranoico (StrangerVille)",
          "Amante de Gatos (Gatos e Cães)"
        ],
        "conflicts": [
          [
            "Ativo",
            "Preguiçoso"
          ],
          [
            "Alegre",
            "Melancólico"
          ],
          [
            "Malvado",
            "Bom"
          ],
          [
            "Mesquinho",
            "Bom"
          ],
          [
            "Desleixado",
            "Asseado"
          ]
        ]
      },
      {
        "art": "roda",
        "arcana": "A Roda da Fortuna",
        "icon": "⭐",
        "cat": "Aspiração",
        "options": [
          "Escrever best-sellers de terror",
          "Virar gênio do mal",
          "Ser o terror das travessuras",
          "Ficar rico(a) a qualquer custo",
          "Achar o amor, nem que seja um fantasma",
          "Chef de pratos sinistros",
          "Colecionar coisas estranhas",
          "Pintar só quadros assombrados",
          "Viver isolado(a) na floresta",
          "Ter uma família enorme e esquisita",
          "Cientista maluco(a)",
          "Dominar os poderes de vampiro (Vampiros)"
        ]
      },
      {
        "art": "morte",
        "arcana": "A Morte",
        "icon": "🕯️",
        "cat": "Segredo sombrio",
        "options": [
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
          "Esqueleto no armário. De verdade."
        ]
      }
    ]
  },
  "casa": {
    "title": "Construção",
    "short": "construção",
    "icon": "🏚️",
    "cards": [
      {
        "art": "lua",
        "arcana": "A Lua",
        "icon": "🏚️",
        "cat": "Estilo da casa",
        "options": [
          "Mansão vitoriana mal-assombrada",
          "Cabana de bruxa no meio da floresta",
          "Castelo de vampiro",
          "Fazenda com milharal sinistro",
          "Funerária que virou casa",
          "Casa torta de conto de fadas sombrio",
          "Hospital abandonado reformado",
          "Casa inspirada em uma abóbora",
          "Mansão de família rica e esquisita",
          "Casa sobre palafitas no pântano",
          "Casinha fofa-assustadora",
          "Igreja antiga que virou casa"
        ]
      },
      {
        "art": "mundo",
        "arcana": "O Mundo",
        "icon": "🎨",
        "cat": "Paleta de cores",
        "options": [
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
        "art": "justica",
        "arcana": "A Justiça",
        "icon": "📐",
        "cat": "Desafio do lote",
        "options": [
          "Lote 20x20, dinheiro infinito",
          "Lote 30x20, no máximo 2 andares",
          "Lote 20x15: casa compacta",
          "Obrigatório ter porão",
          "Orçamento máximo de §50.000",
          "Precisa ter uma torre",
          "Tudo térreo, sem escadas",
          "Lote 40x30 com área de cemitério",
          "Livre! Você escolhe",
          "Pelo menos 1 cômodo secreto"
        ]
      },
      {
        "art": "louco",
        "arcana": "O Louco",
        "icon": "🚪",
        "cat": "Fachada e entrada",
        "options": [
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
        "art": "sacerdotisa",
        "arcana": "A Sacerdotisa",
        "icon": "🛋️",
        "cat": "Sala de estar",
        "options": [
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
        "art": "bruxa",
        "arcana": "A Bruxa",
        "icon": "🍳",
        "cat": "Cozinha",
        "options": [
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
        "art": "forca",
        "arcana": "A Força",
        "icon": "🛏️",
        "cat": "Quarto",
        "options": [
          "Cama com dossel preto",
          "Cama de ferro gótica",
          "Quarto de bonecas antigas",
          "Parede inteira de espelhos",
          "Teias de aranha e luz de vela",
          "Decoração lunar e estrelas",
          "Quarto de bruxa: plantas e cristais",
          "Quarto infantil assombrado",
          "Caixão no lugar da cama (Vampiros)"
        ]
      },
      {
        "art": "estrela",
        "arcana": "A Estrela",
        "icon": "🛁",
        "cat": "Banheiro",
        "options": [
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
        "art": "roda",
        "arcana": "A Roda da Fortuna",
        "icon": "🍽️",
        "cat": "Sala de jantar",
        "options": [
          "Mesa para 12 convidados sinistros",
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
        "art": "sol",
        "arcana": "O Sol",
        "icon": "🌳",
        "cat": "Quintal",
        "options": [
          "Horta de abóboras gigantes",
          "Cemitério da família",
          "Labirinto de cerca viva",
          "Piscina com luz verde",
          "Fogueira com bancos de tronco",
          "Estufa de plantas carnívoras",
          "Casinha de madeira no fundo do quintal",
          "Lago com névoa e salgueiros",
          "Casa na árvore assustadora"
        ]
      },
      {
        "art": "mago",
        "arcana": "O Mago",
        "icon": "🗝️",
        "cat": "Cômodo secreto",
        "options": [
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
        "art": "morte",
        "arcana": "A Morte",
        "icon": "👻",
        "cat": "Toque assombrado",
        "options": [
          "Um fantasma mora na casa",
          "Uma abóbora em cada cômodo",
          "Corvos e gatos pretos espalhados",
          "Só luz de vela e luz roxa",
          "Uma árvore morta dentro de casa",
          "Pelo menos 1 caixão escondido",
          "Teias em todos os cômodos",
          "Escada que leva a lugar nenhum",
          "Casa erguida num cemitério",
          "Um retrato que encara todo mundo"
        ]
      }
    ]
  }
};
