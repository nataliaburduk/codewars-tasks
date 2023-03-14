function crossProduct (a, b) {
  if (isVectorValid(a) && isVectorValid(b)){
    return [
      a[1]*b[2] - b[1]*a[2], 
      a[2]*b[0] - b[2]*a[0], 
      a[0]*b[1] - b[0]*a[1]
    ];
  } else {
    throw 'Arguments are not 3D vectors!';
  } 
}

function isVectorValid(arr) {
  return Array.isArray(arr) && arr.length === 3
}
