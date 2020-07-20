/**
 * @format
 */

import 'react-native'
import React from 'react'
import ExampleScreen from '../index'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { Breakpoints } from 'App/Theme'

const mockStore = configureMockStore()
const store = mockStore({
  example: {
    resultsIsLoading: false,
    results: [],
  },
  appLayout: {
    breakpoint: Breakpoints.S,
  },
})

const results = jest.useFakeTimers()

// TODO: test page with results

it('renders correctly', async () => {
  const component = renderer
    .create(
      <Provider store={store}>
        <ExampleScreen />
      </Provider>
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})
