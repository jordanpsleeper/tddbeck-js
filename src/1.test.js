// notepad
// $5 + 10 CHF = $10 if rate is 2:1 <-- done
// $5 * 2 = $10 (done)
// make "amount" private (done)
// dollar side-effects? (done)
// money rounding?
// equals() (done)
// hashCode()
// equal null
// equal object
// 5 CHF * 2 = 10 CHF (done)
// dollar/franc duplication (done)
// common euqal (done)
// common times (done)
// compare francs with dollars (done)
// currency? (done)
// delete multiplicationFranc (done)
// $5 + $5 = $10 (done)
// return Money from $5 + $5
// Bank.reduce(Money); (done)
// reduce Money with conversion (done)
// Reduce(Bank, string) (done)
// Sum.plus done
// Expression.times

const { Money, Bank, Sum } = require("./1.js");

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

test("currency", async () => {
  expect(Money.dollar(1).currency).toEqual("USD");
  expect(Money.franc(1).currency).toEqual("CHF");
});

test("test different class equality", async () => {
  expect(new Money(10, "CHF").equals(Money.franc(10, "CHF"))).toEqual(true);
});

test("addition", async () => {
  const five = Money.dollar(5); // money
  const sum = five.plus(five); // expression
  const bank = new Bank();
  const reduced = bank.reduce(sum, "USD");

  expect(reduced).toEqual(Money.dollar(10));
});

test("plus returns sum expression", async () => {
  const five = Money.dollar(5);
  const result = five.plus(five);
  const sum = result;
  expect(five).toEqual(sum.augend);
  expect(five).toEqual(sum.addend);
});

test("test reduce sum", async () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.dollar(7));
});

test("test reduce Money", async () => {
  const bank = new Bank();
  const result = bank.reduce(Money.dollar(1), "USD");
  expect(result).toEqual(Money.dollar(1));
});

test("reduce money into different currency", async () => {
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(Money.franc(2), "USD");
  expect(result).toEqual(Money.dollar(1));
});

test("idenity rate", async () => {
  expect(new Bank().rate("USD", "USD")).toEqual(1);
});

test("mixed addition", async () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
  expect(result).toEqual(Money.dollar(10));
});

test("sum plus money", async () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
  const result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.dollar(15));
});

test("sum times", async () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tenFrancs).times(2);
  const result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.dollar(20));
});
