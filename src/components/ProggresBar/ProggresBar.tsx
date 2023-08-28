import React, {RefObject, MouseEvent, FC, MutableRefObject} from 'react'
import { selectAudio } from '../../redux/slices/TageAudioSlice'
import { useAppSelector } from '../../redux/store';
import './ProggresBar.scss'

interface progressIP {
    progressBar: RefObject<HTMLDivElement>,
    progressed: RefObject<HTMLDivElement>,
    audioRef: MutableRefObject<HTMLAudioElement>
}

export const ProgressBar: FC<progressIP> = ({progressBar, progressed, audioRef}) => {
    const { widthOfDuration } = useAppSelector(selectAudio)

    const rewindMusicHandler = (event: MouseEvent<HTMLDivElement>) => {
        if (audioRef.current && progressBar.current && progressed.current) {
          audioRef.current.currentTime = ((event.nativeEvent.offsetX / progressBar.current.offsetWidth) * audioRef.current.duration)
        }
    }

    return (
        <div
            className='progress_bar'
            ref={progressBar}
            onClick={rewindMusicHandler}>
            <div className='progressed' style={{width: `${widthOfDuration}%`}} ref={progressed}/>
        </div>
    )
}