<template>
  <n-layout has-sider id="layout" position="absolute">
    <component :is="CompontLayout"></component>
  </n-layout>
</template>
<script setup>
import Horizontal from "./layout/horizontal.vue";
import Vertical from "./layout/vertical.vue";
import { shallowRef, watch } from "vue";
import { useAppStore } from "@/store";
const appStore = useAppStore();
const CompontLayout = shallowRef(null);

watch(
  () => appStore.AppLayout,
  () => {
    setInitLayout();
  },{ immediate: true } // 立即执行一次，用于初始化布局  
);

//初始化布局
function setInitLayout() {
  switch (Number(appStore.AppLayout)) {
    case 1:
      CompontLayout.value = Horizontal;
      break;
    case 2:
      CompontLayout.value = Vertical;
      break;
    default:
      CompontLayout.value = Horizontal;
  }
}
</script>
