const input = await Deno.readTextFile('input.txt');

const lines = input.split('\n');

/*
18-20,19-21
9-86,9-87
7-8,8-18
82-98,98-99
17-17,17-77
13-21,20-79
46-52,45-46
34-54,37-53
4-91,3-5
9-80,5-83
66-83,67-83
*/

//In how many assignment pairs does one range fully contain the other?
const evleExpand = (evle) => {
    const startFinish = evle.split('-')
    let zones = []
    for (let i = startFinish[0] - 1; i <= startFinish[1]; i++) {
        zones.push(i)
    }
    console.log(zones)
    return zones
}

let sum = 0
for (const line of lines) {
    const evles = line.split(',')
    const evle1 = evleExpand(evles[0])
    const evle2 = evleExpand(evles[1])

    //check if all elements of one are in the other 
    if (evle1.find((zone) => evle2.includes(zone))) {
        sum++;
    }

}

console.log(sum)