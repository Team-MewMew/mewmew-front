<template>
  <button
    v-if="char === 'primary'"
    :type="type"
    class="bg-primary w-full rounded text-white"
    @click="handleClick"
    :class="styles"
  >
    <slot />
  </button>
  <button
    v-else
    :type="type"
    class="bg-white w-full border border-primary rounded text-primary"
    @click="handleClick"
    :class="styles"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type: 'button' | 'submit';
  char: 'primary' | 'secondary';
  styles: string;
}>();

const emit = defineEmits(['click']);

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style scoped></style>
