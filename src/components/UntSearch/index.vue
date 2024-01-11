<template>
    <div class="unt-search-contanier z-36">
        <h2 class="big-title mb-4">高效实用的极简导航网站，让你事半功倍</h2>
        <div class="tabs-search mb-4">
            <n-tabs class="tabs-content" type="line" v-model:value="tabKey" :bar-width="20" default-value="web"
                :tab-style="{ fontSize: '16px', color: '#fff' }">
                <n-tab name="web"> 站内 </n-tab>
                <n-tab name="baidu">百度 </n-tab>
                <n-tab name="bing"> 必应 </n-tab>
                <n-tab name="google">谷歌 </n-tab>
                <n-tab name="xueshu">学术 </n-tab>
            </n-tabs>
        </div>
        <div class="search-input-content" :class="{ focusActive: focus }">
            <n-input clearable class="search-input" style="--n-height: 48px;" v-model:value="keywords"
                placeholder="根据名称搜索网站..." @keyup.enter="handleEnter" @focus="handleFocus" @blur="handleBlur"
                @clear="handleEnter">
                <template #suffix>
                    <n-icon size="25" class="cursor-pointer" color="#007bff" @click="handleEnter">
                        <Search />
                    </n-icon>
                </template>
            </n-input>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const keywords = ref("");
const focus = ref(false)
const tabKey = ref("web")

const emit = defineEmits(["onSearch"]);
const handleFocus = () => {
    focus.value = true;
}
const handleBlur = () => {
    focus.value = false;
}
const handleEnter = () => {
    const value = keywords.value;
    switch (tabKey.value) {
        case 'web':
            emit("onSearch", value);
            break;
        case 'baidu':
            window.open(`https://www.baidu.com/s?wd=${value}`, "__banlk")
            break;
        case 'bing':
            window.open(`https://cn.bing.com/search?q=${value}`, "__banlk")
            break;
        case 'google':
            window.open(`https://www.google.com/search?q=${value}`, "__banlk")
            break;
        case 'xueshu':
            window.open(`https://xueshu.baidu.com/s?wd=${value}`, "__banlk")
            break;
        default:
            console.log("非法字符");
    }
};
</script>
<style>
.unt-search-contanier .tabs-content .n-tabs-nav-scroll-content {
    border-bottom: none !important;
}

.unt-search-contanier .tabs-content .n-tabs-bar {
    height: 3px;
    background: #fff;
}
</style>
<style lang="scss" scoped>
.layout-default-background {
    .unt-search-contanier {
        background-size: 400%;
        background-position: 0% 100%;
        background-image: linear-gradient(45deg, #13bdce 0%, #0094d9 50%, #6fc7b5 100%);
        animation: gradient 7.5s ease-in-out infinite;
    }
}

.unt-search-contanier {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0px;
    border-radius: 10px;

    .big-title {
        word-wrap: break-word;
        line-height: 1.2;
        font-size: 2.5rem;
        font-weight: 500;
        color: #fff;
        text-align: center;
    }

    .search-input-content {
        width: 65%;
        transition: all .3s ease;
    }

    .search-input {
        border-radius: 8px;
        height: 48px;
    }

    .focusActive {
        transform: scale(1.02) translateZ(0);
    }
}

@keyframes gradient {
    50% {
        background-position: 100% 0
    }
}

@media (max-width: 800px) {
    .big-title {
        font-size: 30px !important;
        padding: 10px;
    }

    .search-input-content {
        width: 90% !important;
    }
}
</style>