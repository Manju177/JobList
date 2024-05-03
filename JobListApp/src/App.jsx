import { useState } from 'react'
import './App.css'
import JobList from './Components/JobList/JobList';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <JobList/>
   </div>
  )
}

export default App
