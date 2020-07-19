import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  loader: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    zIndex: 100,
  },
  wrapper: {
    borderWidth: 1,
    borderColor: Colors.gray1,
    borderRadius: 100,
    backgroundColor: Colors.white,
    padding: 10,
  },
})
