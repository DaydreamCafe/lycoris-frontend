<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      as="div"
      @close="$emit('update:isOpen', false)"
      class="relative z-10"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-3/5 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="flex flex-row justify-between">
                <span class="text-lg font-medium leading-6 text-gray-900"
                  >高级搜索指南</span
                >
                <XMarkIcon class="flex-initial w-5 cursor-pointer text-gray-600 hover:text-pink-500 transition" @click="$emit('update:isOpen', false)" />
              </DialogTitle>
              <div class="w-full">
                <div class="mx-auto w-50 rounded-2xl bg-white pt-2">
                  <!-- 1 -->
                  <Disclosure v-slot="{ open }" :defaultOpen="true">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 my-2 text-left text-sm font-medium text-pink-800 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75 transition"
                    >
                      <span>或者 ( OR )</span>
                      <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-pink-500"
                      />
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-2 pb-2 text-sm text-gray-500"
                    >
                      <span
                        >将「|」放在两个或以上关键字之间,
                        只要标题包含其中一个关键字,
                        便会在搜寻结果中显示出来。</span
                      >
                      <br />
                      <span>使用方法：剧场版|BDRIP</span>
                    </DisclosurePanel>
                  </Disclosure>

                  <!-- 2 -->
                  <Disclosure v-slot="{ open }" :defaultOpen="true">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 my-2 text-left text-sm font-medium text-pink-800 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75 transition"
                    >
                      <span>及（ AND )</span>
                      <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-pink-500"
                      />
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-2 pb-2 text-sm text-gray-500"
                    >
                      <span
                        >将「 」（半角空格）放在两个或以上关键字之间,
                        标题包含所有关键字, 便会在搜寻结果中显示出来。</span
                      >
                      <br />
                      <span>使用方法: 剧场版 BDRIP</span>
                    </DisclosurePanel>
                  </Disclosure>

                  <!-- 3 -->
                  <Disclosure v-slot="{ open }" :defaultOpen="true">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 my-2 text-left text-sm font-medium text-pink-800 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75 transition"
                    >
                      <span>指定联盟 ( team id )</span>
                      <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-pink-500"
                      />
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-2 pb-2 text-sm text-gray-500"
                    >
                      <span
                        >将「team_id:」放在关键字的最后,
                        搜寻结果只会显示该联盟的发布的内容。可以配合1,2,3,4,5使用或单独使用。</span
                      >
                      <br />
                      <span>使用方法1: 剧场版team_id:9</span>
                      <br />
                      <span>使用方法2: 剧场版|BDRIP team_id:9</span>
                      <br />
                      <span>使用方法3: 剧场版BDRIP team_id:9</span>
                      <br />
                      <span>使用方法4: team_id:9</span>
                    </DisclosurePanel>
                  </Disclosure>

                  <!-- 4 -->
                  <Disclosure v-slot="{ open }" :defaultOpen="true">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 my-2 text-left text-sm font-medium text-pink-800 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75 transition"
                    >
                      <span>指定分类 ( sort id )</span>
                      <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-pink-500"
                      />
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-2 pb-2 text-sm text-gray-500"
                    >
                      <span
                        >将「sort_id:」放在关键字的最后面,
                        搜寻结果只会显示该分类下的内容。可以配合1,2,3,4,5使用或单独使用。</span
                      >
                      <br />
                      <span>使用方法1: 剧场版sort_id:9</span>
                      <br />
                      <span>使用方法2: 剧场版|BDRIP sort_id:9</span>
                      <br />
                      <span>使用方法3: 剧场版BDRIP sort_id:9</span>
                      <br />
                      <span>使用方法4: sort_id:9</span>
                    </DisclosurePanel>
                  </Disclosure>

                  <!-- 5 -->
                  <Disclosure v-slot="{ open }" :defaultOpen="true">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 my-2 text-left text-sm font-medium text-pink-800 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75 transition"
                    >
                      <span>指定发布人 ( user id )</span>
                      <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-pink-500"
                      />
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-2 pb-2 text-sm text-gray-500"
                    >
                      <span
                        >将「user_id:」放在关键字的最后面,
                        搜寻结果只会显示该发布人的发布的内容。可以配合1,2,3,4,5使用或单独使用。</span
                      >
                      <br />
                      <span>使用方法1: 剧场版user_id:998</span>
                      <br />
                      <span>使用方法2: 剧场版|BDRIP user_id:998</span>
                      <br />
                      <span>使用方法3: 剧场版BDRIP user_id:998</span>
                      <br />
                      <span>使用方法4: user_id:998</span>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronUpIcon, XMarkIcon } from '@heroicons/vue/20/solid';

defineProps(['isOpen']);
defineEmits(['update:isOpen']);
</script>
