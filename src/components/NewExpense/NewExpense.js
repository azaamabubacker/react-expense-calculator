import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(true);

  const addExpenseHandler = () => {
    setIsEditing(false);
  };

  const addCancelButtonHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(true);
  };
  return (
    <div className="new-expense">
      {isEditing && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {!isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={addCancelButtonHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
