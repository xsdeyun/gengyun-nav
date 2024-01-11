<template>
  <div class="w-full" v-if="isLoading">
    <div class="pt-5" v-for="(a, i) in menusReach" :key="i">
      <CateMenu class="mb-3" :value="a" />

      <template v-if="a.children.length">
        <UntTabs ref="checkUntTabs" class="mb-4" :findex="i" :value="a.children" label="name" @on-change="handleTabs" />
      </template>

      <n-grid x-gap="20" cols="1 400:2 600:2 800:3 900:4 1100:4 1200:5 1500:7">
        <n-gi :span="1" v-for="(h, j) in Links[a.tip_id]" :key="j" class="flex align-center justify-center">
          <LinkCurd class="mb-6" :value="h" />
        </n-gi>
      </n-grid>
    </div>
  </div>
  <div class="loading-content" :class="{ isLoadingBar: !isLoading }" v-else></div>
</template>
<script setup>
import CateMenu from "@/components/CateMenu/index.vue";
import UntTabs from "@/components/UntTabs/index.vue";
import LinkCurd from "@/components/LinkCurd/index.vue";
import { initLinks } from "@/api/navWeb/init.js";
import { ref, computed, onMounted, watch } from "vue";
import { useNavStore } from "@/store";
const navStore = useNavStore();
const menus = ref([]);
const Links = ref([]);
const checkUntTabs = ref(null);
const isLoading = ref(false);
const menusReach = computed(() => {
  menus.value = menus.value.length > 0 ? menus.value : navStore.menus;
  return menus.value;
});
watch(
  () => navStore.tabsData,
  (n) => {
    if (n !== null) {
      checkUntTabs.value[n.tabIndex - 1].handleChange(
        n.dataId,
        n.dataIndex,
        true
      );
    }
  }
);
onMounted(() => {
  getLinksData();
});
const getLinksData = () => {
  initLinks().then((res) => {
    Links.value = res.data.list;
    isLoading.value = true;
  });
};
const handleTabs = (e) => {
  const index = e.findex;
  menus.value[index].tip_id = e.id;
};
</script>
<style scoped>
.loading-content {
  margin-top: 20%;
  letter-spacing: 5px;
  font-weight: bold;
}
</style>
