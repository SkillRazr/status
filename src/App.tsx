import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import StatusPage from './components/StatusPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/status' element={<StatusPage/>} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
