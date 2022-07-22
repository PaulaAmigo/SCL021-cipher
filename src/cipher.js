const cipher = {
  encode: function (offset, mensajeOriginal) {
    if (typeof mensajeOriginal !== "string") {
      throw new TypeError();
    }
    let mensajeFinal = "";

    for (let i = 0; i < mensajeOriginal.length; i++) {
      let ascii_num = mensajeOriginal[i].charCodeAt();

      if (ascii_num >= 65 && ascii_num <= 90) {
        let sum = ((ascii_num - 65 + parseInt(offset)) % 26) + 65;

        mensajeFinal += String.fromCharCode(sum);
      } else {
        mensajeFinal += mensajeOriginal[i];
      }
    }
    return mensajeFinal;
  },
  decode: function (offset, mensajeOriginal) {
    if (typeof mensajeOriginal !== "string") {
      throw new TypeError();
    }
    let mensajeFinal = "";
    for (let i = 0; i < mensajeOriginal.length; i++) {
      let ascii_num = mensajeOriginal[i].charCodeAt();

      if (ascii_num >= 65 && ascii_num <= 90) {
        let sum = ((ascii_num + 65 - parseInt(offset)) % 26) + 65;

        mensajeFinal += String.fromCharCode(sum);
      } else {
        mensajeFinal += mensajeOriginal[i];
      }
    }
    return mensajeFinal;
  },
};

export default cipher;
