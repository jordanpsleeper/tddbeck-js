class Money {
  amount;
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar) {
    return this.amount === dollar.amount;
  }
}

class Dollar extends Money {}

class Franc extends Money {}

module.exports = { Dollar, Franc };
