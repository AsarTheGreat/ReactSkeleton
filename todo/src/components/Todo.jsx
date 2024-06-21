import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo()
{
    //We leave this here because both Form and TodoList needs todos
    const [todos, setTodos] = useState([]);

    //Properties passed to Footer

    return(
        //Need to pass setTodos in order to perform the deletion method
        <div>
            <Form todos={todos} setTodos={setTodos}></Form>
            <TodoList todos={todos} setTodos={setTodos}></TodoList>
            <Footer></Footer>
        </div>
    );
}