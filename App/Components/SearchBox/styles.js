import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

const BUTTON_WIDTH = 75

export default StyleSheet.create({
  button: {
    borderRadius: 0,
    height: '100%',
    paddingVertical: 0,
  },
  buttonContainer: {
    borderRadius: 0,
  },
  buttonWrapper: {
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    width: BUTTON_WIDTH,
  },
  input: {
    borderColor: Colors.gray1,
    borderWidth: 2,
  },
  inputContainer: {
    paddingLeft: 0,
    paddingRight: BUTTON_WIDTH,
  },
  inputError: {
    height: 0,
    margin: 0,
  },
  inputStyle: {
    height: 0,
  },
  relative: {
    position: 'relative',
  },
})
