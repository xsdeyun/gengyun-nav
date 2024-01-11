import { appConfig } from '@/config/app.config';
import { createStorage } from './storage';

const prefixKey = appConfig.prefixKey;

export const createLocalStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: localStorage
  })
}

export const createSessionStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: sessionStorage
  })
}
// localStorage 创建的本地存储是永久性的，即使关闭浏览器或电脑，数据也会一直保存在本地
export const LocalStorage = createLocalStorage({ prefixKey })
// 创建的本地存储只在当前会话（session）中有效，一旦关闭了浏览器窗口或标签页，数据就会被清除。
export const SessionStorage= createSessionStorage({ prefixKey })
