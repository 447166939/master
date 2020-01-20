import { Dimensions,Platform } from 'react-native'

//动态计算ui大小
const { width, height } = Dimensions.get('window')
export function getPixel(num, designWidth = 375) {
  return (num * width) / designWidth
}
let windowSize = Dimensions.get('window')
let IPHONE_X_HEIGHT = 812
let IPHONE_XS_MAX_XR = 896
function isIphoneX() {
  return (
    (Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      windowSize.height === IPHONE_X_HEIGHT) ||
    windowSize.width === IPHONE_X_HEIGHT ||
    windowSize.height === IPHONE_XS_MAX_XR ||
    windowSize.width === IPHONE_XS_MAX_XR
  )
}
export const topMargin = Platform.OS === 'ios' ? (isIphoneX() ? 44 : 24) : 0;
