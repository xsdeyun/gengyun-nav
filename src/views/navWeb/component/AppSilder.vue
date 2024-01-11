<template>
  <div class="layout-sider-container" :class="{ appMove: navStore.appMove}">
    <div class="sider-mark" v-if="navStore.appMove" @click="handleAppMove"></div>
    <n-layout-sider collapse-mode="width" :collapsed-width="navStore.collapsedWidth" width="180" :native-scrollbar="false"
      :collapsed="navStore.collapsed" class="layout-sider">
      <AppLogo :collapsed="navStore.collapsed" />
      <n-menu ref="menu" class="side-menu" accordion :indent="24" :collapsed-icon-size="20"
        :collapsed-width="navStore.collapsedWidth" :options="menuOptions" @update:value="clickMenuItem" />
    </n-layout-sider>
  </div>
</template>
<script setup>
import AppLogo from "./AppLogo.vue";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { initMenus } from "@/api/navWeb/init.js";
import { renderIcon } from "@/utils";
import { useNavStore } from "@/store";
import { useRoute, useRouter } from "vue-router";
import { useWindowSize } from "@vueuse/core";
const currentRoute = useRoute();
const router = useRouter();
const navStore = useNavStore();
const isLoading = ref(false);
const menuOptions = ref([]);
const windowSize = useWindowSize();
// 初始化
onMounted(() => {
  if (windowSize.width.value <= 800) {
    if (!navStore.collapsed) {
      navStore.initAppMove();
    }
    navStore.initCollapsedWidth(0);
  } else {
    navStore.initCollapsedWidth(48);
  }
  getMenusData();
  window.addEventListener("resize", windowSize.refresh);
});
// 销毁监听
onUnmounted(() => {
  window.removeEventListener("resize", windowSize.refresh);
});

// 监听宽度
watch(windowSize.width, (newWidth) => {
  if (newWidth <= 800) {
    navStore.initCollapsedWidth(0);
    if (!navStore.collapsed && !navStore.appMove) {
      navStore.initAppMove();
    }
  } else {
    navStore.initCollapsedWidth(48);
  }
});

// 获取菜单
const getMenusData = () => {
  initMenus().then((res) => {
    navStore.initMenus(res.data.list);
    menuOptions.value = generateMenu(res.data.list);
    isLoading.value = true;
  });
};
// menu change
const clickMenuItem = (key, item) => {
  if (currentRoute.name == "search") {
    router.push({ name: "view" });
  }
  const element = document.getElementById(`menu-Id-${key}`);
  if (item.pid !== 0) {
    navStore.setTabsData(item);
    item.dataId = Number(element.getAttribute("data-id"));
    item.dataIndex = Number(element.getAttribute("data-index"));
  }
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};
// 生成菜单项
function generateMenu(data, ind = 0) {
  const menus = [];
  data.forEach((item, index) => {
    const menu = {
      label: item.name,
      key: item.id,
      pid: item.pid,
      tabIndex: ind,
    };
    if (item.icon) {
      menu.icon = renderIcon(item.icon);
    }
    if (item.children && item.children.length > 0) {
      menu.children = generateMenu(item.children, index);
    }
    if (!item.hidden) {
      menus.push(menu);
    }
  });
  return menus;
}

// store
const handleAppMove = () => {
  navStore.initAppMove();
  navStore.initCollapsedWidth(0);
  navStore.switchCollapsed();
};
</script>
<style>
.layout-sider .side-menu .n-menu-item-content-header:hover {
  color: var(--n-item-text-color-child-active) !important;
}
</style>
<style scoped>
.layout-sider {
  min-height: 100vh;
  position: relative;
  z-index: 13;
  transition: all 0.2s ease-in-out;
}

.sider-mark {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  transition: all 0.2s ease-in-out;
}

@media (max-width: 800px) {
  .layout-sider-container {
    height: 100%;
    position: fixed;
    transition: all 0.2s ease-in-out;
    z-index: 1082;
  }

  .appMove {
    width: 100%;
  }
}
</style>
