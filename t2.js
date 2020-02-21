function factoriall(e){
    var e,res=1,fac=1,r=1;
    
    for(var i=1;i<=e;i++){

        fac*=i;
        r+=(1/fac);
    
    }
    return r;
    }
    console.log(factoriall(3));