import { put, call } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import { ResultsService } from 'App/Services/ResultsService'

export function* fetchResults(actions) {
  const data = yield call(ResultsService.fetchResults, actions.data || {})
  if (data) {
    yield put(
      ExampleActions.fetchResultsSuccess({
        results: data,
        page: actions.data ? actions.data.page : 1,
      })
    )
  } else {
    yield put(
      ExampleActions.fetchResultsFailure('There was an error while fetching user informations.')
    )
  }
}
