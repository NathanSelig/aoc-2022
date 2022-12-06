
const input = await Deno.readTextFile('input.txt');

const lines = input.split('\n');

const getPriority = (item) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return alphabet.indexOf(item) + 1
}

const getEvleGroups = (lines) => {
    let result = [];
    for (let i = 0; i < lines.length; i += 3) result.push(lines.slice(i, i + 3));

    console.log(result)
    return result;
}

let allPriorities = []
const elveGroups = getEvleGroups(lines)
for (const group of elveGroups) {
    const evle1 = group[0]
    const evle2 = group[1]
    const evle3 = group[2]


    //find shared char between three three strings

    const commonItemPart = evle1.split("").filter((char) => evle2.includes(char)).join("");
    const commonItem = commonItemPart.split("").filter((char) => evle3.includes(char)).join("");



    console.log(commonItem[0]);
    console.log(`priority: ${getPriority(commonItem)}`);
    allPriorities.push(getPriority(commonItem[0]));
}


console.log(`total: ${allPriorities.reduce((sum, a) => sum + a, 0)}`)