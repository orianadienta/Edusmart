<template>
  <section class="bg-[#DBE4EC] py-10 px-6 lg:px-16 w-full">
    <BackButton />
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <img :src="program.image" class="w-full rounded-lg" />

      <div>
        <h2 class="text-4xl font-bold text-[#1E2143] mb-4">
          {{ program.title }}
        </h2>

        <p class="text-gray-700 leading-relaxed mb-6">
          {{ program.detailDescription }}
        </p>

        <DaftarButton class="mt-6" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BackButton from '@/components/BackButton.vue'
import DaftarButton from '@/components/DaftarButton.vue'

defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>
