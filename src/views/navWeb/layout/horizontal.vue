<template>
  <!-- 侧边栏 start -->
  <AppSilder />
  <!-- 侧边栏 end -->
  <n-layout
    class="app-content-layout"
    :class="{ 'layout-default-background': appStore.AppTheme === false }"
  >
    <!-- 顶部 header start-->
    <AppHeader />
    <!-- 顶部 header end-->

    <!-- 内容content start -->
    <n-layout-content
      content-style="overflow:hidden"
      :class="{ 'layout-default-background': appStore.AppTheme === false }"
    >
      <AppContainer />

    <n-layout-footer :class="{ 'layout-default-background': appStore.AppTheme === false }">
      <AppFooter/>
    </n-layout-footer>

    </n-layout-content>
    <!-- 内容content end -->

    <!-- 右侧悬浮按钮 start-->
    <n-back-top style="z-index: 1080" />
    <!-- 右侧悬浮按钮 end-->
    
  </n-layout>
</template>
<script setup>
import AppHeader from "../component/AppHeader.vue";
import AppFooter from "../component/AppFooter.vue";
import AppSilder from "../component/AppSilder.vue";
import AppContainer from "../AppContainer.vue";
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>
