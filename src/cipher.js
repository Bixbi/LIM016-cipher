const cipher = {

encode: (offset, string) =>{
    let result ='';
    for(let i=0;i<string.length;i++){
    let Position=string.charCodeAt(i);

    //para cifrar letras mayusculas
    if(Position>=65 && Position<=90){
      result += String.fromCharCode(((Position - 65 + offset) % 26 + 65));

     //para identificar los espacios 
    } else if(Position===32){
        result += String.fromCharCode((Position - 32 + offset) % 1 + 32);

    //para cifrar letras minusculas
    } else if(Position>=97 && Position<=122){
        result += String.fromCharCode((Position - 97 + offset) % 26 + 97);
   
    //para cifrar numeros
      } else if (Position>=48 && Position<=57) {
      result += String.fromCharCode((Position - 48 + offset) % 10 + 48);
    //para cifraf ñ
    } else if (Position===241) {
      result += String.fromCharCode((Position - 241 + offset) % 1 + 241);
    }
    //para cifrar Ñ
    else if (Position === 209) {
      result += String.fromCharCode((Position - 209 + offset) % 1 + 209);
    }
    //para los signos de interrogación
    else if (Position >= 33 && Position <= 47) {
      result += String.fromCharCode((Position - 33 + offset) % 15 + 33);
    }
    else if (Position >= 58 && Position <= 64) {
      result += String.fromCharCode((Position - 58 + offset) % 7 + 58);
    }
    else if (Position >= 91 && Position <= 96) {
      result += String.fromCharCode((Position - 91 + offset) % 6 + 91);
    }
    else if (Position >= 123 && Position <= 126) {
      result += String.fromCharCode((Position - 123 + offset) % 4 + 123);
    }
  }
  return result;
},

decode: (offset, string) => {
     let result1 = '';
   
    for (let i=0;i<string.length;i++){
      let Position = string.charCodeAt(i);
      //para cifrar letras mayusculas
      if (Position >= 65 && Position <= 90){
        result1 +=String.fromCharCode((Position+65 - offset-26)%26 + 65);
      } //para identificar los espacios 
     else if (Position===32){
        result1 +=String.fromCharCode((Position+32 - offset -1)%1 + 32);
     }
     //para letras minusculas
      else if (Position >= 97 && Position <= 122) {
        result1 += String.fromCharCode((Position + 97 - offset-38) % 26 + 97);
      }
      //para la ñ
      else if (Position === 241) {
        result1 += String.fromCharCode((Position + 241 - offset - 1) % 1 + 241);
      }
      //para cifrar Ñ
      else if (Position === 209) {
        result1 += String.fromCharCode((Position + 209 - offset - 1) % 1 + 209);
      }
      else if (Position >= 48 && Position <= 57) {
        result1 += String.fromCharCode((Position - 57 - offset) % 10 + 57);
      }

      //para los signos de interrogación
      else if (Position >= 33 && Position <= 47) {
        result1 += String.fromCharCode((Position - 47 - offset) % 15 + 47);
      }
      else if (Position >= 58 && Position <= 64) {
        result1 += String.fromCharCode((Position - 64 - offset) % 7 + 64);
      }
      else if (Position >= 91 && Position <= 96) {
        result1 += String.fromCharCode((Position - 96 - offset) % 6 + 96);
      }
      else if (Position >= 123 && Position <= 126) {
        result1 += String.fromCharCode((Position - 126 - offset) % 4 + 126);
      }
  }

return result1;
  }

};

export default cipher;
