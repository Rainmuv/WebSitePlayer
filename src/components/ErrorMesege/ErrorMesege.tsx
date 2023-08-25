import React from 'react'
import IconError from '../../assets/Icon.svg';
import IconClose from '../../assets/close.svg';
import { errorMesege } from '../../redux/slices/InputSlice';
import { useDispatch } from 'react-redux';

import './ErrorMesege.scss'


export const ErrorMesege = () => {
  const dispatch = useDispatch()

  return (
    <div className='error'>
      <img className='error-imgErr' src={IconError} alt="#Icon" />
      <div className='error-text' >
        <h3 className='error-text_title' >Warning</h3>
        <p className='error-text_subtitle' >Error message here</p>
      </div>
      <img className='error-imgClose' onClick={() => dispatch(errorMesege(false))} src={IconClose} alt="#close" />
    </div>
  )
}
