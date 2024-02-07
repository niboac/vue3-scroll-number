<script setup lang="ts">
// import Vue3ScrollingNumber from 'vue3-scrolling-number'
import AnimatedCounter from "vue-animated-counter"

import 'vue3-scrolling-number/dist/style.css'
import { ref } from 'vue';

const value = ref(229)

function addValue() {
  setTimeout(() => {
    value.value += 9
    console.log("value.value :>> ", value.value);
    addValue()
  }, 2000)
}
addValue()

</script>

<template>
  <main style="display: flex; justify-content: center;">
    <Vue3ScrollingNumber
      style="font-size: 55px;"
      :from="21"
      :to="value"
    />
    <AnimatedCounter
      :value="500"
      :duration="1000"
      class="counter"
    />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
