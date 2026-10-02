import React from 'react'

function ButtonsFunction({name = 'default', icono = '', action  = () => {alert('default')}}) {
  return (
    <button className="w3-button w3-theme-d2 w3-round w3-" onClick={action}>
        <i className={icono} style={{ marginRight: '8px' }}></i> 
      {name}
    </button>
  )
}

export default ButtonsFunction