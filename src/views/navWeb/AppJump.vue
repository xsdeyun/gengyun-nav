<template>
    <div class="jump-content">页面即将跳转至：{{ u }}</div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRoute } from "vue-router";
const route = useRoute();
const u = atob(route.query.id);
onMounted(() => {
    setTimeout(() => {
        window.location.href = u;
    }, 2000)
})
</script>
<style lang="scss" scoped>
.jump-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    letter-spacing: 5px;
    text-align: center;
    font-weight: bold;
}
</style>