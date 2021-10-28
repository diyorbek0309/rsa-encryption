import bigInt from "big-integer";

export const encrypt = (p, q, e, message) => {
  let c = "",
    n = p * q;
  let result = {
    encrypted: [],
    d: null,
    n,
  };
  let phi = (p - 1) * (q - 1);
  e = parseInt(e);

  message = message.toLowerCase();
  let numbers = [],
    alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < message.length; i++) {
    numbers.push(alphabet.indexOf(message[i]) + 1);
  }
  for (let i = 1; i <= n; i++) {
    if ((i * e) % phi === 1) {
      result.d = i;
      break;
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    let big = bigInt(Math.pow(numbers[i], e));
    c = big % n;
    result.encrypted.push(c);
  }

  return result;
};

export const decrypt = (d, n, data) => {
  let result = "",
    decrypted = [],
    alphabet = "abcdefghijklmnopqrstuvwxyz";
  d = parseInt(d);
  n = parseInt(n);
  data = data.split(", ");
  for (let i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
    let big = bigInt(Math.pow(data[i], d)) % n;
    decrypted.push(big);
  }

  console.log(decrypted);

  for (let i = 0; i < decrypted.length; i++) {
    result += alphabet[decrypted[i] - 1];
  }

  return result;
};
