const cipher = {

encode: (offset, string) =>{
    let result ='';
    let enCodexString ='';

    
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
   
      } else if (Position>=48 && Position<=57) {
      result += String.fromCharCode((Position - 48 + offset) % 10 + 48);
    
    } else if (Position===241) {
      result += String.fromCharCode((Position - 241 + offset) % 1 + 241);
    }
    else if (Position === 209) {
      result += String.fromCharCode((Position - 209 + offset) % 1 + 209);
    }
    
    
  }
  return result;
}
};

export default cipher;
