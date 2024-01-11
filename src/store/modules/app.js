import { defineStore } from 'pinia'
import { setAppTheme, getAppTheme, getAppLayout, setAppLayout } from '@/utils'

export const useAppStore = defineStore('app', {
  state() {
    return {
      AppTheme: getAppTheme() || false,
      AppLayout: getAppLayout() || 1,
      AppConfig: {}
    }
  },
  actions: {
    setAppConfig(val) {
      this.AppConfig = val;
    },
    switchAppTheme() {
      this.AppTheme = !this.AppTheme
      setAppTheme(this.AppTheme)
    },
    initAppLayout(val) {
      this.AppLayout = val
      setAppLayout(val)
    }
  }
})

