<template>
  <div class="inline-flex items-center">
    <label
      class="flex cursor-pointer items-center"
      :for="props.id"
    >
      <input
        type="checkbox"
        class="peer mr-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-pink-300 transition checked:ring-2 checked:ring-inset checked:ring-white checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10 hover:border-pink-500"
        :id="props.id"
        :name="props.name"
      />
      {{ props.label }}
    </label>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  id: string;
  name: string;
  label: string;
}>()
</script>
