export const encrypt = (p, q, e, k, message) => {
  let result = {
      encrypted: [],
      d: null,
    },
    c = "",
    n = p * q;
  let phi = (p - 1) * (q - 1);
  e = parseInt(e);

  message = message.toLowerCase();
  let numbers = [],
    alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < message.length; i++) {
    numbers.push(alphabet.indexOf(message[i]) + 1);
  }
  for (let i = 0; i < n; i++) {
    if ((i * e) % phi === 1) {
      result.d = i;
      console.log(i);
      break;
    }
  }
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    c = Math.pow(numbers[i], e) % n;
    result.encrypted.push(c);
  }

  console.log(result);

  return result;
};

export const decrypt = (d, data) => {
  let result = "";

  return result;
};
