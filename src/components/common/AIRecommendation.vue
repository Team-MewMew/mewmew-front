<template>
  <section class="mx-8 my-16">
    <div class="h-12 mb-16">
      <span class="text-4xl font-semibold">오늘의 AI 추천 곡</span>
      <span @click="onClickMore" class="text-gray-500 text-2xl float-end relative top-1/4">더보기</span>
    </div>
    <div class="p-12 rounded-md shadow-3xl h-full flex">
      <span @click="onClick" class="inline-block w-1/4 cursor-pointer">
        <img src="@/assets/img/testImg.png" class="w-full" alt="이미지가 누락 되었습니다."/>
      </span>
      <span class="relative inline-block w-3/4 ps-8">
        <span class="whitespace-pre-line text-lg md:text-xl lg:text-2xl xl:text-3xl">
          "맑은 하늘이 반기는 날, 싱그러운 노래가 어울릴 거에요. 햇살 가득한 날에 듣기 좋은 음악을 추천해드릴게요. 오늘 하루도 밝고 행복하길 바라요!"
        </span>
        <br>
        <span @click="onClick" class="absolute bottom-0 font-normal text-gray-500 whitespace-pre-line text-lg md:text-xl lg:text-2xl xl:text-3xl">
          STAYC(스테이씨) - Bubble
        </span>
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import { useFetch } from '@/composables/useFetch';
// import { useMutation } from '@/composables/useMutation';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const params = ref({
  message: ''
});

// const { data, isLoading, isSuccess, isError } = useFetch('/AI/playlist');
// const { mutate } = useMutation('/posts');

  const onClickMore = () => {
  router.push('/AI/recommendations');
};
const onClick = () => {
  console.log("한개의 곡정보로 router push 될듯하다.")
}
</script>

<style scoped>
@media (max-width: 320px) {
  .text-lg {
    font-size: 1rem;
  }
}
</style>
