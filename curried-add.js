function curriedAdd(initialValue = 0) {
    let total = initialValue;
  
    function add(value) {
      if (typeof value === 'number') {
        total += value;
        return add;
      } else {
        return total;
      }
    }
  
    return add;
  }

module.exports = { curriedAdd };
