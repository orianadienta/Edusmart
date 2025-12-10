<template>
  <section class="py-20 px-6 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <div
        v-for="(group, groupIndex) in props.faqs"
        :key="groupIndex"
        class="mb-12 bg-[#FAF9F4] shadow-lg rounded-xl p-8 border border-gray-300"
      >
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          {{ group.category }}
        </h2>

        <div v-for="(faq, index) in group.items" :key="index" class="border-b border-gray-500 py-6">
          <button
            @click="toggle(`${groupIndex}-${index}`)"
            class="w-full flex justify-between items-center text-left text-lg font-medium text-gray-700"
          >
            {{ faq.question }}

            <span
              :class="[
                'transition-transform duration-300',
                active === `${groupIndex}-${index}` ? 'rotate-180' : '',
              ]"
              >⌄</span
            >
          </button>

          <div
            v-show="active === `${groupIndex}-${index}`"
            class="mt-3 text-gray-600 text-base leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  faqs: {
    type: Array,
    required: true,
  },
})

const active = ref(null)

const toggle = (id) => {
  active.value = active.value === id ? null : id
}
</script>
