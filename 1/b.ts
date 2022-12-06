
const input = await Deno.readTextFile("./input.txt");
console.log(input);
const lines = input.split("\r\n\r\n");
console.log(lines);
let highest = 0;

let allTotals = [0, 0, 0];

for (const line of lines) {
    const nums = line.split("\r").map((s) => parseInt(s, 10));
    console.log(nums);
    const total = nums.reduce((a, b) => a + b, 0);

    allTotals.push(total);
}

const topThree = allTotals.sort((a, b) => b - a).slice(0, 3)

console.log(topThree);

const sum = topThree.reduce((a, b) => a + b, 0)

console.log("sum", sum);