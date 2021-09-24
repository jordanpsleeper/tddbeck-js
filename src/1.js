class Dollar {
  amount;
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    this.amount = this.amount * multiplier;
  }
}

module.exports = Dollar;
