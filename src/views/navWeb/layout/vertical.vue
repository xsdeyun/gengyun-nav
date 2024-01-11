<template>
  <n-layout
    class="app-content-layout"
    :class="{ 'layout-default-background': appStore.AppTheme === false }"
  >
    <AppHorizontal />
    <!-- 顶部 header end-->

    <!-- 内容content start -->
    <n-layout-content
      content-style="overflow:hidden"
      :class="{ 'layout-default-background': appStore.AppTheme === false }"
    >
      <AppContainer />
      
    </n-layout-content>
    <!-- 内容content end -->

    <!-- 右侧悬浮按钮 start-->
    <n-back-top style="z-index: 1080" />
    <!-- 右侧悬浮按钮 end-->
    <n-layout-footer >
      <AppFooter/>
    </n-layout-footer>
  </n-layout>
</template>
<script setup>
import AppFooter from "../component/AppFooter.vue";
import AppHorizontal from "../component/AppHorizontal.vue";
import AppContainer from "../AppContainer.vue";
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>
