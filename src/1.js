class Dollar {
  amount;
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

module.exports = Dollar;
