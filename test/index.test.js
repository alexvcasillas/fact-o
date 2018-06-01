import test from 'ava';

const { fact } = require('../dist/fact-o');

test(`it shouldn't allow to calculate without the required parameter`, t => {
  const error = t.throws(() => fact(), Error);
  t.is(
    error.message,
    `Factorial function takes one parameter for the calculations.`
  );
});

test(`it shouldn't allow to calculate without a number as the parameter`, t => {
  const error = t.throws(() => fact('10'), Error);
  t.is(
    error.message,
    `Factorial function takes a natural number as the single parameter for the calculations.`
  );
});

test(`it shouldn't allow to calculate with a negative number as the parameter`, t => {
  const error = t.throws(() => fact(-10), Error);
  t.is(
    error.message,
    `The factorial calculations require a non-negative (natural) number. >= 1`
  );
});

test(`it shouldn't allow to calculate without a natural number as the parameter`, t => {
  const error = t.throws(() => fact(10.2), Error);
  t.is(error.message, `The factorial sequence requires natural numbers.`);
});

test('it should return 1 when the number is 0', t => {
  t.is(fact(0), 1);
});

test('it should return 1 when the number is 1', t => {
  t.is(fact(1), 1);
});

test('it should calculate the factorial of 5', t => {
  t.is(fact(5), 120);
});

test('it should calculate the factorial of 15', t => {
  t.is(fact(15), 1307674368000);
});
