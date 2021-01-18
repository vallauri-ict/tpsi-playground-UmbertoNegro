"use strict";
let txtUtenti=1;
let sliderUtenti;

let dati;
let outputGenerati;
let cont=1;
window.onload = function () {

    outputGenerati=document.getElementsByClassName("generati");
};
function generaUtenti() {
    let numUsers=txtUtenti.value;
    let finalUrl="https://randomuser.me/api";
    console.log(finalUrl);
    $.ajax({
        url:finalUrl,
        dataType: 'json',
        success:function (usersData) {
            cont=1;
            console.log(usersData);
            dati=usersData.results;
            caricaDati(0,dati);
        }
    })

}

function caricaDati(){
    let indice=cont-1;
    pulisciDati();
    outputGenerati[0].src=dati[indice].picture.thumbnail;
    outputGenerati[1].innerText+=" "+ dati[indice].name.first;
    outputGenerati[2].innerText+=" "+dati[indice].name.last;
    outputGenerati[3].innerText+=" "+ dati[indice].gender;
    outputGenerati[4].innerText+=" "+ dati[indice].nat;
    outputGenerati[5].innerText+=" "+dati[indice].email;
    outputGenerati[6].innerText+=" "+dati[indice].login.password;
}
function pulisciDati() {
    for (let i = 0; i < outputGenerati.length; i++) {
        outputGenerati[i].innerText = outputGenerati[i].id + ": ";
    }
}
