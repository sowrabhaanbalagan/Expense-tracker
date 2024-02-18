import React,{useState}from "react";

const AddTransaction=({addTransaction}) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(text, Number(amount));
    setText("");
    setAmount("");
  };
  
    return(
        <>
        <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">  
          <label htmlFor="text">Text</label>
          <input type="text" value={text} id="text"  onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
         (negative - expense, positive - income)</label>
          <input type="number" value={amount} id="amount"  onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      </>
    )
}
export default AddTransaction