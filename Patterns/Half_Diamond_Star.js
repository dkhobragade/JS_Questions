// Half_Diamond_Star


let n=4
let j=n

for(let i =1;i<2*n;i++){
    if(i<n){
        console.log("*".repeat(i))
    }
    else{
        console.log("*".repeat(j))
        j-=1
    }
}