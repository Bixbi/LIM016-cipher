import cipher from './cipher.js';

const encryptedMessage = document.getElementById("encryptedMessage");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");

radio1.onclick=handler;
radio2.onclick = handler1;

function handler() {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("root").style.display = "block";
   
}

function handler1() {
   // document.getElementById("pageOne").style.display = "none";
   // document.getElementById("root").style.display = "block";
}


const buttonSend = document.querySelector("#buttonSend");
const buttonEnd = document.querySelector("#buttonEnd");

document.getElementById("buttonSend").addEventListener("click",()=>{

    const string = document.getElementById("originalMessage").value;

    if (string == "") {
        alertDenuncia.innerHTML = "<p style='color: red; text-align: left;'> Debe ingresar la denuncia </p>";

    } else {
document.getElementById("root").style.display = "none";
document.getElementById("pageTwo").style.display = "block";

    
    const offset = parseInt (document.getElementById("contador").value);
    document.getElementById("cifrado");
    document.getElementById("original");
  
    cifrado.innerHTML = cipher.encode(offset,string);
    original.innerHTML=cipher.decode(offset,cipher.encode(offset,string));
    }
})

document.getElementById("buttonEnd").addEventListener("click", () => {
    
    document.getElementById("pageTwo").style.display = "none";
    document.getElementById("pageOne").style.display = "block";
    document.getElementById("originalMessage").value = "";

})



