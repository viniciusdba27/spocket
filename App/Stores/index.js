import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as AppLayout } from './AppLayout/Reducers'

export default () => {
  const rootReducer = combineReducers({
    example: ExampleReducer,
    appLayout: AppLayout,
  })

  return configureStore(rootReducer, rootSaga)
}
