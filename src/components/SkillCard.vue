<template>
  <section class="bg-[#FAF9F4] py-16 px-6 lg:px-16">
    <div class="grid gap-4 md:grid-cols-3">
      <!-- <div class="grid gap-4 sm:grid-col-2 lg: grid-col-3"> -->
      <div
        v-for="(item, index) in skill"
        :key="index"
        class="p-6 bg-[#DBE4EC] rounded-xl shadow-sm border border-gray-200"
      >
        <h3 class="text-lg font-semibold text-[#37556e] mb-1">
          {{ item.skill }}
        </h3>
        <p class="text-gray-700 leading-relaxed">“{{ item.deskripsi }}”</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const skill = [
  {
    skill: 'Network Administrator',
    deskripsi: 'CISCO dan Mikrotik',
  },
  {
    skill: 'JavaScript',
    deskripsi: null,
  },
  {
    skill: 'SQL',
    deskripsi: null,
  },
]
</script>
