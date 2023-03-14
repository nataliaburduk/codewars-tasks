function array(str){
  let arr = str.split(/\W/g);
  let strSliced = arr.slice(1, arr.length-1).join(" ");
  return strSliced ? strSliced : null;
}
