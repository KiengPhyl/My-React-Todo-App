import styles from "../styles.module.css";
import shortid from "shortid";

const Form =({ todo, setTodo, todoList, setTodoList })=>{
    const handleChange = (event) =>{
        setTodo(event.target.value); 
    }
    const handleSubmit = (event) =>{
        setTodoList([...todoList,{name: todo, id: shortid.generate()}]);
        event.preventDefault();
        console.log(todoList);
        setTodo("");
    }
    return(
        <div>
                <form onSubmit={handleSubmit}>
                    <input value={todo} 
                    onChange={handleChange} 
                    className={styles.todoinput} 
                    placeholder="Add Todo Item"
                    ></input>
                    <button type="submit" className={styles.todobutton}>Add</button>
                </form>
        </div>
    )
}
export default Form;