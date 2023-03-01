import React from 'react'

import "./Buttom.css";
function Buttom({handleClick}) {
  return (
    <button onClick={handleClick} className='buttom'> 
    <a href=""> <i class="fa-solid fa-chevron-right"></i> </a>
  </button>
  )
}

export default Buttom