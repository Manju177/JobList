import { useState } from 'react'
import './App.css'
import Button from '@material-ui/core/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
  <Button variant="contained">Default</Button>
   </div>
  )
}

export default App
