<template>
  <div class="footer-container">
    <n-card class="b-rd" :bordered="false">
      <p v-html="appStore.AppConfig.footer" class="footer-text"></p>
    </n-card>
  </div>
</template>
<script setup>
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>
<style>
.footer-container {
  color: #6c757d;
  padding: 0px 10px 0px 10px;
}
.footer-container .footer-text a {
  color: #6c757d;
  font-weight: bold;
  text-decoration: none;
}
</style>
