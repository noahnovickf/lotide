let findKeyByValue = function(obj, val) {
  let keyArr = Object.keys(obj);
  for (let key of keyArr) {
    if (val === obj[key]) {
      return key;
    }
  }
};
module.exports = findKeyByValue;
