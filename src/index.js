module.exports = function check(str, bracketsConfig) {
  var round = ['()'];
  var square = ['[]'];
  var curved = ['{}'];
  var straight = ['||'];
  for(let i = 0; i <= str.length; i++){
    if(str.includes(round)) {
     str = str.replace(round, "");
    }
    else if(str.includes(square)) {
      str = str.replace(square, "");
    }
    else if(str.includes(curved)) {
      str = str.replace(curved, "");
    }
    else if(str.includes(straight)) {
      str = str.replace(straight, "");
    }
  }
  return str.length ? false : true;
}
