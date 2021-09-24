class Money {
  amount;
  constructor(amount) {
    this.amount = amount;
  }
}

class Dollar extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier);
  }

  equals(dollar) {
    return this.amount === dollar.amount;
  }
}

class Franc extends Money {
  times(multiplier) {
    return new Money(this.amount * multiplier);
  }

  equals(franc) {
    return this.amount === franc.amount;
  }
}

module.exports = { Dollar, Franc };
