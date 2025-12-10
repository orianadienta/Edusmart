<template>
  <section
    id="hero"
    class="heroSection bg-cover min-h-[80vh] flex items-center justify-center px-6 py-20"
  >
    <div class="max-w-3xl text-center">
      <h1 class="text-4xl sm:text-6xl font-extrabold text-[#ffffff] mb-6 leading-tight">
        Tingkatkan Prestasimu Bersama EDUSmart
      </h1>

      <p class="text-[#ffffff] text-lg sm:text-xl mb-10">
        Pusat informasi dan pendaftaran program bimbingan belajar untuk siswa dari berbagai jenjang.
        Temukan program terbaik untuk mendukung perjalanan akademikmu!
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <ProgramButton />
        <DaftarButton variant="outline" to="/daftar" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProgramButton from '@/components/ProgramButton.vue'
import DaftarButton from '@/components/DaftarButton.vue'
</script>

<style scoped>
.heroSection {
  background-image: url('@/assets/Hero.jpg');
}
</style>
