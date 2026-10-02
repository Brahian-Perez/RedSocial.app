
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ConfigPage from './pages/ConfigPage'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/configuracion" element={<ConfigPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}


export default App
