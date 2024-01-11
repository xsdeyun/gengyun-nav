<template>
  <n-scrollbar x-scrollables>
    <div class="unts-tab-cate-content">
      <span class="Pseudo-elements" :style="{ left: activeLeft + 'px' }"></span>
      <div class="unts-tab-btn" :id="`menu-Id-${item.id}`" :data-index="index" :data-id="item.id"
        :class="{ active: activeIndex == index }" v-for="(item, index) in value" :key="index"
        @mouseover="hanldeMoveLeft(index)" @mouseout="hanldeOutLeft()" @click="handleChange(item.id, index)">
        {{ item[label] }}
      </div>
    </div>
  </n-scrollbar>
</template>
    
<script setup>
import { ref } from "vue";
const props = defineProps({
  value: {
    type: Array,
    default: [],
  },
  label: {
    type: String,
    default: "label",
  },
  findex: {
    type: Number,
    default: -1,
  },
});

const emit = defineEmits(["onChange"]);
const startIndex = ref(0);
const activeIndex = ref(0);
const startLeft = ref(5);
const activeLeft = ref(5);
const hanldeMoveLeft = (index) => {
  if (index == 0) {
    activeLeft.value = 5;
  } else {
    activeLeft.value = index * 120 + 5;
  }
  activeIndex.value = index;
};
const hanldeOutLeft = () => {
  activeLeft.value = startLeft.value;
  activeIndex.value = startIndex.value;
};
const handleChange = (id, index, l = false) => {
  if (index == 0) {
    startLeft.value = 5;
  } else {
    startLeft.value = index * 120 + 5;
  }
  startIndex.value = index;
  if (l) {
    activeLeft.value = startLeft.value = index * 120 + 5;
    activeIndex.value = index;
  } else {
    const scrollDistance = activeLeft.value - 120; // 设置滚动的距离
    const evt = document.querySelector(`#menu-Id-${id}`);
    evt.parentNode.scrollTo({
      left: scrollDistance,
      behavior: 'smooth'
    });
  }

  emit("onChange", { id: id, index: index, findex: props.findex });
};

defineExpose({ handleChange });
</script>
    
<style lang="scss" scoped>
.layout-default-background {
  .unts-tab-cate-content {
    background-color: rgb(235, 235, 235);

    .Pseudo-elements {
      background-color: #3300ff;
    }

    .unts-tab-btn {
      color: #000;
    }

    .active {
      color: #fff;
    }
  }
}

.unts-tab-cate-content {
  width: auto;
  display: inline-block;
  padding: 5px;
  position: relative;
  background-color: #000;
  border-radius: 50px;
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;

  .Pseudo-elements {
    position: absolute;
    bottom: 5px;
    width: 120px;
    height: calc(100% - 10px);
    background-color: rgb(16, 16, 20);
    transition: left 0.3s ease;
    border-radius: 50px;
    z-index: 22;
  }

  .unts-tab-btn {
    width: 120px;
    cursor: pointer;
    position: sticky;
    color: #fff;
    padding: 0px 10px;
    display: inline-block;
    height: 35px;
    line-height: 35px;
    z-index: 25;
    text-align: center;
  }

  .active {
    color: #fff;
  }
}

@media (min-width: 768px) {
  .unts-tab-cate-content {
    overflow-x: hidden;
  }

  .unts-tab-cate-content:hover {
    overflow-x: auto;
  }

  /*滚动条凹槽的颜色 */
  *::-webkit-scrollbar-track-piece {
    background-color: #f8f8f8;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
    display: none;
  }

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    background-clip: padding-box;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
  }
}
</style>
    