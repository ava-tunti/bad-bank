// function Withdraw(){
//   const ctx = React.useContext(UserContext);
//   return (
//     <>
//     <h1>Withdraw</h1>
//     {JSON.stringify(ctx)}<br/>
//     </>
//   );
// }


import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

function Withdraw() {
  const ctx = useContext(UserContext);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleWithdraw = () => {
    // Convert input to number
    const withdrawValue = parseFloat(withdrawAmount);

    // Validate if the input is a number
    if (isNaN(withdrawValue)) {
      setStatus('Error: Please enter a valid number for withdrawal.');
      return;
    }

    // Check if the withdrawal amount is negative
    if (withdrawValue < 0) {
      setStatus('Error: Withdrawal amount cannot be negative.');
      return;
    }

    // Check if the withdrawal amount exceeds balance
    if (withdrawValue > ctx.users[0].balance) {
      setStatus('Error: Withdrawal amount exceeds account balance.');
      return;
    }

    // Update balance
    ctx.users[0].balance -= withdrawValue;

    // Reset withdraw field
    setWithdrawAmount('');

    // Display success message
    setStatus(`Success: ${withdrawValue} withdrawn successfully.`);
  };

  return (
    <div className="card">
      <h1 className="card-header">Withdraw</h1>
      <div className="card-body">
        <p>Balance: {ctx.users[0].balance}</p>
        <input
          type="text"
          className="form-control"
          placeholder="Enter withdrawal amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={handleWithdraw}
          disabled={!withdrawAmount}
        >
          Withdraw
        </button>
        {status && <div className="mt-3">{status}</div>}
      </div>
    </div>
  );
}

export default Withdraw;
