import React from 'react'
import ColumnaIzquierda from '../componentes/ColumnaIzquierda'
import ColumnaCentral from '../componentes/ColumnaCentral'
import ColumnaDerecha from '../componentes/ColumnaDerecha'

function HomePage() {
    return (

        <>
            {/* Page Container */}
            <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
                <div className="w3-row">
                    <ColumnaIzquierda />
                    <ColumnaCentral />
                    <ColumnaDerecha />
                </div>
            </div>
            <br />
        </>



    )
}

export default HomePage