const add = (function() {
  const factory = function(value) {
    const fn = function(num) {
      return factory(value + num);
    }

    fn.toString = function() {
      return value
    }

    return fn
  }

  return factory(0)
})()
