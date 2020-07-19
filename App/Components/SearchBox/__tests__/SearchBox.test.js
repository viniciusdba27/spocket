import 'react-native'
import React from 'react'
import SearchBox from '../index'
import renderer from 'react-test-renderer'

jest.useFakeTimers()

it('renders correctly', async () => {
  const component = renderer.create(<SearchBox onPress={() => true} />).toJSON()
  expect(component).toMatchSnapshot()
})
