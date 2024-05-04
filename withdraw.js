function Withdraw(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h1>Withdraw</h1>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}

// function Withdraw() {
//   const [withdrawAmount, setWithdrawAmount] = useState('');
//   const [status, setStatus] = useState('');
//   const ctx = useContext(UserContext);
  
  
//   function handleWithdraw = () => {
//     const withdrawValue = parseFloat(withdrawAmount);

//     if (isNaN(withdrawValue)) {
//       setStatus('Error: Please enter a valid number for withdrawal.');
//       return;
//     }

//     if (withdrawValue < 0) {
//       setStatus('Error: Withdrawal amount cannot be negative.');
//       return;
//     }

//     if (withdrawValue > ctx.users[0].balance) 
//       setStatus('Error: Withdrawal amount exceeds account balance.');
//       return;
//     }

//     const newBalance = ctx.users[0].balance - withdrawValue; // Calculate new balance

//     // Update balance
//     ctx.users[0].balance = newBalance;

//     // Reset withdraw field
//     setWithdrawAmount('');

//     // Display success message
//     setStatus(`Success: ${withdrawValue} withdrawn successfully.`);
//   };

//   return (
//     <Card
//       bgcolor="primary"
//       header="Withdraw"
//       status={status}
//       body={(
//         <>
//           <p>Balance: {ctx.users[0].balance}</p> 
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter withdrawal amount"
//             value={withdrawAmount}
//             onChange={(e) => setWithdrawAmount(e.target.value)}
//           />
//           <button
//             className="btn btn-primary mt-2"
//             onClick={handleWithdraw}
//             disabled={!withdrawAmount}
//           >
//             Withdraw
//           </button>
//         </>
//       )}
//     />
//   );
// }

// export default Withdraw;

