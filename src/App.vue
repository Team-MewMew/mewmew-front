<template>
  <BaseBlackHeader v-show="isShowingHeader" />
  <section class="overflow-y-auto" :class="[contentsHeight]">
    <RouterView />
  </section>
  <BaseFooter v-show="isShowingFooter" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import BaseFooter from '@/layouts/BaseFooter.vue';
import BaseBlackHeader from '@/layouts/BaseBlackHeader.vue';

const route = useRoute();

const isShowingHeader = computed(() => {
  if (route.path === '/intro') {
    return false;
  }

  return true;
});

const isShowingFooter = computed(() => {
  if (route.path === '/intro') {
    return false;
  }

  return true;
});

const contentsHeight = computed(() => {
  if (isShowingHeader.value && isShowingFooter.value) {
    return 'h-[calc(100vh_-_115px)]';
  } else if (isShowingHeader.value) {
    return 'h-[calc(100vh_-_71px)]';
  } else if (isShowingFooter.value) {
    return 'h-[calc(100vh_-_44px)]';
  }

  return 'h-screen';
});
</script>

<style scoped></style>
