import axios from "axios";

export default function InputForm(props) {
    const CLIENT_URL = 'http://localhost:8080';
    async function handleSubmit() {
        try {
            const n = document.getElementById('expense-name-form').value;
            const c = document.getElementById('expense-category-form').value;
            const a = document.getElementById('expense-amount-form').value;
            const obj = {'id': props.editId, 'name': n, 'cat': c, 'amt': a};
            await axios.patch(CLIENT_URL+`/edit?id=${obj.id}&name=${obj.name}&cat=${obj.cat}&amt=${obj.amt}`);
            props.changeFn(props.change ? false: true);
            props.setShowFn(false);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="input-form-container">
            <label>Expense Title
                <input type="text" id="expense-name-form" />
            </label>
            <label>Expense Cateogory
                <input type="text" id="expense-category-form" />
            </label>
            <label>Expense Amount
                <input type="number" id="expense-amount-form" />
            </label>
            <button onClick={handleSubmit}>Change</button>
        </div>
    );
}