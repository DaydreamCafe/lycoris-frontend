<template>
  <div id="banner">
    <div id="logo">
      <p class="item">PROJECT</p>
      <p class="item">Lycoris</p>
    </div>
    <div id="imgs">
      <ul>
        <li
          v-for="picture in pictures"
          class="item"
          :data-background-image="picture"
          data-loaded="true"
          :style="`background-image: url(${picture})`"
        ></li>
      </ul>
    </div>
    <div id="waves">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 108 18 v44h-352z"
          ></path>
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="-2"></use>
          <use xlink:href="#gentle-wave" x="48" y="0"></use>
          <use xlink:href="#gentle-wave" x="48" y="3"></use>
          <use xlink:href="#gentle-wave" x="48" y="10"></use>
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const pciList = [
  'https://pic.imgdb.cn/item/63f4a2f3f144a010077252f1.jpg',
  'https://pic.imgdb.cn/item/63f4a2f4f144a010077253e5.jpg',
  'https://pic.imgdb.cn/item/63f4a2f5f144a010077254bb.png',
  'https://pic.imgdb.cn/item/63f4a2f6f144a0100772564a.jpg',
  'https://pic.imgdb.cn/item/63f4a2f6f144a010077256ac.jpg',
  'https://pic.imgdb.cn/item/63f4a33ff144a0100772b064.jpg',
  'https://pic.imgdb.cn/item/63f4a33ff144a0100772b133.png',
  'https://pic.imgdb.cn/item/63f4a340f144a0100772b1e7.jpg',
  'https://pic.imgdb.cn/item/63f4a340f144a0100772b22d.jpg',
  'https://pic.imgdb.cn/item/63f4a342f144a0100772b3d9.png',
  'https://pic.imgdb.cn/item/63f4a3a0f144a01007732fa3.jpg',
  'https://pic.imgdb.cn/item/63f4a3a1f144a01007732ffb.png',
  'https://pic.imgdb.cn/item/63f4a3a1f144a01007733066.jpg',
  'https://pic.imgdb.cn/item/63f4a3a1f144a01007733107.jpg',
  'https://pic.imgdb.cn/item/63f4a3a3f144a0100773326c.jpg',
  'https://pic.imgdb.cn/item/63f4a3e8f144a01007739332.jpg',
  'https://pic.imgdb.cn/item/63f4a3e8f144a0100773936c.png',
  'https://pic.imgdb.cn/item/63f4a3ebf144a010077396fc.jpg',
  'https://pic.imgdb.cn/item/63f4a3ebf144a0100773978c.jpg',
  'https://pic.imgdb.cn/item/63f4a3edf144a0100773997a.jpg',
  'https://pic.imgdb.cn/item/63f4a439f144a01007741e12.jpg',
  'https://pic.imgdb.cn/item/63f4a43af144a01007741e5a.jpg',
  'https://pic.imgdb.cn/item/63f4a43bf144a010077420d2.jpg',
  'https://pic.imgdb.cn/item/63f4a43bf144a01007742117.jpg',
  'https://pic.imgdb.cn/item/63f4a43bf144a01007742164.jpg',
  'https://pic.imgdb.cn/item/63f4a499f144a0100774e210.jpg',
  'https://pic.imgdb.cn/item/63f4a499f144a0100774e257.jpg',
  'https://pic.imgdb.cn/item/63f4a49af144a0100774e3c2.jpg',
  'https://pic.imgdb.cn/item/63f4a49af144a0100774e3ee.jpg',
  'https://pic.imgdb.cn/item/63f4a49cf144a0100774e668.png',
  'https://pic.imgdb.cn/item/63f4a4cef144a01007753526.jpg',
  'https://pic.imgdb.cn/item/63f4a4cff144a01007753727.png',
  'https://pic.imgdb.cn/item/63f4a4d0f144a01007753a35.png',
  'https://pic.imgdb.cn/item/63f4a4d0f144a01007753a63.jpg',
  'https://pic.imgdb.cn/item/63f4a4d1f144a01007753bd4.jpg',
  'https://pic.imgdb.cn/item/63f4a4f3f144a01007757226.jpg',
];
const pictures = ref<string[]>([]);

function RamdomPictures() {
  pictures.value = pciList
    .sort(() => {
      return Math.random() > 0.5 ? -1 : 1;
    })
    .slice(0, 6);
  console.log(pictures.value);
}

onMounted(() => {
  RamdomPictures();
});
</script>

<style src="../css/bannner-animation.css" />
