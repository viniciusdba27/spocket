import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    borderBottomColor: Colors.gray1,
    borderBottomWidth: 1,
    height: 100,
  },
  headerHidden: {
    height: 68,
  },
  leftComponent: {
    color: Colors.gray1,
  },
  logoImg: {
    height: 30,
    width: 130,
  },
  logoImgPlaceholder: {
    backgroundColor: Colors.white,
  },
  logoImgSmall: {
    width: 130,
  },
  rightComponent: {
    color: Colors.white,
  },
  tabletHeader: {
    borderTopColor: Colors.gray1,
    borderTopWidth: 1,
    height: 50,
    marginTop: 30,
    paddingTop: 0,
  },
})
