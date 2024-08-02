// Prime number

let n=15
let isPrime=0
for (let i=2;i<n;i++){
    if(n%i===0){
        isPrime=1
        break
    }
}
if (isPrime===1){
    console.log("Not a Prime")
}
else{
    console.log("Prime")
}