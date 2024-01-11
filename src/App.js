import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Home from './pages/Home'
import Workouts from './pages/Workouts'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <div className="pages">   
            <Routes>
              <Route
                path='/'
                element={<Home/>}
              />
              <Route
                path='/workouts'
                element={user ? <Workouts/> : <Navigate to='/login'/>}
              />
              <Route
                path='/login'
                element={!user ? <Login/> : <Navigate to='/workouts'/>}
              />
              <Route
                path='/signup'
                element={!user ? <Signup/> : <Navigate to='/workouts'/>}
              />
            </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
