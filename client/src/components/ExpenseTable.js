import ExpenseRow from './ExpenseRow.js';
import { React, useEffect, useState } from 'react';

export default function ExpenseTable(props) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        function getTotal() {
            let sum = 0;
            if (props.expenses && Array.isArray(props.expenses)) {
                props.expenses.forEach(element => {
                    sum += Number(element.amount);
                });
            }
            setTotal(sum);
        }
        getTotal();
    }, [props.expenses]);
    
    return (
        <table className='expense-table'>
          <tr className='expense-table-row'>
            <th className='expense-table-sno'></th>
            <th className='expense-table-title'>Title</th>
            <th className='expense-table-cat'>Category</th>
            <th className='expense-table-amt'>Amount</th>
            <th></th>
            <th></th>
          </tr>
          {props.expenses.map((expense) => <ExpenseRow key={expense.id} sno={expense.id} title={expense.expense_name} cat={expense.expense_cat} amt={expense.amount} date={props.expense_date} edit={props.editSVG} delete={props.deleteSVG} show={props.show} setShowFn={props.setShowFn} setEditIdFn={props.setEditIdFn} change={props.change} changeFn={props.changeFn} /> )}           
          <tr className='expense-table-row'>
            <td></td>
            <td></td>
            <td className='expense-table-cat'>Total</td>
            <td className='expense-table-amt'>{total}</td>
          </tr>
        </table>
    );
}