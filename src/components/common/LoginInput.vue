<template>
  <div class="flex flex-col px-4 py-[6px] rounded-[5px] border-primary border-solid border-[1px]">
    <label :for="`login-input-${id}`" class="font-medium text-primary">{{ label }}</label>
    <input
      :id="`login-input-${id}`"
      class="text-[14px] outline-none mt-2"
      :type="type"
      autocomplete
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: string;
  label: string;
  id: string;
}>();
</script>

<style scoped></style>
