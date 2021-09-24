// notepad
// $5 + 10 CHF = $10 if rate is 2:1
// $5 * 2 = $10

import Dollar from './1.js';

test('multiplication', async () => {
    Dollar five = new Dollar(5);
    five.times(2);
    expect(five.amount).toEqual(10);
});