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
// common times (done)
// compare francs with dollars (done)
// currency? (done)
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
  expect(Money.franc(5).equals(Money.dollar(5))).toEqual(false);
});

test("multiplicationFranc", async () => {
  const five = Money.franc(5);
  expect(Money.franc(10)).toEqual(five.times(2));
  expect(Money.franc(15)).toEqual(five.times(3));
});

test("currency", async () => {
  expect(Money.dollar(1).currency).toEqual("USD");
  expect(Money.franc(1).currency).toEqual("CHF");
});

test("test different class equality", async () => {
  expect(new Money(10, "CHF").equals(Money.franc(10, "CHF"))).toEqual(true);
});
