import React, { Component } from 'react'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Helpers, Metrics, Colors } from 'App/Theme'

import Style from './styles.js'

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  render() {
    const { onPress } = this.props
    const { value } = this.state
    return (
      <View>
        <View style={(Helpers.fillRow, Style.relative)}>
          <View>
            <Input
              inputContainerStyle={Style.input}
              containerStyle={Style.inputContainer}
              inputStyle={[Style.inputStyle, Metrics.horizontalPadding]}
              placeholder="Enter keywords..."
              errorStyle={Style.inputError}
              onChangeText={(text) => this.setState({ value: text })}
            />
          </View>
          <View style={Style.buttonWrapper}>
            <Button
              buttonStyle={Style.button}
              containerStyle={Style.buttonContainer}
              icon={<Icon name="search" size={15} color={Colors.white} />}
              title=""
              onPress={() => onPress(value)}
            />
          </View>
        </View>
      </View>
    )
  }
}

SearchBox.propTypes = {
  onPress: PropTypes.func,
}

export default SearchBox
