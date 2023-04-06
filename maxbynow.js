let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let a =[];
let max = Number.MIN_SAFE_INTEGER;

for(let i=0; i<n; i++){
    let num = parseInt(readLine())
    a.push(num)
    if (num>max){
        max= num;
    }
}
// console.log(a)
console.log(max)