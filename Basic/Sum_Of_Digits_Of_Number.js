// Sum_Of_Digits_Of_Number


let n=15
let sum =0
while(n!==0){
    let mod = n%10
    sum = sum+mod
    n = Math.floor(n/10)
}
console.log(sum)