<template>
  <router-link
    :to="to"
    class="bg-[#497498] text-[#F1F1EB] px-6 py-3 rounded-lg font-semibold hover:bg-[#6294bd] transition-colors"
  >
    <slot>Lihat Program</slot>
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: '/program',
  },
})
</script>
