// notepad
// $5 + 10 CHF = $10 if rate is 2:1
// $5 * 2 = $10 (done)
// make "amount" private <--
// dollar side-effects? (done)
// money rounding?
// equals() (done)
// hashCode()
// equal null
// equal object

const Dollar = require("./1.js");

test("multiplication", async () => {
  const five = new Dollar(5);
  let product = five.times(2);
  expect(product.amount).toEqual(10);
  product = five.times(3);
  expect(product.amount).toEqual(15);
});

test("equality", async () => {
  expect(new Dollar(5).equals(new Dollar(5))).toEqual(true);
  expect(new Dollar(5).equals(new Dollar(6))).toEqual(false);
});
