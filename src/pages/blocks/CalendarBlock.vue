<template>
  <div class="w-[14%] p-2 mx-4 bg-white rounded-xl">
    <h1
      class="cursor-pointer m-4 text-xl font-black text-pink-400 hover:text-pink-500"
    >
      | 每日放送
    </h1>
    <div v-for="item in items" :key="item.id">
      <CalendarItemDisplayBox
        :cover-url="item.coverUrl"
        :title="item.title"
        :air-date="item.airDate"
        :rate="item.rate"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CalendarItemDisplayBox from '../../components/CalendarItemDisplayBox.vue';

import { CalendarItem } from '../scripts/index-page';

defineProps<{
  items: CalendarItem[],
}>()
</script>
