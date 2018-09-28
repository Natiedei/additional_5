module.exports = function check(str, bracketsConfig) {
  // your solution
  //var Skob = str.split('');
  //if(str.length % 2 == 1) return false; else return true;

  var check = [];
  for (let i = 0; i < str.length; i++) 
  {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) check.push(str[i]);
      if (str[i] == bracketsConfig[j][1]) check.pop(str[i]);  
     
    }
  }
  if (check == 0) return true;
  else return false;

 
}
