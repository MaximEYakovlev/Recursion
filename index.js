const factorialRecursion = (number) => {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

const factorialLoop = (number) => {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
};
