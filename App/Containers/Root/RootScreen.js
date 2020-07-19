import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import AppLayoutActions from 'App/Stores/AppLayout/Actions'
import { View, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    const { getWindowSize, startup } = this.props
    startup()
    Dimensions.addEventListener('change', () => {
      getWindowSize()
    })
  }

  render() {
    return (
      <View style={Helpers.fill}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  getWindowSize: () => dispatch(AppLayoutActions.getWindowSize()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)
