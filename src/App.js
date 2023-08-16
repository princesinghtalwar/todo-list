import React, { useState } from 'react';
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import Navbar from './Navbar';
 
import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
 return (
   <div className="App">
    <Navbar title="Todo List" />
     <Header title="To Do List" />
     <ToDoList toDoList={toDoList}/>
   </div>
 );
}
 
export default App;