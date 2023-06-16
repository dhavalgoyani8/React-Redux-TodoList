import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  checkTodo,
  editTodo,
  showAllTodo,
  deleteAllCompleteTodo,
  deleteAllTodo,
  pendingTodo,
  completeTodo,
} from "../actions/action";
import { COMPLETE_TODO, PENDING_TODO } from "../actions/actionType";

function TodoList() {
  const [inputTodoTask, setInputTodoTask] = useState("");
  const [updateTodoTaskId, setUpdateTodoTaskId] = useState(null);
  const [updateTodoTaskValue, setUpdateTodoTaskValue] = useState("");

  const todoList = useSelector((state) => state.todoReducer.todoList);
  const filterString = useSelector((state) => state.todoReducer.filterString);
  const dispatch = useDispatch();

  // filter All Todo Data
  const filterTodoList = useMemo(() => {
    switch (filterString) {
      case PENDING_TODO:
        return todoList.filter((element) => !element.isComplete);

      case COMPLETE_TODO:
        return todoList.filter((element) => element.isComplete);

      default:
        return todoList;
    }
  }, [todoList, filterString]);

  // Add Todo Input ok
  const handleInputTodoTask = (event) => {
    if (inputTodoTask === "") {
      // alert("PLEASE FILL THE DATA IN INPUT BELLOW");
    } else {
      if (event.key === "Enter") {
        dispatch(addTodo(inputTodoTask));
        setInputTodoTask("");
      }
    }
  };

  // Delete Todo
  const handleDeleteTodoTask = (id) => {
    dispatch(deleteTodo(id));
  };

  // Check Todo
  const handleCheckTodoTask = (id) => {
    dispatch(checkTodo(id));
  };

  // Edit Todo
  const handleUpdateTodoTask = (task, id) => {
    setUpdateTodoTaskId(id);
    setUpdateTodoTaskValue(task);
  };

  const handleEditTodoTask = (event, id) => {
    if (updateTodoTaskValue !== "") {
      if (event.key === "Enter") {
        dispatch(editTodo(updateTodoTaskId, updateTodoTaskValue));
        setUpdateTodoTaskId(null);
        setUpdateTodoTaskValue("");
      }
    }
  };

  // Delete All Complete Todo
  const handleDeleteAllCompleteTodoTask = () => {
    if (
      window.confirm("Are you sure if you want to delete all Completed task ?")
    ) {
      dispatch(deleteAllCompleteTodo());
    } else {
      alert("Your Completed task is not deleted");
    }
  };

  // Delete All Todo
  const handleDeleteAllTodoTask = () => {
    if (window.confirm("Are you sure if you want to delete all task ?")) {
      dispatch(deleteAllTodo());
    } else {
      alert("Your task is not deleted");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Todo List</h1>

        <input
          type="text"
          value={inputTodoTask}
          onChange={(event) => setInputTodoTask(event.target.value)}
          onKeyPress={handleInputTodoTask}
        />

        {filterTodoList.map((element) => {
          return (
            <div key={element.id}>
              <input
                type="checkBox"
                checked={element.isComplete}
                onChange={() => handleCheckTodoTask(element.id)}
              />

              {"  "}

              <span
                style={{
                  textDecoration: element.isComplete ? "line-through" : "none",
                }}
                onDoubleClick={() =>
                  handleUpdateTodoTask(element.task, element.id)
                }>
                {updateTodoTaskId === element.id ? (
                  <input
                    type="text"
                    value={updateTodoTaskValue}
                    onChange={(event) =>
                      setUpdateTodoTaskValue(event.target.value)
                    }
                    onKeyPress={(event) =>
                      handleEditTodoTask(event, element.id)
                    }
                  />
                ) : (
                  <label>{element.task}</label>
                )}
              </span>

              {"  "}

              <button onClick={() => handleDeleteTodoTask(element.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <p>
          {" total task -"} <strong>{filterTodoList.length}</strong>
        </p>
        <button onClick={() => dispatch(showAllTodo())}>Show All</button>{" "}
        <button onClick={() => dispatch(pendingTodo())}>
          Pending All Task
        </button>{" "}
        <button onClick={() => dispatch(completeTodo())}>
          Complete All Task
        </button>
        {" //// "}
        <button onClick={handleDeleteAllCompleteTodoTask}>
          Delete All Completed Task
        </button>{" "}
        <button onClick={handleDeleteAllTodoTask}>Delete All Task</button>
      </div>
    </div>
  );
}

export default TodoList;
