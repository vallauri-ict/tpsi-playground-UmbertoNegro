"use strict";
let buttons=[];
let nButtons=36;
let firstButton;
let secondButton;
let contCoppie=0;
let tent=0;
let widthButton=40;
let heightButton=50;
let buttonsPerRiga=6;
window.onload = function ()
{
    firstButton=document.createElement("input");
    firstButton.type="button";
    firstButton.value=-1;
    secondButton=document.createElement("input");
    secondButton.type="button";
    secondButton.value=-1;

    let wrapper=document.getElementById("wrapper");
    let wrapperWidth=widthButton*buttonsPerRiga;
    wrapper.style="width:"+wrapperWidth+"px;background-color:cyan;position:relative;left:40%;padding: 5px;";
    for(let i=1;i<=(nButtons/2);i++)
    {
        for(let j=1;j<=2;j++)
        {
            let position=0;
            do{
                position=random(0,nButtons)
            }while(buttons[position]!==undefined);
             buttons[position]=i;
        }

    }
    for(let i=0;i<nButtons;i++){
        let button= document.createElement("input");
        button.type="button";
        button.value=buttons[i];
       setButtonStyle(button,"gray","gray",widthButton,heightButton);
        button.setAttribute("onclick","clickButton(this)");
        wrapper.appendChild(button);
        if((i+1)%buttonsPerRiga==0){
            let br=document.createElement("br");
            wrapper.appendChild(br);
        }


    }


}
function random(min,max)
{
    return Math.floor(Math.random()*(max-min))+min;
}
function clickButton(button) {
    console.log(button.value);
    if(firstButton.value==-1){
        firstButton=button;
        setButtonStyle(button,"cyan","gray",widthButton,heightButton);
    }
    else if(button!=firstButton&&secondButton.value==-1){
        tent++;
        secondButton=button;
        setButtonStyle(button,"cyan","gray",widthButton,heightButton);
        window.setTimeout(controllo, 500);

    }
}
function setButtonStyle(button,backgroundcolor,color,width,height) {
    if(backgroundcolor!="gray")
        button.style="width:"+width+"px;"+"height:"+height+"px;color:"+color+";background-color:"+backgroundcolor+";";
    else
        button.style="width:"+width+"px;"+"height:"+height+"px;color:rgb(127,127,127);background-color:rgb(127,127,127);";
}
function controllo() {
    if(firstButton.value==secondButton.value){
        setButtonStyle(firstButton,"red","white",widthButton,heightButton);
        setButtonStyle(secondButton,"red","white",widthButton,heightButton);
        firstButton.disabled=true;
        secondButton.disabled=true;
        contCoppie++;
        if(contCoppie==(nButtons/2)){
            alert("hai vinto! hai fatto "+tent+" tentativi.");
        }
    }else{
        setButtonStyle(firstButton,"gray","gray",widthButton,heightButton);
        setButtonStyle(secondButton,"gray","gray",widthButton,heightButton);
    }
    firstButton=document.createElement("input");
    firstButton.type="button";
    firstButton.value=-1;
    secondButton=document.createElement("input");
    secondButton.type="button";
    secondButton.value=-1;
}