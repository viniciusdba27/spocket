const Layouts = {
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
}

const breakpoints = [500, 900, 1140]

const getLayout = function(width) {
  if (width > breakpoints[2]) {
    return Layouts.XL
  }
  if (width > breakpoints[1] && width <= breakpoints[2]) {
    return Layouts.L
  }
  if (width > breakpoints[0] && width <= breakpoints[1]) {
    return Layouts.M
  }
  return Layouts.S
}

export default {
  Layouts,
  getLayout,
}
