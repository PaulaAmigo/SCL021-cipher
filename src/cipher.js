const cipher = {
  encode: function (mensajeOriginal, shiftInput) {
    let mensajeFinal = "";
    
    for(let i = 0; i< mensajeOriginal.length; i++) {
     let ascii_num = mensajeOriginal[i].charCodeAt()
     
    
     if(ascii_num >=65 && ascii_num <=90){
         let sum = (ascii_num - 65 + parseInt(shiftInput))%26 + 65;
     
         console.log(sum)
         mensajeFinal +=String.fromCharCode(sum)
     }
     else{
         mensajeFinal += mensajeOriginal[i]
         console.log(mensajeFinal)
     }
 
     console.log(mensajeFinal)
 }
 return mensajeFinal
},
decode: function (mensajeOriginal, shiftInput) {
  let mensajeFinal = "";
  for(let i = 0; i< mensajeOriginal.length; i++) {
      let ascii_num = mensajeOriginal[i].charCodeAt()
      
     
      if(ascii_num >=65 && ascii_num <=90){
          let sum = (ascii_num - 65 - parseInt(shiftInput))%26 + 65;
      
          console.log(sum)
          mensajeFinal +=String.fromCharCode(sum)
      }
      else{
          mensajeFinal += mensajeOriginal[i]
          console.log(mensajeFinal)
      }
  
      console.log(mensajeFinal)
  }
  return mensajeFinal 
}

};

export default cipher;
