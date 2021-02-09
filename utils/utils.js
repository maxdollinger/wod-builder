const crypto = require("crypto");

exports.randomHexString = (length = 16) => {
  const chars = "0123456789abcdef";
  let str = [];

  crypto.randomBytes(length).forEach((el) => {
    const number = Math.round(el * ((chars.length - 1) / 256));
    str.push(chars[number]);
  });

  return str.join("");
}