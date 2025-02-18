import React from 'react'
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import Task from './Pages/Task/Task.jsx'
import Mentor from './Pages/Mentor/Mentor.jsx'
import Message from './Pages/Message/Message.jsx'
import Setting from './Pages/Setting/Setting.jsx'
import { Routes, Route } from 'react-router-dom'

function App(): JSX.Element {

  return (
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="task" element={<Task />}/>
        <Route path="mentor" element={<Mentor />}/>
        <Route path="message" element={<Message />}/>
        <Route path="setting" element={<Setting />}/>
    </Routes>
  )
}

export default App
