function isSantaClausable(obj) {
  return [
    'sayHoHoHo', 
    'distributeGifts', 
    'goDownTheChimney'
  ].every((methodName) => typeof obj[methodName] == 'function');  
}
