<template>
  <div style="border: 1px solid #333; padding: 6px">
    <li v-for="(item, index) in store" :key="index">{{ item }}</li>
  </div>

  <button @click="store.push(Math.floor(Math.random() * 100))">push</button>
</template>

<script setup lang="ts">
  import store from './store'
</script>

<style scoped></style>
