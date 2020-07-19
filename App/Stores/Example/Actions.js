import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Fetch user informations
  fetchResults: ['data'],
  // The operation has started and is loading
  fetchResultsLoading: null,
  // User informations were successfully fetched
  fetchResultsSuccess: ['data'],
  // An error occurred
  fetchResultsFailure: ['errorMessage'],
})

export const ExampleTypes = Types
export default Creators
