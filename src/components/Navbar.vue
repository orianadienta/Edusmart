<template>
  <header class="bg-[#FAF9F4]">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">EDUSmart</span>
          <h1 class="text-4xl font-bold text-[#1E2143]">EDUSmart</h1>
        </a>
      </div>

      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#1E2143]"
          @click="mobileMenuOpen = true"
        >
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-sm font-semibold text-[#1E2143]"
        >
          {{ item.name }}
        </router-link>
      </div>
    </nav>

    <transition name="slide">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-50 bg-black/30"
        @click.self="mobileMenuOpen = false"
      >
        <div class="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-[#1E2143]">EDUSmart</h1>
            <button @click="mobileMenuOpen = false">
              <XMarkIcon class="size-6 text-[#1E2143]" />
            </button>
          </div>

          <div class="mt-6 space-y-4">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              @click="mobileMenuOpen = false"
              class="block rounded-lg px-3 py-2 text-base font-semibold text-[#1E2143] hover:bg-gray-50"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang', href: '/about' },
  { name: 'Pendaftaran', href: '/daftar' },
  { name: 'Program', href: '/program' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Tentang Saya', href: '/me' },
]

const mobileMenuOpen = ref(false)
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
