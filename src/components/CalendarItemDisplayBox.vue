<template>
  <div class="m-4" @click="">
    <div class="relative rounded-md shadow-md hover:scale-105 cursor-pointer transition ease-in-out">
        <img class="rounded-md" title="cover" :src="props.coverUrl" />
        <div class="rounded-md absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-800 to-transparent" />
        <div class="absolute mr-2 mb-2 right-0 bottom-0 text-3xl text-white font-black tracking-wider">{{ props.rate }}</div>  
    </div>
    <div class="my-2">
      <h2 class="cursor-pointer truncate antialiased text-lg hover:text-pink-500 transition">{{ props.title }}</h2>
      <h3 class="text-sm text-gray-400">连载于 {{ props.airDate }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  coverUrl: string;
  title: string;
  airDate: string;
  rate: number;
}>();
</script>
