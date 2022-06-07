

export const addTodo=(newtodo)=>{
    return {
    type:"Add",
    payload:newtodo
};
   
}
export const deleteTodo=(id)=>{return {
    type:"DELETE",
    payload:id
};
   
}
export const doneTodo=(id)=>{return {
    type:"Done",
    payload:id
};
   
}
export const editTodo=(id,newText)=>{return {
    type:"Edit",
    payload:{id,newText} 
};
   
}
export const showDoneTodo=()=>{return {
    type:"SHOWDONE",
   
};
   
}

   