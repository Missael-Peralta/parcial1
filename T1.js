function factoriall(e){
    var e,res=1,fac=1,r=1,exp=e;
    
    for(var i=1;i<=e;i++){
        
        fac*=i;
        r+=(exp/fac);
        exp*=e;
    
    }
    return r;
    }
    console.log(factoriall(2));