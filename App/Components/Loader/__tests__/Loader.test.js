import 'react-native'
import React from 'react'
import Loader from '../index'
import renderer from 'react-test-renderer'

jest.useFakeTimers()

it('renders correctly', async () => {
  const component = renderer.create(<Loader />).toJSON()
  expect(component).toMatchSnapshot()
})
