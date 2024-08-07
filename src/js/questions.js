const array_questions = [
    {
        materia: "matematica",
        questions: [
            {
                number_question: 1,
                question: "Qual a soma de 23 + 17?",

                answers: [
                    { text: "39", correct: false },
                    { text: "40", correct: true },
                    { text: "41", correct: false },
                    { text: "42", correct: false },
                ],
            },

            {
                number_question: 2,
                question: "Se você tem 45 reais e compra um produto que custa 29 reais, quanto dinheiro sobra?",

                answers: [
                    { text: "14 reais", correct: false },
                    { text: "15 reais", correct: false },
                    { text: "16 reais", correct: true },
                    { text: "17 reais", correct: false },
                ],
            },

            {
                number_question: 3,
                question: "Se um ônibus tem 40 assentos e 28 estão ocupados, quantos assentos ainda estão livres?",

                answers: [
                    { text: "10", correct: false },
                    { text: "11", correct: false },
                    { text: "12", correct: true },
                    { text: "13", correct: false },
                ],
            },

            {
                number_question: 4,
                question: "Qual o resultado da sequinte conta, 6 x 7?",

                answers: [
                    { text: "43", correct: false },
                    { text: "42", correct: true },
                    { text: "41", correct: false },
                    { text: "40", correct: false },
                ],
            },

            {
                number_question: 5,
                question: "Se uma pizza é dividida em 8 fatias e você come 3 fatias, qual fração da pizza você comeu?",

                answers: [
                    { text: "1/2", correct: false },
                    { text: "1/3", correct: false },
                    { text: "5/8", correct: false },
                    { text: "3/8", correct: true },
                ],
            },

            {
                number_question: 6,
                question: "Qual é a área de um retângulo que tem 5 metros de comprimento e 4 metros de largura?",

                answers: [
                    { text: "15 m²", correct: false },
                    { text: "20 m²", correct: true },
                    { text: "25 m²", correct: false },
                    { text: "30 m²", correct: false },
                ],
            },

            {
                number_question: 7,
                question: "Se uma loja vende três tipos de frutas: maçãs, bananas e laranjas, e há 15 maçãs, 20 bananas e 25 laranjas, quantas frutas há no total?",

                answers: [
                    { text: "70", correct: false },
                    { text: "65", correct: false },
                    { text: "60", correct: true },
                    { text: "50", correct: false },
                ],
            },

            {
                number_question: 8,
                question: "Qual é o valor de 5³ (cinco ao cubo)?",

                answers: [
                    { text: "125", correct: true },
                    { text: "150", correct: false },
                    { text: "15", correct: false },
                    { text: "225", correct: false },
                ],
            },

            {
                number_question: 9,
                question: "Em uma prova, João acertou 18 das 20 questões. Qual é a porcentagem de acertos dele?",

                answers: [
                    { text: "85%", correct: false },
                    { text: "88%", correct: false },
                    { text: "90%", correct: true },
                    { text: "92%", correct: false },
                ],
            },

            {
                number_question: 10,
                question: "Se uma caixa contém 24 bolas e você retira 1/4 delas, quantas bolas você retirou?",

                answers: [
                    { text: "5", correct: false },
                    { text: "6", correct: true },
                    { text: "7", correct: false },
                    { text: "8", correct: false },
                ],
            },
        ],
    },

    {
        materia: "portugues",
        questions: [
            {
                number_question: 1,
                question: "Qual é o plural de 'cão'?",

                answers: [
                    { text: "Cãos", correct: false },
                    { text: "Cões", correct: false },
                    { text: "Cãones", correct: false },
                    { text: "Cães", correct: true },
                ],
            },

            {
                number_question: 2,
                question: "Qual a classe gramatical da palavra 'feliz' na frase: 'Ela está feliz'?",

                answers: [
                    { text: "Substantivo", correct: false },
                    { text: "Adjetivo", correct: true },
                    { text: "Verbo", correct: false },
                    { text: "Advérbio", correct: false },
                ],
            },

            {
                number_question: 3,
                question: "Qual é o sinônimo de 'rápido'?",

                answers: [
                    { text: "Devagar", correct: false },
                    { text: "Veloz", correct: true },
                    { text: "Lento", correct: false },
                    { text: "Pesado", correct: false },
                ],
            },

            {
                number_question: 4,
                question: "Qual é o antônimo de 'calmo'?",

                answers: [
                    { text: "Tranquilo", correct: false },
                    { text: "Agitado", correct: true },
                    { text: "Sereno", correct: false },
                    { text: "Pacífico", correct: false },
                ],
            },

            {
                number_question: 5,
                question:
                    "Complete a frase com a forma correta do verbo: 'Ele ______ (correr) todos os dias.'",

                answers: [
                    { text: "Corre", correct: true },
                    { text: "Corra", correct: false },
                    { text: "Correm", correct: false },
                    { text: "Correria", correct: false },
                ],
            },

            {
                number_question: 6,
                question: "Qual é a forma correta: 'Eu vou _____ (ver) o filme.'?",

                answers: [
                    { text: "Ver", correct: true },
                    { text: "Vir", correct: false },
                    { text: "Vier", correct: false },
                    { text: "Ver", correct: false },
                ],
            },

            {
                number_question: 7,
                question: "Qual é o sujeito da frase: 'Os pássaros cantam todas as manhãs.'?",

                answers: [
                    { text: "Todas as manhãs", correct: false },
                    { text: "Cantam", correct: false },
                    { text: "Os pássaros", correct: true },
                    { text: "Manhãs", correct: false },
                ],
            },

            {
                number_question: 8,
                question: "Qual dessas palavras é um substantivo comum?",
                answers: [
                    { text: "Brasil", correct: false },
                    { text: "João", correct: false },
                    { text: "Carro", correct: true },
                    { text: "Maria", correct: false },
                ],
            },

            {
                number_question: 9,
                question: "Qual é o tempo verbal da frase: 'Nós estudaremos amanhã'?",

                answers: [
                    { text: "Pretérito", correct: false },
                    { text: "Futuro", correct: true },
                    { text: "Presente", correct: false },
                    { text: "Gerúndio", correct: false },
                ],
            },

            {
                number_question: 10,
                question: "Qual das palavras abaixo está corretamente acentuada?",

                answers: [
                    { text: "Cafe", correct: false },
                    { text: "Lâmpada", correct: true },
                    { text: "Ventilador", correct: false },
                    { text: "Livro", correct: false },
                ],
            },
        ],
    },

    {
        materia: "geografia",
        questions: [
            {
                number_question: 1,
                question: "Qual é o maior país da América do Sul?",

                answers: [
                    { text: "Argentina", correct: false },
                    { text: "Colômbia", correct: false },
                    { text: "Chile", correct: false },
                    { text: "Brasil", correct: true },
                ],
            },

            {
                number_question: 2,
                question: "Qual é o rio mais longo do mundo?",

                answers: [
                    { text: "Rio Amazonas", correct: true },
                    { text: "Rio Nilo", correct: false },
                    { text: "Rio Yangtzé", correct: false },
                    { text: "Rio Mississippi", correct: false },
                ],
            },

            {
                number_question: 3,
                question: "Qual é a capital da França?",

                answers: [
                    { text: "Londres", correct: false },
                    { text: "Berlim", correct: false },
                    { text: "Madri", correct: false },
                    { text: "Paris", correct: true },
                ],
            },

            {
                number_question: 4,
                question: "Qual é o continente mais populoso do mundo?",

                answers: [
                    { text: "África", correct: false },
                    { text: "América do Norte", correct: false },
                    { text: "Europa", correct: false },
                    { text: "Ásia", correct: true },
                ],
            },

            {
                number_question: 5,
                question: "Qual oceano está localizado a leste da África?",

                answers: [
                    { text: "Oceano Atlântico", correct: false },
                    { text: "Oceano Índico", correct: true },
                    { text: "Oceano Pacífico", correct: false },
                    { text: "Oceano Ártico", correct: false },
                ],
            },

            {
                number_question: 6,
                question: "Qual é o rio mais longo do mundo?",

                answers: [
                    { text: "Rio Amazonas", correct: false },
                    { text: "Rio Nilo", correct: true },
                    { text: "Rio Yangtzé", correct: false },
                    { text: "Rio Mississipi", correct: false },
                ],
            },

            {
                number_question: 7,
                question: "Qual é a capital da Austrália?",

                answers: [
                    { text: "Sydney", correct: false },
                    { text: "Melbourne", correct: false },
                    { text: "Canberra", correct: true },
                    { text: "Brisbane", correct: false },
                ],
            },

            {
                number_question: 8,
                question: "Qual é o país mais populoso da África?",

                answers: [
                    { text: "Egito", correct: false },
                    { text: "Nigéria", correct: true },
                    { text: "África do Sul", correct: false },
                    { text: "Etiópia", correct: false },
                ],
            },

            {
                number_question: 9,
                question: "Qual é o deserto mais seco do mundo?",

                answers: [
                    { text: "Deserto do Saara", correct: false },
                    { text: "Deserto da Arábia", correct: false },
                    { text: "Deserto do Atacama", correct: true },
                    { text: "Deserto de Gobi", correct: false },
                ],
            },

            {
                number_question: 10,
                question: "Qual é a maior ilha do mundo?",

                answers: [
                    { text: "Groenlândia", correct: true },
                    { text: "Madagascar", correct: false },
                    { text: "Nova Guiné", correct: false },
                    { text: "Borneo", correct: false },
                ],
            },
        ],
    },

    {
        materia: "historia",
        questions: [
            {
                number_question: 1,
                question: "Quem foi o primeiro presidente do Brasil?",

                answers: [
                    { text: "Getúlio Vargas", correct: false },
                    { text: "Dom Pedro II", correct: false },
                    { text: "Juscelino Kubitschek", correct: false },
                    { text: "Deodoro da Fonseca", correct: true },
                ],
            },

            {
                number_question: 2,
                question: "Qual foi a civilização antiga que construiu as pirâmides?",

                answers: [
                    { text: "Romanos", correct: false },
                    { text: "Gregos", correct: false },
                    { text: "Egípcios", correct: true },
                    { text: "Maias", correct: false },
                ],
            },

            {
                number_question: 3,
                question: "Em que ano ocorreu a Proclamação da República no Brasil?",

                answers: [
                    { text: "1888", correct: false },
                    { text: "1889", correct: true },
                    { text: "1890", correct: false },
                    { text: "1891", correct: false },
                ],
            },

            {
                number_question: 4,
                question: "Quem descobriu o Brasil em 1500?",

                answers: [
                    { text: "Cristóvão Colombo", correct: false },
                    { text: "Pedro Álvares Cabral", correct: true },
                    { text: "Vasco da Gama", correct: false },
                    { text: "Fernando de Noronha", correct: false },
                ],
            },

            {
                number_question: 5,
                question: "Qual era o nome do navio em que os Pilgrims viajaram para a América?",

                answers: [
                    { text: "Santa Maria", correct: false },
                    { text: "Mayflower", correct: true },
                    { text: "Pinta", correct: false },
                    { text: "Nina", correct: false },
                ],
            },

            {
                number_question: 6,
                question: "Quem foi o principal líder da Revolução Francesa?",

                answers: [
                    { text: "Napoleão Bonaparte", correct: false },
                    { text: "Maximilien Robespierre", correct: true },
                    { text: "Ludwig XIV", correct: false },
                    { text: "Jean-Paul Marat", correct: false },
                ],
            },

            {
                number_question: 7,
                question: "Qual era o nome do primeiro satélite artificial lançado ao espaço?",

                answers: [
                    { text: "Apollo", correct: false },
                    { text: "Luna", correct: false },
                    { text: "Sputnik", correct: true },
                    { text: "Explorer", correct: false },
                ],
            },

            {
                number_question: 8,
                question: "Quem foi o primeiro imperador do Brasil?",

                answers: [
                    { text: "Dom Pedro I", correct: true },
                    { text: "Dom Pedro II", correct: false },
                    { text: "Deodoro da Fonseca", correct: false },
                    { text: "Getúlio Vargas", correct: false },
                ],
            },

            {
                number_question: 9,
                question: "Em que ano caiu o Muro de Berlim?",

                answers: [
                    { text: "1987", correct: false },
                    { text: "1988", correct: false },
                    { text: "1989", correct: true },
                    { text: "1990", correct: false },
                ],
            },

            {
                number_question: 10,
                question: "Quem foi o líder sul-africano que lutou contra o apartheid?",

                answers: [
                    { text: "Nelson Mandela", correct: true },
                    { text: "Desmond Tutu", correct: false },
                    { text: "Thabo Mbeki", correct: false },
                    { text: "Jacob Zuma", correct: false },
                ],
            },
        ],
    },

    {
        materia: "ciencias",
        questions: [
            {
                number_question: 1,
                question: "Qual é o planeta mais próximo do Sol?",

                answers: [
                    { text: "Vênus", correct: false },
                    { text: "Terra", correct: false },
                    { text: "Marte", correct: false },
                    { text: "Mercúrio", correct: true },
                ],
            },

            {
                number_question: 2,
                question: "Qual é o maior mamífero do mundo?",

                answers: [
                    { text: "Elefante", correct: false },
                    { text: "Baleia Azul", correct: true },
                    { text: "Hipopótamo", correct: false },
                    { text: "Rinoceronte", correct: false },
                ],
            },

            {
                number_question: 3,
                question: "Qual é a unidade básica da vida?",

                answers: [
                    { text: "Átomo", correct: false },
                    { text: "Célula", correct: true },
                    { text: "Molécula", correct: false },
                    { text: "Órgão", correct: false },
                ],
            },

            {
                number_question: 4,
                question: "Qual é o processo pelo qual as plantas fazem seu próprio alimento?",

                answers: [
                    { text: "Respiração", correct: false },
                    { text: "Fotossíntese", correct: true },
                    { text: "Fermentação", correct: false },
                    { text: "Germinação", correct: false },
                ],
            },

            {
                number_question: 5,
                question: "Quantos planetas compõem o Sistema Solar?",

                answers: [
                    { text: "7", correct: false },
                    { text: "8", correct: true },
                    { text: "9", correct: false },
                    { text: "10", correct: false },
                ],
            },

            {
                number_question: 6,
                question: "Qual é a camada mais externa da Terra?",

                answers: [
                    { text: "Manto", correct: false },
                    { text: "Núcleo", correct: false },
                    { text: "Crosta", correct: true },
                    { text: "Litosfera", correct: false },
                ],
            },

            {
                number_question: 7,
                question: "O que é a fotossíntese?",

                answers: [
                    { text: "O processo de digestão nos animais", correct: false },
                    { text: "O processo de respiração das plantas", correct: false },
                    { text: "O processo pelo qual as plantas produzem seu alimento", correct: true, },
                    { text: "O processo de decomposição de matéria orgânica", correct: false },
                ],
            },

            {
                number_question: 8,
                question: "Qual é o metal mais leve?",

                answers: [
                    { text: "Ouro", correct: false },
                    { text: "Chumbo", correct: false },
                    { text: "Alumínio", correct: false },
                    { text: "Lítio", correct: true },
                ],
            },

            {
                number_question: 9,
                question: "Qual gás é essencial para a respiração humana?",

                answers: [
                    { text: "Dióxido de carbono", correct: false },
                    { text: "Nitrogênio", correct: false },
                    { text: "Oxigênio", correct: true },
                    { text: "Hidrogênio", correct: false },
                ],
            },

            {
                number_question: 10,
                question: "O que é a força da gravidade?",

                answers: [
                    { text: "A força que nos empurra para cima", correct: false },
                    { text: "A força que atrai os objetos para o centro da Terra", correct: true },
                    { text: "A força que repele os objetos", correct: false },
                    { text: "A força que move os continentes", correct: false },
                ],
            },
        ],
    },

    {
        materia: "ingles",
        questions: [
            {
                number_question: 1,
                question: "How do you say 'amigo' in English?",

                answers: [
                    { text: "Amigo", correct: false },
                    { text: "Friend", correct: true },
                    { text: "Buddy", correct: false },
                    { text: "Pal", correct: false },
                ],
            },

            {
                number_question: 2,
                question: "What is the plural of 'child'?",

                answers: [
                    { text: "Childs", correct: false },
                    { text: "Children", correct: true },
                    { text: "Childrens", correct: false },
                    { text: "Childes", correct: false },
                ],
            },

            {
                number_question: 3,
                question: "What is the past tense of 'go'?",

                answers: [
                    { text: "Goed", correct: false },
                    { text: "Went", correct: true },
                    { text: "Goes", correct: false },
                    { text: "Going", correct: false },
                ],
            },

            {
                number_question: 4,
                question: "Which of these is a synonym for 'happy'?",

                answers: [
                    { text: "Sad", correct: false },
                    { text: "Angry", correct: false },
                    { text: "Joyful", correct: true },
                    { text: "Hungry", correct: false },
                ],
            },

            {
                number_question: 5,
                question: "What is the opposite of 'big'?",

                answers: [
                    { text: "Large", correct: false },
                    { text: "Small", correct: true },
                    { text: "Huge", correct: false },
                    { text: "Tall", correct: false },
                ],
            },

            {
                number_question: 6,
                question: "What is the opposite of 'hot'?",
                answers: [
                    { text: "Cold", correct: true },
                    { text: "Warm", correct: false },
                    { text: "Cool", correct: false },
                    { text: "Boiling", correct: false },
                ],
            },

            {
                number_question: 7,
                question: "How do you say 'livro' in English?",

                answers: [
                    { text: "Library", correct: false },
                    { text: "Book", correct: true },
                    { text: "Page", correct: false },
                    { text: "Reading", correct: false },
                ],
            },

            {
                number_question: 8,
                question: "What is the English word for 'cachorro'?",

                answers: [
                    { text: "Dog", correct: true },
                    { text: "Cat", correct: false },
                    { text: "Bird", correct: false },
                    { text: "Fish", correct: false },
                ],
            },

            {
                number_question: 9,
                question: "What is the past tense of 'eat'?",

                answers: [
                    { text: "Ate", correct: true },
                    { text: "Eaten", correct: false },
                    { text: "Eat", correct: false },
                    { text: "Eats", correct: false },
                ],
            },

            {
                number_question: 10,
                question: "What is the English word for 'maçã'?",

                answers: [
                    { text: "Banana", correct: false },
                    { text: "Orange", correct: false },
                    { text: "Apple", correct: true },
                    { text: "Grape", correct: false },
                ],
            },
        ],
    },

    {
        materia: "arte",
        questions: [
            {
                number_question: 1,
                question: "Quem pintou a Mona Lisa?",

                answers: [
                    { text: "Vincent van Gogh", correct: false },
                    { text: "Pablo Picasso", correct: false },
                    { text: "Leonardo da Vinci", correct: true },
                    { text: "Claude Monet", correct: false },
                ],
            },

            {
                number_question: 2,
                question: "Qual movimento artístico é conhecido por pinturas de pontos de luz?",

                answers: [
                    { text: "Cubismo", correct: false },
                    { text: "Surrealismo", correct: false },
                    { text: "Impressionismo", correct: true },
                    { text: "Realismo", correct: false },
                ],
            },

            {
                number_question: 3,
                question: "Que tipo de arte é a escultura?",

                answers: [
                    { text: "Arte visual", correct: true },
                    { text: "Arte sonora", correct: false },
                    { text: "Arte literária", correct: false },
                    { text: "Arte performática", correct: false },
                ],
            },

            {
                number_question: 4,
                question: "Qual é o nome do famoso museu em Paris?",

                answers: [
                    { text: "Museu do Prado", correct: false },
                    { text: "Museu Britânico", correct: false },
                    { text: "Metropolitan Museum of Art", correct: false },
                    { text: "Museu do Louvre", correct: true },
                ],
            },

            {
                number_question: 5,
                question: "Qual cor resulta da mistura de azul e amarelo?",

                answers: [
                    { text: "Verde", correct: true },
                    { text: "Roxo", correct: false },
                    { text: "Laranja", correct: false },
                    { text: "Marrom", correct: false },
                ],
            },

            {
                number_question: 6,
                question: "Qual é a técnica de pintura que utiliza aquarelas?",

                answers: [
                    { text: "Óleo", correct: false },
                    { text: "Acrílico", correct: false },
                    { text: "Aquarela", correct: true },
                    { text: "Guache", correct: false },
                ],
            },

            {
                number_question: 7,
                question: "Quem pintou o teto da Capela Sistina?",

                answers: [
                    { text: "Leonardo da Vinci", correct: false },
                    { text: "Raphael", correct: false },
                    { text: "Michelangelo", correct: true },
                    { text: "Donatello", correct: false },
                ],
            },

            {
                number_question: 8,
                question:
                    "Qual estilo artístico é conhecido por seu foco em formas geométricas e cubos?",

                answers: [
                    { text: "Futurismo", correct: false },
                    { text: "Expressionismo", correct: false },
                    { text: "Cubismo", correct: true },
                    { text: "Barroco", correct: false },
                ],
            },

            {
                number_question: 9,
                question: "Qual famoso escultor italiano criou a estátua de David?",

                answers: [
                    { text: "Michelangelo", correct: true },
                    { text: "Gian Lorenzo Bernini", correct: false },
                    { text: "Donatello", correct: false },
                    { text: "Antonio Canova", correct: false },
                ],
            },

            {
                number_question: 10,
                question:
                    "Qual artista é conhecido por suas obras de arte surrealistas, como 'A Persistência da Memória'?",

                answers: [
                    { text: "Salvador Dalí", correct: true },
                    { text: "Pablo Picasso", correct: false },
                    { text: "Frida Kahlo", correct: false },
                    { text: "René Magritte", correct: false },
                ],
            },
        ],
    },

    {
        materia: "educacao_finaceira",
        questions: [
            {
                number_question: 1,
                question: "Qual é a definição de orçamento?",

                answers: [
                    { text: "Gastar todo o dinheiro", correct: false },
                    { text: "Investir em ações", correct: false },
                    { text: "Planejar receitas e despesas", correct: true },
                    { text: "Guardar dinheiro em casa", correct: false },
                ],
            },

            {
                number_question: 2,
                question: "Qual é a importância de economizar dinheiro?",

                answers: [
                    { text: "Para gastar tudo de uma vez", correct: false },
                    { text: "Para ter recursos em emergências", correct: true },
                    { text: "Para pedir empréstimos", correct: false },
                    { text: "Para acumular dívidas", correct: false },
                ],
            },

            {
                number_question: 3,
                question: "O que é uma conta de poupança?",

                answers: [
                    { text: "Um tipo de empréstimo", correct: false },
                    { text: "Uma conta para depositar e retirar dinheiro", correct: true },
                    { text: "Uma forma de investimento em ações", correct: false },
                    { text: "Um tipo de cartão de crédito", correct: false },
                ],
            },
            {
                number_question: 4,
                question: "O que significa 'juros' em finanças?",
                answers: [
                    { text: "O valor emprestado de um banco", correct: false },
                    { text: "O ganho adicional sobre um investimento", correct: true },
                    { text: "O custo de um produto", correct: false },
                    { text: "O valor dos impostos", correct: false },
                ],
            },

            {
                number_question: 5,
                question: "Por que é importante ter uma reserva de emergência?",

                answers: [
                    { text: "Para fazer compras por impulso", correct: false },
                    { text: "Para garantir estabilidade em situações imprevistas", correct: true },
                    { text: "Para investir em ações arriscadas", correct: false },
                    { text: "Para pagar impostos", correct: false },
                ],
            },

            {
                number_question: 6,
                question: "O que é um investimento?",

                answers: [
                    { text: "Gastar dinheiro em produtos desnecessários", correct: false },
                    { text: "Aplicar dinheiro para obter retorno no futuro", correct: true },
                    { text: "Guardar dinheiro em casa", correct: false },
                    { text: "Pedir dinheiro emprestado", correct: false },
                ],
            },

            {
                number_question: 7,
                question: "Qual é a função de um planejamento financeiro?",

                answers: [
                    { text: "Comprar mais do que se pode pagar", correct: false },
                    { text: "Organizar receitas e despesas para alcançar metas", correct: true },
                    { text: "Usar todo o dinheiro disponível", correct: false },
                    { text: "Pagar todas as dívidas imediatamente", correct: false },
                ],
            },

            {
                number_question: 8,
                question: "O que é um débito?",

                answers: [
                    { text: "Um valor que se deve pagar", correct: true },
                    { text: "Um valor que se deve receber", correct: false },
                    { text: "Um tipo de investimento", correct: false },
                    { text: "Uma conta poupança", correct: false },
                ],
            },

            {
                number_question: 9,
                question: "Qual é a diferença entre uma despesa fixa e uma despesa variável?",
                answers: [
                    { text: "Despesas fixas são imprevisíveis e despesas variáveis são regulares", correct: false, },
                    { text: "Despesas fixas são regulares e despesas variáveis mudam com o tempo", correct: true, },
                    { text: "Despesas fixas são para investimentos e despesas variáveis são para compras", correct: false, },
                    { text: "Despesas fixas são para lazer e despesas variáveis são para emergências", correct: false, },
                ],
            },

            {
                number_question: 10,
                question: "O que é um orçamento pessoal?",

                answers: [
                    { text: "Um plano para gastar sem controle", correct: false },
                    { text: "Um documento para controlar receitas e despesas", correct: true },
                    { text: "Um tipo de investimento a longo prazo", correct: false },
                    { text: "Uma forma de emprestar dinheiro", correct: false },
                ],
            },
        ],
    },
];

export { array_questions };