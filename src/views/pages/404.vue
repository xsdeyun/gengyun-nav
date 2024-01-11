<template>
  <div class="unt-page404-main">
    <p>
      <span class="unt-page404-atxt"> 404! </span>
      <span>您所访问的页面不存在，您可以选择返回</span>
      <router-link class="atxt" to="/">首页面 </router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "unt-404",
};
</script>
<style scoped>
.unt-page404-main {
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5px;
  text-align: center;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
