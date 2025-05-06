/**
 * # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */


let vitoriasJogador = 97
let derrotasJogador = 15

function calcularPartidasRankeadas(nVitoras, nDerrotas){
    let saldoVitorias = nVitoras - nDerrotas
    return [saldoVitorias, calculaRank(saldoVitorias)]
}

function calculaRank(saldo){
    let limites = [10, 20, 50, 80, 90, 100]
    let niveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']

    for (let i = 0; i <= limites.length; i++){
        if (saldo < limites[i]){
            return niveis[i]
        }
    }
    return niveis[niveis.length - 1]
}

let saldoVitorias = calcularPartidasRankeadas(vitoriasJogador, derrotasJogador)[0]
let nivel = calcularPartidasRankeadas(vitoriasJogador, derrotasJogador)[1]

console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`)