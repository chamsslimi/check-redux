
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'; 
import AddTodo from './Components/AddTodo'
import Edit from './Components/Edit';

import { deleteTodo, doneTodo } from './redux/actions';
function App(){
const todos=useSelector(state=>state.todos)
const dispatch=useDispatch()
const [filter,setFilter]=useState(false);
const[done,setDone]=useState(false);
  return (<>
  <div style={{margin:'auto',width:'500px',display:'flex',justifyContent:'space-around'}}>
    <AddTodo/> 
        <div style={{margin:'auto',width:'350px'}}>
            <Button variant='outline-success' onClick={()=>setFilter(false)}> All</Button>
            <Button variant='outline-danger' onClick={()=>{setFilter(true);setDone(true)}}> Done</Button>
            <Button variant='outline-info'onClick={()=>{setFilter(true);setDone(false)}}> Not Done</Button>
        </div>
  </div>
   {!filter?
    <div >{
    todos.map(todo=><div style={{margin:"auto",padding:"10px",width:"500px",display:"flex",justifyContent:"space-around",  alignItems:"center"}}>
    <p style={{textDecoration:todo.done?"line-through":null}}>{todo.text}</p>
    <Button variant="danger" onClick={()=> dispatch(deleteTodo(todo.id))}>delete</Button>
    <Button variant="primary" onClick={()=> dispatch(doneTodo(todo.id))}>done</Button>
    <Edit todo={todo} /> 
    </div>)
    }</div> :done? <div >{
      todos.filter(todo=>todo.done===true) .map(todo=><div style={{margin:"auto",padding:"10px",width:"500px",display:"flex",justifyContent:"space-around",  alignItems:"center"}}>
      <p style={{textDecoration:todo.done?"line-through":null}}>{todo.text}</p>
      <Button variant="danger" onClick={()=> dispatch(deleteTodo(todo.id))}>delete</Button>
      <Button variant="primary" onClick={()=> dispatch(doneTodo(todo.id))}>done</Button>
      <Edit todo={todo} /> 
      </div>)
      }</div>:<div >{
        todos.filter(todo=>todo.done===false) .map(todo=><div style={{margin:"auto",padding:"10px",width:"500px",display:"flex",justifyContent:"space-around",  alignItems:"center"}}>
        <p style={{textDecoration:todo.done?"line-through":null}}>{todo.text}</p>
        <Button variant="danger" onClick={()=> dispatch(deleteTodo(todo.id))}>delete</Button>
        <Button variant="primary" onClick={()=> dispatch(doneTodo(todo.id))}>done</Button>
        <Edit todo={todo} /> 
        </div>)
        }</div> }
  </>
    
  )
}
    
 
  //  donetodo=(id)=>{this.setState({todos:this.state.todos.map(todo=>!todo.done)})}
 
   
  

export default App;
