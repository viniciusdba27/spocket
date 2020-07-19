import { put } from 'redux-saga/effects'
import { Dimensions } from 'react-native'
import AppLayoutAction from 'App/Stores/AppLayout/Actions'
import { Breakpoints } from 'App/Theme'

export function* getAppWindowSize() {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const breakpoint = Breakpoints.getLayout(windowWidth)
  yield put(AppLayoutAction.setWindowSize({ windowWidth, windowHeight, breakpoint }))
}
