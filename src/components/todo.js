import { useState } from 'react';
var transormDate = (stringdate) => {
  var d = new Date(stringdate);
  var am = false;
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var hour = d.getHours();
  var minutes = d.getMinutes();
  if (hour < 12) am = true;
  return date + '/' + month + '/' + year + ' ' + hour % 12 + ':' + minutes + ' ' + (am ? "AM" : "PM");
}

function ToDo(props) {
  let tempdata = [];
  let temp = {};
  var check = (idx) => {

    for (let i = 0; i < props.todo.length; i++) {
      if (i == idx) {
        temp = props.todo[i];
        props.todo[i].check = true;
      }
      {
        tempdata.push(props.todo[i]);
      }
    }
    props.setTodo(tempdata);


  }
  var deletetodo = (idx) => {

    for (let i = 0; i < props.todo.length; i++) {
      if (i !== idx){
        tempdata.push(props.todo[i]);
      }
    }
    props.setTodo(tempdata);


  }

  return (
    <div className=" border-2 border-neutral-300 mt-3 px-4 py-5 mr-4 w-full">
      <div className="flex">
        <input className=" w-6 h-5 mt-2 mr-1" type="checkbox" checked={props.ele.check} onChange={() => check(props.idx)} />
        {(props.ele.check) ? <h3 className=" text-2xl line-through font-bold mt-0 mx-1">{props.ele.title}</h3> : <h3 className=" text-2xl font-bold mt-0 mx-1">{props.ele.title}</h3>}

        {(props.ele.check) ? <p className=" mt-2 mx-7 line-through text-sm">{"assigned at " + transormDate(props.ele.date)}</p>:<p className=" mt-2 mx-7 text-sm">{"assigned at " + transormDate(props.ele.date)}</p>}
      </div>
      <div>
      {(props.ele.check) ? <p className="m-3 line-through text-base">{props.ele.desc}</p>:<p className="m-3 text-base">{props.ele.desc}</p>}
      </div>
      <button class=" bg-red-400 px-8 py-2 text-white rounded" onClick={()=>deletetodo(props.idx)}>Delete</button>
    </div>
  );
}


export default ToDo;
