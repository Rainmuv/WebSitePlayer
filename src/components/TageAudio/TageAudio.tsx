import React from 'react'

import { selectAudio } from '../../redux/slices/TageAudioSlice'
import { useSelector, useDispatch } from 'react-redux'
import { errorMesege, reverseState } from '../../redux/slices/InputSlice'

export const TageAudio = () => {
  const dispatch = useDispatch()
  const { states } = useSelector(selectAudio)
  const audioObj = new Audio(states)
  React.useEffect(() => {
    audioObj.addEventListener('error', () => {
      dispatch(errorMesege(true))
      dispatch(reverseState())
    }) 
  }, [audioObj])

  return (
      <audio controls={true} preload='auto' >
        <source src={`${states}`} type='audio/mpeg'/>
      </audio>
  )
}
