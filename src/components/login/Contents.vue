<template>
  <section class="flex flex-col justify-center gap-[34px] mt-[228px] p-[65px]">
    <h1 class="flex justify-center">
      <IconLogo />
    </h1>
    <form class="flex flex-col gap-[12px]">
      <LoginInput type="text" label="이메일" id="email" />
      <LoginInput type="password" label="비밀번호" id="password" />
      <Button char="primary" type="button" styles="py-[13px] text-[16px]">로그인</Button>
      <img src="https://mewmew-images.s3.ap-northeast-2.amazonaws.com/kakao-login.jpg" />
    </form>
  </section>
</template>

<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue';
import LoginInput from '@/components/common/LoginInput.vue';
import Button from '@/components/common/Button.vue';
</script>

<style scoped></style>
