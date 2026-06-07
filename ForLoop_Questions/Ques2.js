//Common Multiple of 2 and 5 up to 100 but print only first 3 commonmultiples

let n=0
for(let i=1;i<=100;i++){
    if(i%2==0 && i%5==0){
        n++
        console.log(i)

    if(n==3)
            break
    }
}