// Reverse a Number



let n=15
let sum = 0
while(n>0){
    let mod = n%10
    sum = (sum*10) + mod
    n = Math.floor(n/10)
}
console.log(sum)