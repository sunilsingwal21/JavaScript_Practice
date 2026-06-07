//Common Multiple of 2 and 5 up to 100 but print between first 3 and last 3 common multiples

let n=0
for(let i=1;i<=100;i++){
    if(i%2==0 && i%5==0){     //condition applied to find common multiple of 2 and 5
        n++
    }
}

        let m=0
        for(let i=1;i<=100;i++){
            if(i%2==0 && i%5==0){
                m++

              if(m>3 && m<=n-3)       //condition applied to find common multiples between first 3 and last 3 common multiples
                {
                    console.log(i)   //print between first 3 and last 3 common multiples
                }
            }
        }