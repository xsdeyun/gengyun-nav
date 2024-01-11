<template>
  <n-drawer v-model:show="setActive" @update:show="updateActive" :width="300" :z-index="1099">
    <n-drawer-content title="网站设置" closable>
      <div class="curd-mode w-full">
        <n-divider> 卡片模式 </n-divider>
        <div class="flex gap-3 flex-wrap justify-between">
          <n-space class="skeleton-content p-1 m-1 cursor-pointer" :class="{ curdActive: navStore.curdMode == 1 }"
            @click="handleSkeleton(1)">
            <n-skeleton height="20px" circle />
            <div>
              <n-skeleton height="10px" :width="65" />
              <n-skeleton class="mt-1" height="10px" :width="65" />
            </div>
            <n-skeleton class="delete-skeleton-line" height="10px" :width="97" />
          </n-space>

          <n-space class="skeleton-content p-1 m-1 cursor-pointer" :class="{ curdActive: navStore.curdMode == 2 }"
            @click="handleSkeleton(2)">
            <n-skeleton height="20px" circle />
            <div>
              <n-skeleton height="10px" :width="65" />
              <div class="flex items-center gap-4 mt-1" style="width: 65px">
                <n-skeleton height="10px" circle />
                <n-skeleton height="10px" circle />
              </div>
            </div>
            <n-skeleton height="10px" :width="97" />
          </n-space>

          <n-space class="skeleton-content p-1 m-1 cursor-pointer" :class="{ curdActive: navStore.curdMode == 3 }"
            @click="handleSkeleton(3)">
            <n-skeleton height="20px" circle />
            <div>
              <n-skeleton height="10px" :width="65" />
              <n-skeleton class="mt-1 delete-skeleton-line" height="10px" :width="65" />
            </div>
            <n-skeleton class="delete-skeleton-line" height="10px" :width="97" />
          </n-space>

          <n-space class="skeleton-content p-1 m-1 cursor-pointer" :class="{ curdActive: navStore.curdMode == 4 }"
            @click="handleSkeleton(4)">
            <n-skeleton height="20px" circle />
            <div>
              <n-skeleton height="10px" :width="65" />
              <n-skeleton class="mt-1" height="10px" :width="65" />
            </div>
            <div class="flex items-center gap-1" style="width: 97px">
              <n-skeleton height="10px" circle />
              <n-skeleton height="10px" circle />
              <n-skeleton class="ml-auto" height="10px" circle />
            </div>
          </n-space>
        </div>
      </div>
      <!-- 布局模式 -->
      <div class="curd-mode w-full">
        <n-divider> 布局模式 </n-divider>
        <div class="flex gap-3 justify-between">
          <div class="flex flex-wrap" style="width:50%">
            <n-skeleton height="53px" class="mr-1" :width="15" />
            <div>
              <n-skeleton height="15px" :width="85" />
              <n-skeleton class="mt-1" height="15px" :width="85" />
              <n-skeleton class="mt-1" height="15px" :width="85" />
            </div>
            <div class="w-full text-center mt-2">
              <n-radio :checked="Number(appStore.AppLayout) == 1" name="1" :value="1" @change="handleLayout"></n-radio>
            </div>
          </div>
          <div class="flex flex-wrap flex-column" style="width:50%">
            <n-skeleton height="15px" :width="100" />
            <n-skeleton class="mt-1" height="15px" :width="100" />
            <n-skeleton class="mt-1" height="15px" :width="100" />
            <div class="w-full text-center mt-2">
              <n-radio :checked="Number(appStore.AppLayout) == 2" name="2" :value="2" @change="handleLayout"></n-radio>
            </div>

          </div>
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
<script setup>
import { ref, watch } from "vue";
import { useNavStore, useAppStore } from "@/store";
const navStore = useNavStore();
const appStore = useAppStore();
const setActive = ref(props.active);
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:active"]);
watch(
  () => props.active,
  (newVal) => {
    setActive.value = newVal;
  }
);
const updateActive = (val) => {
  emit("update:active", val);
};

const handleSkeleton = (val) => {
  navStore.initCurdMode(val);
};

const handleLayout = (e) => {
  appStore.initAppLayout(e.target.value);
};
</script>
<style scoped>
.skeleton-content {
  width: 43%;
}

.curdActive {
  border-radius: 6px;
  border: 2px solid var(--primary-hover);
}

.delete-skeleton-line {
  position: relative;
  background: none;
  animation: 0;
}

.delete-skeleton-line::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 2px;
}
</style>
