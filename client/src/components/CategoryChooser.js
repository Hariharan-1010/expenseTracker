import axios from 'axios';

const CLIENT_URL = 'http://localhost:8080';
export default function(props) {
    async function changeResults() {
        try {
            const c = document.getElementById('category-choice').value;
            const result = await axios.get(CLIENT_URL+`/catFilter?cat=${c}`);
            props.setExpensesFn(result.data.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='category-chooser'>
          <select  id='category-choice' name='category-choice'  defaultValue={'categories'}>
            {props.categories.map((cat) => <option key={cat} value={cat} >{cat }</option>)}
          </select>
          <button onClick={changeResults} className='choose-category'>Go</button>
        </div>
    );
}