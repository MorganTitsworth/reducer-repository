import { useState } from 'react';
import { useContext } from 'react';
import "../App.css"
import { DepositMoneyContext, Trigger, DispatchContext } from '../App'; // Import the contexts from App.js

export default function WithdrawalAmount() {
    const depositMoney = useContext(DepositMoneyContext);
    const toggleClose = useContext(Trigger);
    const dispatch = useContext(DispatchContext);
    const [randomAmount, setRandomAmount] = useState(false);
    const [withdrawalAmount, setWithdrawalAmount] = useState(0);
    
    
  
    const handleAmountRequesting = (amount) => { //handles the transtation to reducer
      dispatch({ type: "amountRequesting", withdrawalNumber: amount }); //adjust the reducer number and call it from App function.
      toggleClose();
    };
  
    return (
      <>
        {!randomAmount ? (
          <div className="deposit_button">
            {depositMoney.map((amount, index) => (
              <button key={index} onClick={() => handleAmountRequesting(amount)}>
                {amount}
              </button>
            ))}
            <button
              className="differentAmount"
              onClick={() => setRandomAmount(!randomAmount)}
            >
              Enter Amount
            </button>
          </div>
        ) : (
          <>
            <input
              type="number"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
            />
            <button
              className="differentAmount"
              onClick={() => handleAmountRequesting(withdrawalAmount)}
            >
              Enter Amount
            </button>
          </>
        )}
      </>
    );
  }
  