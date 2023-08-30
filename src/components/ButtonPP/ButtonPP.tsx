import React, {FC, MutableRefObject} from 'react'

import { setWidthOfDuration, reversePauseAndPlay, setMinutes, setSeconds } from '../../redux/slices/TageAudioSlice';

import { selectAudio } from '../../redux/slices/TageAudioSlice';
import { useDispatch, useSelector } from 'react-redux'


import iconPause from '../../assets/Pause.svg';
import iconPlay from '../../assets/Play.svg'

interface ButtonPPTP  {
  audioRef: MutableRefObject<HTMLAudioElement>,
}

export const ButtonPP: FC<ButtonPPTP> = ({audioRef}) => {
  const { PauseAndPlay } = useSelector(selectAudio)
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

  const onClickBtnPause = () => {
    audioRef.current.ontimeupdate = duration
    audioRef.current.pause()
    dispatch(reversePauseAndPlay(false))
  }

  const onClickBtnPlay = () => {
    audioRef.current.ontimeupdate = duration
    audioRef.current.play()
    dispatch(reversePauseAndPlay(true))
  }

  return (
      <img onClick={() => PauseAndPlay ? onClickBtnPause() : onClickBtnPlay()} src={PauseAndPlay ? iconPause : iconPlay} alt="Button" />
  )
}
