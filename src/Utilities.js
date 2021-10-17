export const calculatorE = (p, q) => {
  let e = [];
  let n = p * q;

  for (let i = 0; i < n; i++) {
    if (areCoprimes(i, n)) {
      e.push(i);
    }
    if (e.length > 5) {
      break;
    }
  }

  return e.slice(1);
};

const areCoprimes = (num1, num2) => {
  const smaller = num1 > num2 ? num1 : num2;
  for (let i = 2; i < smaller; i++) {
    const condition1 = num1 % i === 0;
    const condition2 = num2 % i === 0;
    if (condition1 && condition2) {
      return false;
    }
  }
  return true;
};
