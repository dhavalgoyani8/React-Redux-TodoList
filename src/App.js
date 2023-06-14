import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo, checkTodo, deleteTodo, editTodo } from "./redux/actions/action";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");

  const selector = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  // Add Todo Input
  const handleInput = (event) => {
    if (inputValue === "") {
      alert("PLEASE FILL THE DATA IN INPUT BELLOW");
    } else {
      if (event.key === "Enter") {
        dispatch(
          addTodo({
            id: selector.length + 1,
            task: inputValue,
            complete: false,
          })
        );
        setInputValue("");
      }
    }
  };

  // Delete Todo
  const handleDelete = (id) => {
    dispatch(deleteTodo(selector.filter((val) => val.id !== id)));
  };

  // Check Todo
  const handleCheck = (id) => {
    let check = selector.map((val) => {
      console.log(val);
      if (id === val.id) {
        return { ...val, complete: !val.complete };
      } else {
        return val;
      }
    });
    dispatch(checkTodo(check));
  };

  // Edit Todo
  const updateTask = (val) => {
    setEditTaskValue(val.task);
    setEditTaskId(val.id);
  };

  const handleEditTask = (event,id) => {
    let update = selector.map(val=>{
      if(id === val.id){
        return {...val, task:editTaskValue}
      }
      return val
    })

    if(event.key === "Enter"){
      dispatch(editTodo(update));
      setEditTaskId(null);
      setEditTaskValue("")
    }
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={handleInput}
      />

      {selector.map((val) => {
        return (
          <div key={val.id}>
            <input
              type="checkBox"
              checked={val.complete}
              onChange={() => handleCheck(val.id)}
            />{" "}
            <span
              style={{ textDecoration: val.complete ? "line-through" : "none" }}
              onDoubleClick={() => updateTask(val)}>
              {editTaskId === val.id ? (
                <input
                  type="text"
                  value={editTaskValue}
                  onChange={(event) => setEditTaskValue(event.target.value)}
                  onKeyPress={(event)=>handleEditTask(event,val.id)}
                />
              ) : (
                <label>{val.task}</label>
              )}
            </span>{" "}
            <button onClick={() => handleDelete(val.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
