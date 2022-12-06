
const input = await Deno.readTextFile("./input.txt");
console.log(input);
const lines = input.split("\r\n\r\n");
console.log(lines);
let highest = 0;

for (const line of lines) {
  const nums = line.split("\r").map((s) => parseInt(s, 10));
  console.log(nums);
  const total = nums.reduce((a, b) => a + b, 0);

  if (total > highest) {
    highest = total;
  }
}

console.log("highest", highest);