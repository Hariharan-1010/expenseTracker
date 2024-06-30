import { React, useState, useEffect } from 'react';
import './App.css';
import editSVG from './assets/edit-svg.svg';
import deleteSVG from './assets/delete-svg.svg';
import ExpenseTable from './components/ExpenseTable.js';
import InsertExpense from './components/InsertExpense.js';
import CategoryChooser from './components/CategoryChooser.js';
import MonthChooser from './components/MonthChooser.js';
import InputForm from './components/InputForm.js';
import axios from 'axios';

function App() {
  const CLIENT_URL = 'http://localhost:8080';
  const [expenses, setExpenses] = useState([{
    'id': 1,
    'expense_name': 'Title of expense',
    'expense_cat': 'Category of expense',
    'amount': 10000.00,
    'expense_date': '20-04-2024',
    'created_at': '20-04-2024',
    'updated_at': '20-04-2024',
  }, 
  {
    'id': 2,
    'expense_name': 'Title of expense',
    'expense_cat': 'Category of expense',
    'amount': 10000.00,
    'expense_date': '20-04-2024',
    'created_at': '20-04-2024',
    'updated_at': '20-04-2024',
  }, 
  {
    'id': 3,
    'expense_name': 'Title of expense',
    'expense_cat': 'Category of expense',
    'amount': 10000.00,
    'expense_date': '20-04-2024',
    'created_at': '20-04-2024',
    'updated_at': '20-04-2024',
  }, 
  {
    'id': 4,
    'expense_name': 'Title of expense',
    'expense_cat': 'Category of expense',
    'amount': 10000.00,
    'expense_date': '20-04-2024',
    'created_at': '20-04-2024',
    'updated_at': '20-04-2024',
  }, 
  {
    'id': 5,
    'expense_name': 'Title of expense',
    'expense_cat': 'Category of expense',
    'amount': 10000.00,
    'expense_date': '20-04-2024',
    'created_at': '20-04-2024',
    'updated_at': '20-04-2024',
  }]);
  const [years, setYears] = useState([2024]);
  const [cats, setCats] = useState(['category']);
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(0);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(CLIENT_URL+`/all`);
        setExpenses(result.data.data);
        try {
          const result = await axios.get(CLIENT_URL+`/years`);
          setYears(result.data.data.map((year) => year.extract));
        } catch (error) {
          console.log(error);
        }
        try {
          const result = await axios.get(CLIENT_URL+`/cat`);
          setCats(result.data.data.map((cat) => cat.expense_cat));
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [changed]);
  

  return (
    <div className="App">
      <div className='expense-table-container'>
        <ExpenseTable change={changed} changeFn={setChanged} show={show} setEditIdFn={setEditId} setShowFn={setShow} expenses={expenses} editSVG={editSVG} deleteSVG={deleteSVG} />
      </div>
      <div className='other-fns'>
      {show && <InputForm editId={editId} change={changed} changeFn={setChanged} show={show} setShowFn={setShow}/>}
        <InsertExpense change={changed} changeFn={setChanged} />
        <CategoryChooser setExpensesFn={setExpenses} categories={cats} />
        <MonthChooser setExpensesFn={setExpenses} years={years} />
      </div>
    </div>
  );
}


export default App;
