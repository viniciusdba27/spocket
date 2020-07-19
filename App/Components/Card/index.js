import React from 'react'
import { Text, View, Image as RNImage } from 'react-native'
import { PropTypes } from 'prop-types'
import { Image } from 'react-native-elements'
import { Helpers, Fonts, Metrics, Colors } from 'App/Theme'

import lookup from 'country-code-lookup'
import { Flag } from 'react-native-svg-flagkit'

import Style from './styles.js'

const Card = ({ data }) => (
  <View style={[Helpers.fill, Metrics.verticalMargin, Metrics.horizontalMargin, Style.card]}>
    <View style={Style.imgWrapper}>
      <Image
        resizeMode="cover"
        style={Style.img}
        source={{
          uri: data.image_cover_url,
        }}
        PlaceholderContent={
          <RNImage
            resizeMode="cover"
            style={Style.img}
            source={{
              uri: data.image_cover_thumb_url,
            }}
          />
        }
      />
    </View>
    <View
      style={[Metrics.verticalPadding, Metrics.horizontalPadding, Helpers.fill, Style.description]}
    >
      <View style={Metrics.bottomMargin}>
        <Text style={[Fonts.medium]} numberOfLines={1}>
          {data.title}
        </Text>
      </View>

      <View style={[Helpers.row, Metrics.bottomMargin]}>
        <Text style={[Fonts.medium, Style.by]} numberOfLines={1}>
          By
        </Text>
        <Text style={[Fonts.medium, Fonts.bold, Style.supplier]} numberOfLines={1}>
          {data.supplier_shop_name}
        </Text>
        <View style={[Style.flag, Metrics.smallHorizontalMargin]}>
          <Flag id={lookup.byCountry(data.country_origin).iso2} size={0.08} />
        </View>
      </View>
      <View style={[Helpers.fillCol]}>
        <View style={Helpers.fillRow}>
          <View style={[Helpers.fill, Style.price]}>
            <Text style={Fonts.small}>Price</Text>
            <Text style={[Fonts.regular, Fonts.bold]}>{data.formatted_price}</Text>
          </View>
          <View style={[Helpers.fill, Helpers.crossEnd]}>
            <Text style={[Fonts.small, { color: Colors.gray2 }]}>Retail Price</Text>
            <Text style={[Fonts.regular, Fonts.bold, { color: Colors.gray2 }]}>
              {data.formatted_msrp}
            </Text>
          </View>
        </View>
      </View>
    </View>
  </View>
)

Card.propTypes = {
  data: PropTypes.any, // TODO: check for data shape
}

export default Card
