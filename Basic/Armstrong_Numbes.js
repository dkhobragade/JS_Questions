// Armstrong number


let i=153
let r=0
let l = String(i).length

while(i>0){
    let m = i%10
    r = r + m**l
    i=Math.floor(i/10)
}
if(i===r){
    console.log("Armstrong number")
}
else{
    console.log("Not a Armstrong number")
}