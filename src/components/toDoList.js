
import ToDo from "./todo";

function ToDoList(props) {
  //console.log("mein aya");
  return (

    <div className="px-80 py-4 " align="left">
      <hr className="mb-4 border-t-2 border-t-neutral-300"/>
      <div className="text-4xl tracking-wide font-bold" >Your Todos</div>
      <hr className="mt-4 border-t-2 border-t-neutral-300"/>
      <div>
        {props.todo.length===0?"No Todo is there":props.todo.map((ele,idx)=>{
         // console.log(ele);
          if(ele.check===false){
          return (<ToDo todo={props.todo} ele = {ele} setTodo = {props.setTodo} idx = {idx}/>)
}
else return (<div></div>)
})}
      
        </div>
        <div>
        {props.todo.length===0?"":props.todo.map((ele,idx)=>{
         // console.log(ele);
         if(ele.check===true){return (<ToDo todo={props.todo} ele = {ele} setTodo = {props.setTodo} idx = {idx}/>)
        }
        else return <div></div>})}
        </div>
        
        <hr className="mt-4 border-t-neutral-300 border-t-2"/>
    </div>
  );
}



export default ToDoList;
