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

const { Franc, Money } = require("./1.js");

test("multiplication", async () => {
  const five = Money.dollar(5);
  expect(Money.dollar(10)).toEqual(five.times(2));
  expect(Money.dollar(15)).toEqual(five.times(3));
});

test("equality", async () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
  expect(new Franc(5).equals(new Franc(5))).toEqual(true);
  expect(new Franc(5).equals(new Franc(6))).toEqual(false);
  expect(new Franc(5).equals(Money.dollar(5))).toEqual(false);
});

test("multiplicationFranc", async () => {
  const five = new Franc(5);
  expect(new Franc(10)).toEqual(five.times(2));
  expect(new Franc(15)).toEqual(five.times(3));
});
