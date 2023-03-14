Object.prototype.hash = function(string) {
  let arr = string.split('.'); 
  
  return arr.reduce(getDeep, this)
}

function getDeep(a, b) {
  if (typeof(a) === 'object') {
    return a[b];
  } else {
    return undefined
  }
}