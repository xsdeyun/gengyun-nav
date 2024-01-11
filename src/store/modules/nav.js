import { defineStore } from 'pinia'
import { getCollapsed, setCollapsed, getCollapsedWidth, setCollapsedWidth, getAppMove, setAppMove, getCurdMode, setCurdMode } from '@/utils'
export const useNavStore = defineStore('nav', {
  state() {
    return {
      collapsedWidth: getCollapsedWidth() || 0,
      collapsed: getCollapsed() || false,
      menus: [],
      tabsData: null,
      appMove: getAppMove() || false,
      curdMode: getCurdMode() || 1
    }
  },
  actions: {
    initCurdMode(val) {
      this.curdMode = val;
      setCurdMode(val)
    },
    initAppMove() {
      this.appMove = !this.appMove;
      setAppMove(this.appMove)
    },
    initCollapsedWidth(w) {
      this.collapsedWidth = w;
      setCollapsedWidth(w)
    },
    switchCollapsed() {
      this.collapsed = !this.collapsed;
      setCollapsed(this.collapsed)
    },
    initMenus(menus) {
      this.menus = menus;
    },
    setTabsData(item) {
      this.tabsData = item;
    }
  },
})

