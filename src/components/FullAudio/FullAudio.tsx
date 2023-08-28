import React, { MutableRefObject } from 'react'
import { selectAudio } from '../../redux/slices/TageAudioSlice'
import { useSelector, useDispatch } from 'react-redux'

import { TageAudio } from '../TageAudio/TageAudio'
import { reverseState } from '../../redux/slices/InputSlice'
import { ButtonPP } from '../ButtonPP/ButtonPP'
import { ProgressBar } from '../ProggresBar/ProggresBar'
import { TimeAndVoleme } from '../TimeAndVoleme/TimeAndVoleme'


import './FullAudio.scss'
export const FullAudio = () => {
  const dispatch = useDispatch()
  function onClickButton() {
    dispatch(reverseState())
  }
  
  const { states, paPl } = useSelector(selectAudio)
  const audioRef = React.useRef() as MutableRefObject<HTMLAudioElement>
  const progressed = React.useRef<HTMLDivElement>(null)
  const progressBar = React.useRef<HTMLDivElement>(null)

  return (
    <div className='full-audio'>
    <p className='btn-back' onClick={onClickButton}>← Back</p>
      <div className='full-audio-wrapper'>
        <ButtonPP 
          audioRef={audioRef} 
          paPl={paPl} 
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
          states={states}
          audioRef={audioRef}
        />
      </div>
    </div>
    
  )
}
