import { put } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import NavigationService from 'App/Services/NavigationService'
import AppLayoutActions from 'App/Stores/AppLayout/Actions'

export function* startup() {
  yield put(ExampleActions.fetchResults())
  yield put(AppLayoutActions.getWindowSize())
  NavigationService.navigateAndReset('MainScreen') // TODO: create files with all routes
}
