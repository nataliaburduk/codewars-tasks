function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    (function(i) {
      callbacks[i] = function() {
        return i;
      }
    } (i))
  }
  
  return callbacks;
}
