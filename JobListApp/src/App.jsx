import { useState } from 'react'
import './App.css'
import JobList from './Components/JobList/JobList';
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import JobDetails from './Components/JobList/JobDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<JobList/>} exact/>
      <Route path='/jobDetail/:id' element={<JobDetails/>} />
      </Routes>
     </BrowserRouter>
   </div>
  )
}

export default App
