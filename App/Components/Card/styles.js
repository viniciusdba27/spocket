import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  by: {
    alignSelf: 'flex-start',
    marginRight: 5,
  },
  card: {
    borderColor: Colors.gray1,
    borderRadius: 4,
    borderWidth: 1,
    height: 450,
  },
  description: {
    maxHeight: 130,
  },
  flag: {
    marginTop: 3,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  imgWrapper: {
    flex: 2,
  },
  price: {
    marginTop: 3,
  },
  supplier: {
    alignSelf: 'flex-start',
    color: Colors.primary,
  },
})
