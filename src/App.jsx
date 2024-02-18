import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

function App() {
  const initialState={
    transaction: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
      ],
  }
  const [transaction, setTransaction] = useState(initialState.transaction)
  function deleteTransaction (id){
    const updatedTransaction=transaction.filter(transaction=>transaction.id !== id)
    setTransaction(updatedTransaction)
  }

  function addTransaction(text,amount){
    const newTransaction={
      id: Math.floor(Math.random()* 10000),
      text,
      amount
    }
    setTransaction([...transaction,newTransaction])
  }
  return (
    <>
      <Header/>
      <Balance transaction={transaction}/>
      <Income  transaction={transaction}/>
      <TransactionList transaction={transaction} 
      deleteTransaction={deleteTransaction}/>
      <AddTransaction transaction={transaction} addTransaction={addTransaction}/>
    </>
  )
}

export default App
