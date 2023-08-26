import React, { FC, MutableRefObject } from 'react'

import { useDispatch } from 'react-redux'
import { errorMesege, reverseState } from '../../redux/slices/InputSlice'

import './TageAudio.scss'

interface TageAudioTp {
  states: string
  audioRef: MutableRefObject<HTMLAudioElement>
}

export const TageAudio: FC<TageAudioTp> = ({states,  audioRef }) => {
  const dispatch = useDispatch()
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const audioObj = new Audio(states)
  React.useEffect(() => {
    audioObj.addEventListener('error', () => {
      dispatch(errorMesege(true))
      dispatch(reverseState())
    }) 
  }, [audioObj, dispatch])
  
  return (
      <audio ref={audioRef} preload='auto' >
        <source src={`${states}`} type='audio/mpeg'/>
      </audio>
  )
}
