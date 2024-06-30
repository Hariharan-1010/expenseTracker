import { useState } from "react";
import axios from "axios";

export default function InsertExpense(props) {
    const CLIENT_URL = 'http://localhost:8080';
    const [newExpense, setNewExpense] = useState(false);
    async function sendData(title, cat, amt, date) {
        try {
            await axios.post(CLIENT_URL+`/insert`, {'title': title, 'cat': cat, 'amt': amt, 'date': date});
            setNewExpense(false);
            props.changeFn(props.change ? false : true);
            
        } catch (error) {
            console.log(error);
        }
    }
    function handleClick() {
        try {
            const title = document.getElementById('new-expense-title').value;
            const cat = document.getElementById('new-expense-cat').value;
            const amt = document.getElementById('new-expense-amt').value;
            const date = document.getElementById('new-expense-date').value;
            sendData(title, cat,amt, date);
            
        } catch (error) {
            console.log(error);
        }
    }
    function showForm() {
        setNewExpense(newExpense ? false: true);
    }
    return (
        <div className="new-expense-container">
            {newExpense && <div>
                <label>Expense Title
                    <input id="new-expense-title" type="text" />
                </label>
                <label>Expense Category
                    <input id="new-expense-cat" type="text" />
                </label>
                <label>Amount
                    <input id="new-expense-amt" type="number" />
                </label>
                <label>Expense date
                    <input id="new-expense-date" type="date" />
                </label>
                <button onClick={handleClick}>Insert</button>
            </div>}
            <button onClick={showForm} className='insert-expense-button'>Add New Expense</button>
        </div>
    );
}