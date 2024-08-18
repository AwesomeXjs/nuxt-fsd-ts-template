<script setup lang="ts">
const nuxtApp = useNuxtApp();

// example composables
const { sayExample } = useExample();
sayExample();

onMounted(() => {
  // example plugins
  nuxtApp.$sayHello();
});
</script>

<template>
  <h1>Hello World</h1>
</template>

<style scoped></style>
