import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import MainLayout from './layouts/MainLayout'
import ConfigPage from './pages/ConfigPage'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import GroupPage from './pages/GroupPage'
import RegisterPage from './pages/RegisterPage'


function App() {
  let { usuario } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={usuario ? <MainLayout /> : <Navigate to="/" />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/configuracion" element={<ConfigPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/grupos" element={<GroupPage />} />
          </Route>
          <Route path="/" element={usuario ? <Navigate to="/home" /> : <LoginPage />} />
          <Route path="/registro" element={usuario ? <Navigate to="/home" /> : <RegisterPage />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}


export default App
