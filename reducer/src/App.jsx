import { useEffect, useReducer, useState } from 'react';
import { createContext} from 'react';
import "./App.css"
import WithdrawalAmount from './pages/WithdrawAmount';

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



export const DepositMoneyContext = createContext();//create a createContext first to use useContext how I did it
export const Trigger = createContext();
export const DepositAmountContext = createContext();
export const DispatchContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 }); //only way you can call balance is state.balance
  const [deposit, setDeposit] = useState(0)
  const [close, setClose] = useState(false)
  
  
  useEffect(() => {
    setDeposit(0); // Reset deposit to 0 whenever balance changes
  }, [state.balance]);

  return (
 
    <DepositMoneyContext.Provider value={[10,20,50,100]}> {/*We are using the createContext to wrap around everything so anything that needs it will be able to call it*/}
       <Trigger.Provider value = {setClose}>
        <DepositAmountContext.Provider value = {state.balance}>
          <DispatchContext.Provider value = {dispatch} >
          {/*  <Account /> would not render correctly. The code below was in here */}
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
                    {/* setDeposit(0) ....set the deposit amount back to zero, moved it as a useEffect*/}
                  }}> 
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

