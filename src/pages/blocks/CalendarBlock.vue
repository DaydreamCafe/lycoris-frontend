<template>
  <div class="w-[14%] p-2 mx-4 bg-white rounded-xl">
    <h1
      class="cursor-pointer m-4 text-xl font-black text-pink-400 hover:text-pink-500"
    >
      | 每日放送
    </h1>
    <div v-for="item in calendarItems" :key="item.id">
      <CalendarItem
        :cover-url="item.coverUrl"
        :title="item.title"
        :air-date="item.airDate"
        :rate="item.rate"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import CalendarItem from '../../components/CalendarItemBox.vue';

interface CalendarItem {
  id: number;
  coverUrl: string;
  title: string;
  airDate: string;
  rate: number;
}

interface CalendarAPI {
  id: number;
  images: {
    large: string;
  };
  name: string;
  name_cn: string;
  air_date: string;
  rating: {
    score: number;
  };
}

const calendarItems = ref<CalendarItem[]>([]);

async function GetCalendar() {
  const res = await fetch('https://api.bgm.tv/calendar');
  const data = await res.json();
  try {
    data[new Date().getDay() == 0 ? new Date().getDay() + 1 : 7].items.forEach(
      (item: CalendarAPI) => {
        calendarItems.value.push({
          id: item.id,
          coverUrl: item.images.large,
          title: item.name_cn ? item.name_cn : item.name,
          airDate: item.air_date,
          rate: item.rating.score,
        });
      }
    );
  } catch (e) {
    if (!(e instanceof TypeError)) {
      throw e;
    }
  }
}

onMounted(() => {
  GetCalendar();
});
</script>
