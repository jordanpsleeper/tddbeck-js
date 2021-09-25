class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // factory method
  static dollar(amount) {
    return new Money(amount, "USD");
  }

  static franc(amount) {
    return new Money(amount, "CHF");
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  equals(money) {
    return this.amount === money.amount && this.currency === money.currency;
  }

  // needs to return an expression
  plus(addend) {
    return new Sum(this, addend);
  }

  reduce(bank, to) {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
}

class Bank {
  rates = new Map(); // hashtable

  reduce(source, to) {
    return source.reduce(this, to); // can be Money or Sum Expression
  }

  addRate(from, to, rate) {
    this.rates.set(new Pair(from, to).toString(), parseInt(rate));
  }

  rate(from, to) {
    if (from === to) return 1; // if same idenity, rate is 1
    const rate = this.rates.get(new Pair(from, to).toString());
    return rate;
  }
}

// expression class
class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

// private class
class Pair {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  equals(pair) {
    return this.from === pair.from && this.to === pair.to;
  }

  hashCode() {
    return 0; // no idea
  }

  toString() {
    return `${this.from}${this.to}`;
  }
}

module.exports = { Money, Bank, Sum };
