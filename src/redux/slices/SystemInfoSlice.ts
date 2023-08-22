import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

type Initial = {
  states: boolean
}

const initialState: Initial = {
  states: true
}

export const SystemInfoSlice = createSlice({
  name: 'systemInfo',
  initialState,
  reducers: {
    reverseState(state) {
      state.states = !state.states
    }
  }
})

export const { reverseState } = SystemInfoSlice.actions

export default SystemInfoSlice.reducer
