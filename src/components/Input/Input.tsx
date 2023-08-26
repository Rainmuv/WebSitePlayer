import React, { MutableRefObject, FC } from 'react';
import './Input.scss'
import svgButton from '../../assets/Union.svg'
import { useDispatch, useSelector } from 'react-redux';
import { sendLink } from '../../redux/slices/TageAudioSlice';
import { reverseState, LocalStore, selectInput } from '../../redux/slices/InputSlice';
import { errorMesege } from '../../redux/slices/InputSlice';
import { LocalStorage } from '../../LocalStorage/LocalStorage';
import { SearchHistory } from '../SearchHistory/SearchHistory';



export const Input: FC = () => {
  const stateInpRef = React.useRef() as MutableRefObject<HTMLInputElement>
  const dispatch = useDispatch()
  const { local } = useSelector(selectInput)

  function onClickBtn() {
     
    if(stateInpRef.current.value.includes('https://')) {
      dispatch(sendLink(stateInpRef.current.value))
      LocalStorage(stateInpRef.current.value)
      dispatch(reverseState())
      dispatch(errorMesege(false))
    } else {
      dispatch(errorMesege(true))
    }
  }

  function onClickInp() {
    dispatch(LocalStore())
  }
 
  return (
    <div className='input_wrapper'>
      <p className='input_wrapper-title' >Insert the link</p>
      <form className='input_wrapper-label' >
        <input onClick={onClickInp} ref={stateInpRef} type="text" placeholder='https://' />
        <button onClick={onClickBtn} >
          <img src={svgButton} alt="#awwdad" />
        </button>
      </form>
      { local && <SearchHistory/>}
    </div>
  )
}
