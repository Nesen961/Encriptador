function verificarDatos(){
    let prueba = document.getElementById("textoingresado").value;
    prueba.value="";
    let caracteresValidos =/[^a-z .,:;?¡!0-9]/;
    let aviso = document.getElementById("mensaje1");
    let bandera = caracteresValidos.test(prueba);
    if (bandera) {
        console.log(bandera);
        document.getElementById("admiracion").style.visibility = "visible";
        aviso.value="solo minusculas sin acentos y sin caracteres especiales";
       
    }else{
       document.getElementById("admiracion").style.visibility = "hidden";
       document.getElementById("muñeco").style.visibility="hidden";
       document.getElementById("parrafo1").style.visibility="hidden";
       document.getElementById("parrafo2").style.visibility="hidden";
       document.getElementById("Copiar").style.visibility="visible";
       aviso.value=""; 
       return prueba; 
       
    }
}

function encriptarDatos(){
    let prueba = verificarDatos();
    let texto=document.getElementById("texto-en-desen-criptado");
    let aux="";
   
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
    let texto=document.getElementById("resultado");
        
        prueba=prueba.replace(/ai/g,"a");
        prueba=prueba.replace(/enter/g,"e");
        prueba=prueba.replace(/imes/g,"i");
        prueba=prueba.replace(/ober/g,"o");
        prueba=prueba.replace(/ufat/g,"u");
        console.log(prueba);
        texto.value=prueba;
        
}

function copiarDatos(){

}