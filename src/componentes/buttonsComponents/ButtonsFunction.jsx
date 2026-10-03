import React from 'react'

function ButtonsFunction({ name = 'default', icono = '', action = () => { alert('default') }, color = 'w3-theme-d2', extraClass = '' }) {
  return (
    <button className={`w3-button ${color} w3-round ${extraClass}`} onClick={action}>
        <i className={icono} style={{ marginRight: '8px' }}></i>
      {name}
    </button>
  )
}

export default ButtonsFunction