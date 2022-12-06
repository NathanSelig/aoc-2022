const input = await Deno.readTextFile('input.txt');
const moves = input.split('\n')


const moveTranslater = {
    'A': 'Rock', 'B': 'Paper', 'C': 'Scissors',
    'Y': 'Paper', 'X': 'Rock', 'Z': 'Scissors'
};
const RPCValues = { 'Rock': 1, 'Paper': 2, 'Scissors': 3 };
const resultsValues = { 'loss': 0, 'draw': 3, 'win': 6 }

const calScore = (myMove, other) => {
    let resultsPoints = 0
    const moveType = moveTranslater[myMove]

    if (moveTranslater[myMove] === "Rock" && moveTranslater[other] === "Scissors") {
        resultsPoints += resultsValues['win'];
    }
    else if (moveTranslater[myMove] === "Scissors" && moveTranslater[other] === "Paper") {
        resultsPoints += resultsValues['win'];
    }
    else if (moveTranslater[myMove] === "Paper" && moveTranslater[other] === "Rock") {
        resultsPoints += resultsValues['win']
    }
    else if (moveTranslater[myMove] === moveTranslater[other]) {
        resultsPoints += resultsValues['draw'];
    }
    else {
        resultsPoints += resultsValues['loss'];
    }
    const movePoints = RPCValues[moveType];
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