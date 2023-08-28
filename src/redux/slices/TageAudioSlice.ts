import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

type Initial = {
  states: string
  paPl: boolean
  widthOfDuration: number
  minutes: number
  seconds: number
}

const initialState: Initial = {
  states: '',
  paPl: false,
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
    revPaPl(state, action) {
      state.paPl = action.payload
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

export const { sendLink, sendLocal, revPaPl, setWidthOfDuration, setMinutes, setSeconds } = TageAudio.actions

export default TageAudio.reducer
