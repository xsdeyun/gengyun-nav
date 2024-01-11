<template>
  <div class="flex justify-start items-center mb-2">
    <n-icon size="20">
      <component :is="value.icon"></component>
    </n-icon>
    <h3 class="ml-2" :id="`menu-Id-${value.id}`">{{ value.name }}</h3>
  </div>
</template>
<script setup>
const props = defineProps({
  value: {
    type: Object,
    default: {},
  }
});
</script>
