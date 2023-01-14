document.getElementById("copiar").style.dispay = "none";

function encriptar(str){
     let stra = str.replace(/a/g,"@;");
     stra = stra.replace(/e/g,":nt:r");
     stra = stra.replace(/i/g,";m:s");
     stra = stra.replace(/o/g,",b:r");
     stra = stra.replace(/u/g,"#f@t");
     stra = stra.replace(/@/g,"a");
     stra = stra.replace(/:/g,"e");
     stra = stra.replace(/;/g,"i");
     stra = stra.replace(/,/g,"o");
     stra = stra.replace(/#/g,"u");
     return stra;
};

function desencriptar(str){
    let stra = str.replace(/enter/g,"e");
    stra = stra.replace(/imes/g,"i");
    stra = stra.replace(/ai/g,"a");
    stra = stra.replace(/ober/g,"o");
    stra = stra.replace(/ufat/g,"u");
    return stra;
};

document.getElementById("encriptar").onclick = escribirEncriptar;
document.getElementById("desencriptar").onclick = escribirDesencriptar;
document.getElementById("copiar").onclick = copiar;

function escribirEncriptar(){
    var texto = document.getElementById("campoEscribir").value;
    texto = encriptar(texto);
    document.getElementById("campoResultado").value = texto;
    document.getElementById("muneco").style.display = "none";
    document.getElementById("textInfo").style.display = "none";
    document.getElementById("textInfo2").style.display = "none";
    document.getElementById("copiar").style.display = "initial";
};

function escribirDesencriptar(){
    var texto = document.getElementById("campoEscribir").value;
    texto = desencriptar(texto);
    document.getElementById("campoResultado").value = texto;
};

function copiar(){
    var textArea = document.getElementById("campoResultado");
    textArea.select();
    document.execCommand("copy");
}

// lista de ayuda
// @ = a
// : = e
// ; = i
// , = o 
// # = u

