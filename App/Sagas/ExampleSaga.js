import { put, call } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import { userService } from 'App/Services/UserService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchResults(actions) {
  //console.log('fetchResults keywords and page', actions.data)

  // yield put(ExampleActions.fetchUserLoading())

  const data = yield call(userService.fetchResults, actions.data || {})
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
