<template>
  <main class="min-h-screen bg-[#FAF9F4]">
    <Modal :show="showModal" @close="showModal = false" />
    <HeroSection />
    <AboutSection />
    <TestiSection />
  </main>
</template>

<script setup>
import HeroSection from '@/components/HeroHome.vue'
import AboutSection from '@/components/AboutHome.vue'
import TestiSection from '@/components/TestimoniCard.vue'
import { ref, onMounted } from 'vue'
import Modal from '@/components/Modal.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showModal = ref(false)

onMounted(() => {
  const hasShown = sessionStorage.getItem('homeModalShown')

  if (!hasShown && route.path === '/') {
    showModal.value = true
    sessionStorage.setItem('homeModalShown', 'true')
  }
})
</script>
