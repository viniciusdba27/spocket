import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  openSideMenu: null,
  toggleHeader: ['option'],
  closeSideMenu: null,
  getWindowSize: null,
  setWindowSize: ['sizes'],
})

export const AppLayoutTypes = Types
export default Creators
