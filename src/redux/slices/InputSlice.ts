import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

type Initial = {
  states: boolean
  errMes: boolean
  local: boolean
}

const initialState: Initial = {
  states: true,
  errMes: false,
  local: false
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    reverseState(state) {
      state.states = !state.states
    },
    errorMesege(state, action) {
      state.errMes = action.payload
    },
    LocalStore(state) {
      state.local = !state.local
    }
  }
})

export const selectInput = (state: RootState) => state.InputSlice

export const { reverseState, errorMesege, LocalStore } = inputSlice.actions

export default inputSlice.reducer
