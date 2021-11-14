function curriedAdd(total) {
  if (!total) return 0;
  return function addFunc(num) {
    if (!num) return total;
    total += num;
    return addFunc;
  }
}

module.exports = { curriedAdd };

