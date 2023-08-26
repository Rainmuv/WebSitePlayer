import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

type Initial = {
  states: string
  paPl: boolean
  widthOfDuration: number
}

const initialState: Initial = {
  states: '',
  paPl: false,
  widthOfDuration: 0
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
  }
})

export const selectAudio = (state: RootState) => state.TageAudioSlice

export const { sendLink, sendLocal, revPaPl, setWidthOfDuration } = TageAudio.actions

export default TageAudio.reducer
