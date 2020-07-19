import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { Text as RNEText } from 'react-native-elements'
import { SearchBox, Card, Loader } from 'App/Components'
import { AppLayout } from 'App/Constants'

import Style from './styles'
import { Helpers, Metrics, Breakpoints } from 'App/Theme'

class ExampleScreen extends React.Component {
  // eslint-disable-next-line
  onEndReachedCalledDuringMomentum = false
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      keywords: '',
    }
  }

  loadMoreResults = () => {
    const { fetchResults } = this.props
    const { page, keywords } = this.state
    const newPage = page + 1

    this.setState({ page: newPage })

    fetchResults({ keywords, page: newPage })
  }

  onSearch = (keywords) => {
    const { page } = this.state
    const { fetchResults } = this.props
    const newPage = 1
    this.setState({ keywords, page: newPage })

    fetchResults({ keywords, page: newPage })
  }

  renderItem = ({ item }) => {
    return <Card data={item} />
  }

  keyExtractor = (item, index) => `${item.id}-${index}`
  // keyExtractor = (item) => item.id ### you're returning duplicate products

  endReached = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.loadMoreResults()
      this.onEndReachedCalledDuringMomentum = true
    }
  }

  render() {
    const { results, resultsIsLoading, breakpoint } = this.props
    const { page, keywords } = this.state

    let numOfColumns = 1

    switch (breakpoint) {
      case Breakpoints.Layouts.S:
        numOfColumns = 1
        break
      case Breakpoints.Layouts.M:
        numOfColumns = 2
        break
      case Breakpoints.Layouts.L:
        numOfColumns = 3
        break
    }

    return (
      <View
        style={[Helpers.fill, Helpers.rowMain, Metrics.horizontalMargin, Metrics.verticalMargin]}
      >
        <View style={Helpers.fillCol}>
          {resultsIsLoading && <Loader />}
          <View style={Metrics.verticalPadding}>
            <RNEText h2>Product Search</RNEText>
          </View>
          <View style={Metrics.verticalPadding}>
            <SearchBox onPress={this.onSearch} />
          </View>
          {/* <Text>{`page:${page}, num of results: ${results.length}, loading: ${resultsIsLoading}, breakpoint: ${breakpoint}, momentum: ${this.onEndReachedCalledDuringMomentum}`}</Text> */}

          {results.length > 0 && (
            // TODO: fix style when results are odd
            <FlatList
              key={`flatlist-${numOfColumns}-${keywords}`}
              contentContainerStyle={Style.flatList}
              data={results}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              onEndReachedThreshold={0.9}
              initialNumToRender={
                page === 1 && results.length < AppLayout.ITEMS_PER_PAGE
                  ? results.length
                  : AppLayout.ITEMS_PER_PAGE
              }
              numColumns={numOfColumns}
              columnWrapperStyle={Style.row}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollBegin={() => {
                this.onEndReachedCalledDuringMomentum = false
              }}
              onEndReached={this.endReached}
            />
          )}
        </View>
      </View>
    )
  }
}

ExampleScreen.propTypes = {
  results: PropTypes.any, //TODO: check for shape
  resultsIsLoading: PropTypes.bool,
  breakpoint: PropTypes.string,
}

const mapStateToProps = (state) => ({
  results: state.example.results,
  resultsIsLoading: state.example.resultsIsLoading,
  breakpoint: state.appLayout.breakpoint,
})

const mapDispatchToProps = (dispatch) => ({
  fetchResults: (actions) => dispatch(ExampleActions.fetchResults(actions)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleScreen)
