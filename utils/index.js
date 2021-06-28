import MobileDetect from 'mobile-detect'

export function isMobile() {
  let md = new MobileDetect(window.navigator.userAgent)
  return md.mobile() !== null
}