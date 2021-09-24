// notepad
// $5 + 10 CHF = $10 if rate is 2:1
// $5 * 2 = $10 (done)
// make "amount" private (done)
// dollar side-effects? (done)
// money rounding?
// equals() (done)
// hashCode()
// equal null
// equal object
// 5 CHF * 2 = 10 CHF (done)
// dollar/franc duplication
// common euqal (done)
// common times
// compare francs with dollars (done)
// currency?
// delete multiplicationFranc

const { Money } = require("./1.js");

test("multiplication", async () => {
  const five = Money.dollar(5);
  expect(Money.dollar(10)).toEqual(five.times(2));
  expect(Money.dollar(15)).toEqual(five.times(3));
});

test("equality", async () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
  expect(Money.franc(5).equals(Money.franc(5))).toEqual(true);
  expect(Money.franc(5).equals(Money.franc(6))).toEqual(false);
  expect(Money.franc(5).equals(Money.dollar(5))).toEqual(false);
});

test("multiplicationFranc", async () => {
  const five = Money.franc(5);
  expect(Money.franc(10)).toEqual(five.times(2));
  expect(Money.franc(15)).toEqual(five.times(3));
});
