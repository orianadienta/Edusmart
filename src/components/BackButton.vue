<template>
  <button @click="$router.back()" class="p-2 rounded-full hover:bg-gray-200 transition-colors">
    <Icon icon="stash:arrow-left-solid" width="28" />
  </button>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
