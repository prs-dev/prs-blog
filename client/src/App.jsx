import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'
import { PrivateRoute } from './components/PrivateRoute'
import Dashboard from './pages/Dashboard'

const App = () => {
  console.log(PrivateRoute)
  return (
    <>
    <Header />
    <main className='w-full h-screen'>
      <Toaster position='top-center'/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App