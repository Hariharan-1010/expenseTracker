import axios from "axios";

const CLIENT_URL = 'http://localhost:8080';
export default function ExpenseRow(props) {
    function handleClick(e) {
        const id = e.target.id;
        props.setShowFn(props.show ? false: true);
        props.setEditIdFn(id);
    }
    async function handleDelete(e) {
        const id = e.target.id;
        await axios.delete(CLIENT_URL+`/delete?id=${id}`);
        props.changeFn(props.change ? false: true);
    }
    return (
        <tr className='expense-table-row'>
            <td className={`expense-table-title ${props.sno}`}>{props.title}</td>
            <td className={`expense-table-cat ${props.sno}`}>{props.cat}</td>
            <td className={`expense-table-amt ${props.sno}`}>{props.amt}</td>
            <td><button id={props.sno} className='edit-button' onClick={(e) => handleClick(e)}><img id={props.sno} alt='edit button svg' className='edit-button-svg' src={props.edit}/></button></td>
            <td><button id={props.sno} className='delete-button' onClick={(e) => handleDelete(e)}><img id={props.sno} alt='delete button svg' className='delete-button-svg' src={props.delete}/></button></td>
          </tr>
    );
}

