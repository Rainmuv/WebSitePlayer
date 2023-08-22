import React from 'react';
import './Input.scss'
import svgButton from '../../assets/Union.svg'

export const Input = () => {
  return (
    <div className='input_wrapper'>
      <p className='input_wrapper-title' >Insert the link</p>
      <div className='input_wrapper-label' >
        <input type="text" placeholder='https://' />
        <button>
          <img src={svgButton} alt="#awwdad" />
        </button>
      </div>
    </div>
  )
}
