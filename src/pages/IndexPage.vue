<template>
  <div class="flex justify-center items-start my-20">
    <CalendarBlock
      class="shadow-md transition"
      :items="calendarItems"
      v-if="calendarItems.length > 0"
    />
    <CalendarSkeletonBlock class="transition" v-else />
    <div class="flex-initial w-[66%] mx-4">
      <SearchBlock class="shadow-md" />
      <ResourceListBlock class="shadow-md mt-4" :items="testItems" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import SearchBlock from './blocks/SearchBlock.vue';
import CalendarBlock from './blocks/CalendarBlock.vue';
import ResourceListBlock from './blocks/ResourceListBlock.vue';
import CalendarSkeletonBlock from './skeleton_blocks/CalendarSkeletonBlock.vue';

import { CalendarItem, GetCalendar, testItems } from './scripts/index-page';

const calendarItems = ref<CalendarItem[]>([]);

onMounted(() => {
  GetCalendar(calendarItems);
});

</script>
