<template>
  <input type="text" ref="inputRef" v-model="count" />
  <button @click="age++">{{ age }}</button>
  <h1>{{ doubleCount }}</h1>

  <button @click="up">up list</button>
  <ul>
    <Child v-for="item in list" :key="item" :item="item"></Child>
  </ul>
</template>

<script setup lang="ts">
  import {
    computed,
    onBeforeMount,
    onBeforeUpdate,
    onMounted,
    onUnmounted,
    onUpdated,
    reactive,
    ref,
    shallowRef,
    toRef,
    watch,
    watchEffect,
    watchPostEffect
  } from 'vue'
  import Child from './Child.vue'

  const list = shallowRef([1, 2, 3])
  const state = reactive({ name: 'zhangsan', age: 18 })
  const age = toRef(state, 'age')

  console.log(age)

  function up() {
    // list.value.push(list.value.length + 1)
    list.value = list.value.concat(list.value.length + 1)
  }
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)

  const inputRef = ref<HTMLInputElement>(null)

  console.log(count)

  watch(count, (value, oldValue) => {
    console.log('watch', value, oldValue)
  })

  watchEffect(() => {
    console.log('watchEffect', count.value, inputRef.value)
  })

  watchPostEffect(() => {
    console.log('watchPostEffect', count.value, inputRef.value)
  })

  onBeforeMount(() => {
    console.log('onBeforeMount', inputRef.value)
  })

  onMounted(() => {
    inputRef.value.focus()
    console.log('onMounted', count.value, inputRef.value)
  })

  onBeforeUpdate(() => {
    console.log('onBeforeUpdate', count.value, 'inputDom 的值-> ', inputRef.value.value)
  })

  onUpdated(() => {
    console.log('onUpdated', count.value, 'inputDom 的值-> ', inputRef.value.value)
    console.log('state', state)
  })

  onUnmounted(() => {})
</script>
