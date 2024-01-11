<template>
  <div class="link_curd_container w-full relative">
    <div
      class="link_curd_content flex flex-wrap items-center b-rd-3 p-3 gap-2 z-8"
      @click="handleLinks(value.link)"
    >
      <!-- 图片 icon -->
      <n-image
        class="image-round"
        :lazy="true"
        :preview-disabled="true"
        width="45"
        height="45"
        :src="value.icon"
        :fallback-src="IconLoad"
      />
      <!-- 标题 描述 -->

      <template v-if="navStore.curdMode == 1">
        <div class="title_description_content flex flex-col p-l-2">
          <p class="title font-bold mb-1">{{ value.name }}</p>
          <div class="description">
            <n-performant-ellipsis
              :line-clamp="2"
              :tooltip="{
                width: 'trigger',
                style: 'min-width: 200px',
                placement: 'bottom-start',
              }"
            >
              {{ value.description }}
            </n-performant-ellipsis>
          </div>
        </div>
      </template>
      <template v-else-if="navStore.curdMode == 2">
        <div class="title_views_likes_content flex flex-col p-l-2">
          <p class="title font-bold mb-1">{{ value.name }}</p>
          <div class="views_likes flex items-center gap-3">
            <span class="flex items-center gap-1">
              <n-icon size="18" color="#333">
                <EyeOutline />
              </n-icon>
              {{ formatNumber(value.views) }}
            </span>
            <span class="flex items-center gap-1">
              <n-icon size="18" color="#333">
                <HeartCircleOutline />
              </n-icon>
              {{ formatNumber(value.likes) }}
            </span>
          </div>
        </div>
        <div class="description">
          <n-performant-ellipsis
            :line-clamp="2"
            :tooltip="{ width: 'trigger' }"
          >
            {{ value.description }}
          </n-performant-ellipsis>
        </div>
      </template>

      <template v-else-if="navStore.curdMode == 3">
        <div class="title_content flex flex-col p-l-2">
          <p class="title font-bold mb-1">{{ value.name }}</p>
        </div>
      </template>
      <template v-else-if="navStore.curdMode == 4">
        <div class="title_description_content flex flex-col p-l-2">
          <p class="title font-bold mb-1">{{ value.name }}</p>
          <div class="description">
            <n-performant-ellipsis
              :line-clamp="2"
              :tooltip="{ width: 'trigger' }"
            >
              {{ value.description }}
            </n-performant-ellipsis>
          </div>
        </div>
        <div class="views_likes w-full flex items-center gap-3">
          <span class="flex items-center gap-1">
            <n-icon size="18" color="#333">
              <EyeOutline />
            </n-icon>
            {{ formatNumber(value.views) }}
          </span>
          <span class="flex items-center gap-1">
            <n-icon size="18" color="#333">
              <HeartCircleOutline />
            </n-icon>
            {{ formatNumber(value.likes) }}
          </span>
          <n-icon size="18" color="#333" class="ml-auto">
            <ArrowRedoCircleOutline />
          </n-icon>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import IconLoad from "@/assets/image/icon.svg";
import { useRouter } from "vue-router";
import { useNavStore } from "@/store";
const navStore = useNavStore();
const router = useRouter();
const props = defineProps({
  value: {
    type: Object,
    default: {},
  },
});
const handleLinks = (val) => {
  const u = btoa(val);
  let routeData = router.resolve({
    name: "jump",
    query: { id: u },
  });
  window.open(routeData.href, "_blank");
};
// 格式化数字串
const formatNumber = (val) => {
  const valTemp = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return valTemp;
};
</script>
<style lang="scss" scoped>
.layout-default-background {
  .link_curd_content {
    background-color: #fff;
  }

  .title_description_content .title,
  .title_views_likes_content .title,
  .title_content .title {
    color: #1d2447 !important;
  }
}

.link_curd_content {
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  background-color: #000;
  transform: translateY(0px);
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease-in-out;

  .image-round {
    border-radius: 50%;
  }

  .title_description_content,
  .title_views_likes_content,
  .title_content {
    width: calc(100% - 55px);

    .title {
      color: rgba(255, 255, 255, 0.85);
      font-size: 16px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .views_likes {
    color: #333;
    font-size: 14px;
  }
  .title_description_content {
    .description {
      min-height: 38.4px;
    }
  }
  
  .description {
    display: inline-flex;
    font-size: 12px;
    color: #7f85a3;
  }
}

// hover 动效
.link_curd_content:hover {
  transform: translateY(-10px);
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
  -webkit-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
  -moz-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
}
</style>
