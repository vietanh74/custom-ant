<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '../index';
import Foo from '../Foo.vue';

const counter = ref<number>(2);

const up = () => {
  counter.value += 2;
};
</script>

<template>
  <div class="container">
    <h1>{{ counter }}</h1>
    <Button type="primary" @click="up()">Up</Button>
    <Foo />
  </div>
</template>

<style scoped>
.container {
  padding: 10px 16px;
}

h1 {
  color: red;
}
</style>
