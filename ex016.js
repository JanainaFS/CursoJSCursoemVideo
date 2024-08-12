let num = [5,7,9,1,3,0]

// num.sort()
// console.log(num)
// console.log(num.length)
// console.log(`O primeiro valor é ${num[0]}`)

/* for(let i=0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
} */

for(let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}