function verificarDatos(){
    let prueba = document.getElementById("expresion").value;
    let caracteresValidos =/[^a-z .,:;?¡!0-9]/;
    let aviso = document.getElementById("resultado");
   
    let bandera = caracteresValidos.test(prueba);
    if (bandera) {
        console.log(bandera);
        aviso.value="Ha ingresado caracteres no validos, ingrese nuevamente el mensaje";
       
    }else{
       aviso.value=""; 
       return prueba; 
       
    }
}

function encriptarDatos(){
    let prueba = verificarDatos();
    let texto=document.getElementById("encriptar");
    let aux="";
    /*Lo que sigue no es válido pues encripta lo encriptado, ej al reemplazar
     la a por ai luego se reemplaza esa i por imes y no sirve
        prueba=prueba.replace(/a/g,"ai");
        prueba=prueba.replace(/e/g,"enter");
        prueba=prueba.replace(/i/g,"imes");
        prueba=prueba.replace(/o/g,"ober");
        prueba=prueba.replace(/u/g,"ufat");
        console.log(prueba);
        texto.value=prueba;*/
    for (let i = 0; i < prueba.length; i++) {
        switch (prueba.substring(i,i+1)) {
            case "a":
                aux=aux + "ai";
                break;
            case "e":
                aux=aux + "enter";
                break;
            case "i":
                aux=aux + "imes";
                break; 
            case "o":
                aux=aux + "ober";
                break; 
            case "u":
                aux=aux + "ufat";
                break;      
            default:
                aux=aux+prueba.substring(i,i+1)
                break;
        }
        
    }
    texto.value=aux;

}

function desencriptarDatos(){
    let prueba = verificarDatos();
    let texto=document.getElementById("encriptar");
        
        prueba=prueba.replace(/ai/g,"a");
        prueba=prueba.replace(/enter/g,"e");
        prueba=prueba.replace(/imes/g,"i");
        prueba=prueba.replace(/ober/g,"o");
        prueba=prueba.replace(/ufat/g,"u");
        console.log(prueba);
        texto.value=prueba;
        
}