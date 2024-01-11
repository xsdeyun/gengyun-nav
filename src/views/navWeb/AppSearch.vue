<template>
    <div class="link-search-content flex justify-center items-center flex-col p-5">
        <div class="app-navs-contanier mt-5">
            <div class="flex justify-start items-center mb-5">
                <h3>以下是搜索到的内容...</h3>
            </div>
            <div class="app-navs-content mt-3" v-if="Links.length">
                <n-grid x-gap="20" cols="1 400:2 600:2 800:3 900:4 1100:4 1200:5 1400:7 1600:9">
                    <n-gi :span="1" v-for="(h, j) in Links" :key="j">
                        <LinkCurd class="mb-6" :value="h" />
                    </n-gi>
                </n-grid>
            </div>
            <div class="no-data" v-else>抱歉哦！好像没有你要查找的内容...</div>
        </div>
    </div>
</template>
<script setup>
import LinkCurd from "@/components/LinkCurd/index.vue";
import { ref, onMounted, watch } from "vue";
import { listLinks } from "@/api/navWeb/init.js";
import { useRoute } from "vue-router";
const route = useRoute();
const Links = ref([]);
const keywords = ref("");

watch(
    () => route.query.val,
    (newVal) => {
        keywords.value = newVal;
        getLinksData();
    }
);

onMounted(() => {
    keywords.value = route.query.val;
    getLinksData();
});
const getLinksData = () => {
    listLinks({ keywords: keywords.value }).then((res) => {
        Links.value = res.data.list;
    });
};
</script>

<style lang="scss" scoped>
.link-search-content {
    width: 100%;
}

.app-navs-contanier {
    width: 100%;

    .app-navs-content {
        transition: all 0.5s ease-in-out;
    }
}
</style>