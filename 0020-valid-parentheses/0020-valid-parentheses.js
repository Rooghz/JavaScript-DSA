var isValid = function(s) {
  const len = s.length;
  if (len === 0) {
    return true;
  }
  if (len % 2 !== 0) {
    return false;
  }
  if (len === 2) {
    return s === "{}" || s === "[]" || s === "()";
  }
  const firstChar = s.slice(0, 1);
  let pairChar;
  if (firstChar === "(") {
    pairChar = ")";
  } else if (firstChar === "{") {
    pairChar = "}";
  } else if (firstChar === "[") {
    pairChar = "]";
  } else {
    return false;
  }
  const charArr = s.split("");
  let symbol = 0;
  let sIndex;
  for (index = 0; index < charArr.length; index++) {
    const item = charArr[index];
    if (item === firstChar) {
      symbol++;
    } else if (item === pairChar) {
      symbol--;
    }
    if (symbol < 0) {
      return false;
    } else if (symbol === 0) {
      sIndex = index;
      break;
    }
  }
  if (sIndex === undefined) {
    return false;
  } else if (sIndex === s.length - 1) {
    const subStr = s.substring(1, s.length - 1);
    return isValid(subStr);
  }
  const leftPart = s.slice(0, sIndex + 1);
  const rightPart = s.slice(sIndex + 1);
  return isValid(leftPart) && isValid(rightPart);
};