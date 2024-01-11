import { LocalStorage } from '@/utils'
import { appConfig } from '@/config/app.config';

const TOKEN_CODE = appConfig.TOKEN_CODE
const DURATION = appConfig.DURATION

export function getToken() {
  return LocalStorage.get(TOKEN_CODE)
}
export function setToken(token) {
  LocalStorage.set(TOKEN_CODE, token, DURATION)
}
export function removeToken() {
  LocalStorage.remove(TOKEN_CODE)
}

export function getCollapsed() {
  return LocalStorage.get('Collapsed')
}
export function setCollapsed(val) {
  LocalStorage.set('Collapsed', val, DURATION)
}

export function getCollapsedWidth() {
  return LocalStorage.get('CollapsedWidth')
}
export function setCollapsedWidth(val) {
  LocalStorage.set('CollapsedWidth', val, DURATION)
}

export function getAppMove() {
  return LocalStorage.get('AppMove')
}
export function setAppMove(val) {
  LocalStorage.set('AppMove', val, DURATION)
}

export function getAppTheme() {
  return LocalStorage.get('AppTheme')
}
export function setAppTheme(val) {
  LocalStorage.set('AppTheme', val, DURATION)
}

export function getCurdMode() {
  return LocalStorage.get('CurdMode')
}
export function setCurdMode(val) {
  LocalStorage.set('CurdMode', val, DURATION)
}

export function getAppLayout() {
  return LocalStorage.get('AppLayout')
}
export function setAppLayout(val) {
  LocalStorage.set('AppLayout', val, DURATION)
}


