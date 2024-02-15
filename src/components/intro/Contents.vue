<template>
  <section class="flex flex-col justify-center gap-[34px] mt-[228px] p-[65px]">
    <h1 class="flex justify-center">
      <IconLogoVue />
    </h1>
    <!-- <Modal v-if="isShowing" @switch="toggleModal">
      <div class="absolute bottom-0 w-full bg-white rounded-t-[20px]">
        <header class="p-[32px] text-3xl text-center border-b border-solid border-gray-300">
          정말 게시글을 삭제하시겠습니까?
        </header>
        <footer class="flex">
          <Button type="button" char="warning" styles="p-8 text-3xl" @click="invokeModal"
            >삭제</Button
          >
          <Button type="button" char="cancel" styles="p-8 text-3xl" @click="toggleModal"
            >취소</Button
          >
        </footer>
      </div>
    </Modal> -->
    <div class="flex flex-col gap-[12px]">
      <Button type="button" char="primary" styles="p-6 text-2xl" @click="handleLoginClick"
        >로그인</Button
      >
      <Button type="button" char="secondary" styles="p-6 text-2xl" @click="handleSignupClick"
        >회원가입</Button
      >
      <!-- <Button type="button" char="secondary" styles="p-6 text-2xl" @click="toggleModal"
        >모달</Button
      > -->
    </div>
  </section>
</template>

<script setup lang="ts">
import IconLogoVue from '@/components/icons/IconLogo.vue';
import Button from '@/components/common/Button.vue';
import { useRouter } from 'vue-router';
// import Modal from '@/components/common/Modal.vue';
// import { useModal } from '@/composables/useModal';

const router = useRouter();

// const { isShowing, toggleModal, invokeModal } = useModal({
//   callback: () => console.log('삭제 되었습니다.')
// });

const handleLoginClick = () => {
  router.push('/login');
};

const handleSignupClick = (event: MouseEvent) => {
  console.log(event);
};
</script>

<style scoped></style>
