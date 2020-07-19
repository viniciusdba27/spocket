import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  loader: {
    bottom: 0,
    height: 50,
    left: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 100,
  },
  wrapper: {
    backgroundColor: Colors.white,
    borderColor: Colors.gray1,
    borderRadius: 100,
    borderWidth: 1,
    padding: 10,
  },
})
