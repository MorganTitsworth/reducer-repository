import { useReducer, useState } from 'react';
import { createContext,useContext } from 'react';
import "./App.css"

function reducer(state, action) {  //state = balance:0; action = depositAmount:"";type: ""

  switch (action.type) {
    
    case 'deposit':
      const depositAmount = parseFloat(action.depositAmount);
      return {
        balance: state.balance + depositAmount
      };
    case 'amountRequesting':
      return {
        balance: state.balance - action.withdrawalNumber
      };
    default:
      throw new Error('Unknown action.');
  }
}



const DepositMoneyContext = createContext();//create a createContext first to use useContext how I did it
const Trigger = createContext();
const DepositAmountContext = createContext();
const DispatchContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 }); //only way you can call balance is state.balance
  const [deposit, setDeposit] = useState(0)
  const [close, setClose] = useState(false)
  
  
  //const depositMoney = [10,20,50,100];
  

  return (
 
    <DepositMoneyContext.Provider value={[10,20,50,100]}> {/*We are using the createContext to wrap around everything so anything that needs it will be able to call it*/}
       <Trigger.Provider value = {setClose}>
        <DepositAmountContext.Provider value = {state.balance}>
          <DispatchContext.Provider value = {dispatch} >
            <div className="main">
              {close ? <WithdrawalAmount/> :
                <>
                  <div className="label">
                    <label>Enter your desposit: </label>
                      <input
                        type="number" 
                        value={deposit} //the value of the deposit is a useState, which onChange changes the value
                        onChange={(e) => setDeposit(e.target.value)}
                      />
                    <button onClick={() => {
                      dispatch({ type: 'deposit', depositAmount: deposit });//type is only being called here. value deposit is being called from useState; depositAmount is the parameter action from reducer
                      setDeposit(0)}}> {/* set the deposit amount back to zero*/}
                      Deposit
                    </button>
                    <p>Hello! You have deposited ${state.balance}.</p>
                    <div className="withdrawalButton">
                      <label>When done, click continue! </label>
                      <button onClick={() => setClose(!close)}>
                        Continue
                      </button>
                    </div>
                </div>
                
                </>
              }
            </div>
          </DispatchContext.Provider>
        </DepositAmountContext.Provider>
      </Trigger.Provider>
    </DepositMoneyContext.Provider>

  );
}

function WithdrawalAmount() {
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
