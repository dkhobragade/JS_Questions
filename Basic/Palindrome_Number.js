// Palindrome_Number



let i=1234
let r=0

while(i>0){
    let mod = i%10
    r = (r*10) + mod
    i=Math.floor(i/10)
}
if(i===r){
    console.log("Palindrome number")
}
else{
    console.log("Not a Palindrome number")
}