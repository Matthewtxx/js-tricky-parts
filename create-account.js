function createAccount(initialPin, initialBalance) {
    let pin = initialPin;
    let balance = initialBalance;
  
    return {
      checkBalance: function (enteredPin) {
        if (enteredPin === pin) {
          return balance;
        } else {
          return "Invalid PIN.";
        }
      },
  
      deposit: function (enteredPin, amount) {
        if (enteredPin === pin) {
          balance += amount;
          return `Deposit successful. New balance: ${balance}`;
        } else {
          return "Invalid PIN.";
        }
      },
  
      withdraw: function (enteredPin, amount) {
        if (enteredPin === pin) {
          if (amount <= balance) {
            balance -= amount;
            return `Withdrawal successful. New balance: ${balance}`;
          } else {
            return "Insufficient funds.";
          }
        } else {
          return "Invalid PIN.";
        }
      },
  
      changePin: function (oldPin, newPin) {
        if (oldPin === pin) {
          pin = newPin;
          return "PIN successfully changed.";
        } else {
          return "Invalid PIN.";
        }
      }
    };
  }

module.exports = { createAccount };
