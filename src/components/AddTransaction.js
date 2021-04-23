import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || (amount && amount.trim() === "")) {
      alert("Please add a text and amount");
    } else {
      const newTransaction = {
        id: generateID(),
        text: text,
        amount: +amount,
      };
      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    }
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
