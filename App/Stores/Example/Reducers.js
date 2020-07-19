/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

const fetchResults = (state) => ({
  ...state,
  resultsIsLoading: true,
  resultsErrorMessage: null,
})

const fetchResultsSuccess = (state, { data }) => {
  console.log('REDUCER fetchResultsSuccess', data)
  return {
    ...state,
    results: data.page === 1 ? data.results : state.results.concat(data.results),
    resultsIsLoading: false,
    resultsErrorMessage: null,
  }
}

const fetchResultsFailure = (state, { errorMessage }) => ({
  ...state,
  results: {},
  resultsIsLoading: false,
  resultsErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_RESULTS]: fetchResults,
  [ExampleTypes.FETCH_RESULTS_SUCCESS]: fetchResultsSuccess,
  [ExampleTypes.FETCH_RESULTS_FAILURE]: fetchResultsFailure,
})
