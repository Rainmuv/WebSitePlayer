import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

type Initial = {
  states: boolean
}

const initialState: Initial = {
  states: true
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    reverseState(state) {
      state.states = !state.states
    }
  }
})

export const { reverseState } = inputSlice.actions

export default inputSlice.reducer
