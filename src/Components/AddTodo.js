import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addTodo} from '../redux/actions'
function AddTodo() {
    const dispatch=useDispatch();
    const [text,setText]=useState("");
    const handelAdd=(e)=>{e.preventDefault()
    if(text){
      dispatch(addTodo({id:Math.random(),done:false,text} )) }
      setText("")
    }
  return (
    
    <Form onSubmit={handelAdd} style={{width:'500px',display:"flex",margin:"auto"}}>
      
  <Form.Control value={text} size="lg" type="text" placeholder="add text"  
  onChange={e=>setText(e.target.value)}
  />
  <Button variant="info" type='submit' 
    
   >Add</Button>
  </Form>
  )
}

export default AddTodo