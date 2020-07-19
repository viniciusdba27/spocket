import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Helpers } from 'App/Theme'

import Style from './styles.js'

const Loader = () => (
  <View style={[Helpers.fillCenter, Style.loader]}>
    <View style={Style.wrapper}>
      <ActivityIndicator size="large" />
    </View>
  </View>
)

export default Loader
