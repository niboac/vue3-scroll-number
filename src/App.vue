<script setup lang="ts">
import Vue3ScrollNumber from './components/Vue3ScrollNumber.vue'
import { ref } from 'vue';

const value = ref(21)
const fromValue = ref(0)

function addValue() {
  setTimeout(() => {
    fromValue.value = value.value
    value.value += 9
    console.log("value.value :>> ", value.value);
    addValue()
  }, 2000)
}
addValue()

</script>

<template>
  <main style="display: flex; justify-content: center;">
    <Vue3ScrollNumber
      style="font-size: 55px;"
      :from="fromValue"
      :to="value"
    />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
