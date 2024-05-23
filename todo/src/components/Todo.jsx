import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo()
{
    //We leave this here because both Form and TodoList needs todos
    const [todos, setTodos] = useState([]);

    //Properties passed to Footer
    const completed = todos.filter((t) => t.done).length;
    const total = todos.length;

    //Sorting option. Pass this in the Form and TodoList property
    //const sortedList = todos.filter((t) => !t.done).concat(todos.filter((t) => t.done));

    return(
        //Need to pass setTodos in order to perform the deletion method
        <div>
            <Form todos={todos} setTodos={setTodos}></Form>
            <TodoList todos={todos} setTodos={setTodos}></TodoList>
            <Footer completedTodos={completed} totalTodos={total}></Footer>
        </div>
    );
}