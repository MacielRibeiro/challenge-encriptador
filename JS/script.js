var btnEncriptar = document.querySelector("#encriptar");
btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var textoEncriptado = encriptarTexto(lerTextoArea());
    escreverTexto(textoEncriptado);
    
});

var btnDesencriptar = document.querySelector("#desencriptar");
btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var textoDesencriptado = desencriptarTexto(lerTextoArea());
    escreverTexto(textoDesencriptado);
});

var btnCopiar = document.querySelector("#copiar");
btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    copiarTexto();
    alert("O texto foi copiado!");
});


function lerTextoArea() {
    var textoLido = document.querySelector("#msg");
    return textoLido.value;
}


function escreverTexto(texto) {
    document.querySelector("#traduzido").value = "";
    document.querySelector("#traduzido").value = texto;
}

function copiarTexto() {
    var conteudo = document.getElementById("traduzido");
    conteudo.select();
    document.execCommand('copy');
}

function encriptarTexto(texto) {
    var textoNormal = texto.split('');
    for (i = 0; i < textoNormal.length; i++) {
        if (textoNormal[i] == "e") {
            textoNormal.splice(i, 1, ("enter"));
        }
        else if (textoNormal[i] == "i") {
            textoNormal.splice(i, 1, ("imes"));
        }
        else if (textoNormal[i] == "a") {
            textoNormal.splice(i, 1, ("ai"));
        }
        else if (textoNormal[i] == "o") {
            textoNormal.splice(i, 1, ("ober"));
        }
        else if (textoNormal[i] == "u") {
            textoNormal.splice(i, 1, ("ufat"));
        }
    }
    return textoNormal.join('');
}

function desencriptarTexto(texto) {
    var texto = texto.split('');
    for (i = 0; i < texto.length; i++) {
        if ((texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] + texto[i + 4]) == "enter") {
            texto.splice(i, 5, ("e"));
        }
        else if ((texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3]) == "imes") {
            texto.splice(i, 4, ("i"));
        }
        else if ((texto[i] + texto[i + 1]) == "ai") {
            texto.splice(i, 2, ("a"));
        }
        else if ((texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3]) == "ober") {
            texto.splice(i, 4, ("o"));
        }
        else if ((texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3]) == "ufat") {
            texto.splice(i, 4, ("u"));
        }
    }
    return texto.join('');
}




