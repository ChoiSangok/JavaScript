const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const read = readline.createInterface({ input, output });

read.question("선택? ",  (answer) => {

    let test = [
        { "id": "1", "레벨값": "1010", "위치": "A" },
        { "id": "2", "레벨값": "1009", "위치": "B" },
        { "id": "3", "레벨값": "1020", "위치": "C" },
        { "id": "4", "레벨값": "1030", "위치": "D" },
        { "id": "5", "레벨값": "1040", "위치": "E" }
    ]

    let res = test.filter(num => num.id.includes(answer))
    console.log(res[0])
    read.close()
});