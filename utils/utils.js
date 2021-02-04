const crypto = require("crypto");

exports.pipe = (...fns) => x => fns.reduce((g,f) => f(g), x);

exports.randomValue = (max = 1, min = 0, cb) => {
    const randomValue = Math.random() * (max-min)+min;
    return cb instanceof Function ? cb(randomValue) : randomValue;
} 

exports.print = msg => val => {
     console.log(msg + " :");
     console.log(val);
     return val;
}

exports.pipeFilter = callBack => arr => arr.filter(callBack);

exports.pipeMap = callBack => arr => arr.map(callBack);

exports.pipeFlat = arr => arr.flat();

exports.roundUp = (num, multi) => num % multi === 0 ? num : num + (multi - (num % multi));

exports.randomHexString = (length = 16) => {
  const chars = "0123456789abcdef";
  let str = [];

  crypto.randomBytes(length).forEach((el) => {
    const number = Math.round(el * ((chars.length - 1) / 256));
    str.push(chars[number]);
  });

  return str.join("");
}