import React, { MutableRefObject, useRef } from 'react'

import { ButtonPP, ProgressBar, TimeAndVoleme, TageAudio } from '../imports'


import { useDispatch } from 'react-redux'
import { reverseState } from '../../redux/slices/InputSlice'

import './FullAudio.scss'

export const FullAudio = () => {
  const dispatch = useDispatch()
  function onClickButton() {
    dispatch(reverseState())
  }
  
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>
  const progressed = useRef<HTMLDivElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)

  return (
    <div className='full-audio'>
    <p className='btn-back' onClick={onClickButton}>← Back</p>
      <div className='full-audio-wrapper'>
        <ButtonPP 
          audioRef={audioRef} 
        />
        <ProgressBar
          progressed={progressed}
          progressBar={progressBar}
          audioRef={audioRef}
        />
        <TimeAndVoleme 
          audioRef={audioRef}
        />
        <TageAudio
          audioRef={audioRef}
        />
      </div>
    </div>
    
  )
}
