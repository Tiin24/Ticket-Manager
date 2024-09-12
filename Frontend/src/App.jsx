import { Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import Dashboard from './pages/Dashboard'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
