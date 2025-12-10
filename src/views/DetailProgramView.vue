<template>
  <main class="bg-[#FAF9F4] pb-20">
    <div v-if="program">
      <Detail :program="program" />
    </div>

    <div v-else class="text-center py-20">
      <p>Program tidak ditemukan.</p>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Detail from '@/components/DetailProgram.vue'
import programData from '@/data/DetailProgram.js'

const route = useRoute()
const program = programData[route.params.id]
</script>
