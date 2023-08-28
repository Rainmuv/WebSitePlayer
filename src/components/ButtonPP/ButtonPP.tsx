import React, {FC, MutableRefObject} from 'react'

import { useDispatch } from 'react-redux'
import { setWidthOfDuration, revPaPl, setMinutes, setSeconds } from '../../redux/slices/TageAudioSlice';

import iconPause from '../../assets/Pause.svg';
import iconPlay from '../../assets/Play.svg'

interface ButtonPPTP  {
  audioRef: MutableRefObject<HTMLAudioElement>,
  paPl: boolean,
}

export const ButtonPP: FC<ButtonPPTP> = ({audioRef, paPl}) => {
  const dispatch = useDispatch()
  const duration = () => {
    const currTime = Math.floor(audioRef.current.currentTime)
    const minute = Math.floor(currTime / 60)
    const second = currTime % 60
    const width = Math.floor(currTime * 100 / audioRef.current.duration)
    dispatch(setMinutes(minute))
    dispatch(setSeconds(second))
    dispatch(setWidthOfDuration(width))
}

  function onClickBtnPause() {
    audioRef.current.ontimeupdate = duration
    audioRef.current.pause()
    dispatch(revPaPl(false))
  }

  function onClickBtnPlay() {
    audioRef.current.ontimeupdate = duration
    audioRef.current.play()
    dispatch(revPaPl(true))
  }

  return (
      <img onClick={() => paPl ? onClickBtnPause() : onClickBtnPlay()} src={paPl ? iconPause : iconPlay} alt="#534141" />
  )
}
