<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  from: {
    type: Number,
    default: 0,
  },
  to: {
    type: Number,
    default: 0,
  },
});

const numbers = computed(() => {
  return generateNumberList(props.from, props.to)
})

const style = computed(() => {
  return { transform: 'translateY(' + (-numbers.value.length) + 'em' }
})

function generateNumberList(a: number, b: number) {
  let result: number[] = [];

  if (a < b) {
    for (let i = a; i < b; i++) {
      result.push(i);
    }
  } else if (a > b) {
    for (let i = a; i < b + 10; i++) {
      result.push(i % 10);
    }
  }

  return result;
}
</script>

<template>
  <div class="number-limit">
    <div
      class="number-box"
      :style="style"
    >
      <div
        v-for="(item) in numbers"
        :key="item"
      >{{ item }}</div>
      <div>{{ to }}</div>
    </div>
  </div>
</template>

<style scoped>
.number-limit {
  height: 1em;
  line-height: 1em;
  overflow: hidden;
  position: relative;
}

.number-box {
  display: flex;
  flex-direction: column;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
