const input = await Deno.readTextFile('input.txt');

const lines = input.split('\n');
console.log(lines);

function getPriority(item) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return alphabet.indexOf(item) + 1
}

let allPriorities = []

for (const sack of lines) {
    const size = sack.length;
    const part1: String = sack.slice(0, size / 2)
    const part2: String = sack.slice(size / 2, size)

    const commonItem = part1.split("").filter((char) => part2.includes(char)).join("");

    console.log(commonItem[0]);
    console.log(`priority: ${getPriority(commonItem)}`);
    allPriorities.push(getPriority(commonItem[0]));
}


console.log(`total: ${allPriorities.reduce((sum, a) => sum + a, 0)}`)