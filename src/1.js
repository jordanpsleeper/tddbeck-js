class Money {
  amount;
  constructor(amount) {
    this.amount = amount;
  }

  equals(money) {
    return this.amount === money.amount;
  }
}

class Dollar extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier);
  }
}

class Franc extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier);
  }
}

module.exports = { Dollar, Franc };
