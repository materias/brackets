module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length;){
    var sequence = bracketsConfig[i].join("");
    if (str.includes(sequence)) {
      str = str.replace(sequence, "");
      i = 0;
    }
    else i++;
  }
  return str.length ? false : true;
  }
