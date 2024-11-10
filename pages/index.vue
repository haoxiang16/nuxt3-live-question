<script setup>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const {newList , isLoading,  getNewsData} = useHome();
await  getNewsData();

</script>

<template>
  <div class="container">
    <h1>最新消息</h1>
    <NewsCard v-for="item in newList" :key="item.id"  v-bind="item" />


    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
