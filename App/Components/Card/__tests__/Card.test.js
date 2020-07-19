import 'react-native'
import React from 'react'
import Card from '../index'
import renderer from 'react-test-renderer'

jest.useFakeTimers()
const data = {
  image_cover_thumb_url:
    'https://d2nxps5jx3f309.cloudfront.net/listing_images/attachments/fd2/c0c/62-/thumb/gl222.jpg',
  image_cover_url:
    'https://d2nxps5jx3f309.cloudfront.net/listing_images/attachments/fd2/c0c/62-/card/gl222.jpg',
  title: 'GL222 IP Rose Gold(Ion Plating) Brass Ring with',
  country_origin: 'United States',
  formatted_price: '$10.73 USD',
  formatted_msrp: '$26.82 USD',
}

it('renders correctly', async () => {
  const component = renderer.create(<Card data={data} />).toJSON()
  expect(component).toMatchSnapshot()
})
