// Inverted_Half_Diamond_Star


let n=4
let j=n
let k=n
let o=1

for(let i =1;i<2*n;i++){
    if(j>0){
        console.log(" ".repeat(j-1),"*".repeat(i))
        j-=1
    }
    else{
        console.log(" ".repeat(o),"*".repeat(k-1))
        o+=1
        k-=1
    }
}