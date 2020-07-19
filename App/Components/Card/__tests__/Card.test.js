/**
 * @format
 */

import 'react-native'
import React from 'react'
import AppHeader from '../index'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { appLayout } from '../../../../jest/MockedStore'

const mockStore = configureMockStore()
const store = mockStore({ ...appLayout })

jest.useFakeTimers()

it('renders correctly', async () => {
  const component = renderer
    .create(
      <Provider store={store}>
        <AppHeader />
      </Provider>
    )
    .toJSON()
  expect(component).toMatchSnapshot()
})
