import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ importance, setImportance ] = useState('');

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);

        fetch("http://localhost:8000/todos", {
            headers: { "Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({ title, description, importance })
        })
        .then(()=> {
            setIsPending(false)
            setError(null)
            history.push("/")
        })
        .catch(err => {
            setIsPending(false)
            setError(err)
        })
    }


    return ( 
        <div className="create-task">
            <h2>Create task</h2>

            <form onSubmit = { handleSubmit }>
                <label>Title: </label>
                <input 
                type="text"
                value={ title }
                onChange = { e => setTitle(e.target.value) }
                />

                <label>Description: </label>
                <textarea 
                type="text"
                value={ description }
                onChange = { e => setDescription(e.target.value) }
                ></textarea>

                <label>Importance: </label>
                <input 
                type="text"
                value={ importance }
                onChange = { e => setImportance(e.target.value) }
                />

                { error && <p className="event">{ error.message }</p> }
                { !isPending && <button>Add task</button> }
                { isPending && <button disabled>Pending ...</button> }
            </form>

        </div>
     );
}
 
export default Create;