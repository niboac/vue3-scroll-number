<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Ref } from 'vue';
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

const newFrom = ref(props.from)
const valCache = ref(props.from)

const toNumbers: Ref<String[]> = ref([])

watch(() => props.to, (newCount, oldCount) => {

  newFrom.value = valCache.value
  setTimeout(() => {
    toNumbers.value = getToNumbers(props.to)
    valCache.value = props.to
  }, 10)
}, {
  immediate: true
})

function getFromNumbers(num: Number) {
  let toList = props.to.toString().split('')
  let fromList = newFrom.value.toString().split('')
  return padWithZeros(num.toString().split(''), toList.length - fromList.length)
}

function getToNumbers(num: Number) {
  return num.toString().split('')
}

function padWithZeros(arr: string[], n: number) {
  return Array.from({ length: n }).fill(0).concat(arr);
}

const fromNumbers = computed(() => {
  console.log(" newFrom:>> ", newFrom.value);

  return getFromNumbers(newFrom.value)
})

</script>

<template>
  <div class="flex-row">
    <Vue3ScrollNUmberItem
      v-for="(item, index) in toNumbers"
      :key="(to.toString()) + index"
      :list="[Number(fromNumbers[index]) || 0, Number(item) || 0]"
    ></Vue3ScrollNUmberItem>
  </div>
</template>

<style scoped>
.flex-row {
  display: flex;
}
</style>
