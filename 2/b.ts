const input = await Deno.readTextFile('input.txt');
const moves = input.split('\n')

//X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"
const moveTranslater = {
    'A': 'Rock', 'B': 'Paper', 'C': 'Scissors',
    'Y': 'draw', 'X': 'loss', 'Z': 'win'
};
const RPCValues = { 'Rock': 1, 'Paper': 2, 'Scissors': 3 };
const resultsValues = { 'loss': 0, 'draw': 3, 'win': 6 }

const calScore = (myMove, other) => {
    let resultsPoints = 0
    let RPC = ''

    if (moveTranslater[myMove] === "win" && moveTranslater[other] === "Scissors") {
        resultsPoints += resultsValues['win'];
        RPC = 'Rock'
    }
    else if (moveTranslater[myMove] === "win" && moveTranslater[other] === "Paper") {
        resultsPoints += resultsValues['win'];
        RPC = 'Scissors'
    }
    else if (moveTranslater[myMove] === "win" && moveTranslater[other] === "Rock") {
        resultsPoints += resultsValues['win']
        RPC = 'Paper'
    }
    else if (moveTranslater[myMove] === 'draw') {
        resultsPoints += resultsValues['draw'];
        RPC = moveTranslater[other]
    }
    else {
        resultsPoints += resultsValues['loss'];
        if (moveTranslater[other] === 'Rock') {
            RPC = 'Scissors'
        } else if (moveTranslater[other] === 'Paper') {
            RPC = 'Rock'
        } else if (moveTranslater[other] === 'Scissors') {
            RPC = 'Paper'
        }
    }
    console.log(RPC)
    console.log('result given ' + moveTranslater[myMove])
    console.log('other move ' + moveTranslater[other])
    const movePoints = RPCValues[RPC];
    const score = resultsPoints + movePoints
    return score
}
const totalScore = []
for (const move: String of moves) {
    const myMove = move.charAt(2)
    const other = move.charAt(0)
    totalScore.push(calScore(myMove, other));
}


console.log(totalScore.reduce((sum, a) => sum + a, 0))