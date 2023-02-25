<template>
  <div class="flex justify-center">
    <div class="flex-initial w-3/4 p-2 bg-white rounded-xl mt-20">
      <!-- 搜索框 -->
      <SearchBox class="m-4" />
      <!-- 搜索选项 -->
      <!-- 下拉选项 -->
      <div class="grid grid-cols-3 gap-4 m-4">
        <div class="flex flex-row items-center">
          <span class="flex-initial text-gray-600">分类:</span>
          <TagListBox class="flex-auto ml-2" :list-items="categories" />
        </div>
        <div class="flex flex-row items-center">
          <span class="flex-initial text-gray-600">字幕组:</span>
          <TagListBox class="flex-auto ml-2" :list-items="categories" />
        </div>
        <div class="flex flex-row items-center">
          <span class="flex-initial text-gray-600">排序:</span>
          <ListBox class="flex-auto ml-2" :list-items="orderTypes" />
        </div>
      </div>
      <!-- 勾选选项 -->
      <div class="m-4">
        <!-- 字幕类型 -->
        <div class="flex flex-row items-center my-2">
          <span class="text-gray-600">字幕类型:</span>
          <div class="flex flex-row items-center">
            <CheckBox id="raw" class="mx-2" name="生肉" label="生肉" />
            <CheckBox id="sc" class="mx-2" name="简体中文" label="简体中文" />
            <CheckBox id="tc" class="mx-2" name="繁体中文" label="繁体中文" />
            <CheckBox id="jp" class="mx-2" name="日文" label="日文" />
            <CheckBox id="scjp" class="mx-2" name="简日双语" label="简日双语" />
            <CheckBox id="tcjp" class="mx-2" name="繁日双语" label="繁日双语" />
            <CheckBox id="bi" class="mx-2" name="内嵌字幕" label="内嵌字幕" />
            <CheckBox id="sa" class="mx-2" name="外挂字幕" label="外挂字幕" />
          </div>
        </div>
        <!-- 清晰度 -->
        <div class="flex flex-row items-center my-2">
          <span class="text-gray-600">清晰度:</span>
          <div class="flex flex-row items-center">
            <CheckBox id="480" class="mx-2" name="480P" label="480P" />
            <CheckBox id="576" class="mx-2" name="576P" label="576P" />
            <CheckBox id="720" class="mx-2" name="720P" label="720P" />
            <CheckBox id="1080" class="mx-2" name="1080P" label="1080P" />
            <CheckBox id="2160" class="mx-2" name="2160P" label="4K" />
          </div>
        </div>
        <!-- 封装格式 -->
        <div class="flex flex-row items-center my-2">
          <span class="text-gray-600">封装&编码格式:</span>
          <div class="flex flex-row items-center">
            <CheckBox id="mp4" class="mx-2" name="MP4" label="MP4" />
            <CheckBox id="mkv" class="mx-2" name="MKV" label="MKV" />
            <CheckBox id="avc" class="mx-2" name="AVC" label="AVC" />
            <CheckBox id="hevc" class="mx-2" name="hevc" label="HEVC" />
          </div>
        </div>
        <!-- 其他标签 -->
        <div class="flex flex-row items-center justify-between my-2">
          <div class="flex flex-row items-center">
            <span class="text-gray-600">其他标签:</span>
            <div class="flex flex-row items-center">
              <CheckBox id="dvdrip" class="mx-2" name="DVDRip" label="DVDRip" />
              <CheckBox id="bdrip" class="mx-2" name="BDRip" label="BDRip" />
              <CheckBox id="webdl" class="mx-2" name="WebDL" label="WebDL" />
              <CheckBox id="aac" class="mx-2" name="AAC" label="AAC" />
              <CheckBox id="flac" class="mx-2" name="FLAC" label="FLAC" />
              <CheckBox id="hdr" class="mx-2" name="HDR" label="HDR" />
            </div>
          </div>
          <div class="flex-inital">
            <div class="flex flex-row items-center">
              <ArrowUpRightIcon class="text-pink-400 h-5" />
              <a
                class="text-pink-400 hover:cursor-pointer hover:text-pink-600 transition"
                @click="searchNavStatus = true"
                >高级搜索指南</a
              >
              <AdvancedSearchDialogBox v-model:is-open="searchNavStatus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SearchBox from '../components/SearchBox.vue';
import TagListBox from '../components/TagListBox.vue';
import ListBox from '../components/ListBox.vue';
import CheckBox from '../components/CheckBox.vue';
import AdvancedSearchDialogBox from '../components/special/AdvancedSearchDialogBox.vue';

import { ArrowUpRightIcon } from '@heroicons/vue/20/solid';

const categories = [
  { id: 0, text: '全部' },
  { id: 2, color: 'text-red-500', text: '动画' },
  { id: 31, color: 'text-red-500', text: '季度全集' },
  { id: 3, color: 'text-green-500', text: '漫画' },
  { id: 41, color: 'text-green-500', text: '港台原版' },
  { id: 42, color: 'text-green-500', text: '日文原版' },
  { id: 4, color: 'text-purple-500', text: '音乐' },
  { id: 43, color: 'text-purple-500', text: '动漫音乐' },
  { id: 44, color: 'text-purple-500', text: '同人音乐' },
  { id: 15, color: 'text-purple-500', text: '流行音乐' },
  { id: 6, color: 'text-blue-500', text: '日剧' },
  { id: 7, color: 'text-orange-500', text: 'RAW' },
  { id: 9, color: 'text-sky-500', text: '游戏' },
  { id: 17, color: 'text-sky-500', text: '电脑游戏' },
  { id: 18, color: 'text-sky-500', text: '电视游戏' },
  { id: 19, color: 'text-sky-500', text: '掌机游戏' },
  { id: 20, color: 'text-sky-500', text: '网络游戏' },
  { id: 21, color: 'text-sky-500', text: '游戏周边' },
  { id: 12, color: 'text-amber-600', text: '特摄' },
  { id: 1, text: '其他' },
];

const orderTypes = [
  { id: 1, text: '发布时间从后往前' },
  { id: 2, text: '发布时间从前往后' },
  { id: 3, text: '相关度' },
];

const searchNavStatus = ref(false);
</script>
