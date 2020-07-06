
const capitalizeSentences = function (str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let characters = str[i].toLowerCase().split('. ');
    let prev = str[i] + 1; 
    
    if (i === 0) {
      result = result + str[i].toUpperCase();
    } else if (str.length === '. ') {
      result = result + str[i].toUpperCase() 
    } else
      {
      result = result + characters;
    }
  }
  return result
}

const isValidPassword = function (str) {
  if (str.length < 12 || str.includes(' ')) {
    return false;
  } else {
    return true
  }
}

const makeHalfSquares = function (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    
    result.push(Math.pow(arr[i], 2) / 2)

  }
  return result 
}

const countAs = function (arr) {
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++)
  if (arr[i] >= 90) {
    result.push(arr[i])

    count++
  }
  return result
}

const deleteMiddleLetters = function (str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 === 0) {
      result = result + str.slice(2)
    }
  }
  return result;
}

const hyphenateName = function (str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result = result + '-'
    }
    else {
      result = result + str[i]
    }
  }
  return result
}






if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
