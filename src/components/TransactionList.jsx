import React from "react";

function TransactionList({transaction,deleteTransaction}){
   
    return(
        <>
           <h3>History</h3>
      <ul id="list" className="list">
         {transaction.map(transaction => (
          <li className={transaction.amount<0?'minus':'plus'}>
          {transaction.text}<span>
            ${transaction.amount}</span><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
         </li> 
         ))}
      </ul> 
        </>
    )
}
export default TransactionList