let flatten = function(arr) {
  let flatArr = [];
  arr.forEach(function(elem) {
    if (Array.isArray(elem)) {
      elem.forEach(function(element) {
        flatArr.push(element);
      });
    } else {
      flatArr.push(elem);
    }
  });
  return flatArr;
};
