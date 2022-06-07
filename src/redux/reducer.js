const initialState={
    todos:[{id:1,done:false,text:"learn js"}
,{id:2,done:false,text:"learn react"}],

}
function reducer(state=initialState,action){
    switch (action.type) {
        case "Add":
            return{
                ...state,todos:[...state.todos,action.payload]
            }
        case "DELETE":
            return{
               todos:state.todos.filter(todo=>todo.id!==action.payload)  
            }    
            case "Done":
                return{
                   todos:state.todos.map(todo=>todo.id===action.payload?{...todo,done:!todo.done}:todo)  
                } 
            case "Edit":
                return{
                       todos:state.todos.map(todo=>todo.id===action.payload.id?{...todo,text:action.payload.newText}:todo)  
                }  
            case "SHOWDONE":
                return{
                    todos:state.todos.filter(todo=>todo.done===true)   
                } 
              
        default:
            return state
    }
}
export default reducer;