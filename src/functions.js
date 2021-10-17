export const encrypt = (p, q, e, message) => {
  let result = "",
    c = "";
  // let phi = (p - 1) * (q - 1);
  let n = p * q;
  // let d = (1 + k * phi) / e;
  for (let i = 0; i < message.length; i++) {
    c = Math.pow(message[i].charCodeAt(), e) % n;
    result += c;
  }

  return result;
};

export const decrypt = () => {
  return "Decrypted";
};
