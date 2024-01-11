<template>
  <n-layout-header class="app-layout-header flex justify-center items-center pl-6 pr-6 p-3">
    <div class="layout-header">
      <div class="layout-header-left">
        <div class="ml-1 layout-header-trigger layout-header-trigger-min" @click="handleCollapsed">
          <n-icon size="20" v-if="navStore.collapsed">
            <MenuUnfoldOutlined />
          </n-icon>
          <n-icon size="20" v-else>
            <MenuFoldOutlined />
          </n-icon>
        </div>
      </div>
      <div class="word-day-text text-center">{{ hitokotoText||appStore.AppConfig.motto}}</div>
      <div class="seeting-web mr-5 flex cursor-pointer ml-auto">
        <n-tooltip placement="bottom">
          <template #trigger>
            <n-button :class="{ btn: !appStore.AppTheme }" strong circle :bordered="false" @click="handleSetActive">
              <n-icon size="20" :color="!appStore.AppTheme ? '#000' : '#fff'">
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
            <n-button :class="{ btn: !appStore.AppTheme }" strong circle :bordered="false"
              @click="appStore.switchAppTheme">
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
  </n-layout-header>
  <AppSetting v-model:active="setActive" />
</template>
<script setup>
import AppSetting from "./AppSetting.vue";
import { hitokoto } from "@/api/navWeb/app.js";
import { defineComponent, ref, onMounted } from "vue";
import { useAppStore, useNavStore } from "@/store";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@vicons/antd";
const isLoading = ref(false);
const hitokotoText = ref("");
const setActive = ref(false);
defineComponent({
  MenuUnfoldOutlined,
  MenuFoldOutlined,
});
const appStore = useAppStore();
const navStore = useNavStore();
const handleCollapsed = () => {
  navStore.initAppMove();
  navStore.switchCollapsed();
};
onMounted(() => {
  getHitokoto();
});
const handleSetActive = () => {
  setActive.value = true;
};
const getHitokoto = async () => {
  const resp = await hitokoto();
  hitokotoText.value = resp.data.hitokoto;
  isLoading.value = true;
};
</script>
<style lang="scss" scoped>
.layout-default-background {
  .app-layout-header::before {
    box-shadow: -6px -6px 0 #fff;
  }
}

.app-layout-header {
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 1080;
}

.app-layout-header::before {
  position: absolute;
  bottom: -24px;
  left: 0px;
  z-index: -10;
  width: 20px;
  height: 24px;
  content: "";
  transition: all 0.2s ease-in-out;
  border-top-left-radius: 12px;
  box-shadow: -6px -6px rgb(24, 24, 28);
}

.layout-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  transition: all 0.2s ease-in-out;
  width: 100%;
  z-index: 11;

  &-left {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .word-day-text {
    flex-basis: 100%;
  }

  .dark-moon-switch,
  .seeting-web {
    .btn {
      box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.12);
    }
  }
}

@media (max-width: 650px) {
  .word-day-text {
    display: none;
  }

  .app-layout-header::before {
    display: none;
  }
}
</style>
