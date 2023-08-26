import React, {MutableRefObject, FC } from 'react'

interface VolumAudioTp {
  audioRef: MutableRefObject<HTMLAudioElement>
}

export const VolumeAudio: FC<VolumAudioTp> = ({audioRef}) => {
  const paramVolume = React.useRef() as MutableRefObject<HTMLInputElement>
  const setVolume = () => {
    audioRef.current.volume = +paramVolume.current.value / 100
  }

  return (
    <input onClick={() => setVolume()} ref={paramVolume} type="range" />
  )
}

