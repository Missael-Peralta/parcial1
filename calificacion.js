var x=Math.floor(Math.random()*10)+1;
console.log(x);
if(x<6)
    console.log("La calificacion es F");
else
    if(x<7)
        console.log("La calificacion es D");
    else
    if(x<8)
        console.log("La calificacion es C");
    else
    if(x<9)
        console.log("La calificacion es B");
    else
    if(x<10)
        console.log("La calificacion es A");
    else
        if(x==10)
            console.log("La calificacion es A++");