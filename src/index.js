module.exports = function check(str, bracketsConfig) {
var check = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1] && str[i]=== check[check.length - 1] ) { 
       check.pop(str[i]); break;       
     }
      if (str[i] == bracketsConfig[j][0] ) { 
        check.push(str[i]); break;
      }
      if (str[i] == bracketsConfig[j][1] ) { 
        let lastOpened = check.pop(str[i]);
        if (lastOpened !== bracketsConfig[j][0])  return false;
      }
    }
  }
  return check.length == 0;
}
