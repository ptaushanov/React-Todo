import TodoList from './TodoList'
import useFetch from './useFetch'

const Home = () => {
    const {data:todos, isLoading, error } = useFetch("http://localhost:8000/todos") 
    
    return ( 
        <div className="home">
            { isLoading && <p className= "event" >Loading TODO's ...</p> }
            { error && <p className = "event"> { error.message } </p>}
            { todos && <TodoList todos = {todos}/>}
        </div>
     );
}
 
export default Home;