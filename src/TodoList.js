import { Link } from "react-router-dom"

const TodoList = (props) => {
    const { todos } = props

    return ( 
        <div className="todo-list">
            { todos.map(todo => (
                <div className="todo-element" key={ todo.id }>
                    <Link to= {"/details/" + todo.id} >
                        <h2>Task: {todo.title}</h2>
                        <p>Importance: {todo.importance}</p>
                    </Link>
                </div>
            )) }
        </div>
    );
}
 
export default TodoList;