<template>
  <button @click="count++">{{ count }}</button>
  <div>de {{ count }}</div>
</template>

<script setup lang="ts">
  import { customRef } from 'vue'

  function useDebouncedRef<T>(value: T, delay = 1000) {
    let timeout: number

    return customRef((track, trigger) => {
      return {
        get() {
          track()
          return value
        },
        set(newValue) {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            value = newValue
            trigger()
          }, delay)
        }
      }
    })
  }

  const count = useDebouncedRef(3)
</script>
