import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

type Initial = {
  states: string
}

const initialState: Initial = {
  states: ''
}

export const TageAudio = createSlice({
  name: 'TageAudio',
  initialState,
  reducers: {
    sendLink(state, action) {
      state.states = action.payload
    }
  }
})

export const selectAudio = (state: RootState) => state.TageAudioSlice

export const { sendLink } = TageAudio.actions

export default TageAudio.reducer
