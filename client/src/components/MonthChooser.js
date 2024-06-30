import axios from 'axios';


const CLIENT_URL = 'http://localhost:8080';
export default function(props) {
    
    async function changeResults() {
        const month = document.getElementById('month-choice').value;
        const year = document.getElementById('year-choice').value;
        try {
            const result = await axios.get(CLIENT_URL+`/month?month=${month}&year=${year}`);
            if(result.data.data.length > 0)  props.setExpensesFn(result.data.data);
            else props.setExpensesFn([{id: 0, expense_name: '----', expense_cat: '----', amount: 0}]);
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='month-chooser'>
            <select name='month-choice' id='month-choice' defaultValue={'1'}>
                <option value='1'>Jan</option>
                <option value='2'>Feb</option>
                <option value='3'>Mar</option>
                <option value='4'>Apr</option>
                <option value='5'>May</option>
                <option value='6'>Jun</option>
                <option value='7'>Jul</option>
                <option value='8'>Aug</option>
                <option value='9'>Sep</option>
                <option value='10'>Oct</option>
                <option value='11'>Nov</option>
                <option value='12'>Dec</option>
            </select>
            <select name='year-choice' id='year-choice' defaultValue={'2024'}>
                {props.years.map((year) => <option key={year} value={year}>{year}</option>)}
            </select>
            <button onClick={changeResults}>Go</button>
        </div>
    );
}