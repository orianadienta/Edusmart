<template>
  <section class="bg-[#FAF9F4] py-26 px-6 lg:px-16">
    <div class="text-center mb-12 max-w-screen-md mx-auto">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-[#1E2143]">Program Pilihan EDUSmart</h2>
      <p class="mt-2 text-gray-600 sm:text-lg">
        Berbagai Macam Pilihan Program Sesuai dengan Kebutuhanmu
      </p>
    </div>

    <div class="max-w-5xl mx-auto grid gap-12 sm:grid-cols-2">
      <div
        v-for="program in programs"
        :key="program.id"
        class="bg-[#DBE4EC] rounded-lg shadow-md p-8 flex flex-col items-center text-center cursor-pointer"
        @click="$router.push(`/program/${program.id}`)"
      >
        <img :src="program.image" class="w-[480px] h-[480px] object-cover mb-6 rounded-lg" />
        <h3 class="text-2xl font-semibold mb-3 text-[#37556e]">{{ program.title }}</h3>
        <p class="text-gray-700 text-base leading-relaxed">{{ program.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import programs from '@/data/ListProgram.js'
</script>
