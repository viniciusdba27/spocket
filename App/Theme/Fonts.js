import { StyleSheet } from 'react-native'

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  input: 18,
  regular: 16,
  medium: 12,
  small: 11,
}

export default StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  medium: {
    fontSize: size.medium,
  },
  normal: {
    fontSize: size.regular,
  },
  small: {
    fontSize: size.small,
  },
})
