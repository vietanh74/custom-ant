<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  msg: string,
}>();

const counter = ref<number>(2);

const up = () => {
  counter.value += 2;
};
</script>

<template>
  <div class="container">
    <h4 @click="up()">Hello</h4>
    <h5>{{ counter }}</h5>
    <h3>{{ props.msg }}</h3>
  </div>
</template>

<!-- <style scoped lang="scss">
.container {
  padding: 10px 16px;
}

h1 {
  color: red;
}
</style> -->
