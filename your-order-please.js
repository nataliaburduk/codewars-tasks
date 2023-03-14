function order(words){
  const onlyDigits = /\d/g;
  return words.split(' ').sort(function(a,b){
    return a.match(onlyDigits) - b.match(onlyDigits);
  }).join(' ')
}
