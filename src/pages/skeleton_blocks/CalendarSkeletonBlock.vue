<template>
  <div class="w-[14%] p-2 mx-4 bg-white rounded-xl">
    <h1
      class="cursor-pointer m-4 text-xl font-black text-pink-400 hover:text-pink-500"
    >
      | 每日放送
    </h1>
    <div v-for="n in 4" :key="n">
      <div class="m-4">
        <div class="w-full">
          <SkeletonBox class="bg-gray-100 rounded-md w-full pt-[143%]" />
        </div>
        <div class="mb-2">
          <SkeletonBox class="bg-gray-100 rounded-md w-full h-6" />
          <div class="flex flex-row justify-items-start">
            <h3 class="text-sm text-gray-400 w-20">连载于</h3>
            <SkeletonBox
              class="justify-items-start-stretch bg-gray-100 rounded-md w-full h-5"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SkeletonBox from '../../components/SkeletonBox.vue';
</script>
