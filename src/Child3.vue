<template>
  <div style="border: 1px solid orange; padding: 6px">
    <li v-for="(item, index) in store" :key="index">{{ item }}</li>
  </div>
</template>

<script setup lang="ts">
  import store from './store'
</script>

<style scoped></style>
