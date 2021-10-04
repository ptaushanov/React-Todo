import useFetch from "./useFetch"
import { useParams, useHistory } from "react-router-dom"

const TaskDetails = () => {
    
    const { id } = useParams();
    const { data:task, isLoading, error } = useFetch("http://localhost:8000/todos/" + id)
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/todos/" + id, {
            method: "DELETE"
        }).then(() => {
            history.push("/")
        })
        .catch(err => {
            console.error(err)
        })
    }

    return ( 
        <div className="task-details">
            { isLoading && <p className = "event"> Loading task details ...</p> }
            { error && <p className = "event">{ error.message }</p>}
            { task && (
                <div className="content">
                    <h2>{ task.title }</h2>
                    { task.description.split("\n").map( par => (
                        <p>{par}</p>
                    )) }
                    <button onClick = { handleDelete }>Delete task</button>
                </div>
            )}
            
        </div>
    );
}
 
export default TaskDetails;