import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

interface Initial  {
  states: string
  PauseAndPlay: boolean
  widthOfDuration: number
  minutes: number
  seconds: number
}

const initialState: Initial = {
  states: '',
  PauseAndPlay: false,
  widthOfDuration: 0,
  minutes: 0,
  seconds: 0
}

export const TageAudio = createSlice({
  name: 'TageAudio',
  initialState,
  reducers: {
    sendLink(state, action) {
      state.states = action.payload
    },
    sendLocal(state, action) {
      state.states = action.payload
    },
    reversePauseAndPlay(state, action) {
      state.PauseAndPlay = action.payload
    },
    setWidthOfDuration: (state, action) => {
      state.widthOfDuration = action.payload
    },
    setMinutes: (state, action) => {
      state.minutes = action.payload
    },
    setSeconds: (state, action) => {
        state.seconds = action.payload
    }
  }
})

export const selectAudio = (state: RootState) => state.TageAudioSlice

export const { sendLink, sendLocal, reversePauseAndPlay, setWidthOfDuration, setMinutes, setSeconds } = TageAudio.actions

export default TageAudio.reducer
