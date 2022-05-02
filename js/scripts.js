function encriptar() {
	var texttoencrypt = document.getElementById("tbencrypt").value;
	if (validatecharacters(texttoencrypt) == true) {
		var textencripted = texttoencrypt.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat"); //<-Reemplazando las letras originales por las frases encriptadas
	}else {
        textencripted = "Usa solo letras minúsculas y sin acentos, ni caracteres especiales ";
    }
	document.getElementById("tbdecrypt").value = textencripted;
}

function desencriptar() {
	var texttodecrypt = document.getElementById("tbdecrypt").value;
	if (validatecharacters(texttodecrypt) == true) {
			var textdecrypted = texttodecrypt.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u"); //<-Reemplazando las letras ecnriptadas por la letra original
			console.log(textdecrypted);
		}else {
			textdecrypted = "Usa solo letras minúsculas y sin acentos, ni caracteres especiales ";
		}
	document.getElementById("tbencrypt").value = textdecrypted;
}

function copiartexto(){
	copy();
}

function validatecharacters (texttovalidate) {
    var allowed = "abcdefghijklmnñopqrstuvwxyz "; //<--criterios de aceptación de la cadena de caracteres.
    for (var i = 0; i < texttovalidate.length; i++) {

        var validcharacter = false;
        for (var j = 0; j < allowed.length; j++) {
            if (texttovalidate[i] == allowed[j]) {
                validcharacter = true;
                break;
            }
        }
        if (validcharacter == false) {
            return false;
        } 
    }
    return true;
} 

function copy () {
    var text1 = document.getElementById("tbencrypt").value;
    var text2 = document.getElementById("tbdecrypt").value;
	var copied = ("Encripted: " + text1 + "    Decrypted: " + text2);
    navigator.clipboard.writeText(copied);
    alert("Texto copiado");
}

