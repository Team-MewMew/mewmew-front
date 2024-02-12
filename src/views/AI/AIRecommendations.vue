<template>
  <section>
    <div class="relative">
      <div class="w-full h-80 overflow-hidden">
        <img src="@/assets/img/testImg.png" alt="이미지가 누락 되었습니다." class="blur w-full" />
      </div>
        <div class="shadow-gray-500 shadow-sm bg-amber-300 w-64 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 rotate-3 h-64"><!-- 이미지에서 색상 추출후 색깔 적용(안대면 플리에 노래 3개 이미지 가져와서 겹치기 ;ㅅ;) --></div>
        <div class="shadow-gray-500 shadow-sm bg-fuchsia-200 w-64 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -rotate-3 h-64"><!-- 이미지에서 색상 추출후 색깔 적용(안대면 플리에 노래 3개 이미지 가져와서 겹치기 ;ㅅ;) --></div>
        <img src="@/assets/img/testImg.png" alt="이미지가 누락 되었습니다." class="shadow-gray-600 shadow-sm w-64 rounded-2xl transform -translate-x-1/2 absolute top-1/2 left-1/2"/>
    </div>
    <div class="mx-8 my-36">
      <p class="font-bold text-2xl	">오늘의 AI 플레이 리스트</p>
      <div class="text-right mt-5">공유 icon</div>
      <div class="text-right mt-12 text-base text-black"><span class="mx-4">+ 선택곡 담기</span><span>✔ 전체 선택</span></div>
    </div>
  </section>
</template>

<script setup lang="ts">


</script>

<style scoped>
@media (max-width: 320px) {
  .text-lg {
    font-size: 1rem;
  }
}
</style>
