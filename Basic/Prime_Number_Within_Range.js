// Prime number within a given range



let n=15
let a =[]
for(let i =2;i<n;i++){
    let c=0
    for(let j=2;j<n;j++){
        if(i%j===0){
            c+=1
        }
    }
    if(c===1){
        a.push(i)
    }
}
console.log(a)