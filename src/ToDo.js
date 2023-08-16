import React from 'react';

const toggleStatus = () =>{
    alert("Yes");
}

const ToDo = ({todo}) => {
   return (
       <div className={todo.complete ? "strike" : ""} onClick={toggleStatus} style={{border:'1px solid gray'}}> 
           {todo.task}
       </div>
   );
};
export default ToDo;