let arrProto = Array.prototype;

arrProto.square = function() { 
  return this.map(n => Math.pow(n, 2))
}
arrProto.cube = function() { 
  return this.map(n => Math.pow(n, 3))
}
arrProto.average = function() {
    return this.reduce((acc, curr) => {
      return acc + curr
    }, 0) / this.length;
}
arrProto.sum = function() { 
  return this.reduce((acc, curr) => { 
    return acc + curr
  }, 0)
}
arrProto.even = function() {
    return this.filter(n => n % 2 == 0 )
}

arrProto.odd = function() {
    return this.filter(n => n % 2 == 1)
}
