import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Error from './pages/Error404'
import PersonDetails from './pages/PersonDetails'

function App() {
  return (      
      <div className='min-h-screen bg-zinc-100 '>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/person/details/:id' element={<PersonDetails />}/>

          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
  )
}

export default App
