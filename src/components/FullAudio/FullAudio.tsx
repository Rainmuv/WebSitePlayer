import React from 'react'
import { TageAudio } from '../TageAudio/TageAudio'
import { reverseState } from '../../redux/slices/InputSlice'
import { useDispatch } from 'react-redux'
import './FullAudio.scss'
export const FullAudio = () => {
  const dispatch = useDispatch()
  function onClickButton() {
    dispatch(reverseState())
  }

  return (
    <div>
      <p className='btn-back' onClick={onClickButton}>← Back</p>
      <TageAudio/>
    </div>
  )
}
