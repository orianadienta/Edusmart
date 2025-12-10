<template>
  <div>
    <TransitionRoot as="template" :show="props.show">
      <Dialog class="relative z-10" @close="close">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          leave="ease-in duration-200"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500/75 transition-opacity"></div>
        </TransitionChild>

        <div class="fixed inset-0 z-10 flex items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4"
            leave="ease-in duration-200"
            leave-to="opacity-0 translate-y-4"
          >
            <DialogPanel
              class="relative transform rounded-lg bg-white shadow-xl sm:w-full sm:max-w-lg"
            >
              <button class="absolute top-3 right-3 text-black" @click="close">
                <Icon icon="stash:times-solid" width="24" height="24" class="text-white" />
              </button>

              <div class="bg-[#497498] p-6">
                <DialogTitle class="text-base font-semibold text-white">
                  Diskon Spesial untuk Akhir Tahun!!
                </DialogTitle>

                <p class="mt-2 text-sm text-white">
                  Daftar sekarang dan nikmati potongan biaya hingga 20% untuk program belajar semua
                  jenjang! Jangan lewatkan kesempatan ini untuk mulai belajar bersama mentor terbaik
                  kami.
                </p>
              </div>

              <div class="bg-[#497498] px-4 py-3 flex justify-center sm:justify-end sm:px-6">
                <DaftarButton variant="outline" class="mt-6" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Icon } from '@iconify/vue'
import DaftarButton from '@/components/DaftarButton.vue'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>
