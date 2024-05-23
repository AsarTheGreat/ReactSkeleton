import { useState } from "react";
import styles from '../css/form.module.css'

export default function Form({todos, setTodos})
{
    //const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name:"", done: false});

    function handleSubmit(e)
    {
        e.preventDefault();
        setTodos([...todos, todo]);
        //to empty out input field after adding item
        //setTodo("");
        setTodo({name:"", done: false});
    }
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input className={styles.modernInput} onChange={(e) => setTodo({name:e.target.value, done: false})} type="text" value={todo.name} placeholder="Enter todo here..."></input>
                <button className={styles.modernButton} type="submit">Add</button>
            </div>
        </form>
    );
}