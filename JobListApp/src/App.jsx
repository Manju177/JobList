import { useState } from 'react'
import './App.css'
import JobList from './Components/JobList/JobList';
import {BrowserRouter,Route,Routes} from 'react-router-dom' 

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<JobList/>} exact/>
      {/* <Route path='/xyz' element={<xyz/>} /> */}
      </Routes>
     </BrowserRouter>
   </div>
  )
}

export default App
