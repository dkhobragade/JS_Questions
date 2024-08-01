// Inverted Pyramid Star

let n=5
let i=5
while (n>1){
    console.log(" ".repeat(n),"*".repeat(i)," ".repeat(n))
    n=n+1
    i=i-2
}