// notepad
// $5 + 10 CHF = $10 if rate is 2:1
// $5 * 2 = $10 <--- done
// make "amount" private
// dollar side-effects?
// money rounding?

const Dollar = require("./1.js");

test("multiplication", async () => {
  const five = new Dollar(5);
  five.times(2);
  expect(five.amount).toEqual(10);
});
