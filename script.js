var entradaTexto = document.querySelector("#input-area-texto");
var saidaTexto = document.querySelector("#output-area-texto");

function criptografar() {
    var texto = entradaTexto.value;

    var resultadoCriptografia = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById("output-area-texto").innerHTML = '<textarea readonly id="input-area-texto">' + resultadoCriptografia + '</textarea>'  
}

function descriptografar() {
    var texto = entradaTexto.value;

    var resultadoDescriptografia = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById("output-area-texto").innerHTML = '<textarea readonly id="input-area-texto">' + resultadoDescriptografia + '</textarea>'
}

function copiar() {
    var textoCopiado = document.getElementById('output-area-texto');
    textoCopiado.select();
    document.execCommand('copy');
    alert("Texto copiado com Sucesso!!!" + textoCopiado.value)
}