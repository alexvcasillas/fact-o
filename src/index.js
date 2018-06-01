const isInt = number => Number(number) === number && number % 1 === 0;

const fact = number => {
  if (typeof number === 'undefined') {
    throw new Error(
      `Factorial function takes one parameter for the calculations.`
    );
  }
  if (typeof number !== 'number') {
    throw new Error(
      `Factorial function takes a natural number as the single parameter for the calculations.`
    );
  }
  if (number < 0) {
    throw new Error(
      `The factorial calculations require a non-negative (natural) number. >= 1`
    );
  }
  if (!isInt(number)) {
    throw new Error(`The factorial sequence requires natural numbers.`);
  }
  // Explicit factorial returns: 0 and 1 is always 1 so we can avoid calculations
  if (number === 0) return 1;
  if (number === 1) return 1;

  function f(n) {
    // Explicit factorial returns: 0 and 1 is always 1 so we can avoid calculations
    if (n === 0) return 1;
    if (n === 1) return 1;
    return n * f(n - 1);
  }

  return f(number);
};

module.exports = { fact };
