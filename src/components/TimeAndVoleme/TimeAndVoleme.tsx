import React, {MutableRefObject, FC } from 'react';
import './TimeAndVoleme.scss'
import { useSelector } from 'react-redux';
import { selectAudio } from '../../redux/slices/TageAudioSlice';

interface TimeAndVolemeTp {
  audioRef: MutableRefObject<HTMLAudioElement>
}

export const TimeAndVoleme: FC<TimeAndVolemeTp> = ({audioRef}) => {
  const { seconds, minutes } = useSelector(selectAudio)
  const paramVolume = React.useRef() as MutableRefObject<HTMLInputElement>
  const setVolume = () => {
    audioRef.current.volume = +paramVolume.current.value / 100
  }

  return (
    <div className='TaV'>
      <div className='TaV-time'>
        <p>{minutes < 10 ? `0${minutes}` : minutes}:</p>
        <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
      </div>
      <input className='VolumeInp' onChange={() => setVolume()} ref={paramVolume} type="range" />
    </div>
    
  )
}

