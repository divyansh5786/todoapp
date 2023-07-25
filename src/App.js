import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header';
import ToDoList from './components/toDoList';
import AddToDo from './components/addToDo';
import Footer from './components/footer';



function App() {
  var initialtoDo=[];
  if(localStorage.getItem("todos")!==null)
  initialtoDo = JSON.parse(localStorage.getItem("todos"));
  var [todo,setTodo] = useState(initialtoDo);

  console.log(todo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo));
  },[todo])
  return (
    <div className="App">
      <Header />
      <AddToDo todo={todo} setTodo = {setTodo}/>
      <ToDoList todo ={todo} setTodo = {setTodo}/>
      <Footer />
    </div>
  );
}


export default App;
