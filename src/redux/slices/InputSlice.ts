import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store';

type Initial = {
  states: boolean
  errMes: boolean
}

const initialState: Initial = {
  states: true,
  errMes: false
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
    }
  }
})

export const selectInput = (state: RootState) => state.InputSlice

export const { reverseState, errorMesege } = inputSlice.actions

export default inputSlice.reducer
