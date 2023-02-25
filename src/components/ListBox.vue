<template>
  <Listbox v-model="selectedItem">
    <div class="relative">
      <ListboxButton
        class="relative 
               w-full
               cursor-default
               rounded-md
               bg-white
               py-2
               pl-3
               pr-10
               text-left
               text-gray-400
               shadow-md
               outline-none
               ring-2
               ring-inset
               ring-pink-300
               hover:bg-gray-50
               hover:ring-pink-400
               sm:text-sm
               transition
               ">
        <span class="block truncate">{{ selectedItem.text }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        enter-active-class="transition duration-75 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-100 ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute
                 mt-1
                 max-h-60
                 w-full
                 overflow-auto
                 rounded-md
                 bg-white
                 py-1
                 text-base
                 shadow-lg
                 ring-1
                 ring-black
                 ring-opacity-5
                 focus:outline-none
                 sm:text-sm
                 ">
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="item in items"
            :key="item.text"
            :value="item"
            as="template"
            class="transition duration-100 ease-out"
          >
            <li :class="[
                active ? 'bg-pink-100 text-pink-600' : 'text-gray-600',
                'relative cursor-default select-none py-2 pl-14 pr-4',
              ]">
              <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ item.text }}</span>
              <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-pink-500">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

export interface item {
  id: number,
  text: string,
  unavailable?: boolean,
}

const props = defineProps<{
  listItems: item[]
}>()

const items = props.listItems

const selectedItem = ref(items[0])
</script>
