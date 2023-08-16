import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList}) => {
   return (
       <div id="ToDoList" class="card rounded border-0 shadow-sm position-relative">
         {/* <div class="d-flex align-items-center mb-4 pb-4 border-bottom"><i class="far fa-calendar-alt fa-3x"></i>
                            <div class="ms-3">
                                <h4 class="text-uppercase fw-weight-bold mb-0">Wednesday</h4>
                                <p class="text-gray fst-italic mb-0">05 December 2020</p>
                            </div>
                        </div> */}
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} />
               )
           })}
       </div>
   );
};
 
export default ToDoList;