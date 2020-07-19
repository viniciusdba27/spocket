import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AppLayoutTypes } from './Actions'

const setWindowSize = (state, { sizes }) => ({
  ...state,
  windowWidth: sizes.windowWidth,
  windowHeight: sizes.windowHeight,
  breakpoint: sizes.breakpoint,
})

export const reducer = createReducer(INITIAL_STATE, {
  [AppLayoutTypes.SET_WINDOW_SIZE]: setWindowSize,
})
