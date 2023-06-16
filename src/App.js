import "./App.css";
import TodoList from "./redux/components/TodoList";

function App() {
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;

// let arr = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
// // let arr = [1,2,3,4,5,6,7,8,9]

// let run = () => {
//   arr.map((e,i) => {
//     if(arr[i] === e){
//       console.log("object")
//     }else{
//       console.log("ss");
//     }
//   });
// };

// let t = setInterval(run(), 5000);
