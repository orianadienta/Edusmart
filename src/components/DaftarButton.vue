<template>
  <router-link
    :to="to"
    class="px-6 py-3 rounded-lg font-semibold transition-colors"
    :class="buttonClasses"
  >
    <slot>Daftar Sekarang</slot>
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: '/daftar',
  },
  variant: {
    type: String,
    default: 'primary',
  },
})

const buttonClasses = {
  primary: 'bg-[#497498] text-white hover:bg-[#6294bd]',
  outline: 'bg-[#FAF9F4] border border-[#497498] text-[#497498] hover:bg-[#a5bfd4]',
  hero: 'bg-[#1E2143] text-white hover:bg-[#151832]',
}[props.variant]
</script>
