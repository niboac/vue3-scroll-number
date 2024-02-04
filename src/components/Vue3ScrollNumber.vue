<script setup lang="ts">
import { computed } from 'vue';
import Vue3ScrollNUmberItem from './Vue3ScrollNumberItem.vue';


const props = defineProps({
  from: {
    type: Number,
    default: 0,
  },
  to: {
    type: Number,
    default: 10,
  },
});

function getNumbers(num: Number) {
  return num.toString().split('')
}

const fromNumbers = computed(() => {
  return getNumbers(props.from)
})
const toNumbers = computed(() => {
  return getNumbers(props.to)
})
</script>

<template>
  <div class="flex-row">
    <Vue3ScrollNUmberItem
      v-for="(item, index) in toNumbers"
      :key="item"
      :from="Number(fromNumbers[index] || 0)"
      :to="Number(item)"
    ></Vue3ScrollNUmberItem>
  </div>
</template>

<style scoped>
.flex-row {
  display: flex;
}
</style>
