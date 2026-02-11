// Fazer um Quiz com 10 questões (anatomia humana);
// Pegar nome do usuário;
// Dar boas vindas;
// No final mostrar notas (depois de um temporizador de 10 segundos...) 
// Se acertou 9 ou 10, dar os parabéns.
// Se acertou 6 a 8, muito bom! Continue assim.
// Se acertou 3 a 5, muito bom! Continue melhorando.
// Se acertou 0 a 2, continue praticando.
// mostrar resultado.
//DATA: 10/02/2026 -- Pablo Leite de Lima.


const readline = require('readline')// variável para acesso
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let pontuacao = 0

teclado.question('Qual é seu nome: ', (nome) => {
    if (nome != null) {
        let nomeUsuario = nome
    }
    console.log('\n\n')
    console.log('Seja Bem-Vindo(a): ', nome)
    console.log('Vamos Jogar um Quiz de Anatomia Humana')
    console.log('\n')

    teclado.question('1 - Quantos ossos tem no corpo humano adulto: \n (a) 500 \n (b) 428 \n (c) 206 \n ->', (resposta1) => {
        if (resposta1 == 'c') {
            pontuacao++
        }

        teclado.question('2 - Qual o único orgão que não possue vasos sanquíneos: \n (a) Dentes \n (b) Cornea (Olho) \n (c) Pancreas \n ->', (resposta2) => {
            if (resposta2 == 'b') {
                pontuacao++
            }

            teclado.question('3 - Qual o único orgão que pode se regenerar: \n (a) Baço \n (b) Pancrea \n (c) Fígado \n -> ', (resposta3) => {
                if (resposta3 == 'c') {
                    pontuacao++
                }

                teclado.question('4 - Qual maior órgão do corpo humano: \n (a)Figado \n (b) Intestino Delgado \n (c) Pele \n ->', (resposta4) => {
                    if (resposta4 == 'c') {
                        pontuacao++
                    }

                    teclado.question('5 - Quantos dentes tem um adulto: \n (a) 32 dentes \n (b) 36 dentes \n (c) 30 dentes \n ->', (resposta5) => {
                        if (resposta5 == 'a') {
                            pontuacao++
                        }

                        teclado.question('6 - Qual parte do corpo humano é responsável pelo equilíbrio: \n (a) Cerebelo e ouvido \n (b) Os dedos dos pés \n (c) A coluna vertebral \n -> ', (resposta6) => {
                            if (resposta6 == 'a') {
                                pontuacao++
                            }

                            teclado.question('7 - Qual o órgao/estrutura considerado segundo coração: \n (a) Cérebro \n (b) Fígado \n (c) Panturrilha \n ->', (resposta7) => {
                                if (resposta7 == 'c') {
                                    pontuacao++
                                }

                                teclado.question('8 - Qual o órgão considerado o segundo Cérebro: \n (a) Cabeça \n (b) Intestino \n (c) Fígado \n -> ', (resposta8) => {
                                    if (resposta8 == 'b') {
                                        pontuacao++
                                    }

                                    teclado.question('9 - Qual menor osso do corpo humano: \n (a) Falange distal (ponta do dedo mindinho) \n (b) Estribo (dentro do ouvido médio) \n (c) Nasal (na ponta do nariz) \n -> ', (resposta9) => {
                                        if (resposta9 == 'b') {
                                            pontuacao++
                                        }

                                        teclado.question('10 - O fêmur: \n (a) É o osso mais longo do corpo, mas também um dos mais frágeis por ser oco \n (b) É o único osso do corpo que não possui medula óssea no seu interior \n (c) É o osso mais longo e mais forte do corpo, capaz de suportar até 30 vezes o peso de um adulto \n -> ', (resposta10) => {
                                            if (resposta10 == 'c') {
                                                pontuacao++
                                            }

                                            // ****** JOGAR DENTRO DE TODAS FUNÇÕES.********
                                            console.log('\n\nAGUARDE\n\n')
                                            let contador = 11
                                            const id = setInterval(() => { // crio uma arrow function
                                                contador-- //para ir decrementando até chegar no valor para o if
                                                console.log('Calculando Pontuação...', contador) // mostrando os resultados
                                                if (contador == 0) {
                                                    //Calcular pontuação.
                                                    console.log('\n\n***************************************************')
                                                    console.log('Obrigado pela participação, ', nome, '.')
                                                    if (pontuacao >= 9) {
                                                        console.log('Voçe conseguiu: ', pontuacao, 'acertos.')
                                                        console.log('Parabéns, voçe esté muito bem nos estudos!!!')
                                                    } else if (pontuacao >= 6 && pontuacao < 9) {
                                                        console.log('Voçe conseguiu: ', pontuacao, 'acertos.')
                                                        console.log('Muito bom, continue assim.')
                                                    } else if (pontuacao >= 3 && pontuacao < 6) {
                                                        console.log('Voçe conseguiu: ', pontuacao, 'acertos.')
                                                        console.log('Foi bom, porém precisa melhorar.')
                                                    } else if (pontuacao >= 0 && pontuacao < 3) {
                                                        console.log('Voçe conseguiu: ', pontuacao, 'acertos.')
                                                        console.log('Precisando voltar para os estudos.')
                                                    }
                                                    console.log("***************************************************\n\n")

                                                    teclado.close()// fechando o 'objeto' teclado.
                                                    clearInterval(id)// Quando chegar ele para o setInterval
                                                }
                                            }, 1000)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
