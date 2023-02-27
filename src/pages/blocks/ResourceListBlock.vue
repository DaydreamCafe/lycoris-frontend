<template>
  <div class="w-full bg-white rounded-xl">
    <table class="w-full rounded-xl">
      <!-- 表头 -->
      <thead class="border-b-2 border-pink-200">
        <tr>
          <th
            class="w-[10%] border-r-2 border-pink-200 hover:bg-pink-100 rounded-tl-lg transition cursor-pointer"
          >
            <div class="m-4">更新时间</div>
          </th>
          <th
            class="w-[9%] border-r-2 border-pink-200 hover:bg-pink-100 transition cursor-pointer"
          >
            <div class="m-4">分类</div>
          </th>
          <th
            class="w-[60%] border-r-2 border-pink-200 hover:bg-pink-100 transition cursor-pointer"
          >
            <div class="m-4">标题</div>
          </th>
          <th
            class="w-[12%] border-r-2 border-pink-200 hover:bg-pink-100 transition cursor-pointer"
          >
            <div class="m-4">字幕组</div>
          </th>
          <th
            class="w-[9%] hover:bg-pink-100 rounded-tr-lg transition cursor-pointer"
          >
            <div class="m-4">大小</div>
          </th>
        </tr>
      </thead>

      <!-- 表身 -->
      <tbody>
        <tr
          v-for="item in items"
          :key="item.index"
          :class="setTrStyle(item.index)"
        >
          <td class="border-r-2 border-pink-200">
            <div class="flex w-full justify-center content-center">
              <span>{{ formatDate(item.date) }}</span>
            </div>
          </td>
          <td class="border-r-2 border-pink-200">
            <div class="flex w-full justify-center content-center">
              <div
                v-if="['动画', '季度全集'].includes(item.category)"
                class="cursor-pointer py-0.5 px-1 rounded-md transition bg-red-300 hover:bg-red-500 text-red-100"
              >
                {{ item.category }}
              </div>
              <div
                v-if="['漫画', '港台原版', '日文原版'].includes(item.category)"
                class="cursor-pointer py-0.5 px-1 rounded-md transition bg-green-300 hover:bg-green-500 text-green-100"
              >
                {{ item.category }}
              </div>
              <div
                v-if="
                  ['音乐', '动漫音乐', '同人音乐', '流行音乐'].includes(
                    item.category
                  )
                "
                class="cursor-pointer py-0.5 px-1 rounded-md transition bg-purple-300 hover:bg-purple-500 text-purple-100"
              >
                {{ item.category }}
              </div>
              <div
                v-if="item.category == '日剧'"
                class="cursor-pointer py-0.5 px-1 rounded-md transition bg-blue-300 hover:bg-blue-500 text-blue-100"
              >
                {{ item.category }}
              </div>
              <div
                v-if="item.category == 'RAW'"
                class="cursor-pointer py-0.5 px-1 rounded-md transition bg-orange-300 hover:bg-orange-500 text-orange-100"
              >
                {{ item.category }}
              </div>
              <div
                v-if="
                  [
                    '游戏',
                    '电脑游戏',
                    '电视游戏',
                    '掌机游戏',
                    '网络游戏',
                    '游戏周边',
                  ].includes(item.category)
                "
                class="cursor-pointer py-0.5 px-1 rounded-md transition bg-sky-300 hover:bg-sky-500 text-sky-100"
              >
                {{ item.category }}
              </div>
              <div
                v-if="item.category == '特摄'"
                class="cursor-pointer py-0.5 px-1 rounded-md transition bg-amber-300 hover:bg-amber-500 text-amber-100"
              >
                {{ item.category }}
              </div>
              <div
                v-if="item.category == '其他'"
                class="cursor-pointer py-0.5 px-1 rounded-md transition bg-gray-300 hover:bg-gray-500 text-gray-100"
              >
                {{ item.category }}
              </div>
            </div>
          </td>
          <td class="border-r-2 border-pink-200">
            <div
              class="p-1 cursor-pointer hover:text-pink-500 transition duration-75"
            >
              {{ item.title }}
            </div>
          </td>
          <td class="border-r-2 border-pink-200">
            <div class="flex w-full justify-center content-center">
              <div
                class="p-1 cursor-pointer hover:text-pink-500 transition duration-75 truncate"
              >
                {{ item.team }}
              </div>
            </div>
          </td>
          <td>
            <div class="flex w-full justify-center content-center">
              <span>{{ item.size }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div>|||</div>
  </div>
</template>

<script lang="ts" setup>
import isOdd from 'is-odd';
import { onMounted, ref } from 'vue';

interface Item {
  date: string;
  category: string;
  title: string;
  team: string;
  size: string;
}

interface ItemWithIndex extends Item {
  index: number;
}

const props = defineProps<{
  items: Item[];
}>();

const propItems = ref(props.items);
const items = ref<ItemWithIndex[]>([]);

function GenerateIndex() {
  propItems.value.forEach((item, i) => {
    items.value.push({
      index: i,
      date: item.date,
      category: item.category,
      title: item.title,
      team: item.team,
      size: item.size,
    });
  });
}

function formatDate(dateStr: string): string {
  const timeStamp = new Date(dateStr).getTime() / 1000;
  const nowTimeStamp = new Date().getTime() / 1000;
  if (nowTimeStamp - timeStamp <= 24 * 60 * 60) {
    return `今天 ${dateStr.slice(-5)}`;
  }
  return dateStr.slice(0, -6).replaceAll('/', '.');
}

function setTrStyle(index: number): string {
  if (isOdd(index)) {
    return 'bg-pink-50 border-pink-200';
  } else {
    return 'bg-white border-pink-200';
  }
}

onMounted(() => {
  GenerateIndex();
});
</script>
