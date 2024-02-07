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
    v-else-if="char === 'secondary'"
    :type="type"
    class="bg-white w-full border border-primary rounded text-primary"
    @click="handleClick"
    :class="styles"
  >
    <slot />
  </button>
  <button
    v-else-if="char === 'warning'"
    :type="type"
    class="w-full bg-red-100 text-white"
    @click="handleClick"
    :class="styles"
  >
    <slot />
  </button>
  <button
    v-else-if="char === 'cancel'"
    :type="type"
    class="w-full bg-white text-black"
    @click="handleClick"
    :class="styles"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type: 'button' | 'submit';
  char: 'primary' | 'secondary' | 'warning' | 'cancel';
  styles?: string;
}>();

const emit = defineEmits(['click']);

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style scoped></style>
