<template>
  <section class="flex flex-col justify-center gap-[34px] mt-[228px] p-[65px]">
    <h1 class="flex justify-center">
      <IconLogoVue />
    </h1>
    <div class="flex flex-col gap-[12px]">
      <Button type="button" char="primary" styles="p-6 text-2xl" @click="handleLoginClick"
        >로그인</Button
      >
      <Button type="button" char="secondary" styles="p-6 text-2xl" @click="handleSignupClick"
        >회원가입</Button
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import IconLogoVue from '@/components/icons/IconLogo.vue';
import Button from '@/components/common/Button.vue';

const handleLoginClick = (event: MouseEvent) => {
  console.log(event);
};

const handleSignupClick = (event: MouseEvent) => {
  console.log(event);
};
</script>

<style scoped></style>
