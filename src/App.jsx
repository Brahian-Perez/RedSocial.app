
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ConfigPage from './pages/ConfigPage'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import GroupPage from './pages/GroupPage'
import RegisterPage from './pages/RegisterPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route element={<MainLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/configuracion" element={<ConfigPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/grupos" element={<GroupPage />} />
          </Route>
            <Route path="/" element={<LoginPage />} />
            <Route path="/registro" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}


export default App
