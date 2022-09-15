function ASC(String){
    return String.charCodeAt(0);
}

function CHAR(Ascii){
    return String.fromCharCode(Ascii);
}

////////////////////
let chave = "%0#h8u1-qa^s`&i,f%3!g-@d7<q]m&/a[)uew3nc@1qm~vf~)i5~~$nh&zee&?7";
function Cript(){
    var dados = document.getElementById("0").value;
    let texto = "";
    let len;
    let p = 0;
    let i;

    console.log(dados);
    console.log(texto);
    console.log(len);
    console.log(p);
    console.log(i);

    for(i = 0; i < dados.length; i++){
        p++;
        len = (ASC(dados.substr(i,1)) + (ASC(chave.substr(p,1))));

        if (p == 50){
            p = 1;
        }
        if(len > 255){
            len -= 256;
        }
        texto += (CHAR(len));
    }
    document.getElementById("1").value = texto;
}


function Descript(){
    let dados = document.getElementById("1").value;
    let texto = "";
    let len;
    let p = 0;
    let i;


    for(i = 0; i < dados.length; i++){
        p++;
        len = (ASC(dados.substr(i,1)) - (ASC(chave.substr(p,1))));

        if (p == 50){
            p = 1;
        }
        if(len < 0){
            len += 256;
        }
        texto += (CHAR(len));
    }
    document.getElementById("2").value = texto;
}

function LimparTudo(){
    for (let i = 0; i < 3; i++) {
        document.getElementById(i).value = "";
    }
}