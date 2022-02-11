import './App.css';
import React from 'react'
import Header from  './components/Header';
import Tasks from  './components/Tasks';
import { useState } from "react"

const App = () => {

    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "doctor's appointment",
        day: "february 5th at 2:30 Pm",
        reminder: true,
    }, {
        id: 2,
        text: "Meeting at school",
        day: "january 5th at 2:30 Pm",
        reminder: true,
    }, {
        id: 3,
        text: "Food Shopping",
        day: "november 5th at 2:30 Pm",
        reminder: true,
    },
    ])

    const deletetask = (id) => {
      console.log("deleted", id)
    } 
  
  
  return (
    <div className="container">
        <Header title="Hello" />
        <Tasks tasks = {tasks} onDelete={deletetask} />
    </div>
  )
}

export default App;
