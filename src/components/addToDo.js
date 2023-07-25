import {useState} from 'react';
function AddToDo(props) {

    var [newtodo,setNewtodo] = useState({
        title:"",desc:""
    })

    var handleInput = (event)=>{
        setNewtodo({...newtodo,[event.target.name]:event.target.value})
       // console.log(newtodo);
    }
    var updateTodo = ()=>{
        if(!newtodo.title || !newtodo.desc){
            alert("title or description no there");
        }
        var newobj = {
            title:newtodo.title,
            desc:newtodo.desc,
            date:new Date(),
            check:false
        }
        //console.log(typeof(todo));
        //todo.push(newobj);
        props.setTodo([newobj,...props.todo]);

        setNewtodo({title:"",desc:""})
    }
  return (
      
      
    
    <div className=" px-[4%] sm:px-[10%] md:px-[15%] py-4 " align="left">
    <hr className="mb-4 border-t-2 border-t-neutral-300"/>
    
    <div className="text-4xl tracking-wide font-bold" >Welcome to ToDo App</div>
    <div className="border-2 border-neutral-300 mt-3 px-6 py-4">
        <p className=" text-2xl mb-3"><b>Add New Todo</b></p>
        <div>
            <p className="text-2xl mb-2"><b>Title </b></p>
            <input className ="border-2 border-neutral-300 mt-1 px-1 py-1 w-full text-xl" type="text" name="title" value={newtodo.title} onChange={handleInput}/>
        </div>
        <div>
            <p className="text-2xl mb-3 mt-3"><b>Description</b></p>
            <textarea  className = "border-2 border-neutral-300 mt-3 mb-3 px-1 py-1 w-full text-xl h-20" name="desc" value = {newtodo.desc} onChange={handleInput} id="note0" cols="110" rows="5"></textarea>
        </div>
        <button class=" bg-blue-500 px-8 py-2 text-white rounded" onClick = {updateTodo}>Add ToDo</button>
    </div>
    </div>
  );
}


export default AddToDo;