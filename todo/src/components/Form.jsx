import { useState } from "react";
import styles from '../css/form.module.css'

export default function Form({todos, setTodos})
{
    //const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name:"", done: false});

    /**
     * 
     * function to handleSubmit 
     */

    return (
        <div>
            My Form
        </div>
    );
}