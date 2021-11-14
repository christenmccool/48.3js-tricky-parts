function createAccount(pin, initial=0) {
  let savedPin = pin;
  let amount = initial; 

  return (
    {
      checkBalance: function(currPin) {
        if (currPin !== savedPin) {
          return "Invalid PIN.";
        }
        else {
          return `$${amount}`;
        }
      }, 
      deposit: function(currPin, val) {
        if (currPin !== savedPin) {
          return "Invalid PIN."
        }
        else {
          amount += val;
          return `Succesfully deposited $${val}. Current balance: $${amount}.`;
        }
      }, 
      withdraw: function(currPin, val) {
        if (currPin !== savedPin) {
          return "Invalid PIN."
        }
        if (amount - val < 0) {
          return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
        } else {
          amount -= val;
          return `Succesfully withdrew $${val}. Current balance: $${amount}.`;
        }
      }, 
      changePin: function(currPin, newPin) {
        if (currPin !== savedPin) {
          return "Invalid PIN."
        }
        else {
          savedPin =  newPin;
          return `PIN successfully changed!`;
        }
      }
    }
  )
}

module.exports = { createAccount };

