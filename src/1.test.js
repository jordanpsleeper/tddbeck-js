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
// common euqal
// common times

const { Dollar, Franc } = require("./1.js");

test("multiplication", async () => {
  const five = new Dollar(5);
  expect(new Dollar(10)).toEqual(five.times(2));
  expect(new Dollar(15)).toEqual(five.times(3));
});

test("equality", async () => {
  expect(new Dollar(5).equals(new Dollar(5))).toEqual(true);
  expect(new Dollar(5).equals(new Dollar(6))).toEqual(false);
});

test("multiplicationFranc", async () => {
  const five = new Franc(5);
  expect(new Franc(10)).toEqual(five.times(2));
  expect(new Franc(15)).toEqual(five.times(3));
});
