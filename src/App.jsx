import Navbar from './componentes/Navbar'
import ColumnaIzquierda from './componentes/ColumnaIzquierda'
import ColumnaCentral from './componentes/ColumnaCentral'
import ColumnaDerecha from './componentes/ColumnaDerecha'
import Footer from './componentes/Footer'

function App() {
  return (
    <>
      <Navbar />

      {/* Page Container */}
      <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
        <div className="w3-row">
          <ColumnaIzquierda />
          <ColumnaCentral />
          <ColumnaDerecha />
        </div>
      </div>
      <br />

      <Footer />
    </>
  )
}

export default App
