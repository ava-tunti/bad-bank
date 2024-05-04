// function Deposit(){
//   const ctx = React.useContext(UserContext);
//   return (
//     <>
//     <h1>Deposit</h1>
//     {JSON.stringify(ctx)}<br/>
//     </>
//   );
// }


import React, { useState, useContext } from 'react';

function Deposit() {
  const ctx = useContext(UserContext);
  const [depositAmount, setDepositAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleDeposit = () => {
    // Validate if the input is a number
    if (isNaN(depositAmount)) {
      setStatus('Error: Please enter a valid number for deposit.');
      return;
    }

    // Convert input to number
    const depositValue = parseFloat(depositAmount);

    // Check if the deposit value is negative
    if (depositValue < 0) {
      setStatus('Error: Deposit amount cannot be negative.');
      return;
    }

    // Update balance
    ctx.balance += depositValue;

    // Reset deposit field
    setDepositAmount('');

    // Display success message
    setStatus(`Success: ${depositValue} deposited successfully.`);
  };

  return (
    <div className="card">
      <h1 className="card-header">Deposit</h1>
      <div className="card-body">
        <p>Balance: {ctx.balance}</p>
        <input
          type="text"
          className="form-control"
          placeholder="Enter deposit amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={handleDeposit}
          disabled={!depositAmount}
        >
          Deposit
        </button>
        {status && <div className="mt-3">{status}</div>}
      </div>
    </div>
  );
}

export default Deposit;
