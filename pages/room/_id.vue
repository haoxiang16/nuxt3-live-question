<script setup>
const route = useRoute();
const router = useRouter();
</script>

<template>
  <h2>房型資料 {{ route.fullPath }}</h2>

  <button @click="router.back">回上一頁</button>
</template>

<style scoped></style>