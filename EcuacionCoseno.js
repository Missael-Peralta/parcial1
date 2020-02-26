function  coseno(x) {
    resultado=1,factor=1,num=1,z=1,x;

    for(i=1;i<=100;i++){
        factor*=z*(z+1);
        num*=(x*x);
        resultado+=(-num/factor);
        num*=-1;
        z+=2;
    }
    return resultado;
    }
    console.log("Valor de coseno es igual a:"+coseno(1));

    function seno(x) {
        resultado=x,num=x,factor=1,z=1,x;

    for(i=1;i<=100;i++){
        factor*=(z+1)*(z+2);
        num*=(x*x);
        resultado+=(-num/factor);
        num*=-1;
        z+=2;
    }
    return resultado;
        
    }

    console.log("Valor de seno es igual a:"+seno(2));

    function inn(x) {
        factor=1,resultado=0;
        for( var i=1;i<=100;i++){
            factor*=((x-1)/x);
            resultado+=(1/i)*factor;


        }
        return resultado;
        
    }
    
    console.log("Valor de in es igual a:"+inn(2));
