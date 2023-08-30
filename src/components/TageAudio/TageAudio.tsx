import React, { FC, MutableRefObject, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectAudio } from '../../redux/slices/TageAudioSlice'
import { errorMesege, reverseState } from '../../redux/slices/InputSlice'

interface TageAudioTp {
  audioRef: MutableRefObject<HTMLAudioElement>
}

export const TageAudio: FC<TageAudioTp> = ({ audioRef }) => {
  const dispatch = useDispatch()
  const { states } = useSelector(selectAudio)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const audioObj = new Audio(states)
  useEffect(() => {
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
