function prefill(n, v) {
  if(n === 0 || n === '0') {
    return [];
  } else if ( parseInt(n) != n || n < 0) {
    throw new TypeError(`${n} is invalid`);
  } 

  return new Array(n).fill(v); 
}
