import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
    const [todos, setTodos] = useState([{ task: "sampleTask", id: uuidv4() }]);
    const [newTodo, setNewTodo] = useState("");

    const setlist = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo("");
    };

    const deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTODO = (event) => {
        setNewTodo(event.target.value);
    };

    const uppercase = () => {
        setTodos((todos) =>
            todos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase()
            }))
        );
    };
  const MarkisDone = (id) => {
    setTodos((todos) =>
        todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: true  // ✅ Correctly set isDone
                };
            }
            return todo; // ✅ Return unchanged task if id doesn't match
        })
    );
};

 const ALLMarkisDone = (id) => {
    setTodos((todos) =>
        todos.map((todo) => {
                return {
                    ...todo,
                    isDone: true  // ✅ Correctly set isDone
                };
            
            return todo; // ✅ Return unchanged task if id doesn't match
        })
    );
};


return (
    <div>
        <hr />
        <input
            placeholder="Type here Your List"
            value={newTodo}
            onChange={updateTODO}
        />
        <button onClick={setlist}>ADD TASK</button>
        <br />
        <hr />
        <h3>YOUR TODO LIST</h3>
        <ul>
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        padding: "5px"
                    }}
                >
                    <li style={todo.isDone? {textDecorationLine:"line-through"}:{}}>{todo.task}</li>
                    <button onClick={() => deleteTask(todo.id)}>Delete</button>
                    <button onClick={() => MarkisDone(todo.id)}>Mark Is Done</button>
                </div>
            ))}
        </ul>
        <button onClick={uppercase}>UPPERCASE ALL</button>
        <button onClick={ALLMarkisDone}>MARK-ALL-Done</button>

        <hr />
    </div>
);
}
