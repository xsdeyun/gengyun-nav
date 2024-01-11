<template>
  <div class="flex justify-center items-center flex-col p-5 z-36">

    <!-- search -->
    <UntSearch class="mb-6" @on-search="goLinksSearch" />

    <!-- router -->
    <router-view>
      <template #default="{ Component }">
        <transition name="zoom-fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </template>
    </router-view>
  </div>
</template>
<script setup>
import UntSearch from "@/components/UntSearch/index.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goLinksSearch = (a) => {
  if (a != "") {
    router.push({ name: "search", query: { val: a } });
  } else {
    router.push({ name: "view" });
  }
};
</script>