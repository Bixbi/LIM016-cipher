import cipher from './cipher.js';

const encryptedMessage = document.getElementById("encryptedMessage");


const buttonSend = document.querySelector("#buttonSend");

document.getElementById("buttonSend").addEventListener("click",()=>{
    const string = document.getElementById("originalMessage").value;
    const offset = parseInt (document.getElementById("contador").value);
    encryptedMessage.innerHTML = cipher.encode(offset,string);

})



