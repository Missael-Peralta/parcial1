let myFigures = new Array();

const b1=document.getElementById("btnTriangulo");
b1.addEventListener('click', () => {
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;

    base=parseInt(base);
    altura=parseInt(altura);
    let altura=parseInt(document.getElementById("altura").value);
    let rect1=new Triangulo (base,altura);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Triangulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
    divRes.innerHTML+="<p>con un area de " + rect1.area() + "</p>";
});
 
const b2=document.getElementById("brnRectangulo");
b2.addEventListener('click', () => {
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;

    base=parseInt(base);
    altura=parseInt(altura);
    let altura=parseInt(document.getElementById("altura").value);
    let rect1=new Rectangulo (base,altura);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Rectangulo con base " + rect1.base + " y altura " + rect1.altura + "</p>";
    divRes.innerHTML+="<p>con un area de " + rect1.area() + "</p>";
});
 
const b3=document.getElementById("btnCuadrado");
b3.addEventListener('click', () => {
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;

    base=parseInt(base);
    altura=parseInt(altura);
    let altura=parseInt(document.getElementById("altura").value);
    let rect1=new Cuadrado (base,altura);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>Cuadrado con base " + rect1.base + " y altura " + rect1.altura + "</p>";
    divRes.innerHTML+="<p>con un area de " + rect1.area() + "</p>";
});






