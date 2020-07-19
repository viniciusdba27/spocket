import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  card: {
    height: 450,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.gray1,
  },
  imgWrapper: {
    flex: 2,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  description: {
    maxHeight: 130,
  },
  by: {
    alignSelf: 'flex-start',
    marginRight: 5,
  },
  supplier: {
    alignSelf: 'flex-start',
    color: Colors.primary,
  },
  flag: {
    marginTop: 3,
  },
  price: {
    marginTop: 3,
  },
})
