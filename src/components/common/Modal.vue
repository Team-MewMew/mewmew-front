<template>
  <Teleport to="body">
    <section
      class="absolute top-0 w-screen h-screen bg-black opacity-50 cursor-pointer"
      @click="handleBackgropClick"
    />
    <slot />
  </Teleport>
</template>

<script lang="ts"></script>

<script setup lang="ts">
const emit = defineEmits(['switch']);

const handleBackgropClick = () => {
  emit('switch');
};
</script>

<style scoped></style>
