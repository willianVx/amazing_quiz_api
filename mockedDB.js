const mockedDB = [
{
	id: 1,
	questionaryTitle: "The batman",
	permalink: "batman",
	questions: [
		{
		id: 1,
		title: "Qual é o carro do batman?",
		options:[
			{id: 1, text: "1 - O batman!"},
			{id: 2, text: "2 - Who is dennis!"},
			{id: 3, text: "3 - O carro do rato"}
			],
		rightAnswer: {
			id: 2
		}
		},
		{
		id: 2,
		title: "Cadê a tia do batman",
		options:[
			{id: 1, text: "1 - Ta na casa do batman!"},
			{id: 2, text: "2 - Ta com o coringa"},
			{id: 3, text: "3 - Ta na caverna"}
			],
		rightAnswer: {
			id: 2
		}
		},
		{
		id: 3,
		title: "Cadê o batarang",
		options:[
			{id: 1, text: "1 - No bubum do batman!"},
			{id: 2, text: "2 - Com o Robim"},
			{id: 3, text: "3 - No cinto o animal"}
			],
		rightAnswer: {
			id: 3
		}
		},
		{
		id: 4,
		title: "Acabou a mamata!",
		options:[
			{id: 1, text: "1 - jamais!"},
			{id: 2, text: "2 - E o PT?"},
			{id: 3, text: "3 - Tudo culpa da lei ruany"}
			],
		rightAnswer: {
			id: 1
		}
		},
		{
		id: 5,
		title: "O PT acabou com a minha vida?",
		options:[
			{id: 1, text: "1 - verdade"},
			{id: 2, text: "2 - Mentira"},
			{id: 3, text: "3 - Talvez!"}
		],
		rightAnswer: {
			id: 2
		}
		}
	]
},

{
	id: 2,
	questionaryTitle: "Liga da justiça",
	permalink: "liga-da-injustica",
	questions: [
		{
		id: 1,
		title: "Quem é a mulher maravilha?",
		options:[
			{id: 1, text: "A padeira"},
			{id: 2, text: "A mina da grécia"},
			{id: 3, text: "Quem se importa!?"}
			],
		rightAnswer: {
			id: 1
		},
		},
		{
		id: 2,
		title: "Quantos flashs precisam pra ligar uma lampada",
		options:[
			{id: 1, text: "Nenhum, é só apertar um interruptor"},
			{id: 2, text: "Meio"},
			{id: 3, text: "Ele é a lampada"}
			],
		rightAnswer: {
			id: 1
		},
		},
		{
		id: 3,
		title: "Quantos anos apareceu o morcegão",
		options:[
			{id: 1, text: "Não sei, pergunta pra sua mãe"},
			{id: 2, text: "A dez mil anos a traz"},
			{id: 3, text: "A um minuto do fim do mundo"}
			],
		rightAnswer: {
			id: 1
		},
		},
		{
		id: 4,
		title: "Liga da justiça nada, e o PT?",
		options:[
			{id: 1, text: "1 - jamais!"},
			{id: 2, text: "2 - E o PT?"},
			{id: 3, text: "3 - Tudo culpa da lei ruany"}
			],
		rightAnswer: {
			id: 2
		},
		},
		{
		id: 5,
		title: "Pq não tem Liga na parque da disney?",
		options:[
			{id: 1, text: "Pergunta pra sua irmã, seu vacilaum"},
			{id: 2, text: "PQ eles são alérgicos a fogos de artificio"},
			{id: 3, text: "PQ monopolio é foda!"}
		],
		rightAnswer: {
			id: 1
		},
		}
	]
},

{
	id: 3,
	questionaryTitle: "E o jocker",
	permalink: "jocker",
	questions: [
		{
		id: 1,
		title: " Quem é o pai do Jocker?",
		options:[
			{id: 1, text: "O morcego pai"},
			{id: 2, text: "Pergunta pra mãe dele otário"},
			{id: 3, text: "O padeiro loko"}
			],
		rightAnswer: {
			id: 2
		},
		},
		{
		id: 2,
		title: "Pq o jocker tirou sua cara?",
		options:[
			{id: 1, text: "Pra fazer graça"},
			{id: 2, text: "Pq ele é loko drhdhd"},
			{id: 3, text: "Pq ele é duas caras"}
			],
		rightAnswer: {
			id: 3
		},
		},
		{
		id: 3,
		title: "Onde o jocker compra tinta para o cabelo?",
		options:[
			{id: 1, text: "Na farmácia"},
			{id: 2, text: "Com o zé da bica"},
			{id: 3, text: "Ele usa guache"}
			],
		rightAnswer: {
			id: 1
		},
		},
		{
		id: 4,
		title: "O jocker é petralha?",
		options:[
			{id: 1, text: "Jamais!"},
			{id: 2, text: "Mas é claro, com camiseta de lula livre e tudo"},
			{id: 3, text: "Pergunta pra mãe dele otário"}
			],
		rightAnswer: {
			id: 2
		},
		},
		{
		id: 5,
		title: "Coringa em terra de batman é rei?",
		options:[
			{id: 1, text: "Aqui é anarquia vacilaum"},
			{id: 2, text: "Auto proclamado reizaum"},
			{id: 3, text: "não né cara..."}
		],
		rightAnswer: {
			id: 3
		},
		}
	]
},

	
];

module.exports = mockedDB;
