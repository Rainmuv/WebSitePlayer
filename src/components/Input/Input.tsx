import React, { MutableRefObject, FC } from 'react';
import './Input.scss'
import svgButton from '../../assets/Union.svg'
import { ErrorMesege } from '../ErrorMesege/ErrorMesege';
import { useDispatch, useSelector } from 'react-redux';
import { sendLink } from '../../redux/slices/TageAudioSlice';
import { reverseState, selectInput } from '../../redux/slices/InputSlice';
import { errorMesege } from '../../redux/slices/InputSlice'



export const Input: FC = () => {
  const stateInpRef = React.useRef() as MutableRefObject<HTMLInputElement>
  const dispatch = useDispatch()
  const { errMes } = useSelector(selectInput)

  function onClickInput() {
    if(stateInpRef.current.value.includes('https://')) {
      dispatch(sendLink(stateInpRef.current.value))
      dispatch(reverseState())
      dispatch(errorMesege(false))
    } else {
      dispatch(errorMesege(true))
    }
  }

  

  return (
    <div className='input_wrapper'>
      <p className='input_wrapper-title' >Insert the link</p>
      <div className='input_wrapper-label' >
        <input ref={stateInpRef} type="text" placeholder='https://' />
        <button onClick={onClickInput} >
          <img src={svgButton} alt="#awwdad" />
        </button>
      </div>
      {errMes && <ErrorMesege/>}
    </div>
  )
}
