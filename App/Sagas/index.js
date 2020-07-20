import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchResults } from './ExampleSaga'
import { startup } from './StartupSaga'
import { getAppWindowSize } from './AppLayoutSaga'

import { AppLayoutTypes } from 'App/Stores/AppLayout/Actions'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(AppLayoutTypes.GET_WINDOW_SIZE, getAppWindowSize),
    takeLatest(ExampleTypes.FETCH_RESULTS, fetchResults),
  ])
}
