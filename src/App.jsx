import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PersonDetails from './pages/PersonDetails'

function App() {
  return (      
      <div className='min-h-screen bg-zinc-100'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/person/details/:id' element={<PersonDetails />}/>
        </Routes>
      </div>
  )
}

export default App
