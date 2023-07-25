import {useState} from 'react';
import './App.css';
import Header from './components/header';
import ToDoList from './components/toDoList';
import AddToDo from './components/addToDo';
import Footer from './components/footer';


function App() {
  var [todo,setTodo] = useState([]);
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
