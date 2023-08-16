import React, { useState } from 'react';

const ToDo = ({todo}) => {
    const [ taskStatus, setTaskStatus ] = useState(todo.complete);

    const toggleStatus = () =>{
       if(taskStatus==="strike"){
            setTaskStatus("");
       }else{
            setTaskStatus("strike");
       }
    }

   return (
       <div className={taskStatus ? "strike" : ""}  > 
         <input type="checkbox" style={{marginRight:'10px',marginLeft:'20px',marginBottom:'10px'}} onClick={toggleStatus} />{todo.task}
       </div>
   );
};
export default ToDo;