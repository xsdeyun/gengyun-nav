<template>
  <div class="app-horizontal-content">
    <!-- 菜单 -->
    <n-split disabled class="split_menu_content flex justify-center items-center">
      <template #1>
        <n-menu ref="menu" mode="horizontal" responsive :options="menuOptions" @update:value="clickMenuItem" />
      </template>
    </n-split>
  </div>

  <!-- tools -->
  <div class="fix-setting">
    <div class="seeting-web flex cursor-pointer mb-4">
      <n-tooltip placement="bottom">
        <template #trigger>
          <n-button :color="!appStore.AppTheme ? '#fff' : '#000'" class="btn" circle @click="handleSetActive">
            <n-icon size="20" :color="appStore.AppTheme ? '#fff' : '#000'">
              <Settings />
            </n-icon>
          </n-button>
        </template>
        <span>设置</span>
      </n-tooltip>
    </div>
    <div class="dark-moon-switch">
      <n-tooltip placement="bottom">
        <template #trigger>
          <n-button class="btn" circle :color="!appStore.AppTheme ? '#fff' : '#000'" @click="appStore.switchAppTheme">
            <n-icon size="14" color="#ffd93b" v-if="!appStore.AppTheme">
              <SunnySharp />
            </n-icon>
            <n-icon size="14" color="#ffd93b" v-else>
              <Moon />
            </n-icon>
          </n-button>
        </template>
        <span>{{ appStore.AppTheme ? "深" : "浅" }}色主题</span>
      </n-tooltip>
    </div>
  </div>
  <!-- 设置 -->
  <AppSetting v-model:active="setActive" />
</template>
<script setup>
import AppSetting from "./AppSetting.vue";
import { onMounted, ref } from "vue";
import { initMenus } from "@/api/navWeb/init.js";
import { renderIcon } from "@/utils";
import { useAppStore, useNavStore } from "@/store";
import { useRoute, useRouter } from "vue-router";
const currentRoute = useRoute();
const router = useRouter();
const navStore = useNavStore();
const appStore = useAppStore();

const menuOptions = ref([]);
const setActive = ref(false);

// 初始化
onMounted(() => {
  getMenusData();
});

const handleSetActive = () => {
  setActive.value = true;
};

// 获取菜单
const getMenusData = () => {
  initMenus().then((res) => {
    navStore.initMenus(res.data.list);
    menuOptions.value = generateMenu(res.data.list);
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
</script>
<style>
.split_menu_content .n-split-pane-1 {
  flex: 0 0 calc(100% - 1.5px) !important;
}

.split_menu_content .n-split-pane-1 .v-overflow {
  justify-content: center;
  align-items: center;
}

.split_menu_content .n-split-pane-2 {
  width: 0 !important;
}
</style>
<style lang="scss" scoped>
.layout-default-background {
  .app-horizontal-content {
    background: rgb(255, 255, 255);
  }
}

.app-horizontal-content {
  width: 100%;
  background: rgb(0, 0, 0);
  padding: 10px;
  margin: 0px 0px 10px 0px;
  position: sticky;
  top: 0px;
  z-index: 1099;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fix-setting {
  position: fixed;
  right: 40px;
  bottom: 100px;
  z-index: 1099;
}

.dark-moon-switch,
.seeting-web {
  .btn {
    width: 44px;
    height: 44px;
    box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.12);
  }
}
</style>
