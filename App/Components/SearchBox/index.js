import React, { Component } from 'react'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'

import Styles from './styles'

import { Input, Button, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Helpers, Colors } from 'App/Theme'

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
        <View style={(Helpers.fillRow, { position: 'relative' })}>
          <View>
            <Input
              inputContainerStyle={{
                borderWidth: 2,
                borderColor: Colors.gray1,
              }}
              containerStyle={{
                paddingLeft: 0,
                paddingRight: 75,
              }}
              inputStyle={{ height: 0 }}
              placeholder="Enter keywords..."
              errorStyle={{ height: 0, margin: 0 }}
              onChangeText={(text) => this.setState({ value: text })}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              width: 75,
            }}
          >
            <Button
              buttonStyle={{ paddingVertical: 0, height: '100%', borderRadius: 0 }}
              containerStyle={{
                borderRadius: 0,
              }}
              icon={<Icon name="search" size={15} color="white" />}
              title=""
              onPress={() => onPress(value)}
            />
          </View>
        </View>
      </View>
    )
  }
}

SearchBox.propTypes = {}

export default SearchBox
