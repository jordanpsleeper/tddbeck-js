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
  expect(new Dollar(10)).toEqual(five.times(2));
  expect(new Dollar(15)).toEqual(five.times(3));
});

test("equality", async () => {
  expect(new Dollar(5).equals(new Dollar(5))).toEqual(true);
  expect(new Dollar(5).equals(new Dollar(6))).toEqual(false);
});
