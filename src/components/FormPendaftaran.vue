<template>
  <div class="flex justify-center bg-[#FAF9F4] px-6 lg:px-16 mb-20">
    <div class="w-full max-w-4xl bg-[#D8E0EB] shadow-lg rounded-2xl p-8">
      <form @submit.prevent="submitForm">
        <div class="space-y-8">
          <div class="sm:col-span-3">
            <label for="fullname" class="block text-sm/6 font-medium text-gray-900"
              >Nama Lengkap</label
            >
            <div class="mt-2">
              <div
                class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#497498]"
              >
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  autocomplete="name"
                  class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="Oriana Nadienta Kadarsih"
                />
              </div>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autocomplete="email"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="oriana@gmail.com"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="phone" class="block text-sm/6 font-medium text-gray-900"
              >No.Tlp/WhatsApp</label
            >
            <div class="mt-2">
              <input
                id="phone"
                name="phone"
                type="text"
                autocomplete="tel"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="+6281234567890"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="school" class="block text-sm/6 font-medium text-gray-900"
              >Asal Sekolah</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="school"
                id="school"
                autocomplete="school-name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="SMA Negeri 1 Jakarta"
              />
            </div>
          </div>

          <div class="col-span-3">
            <label for="level" class="block text-sm/6 font-medium text-gray-900">Jenjang</label>
            <div class="mt-2">
              <input
                type="text"
                name="level"
                id="level"
                autocomplete="level"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="12 IPA"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="program" class="block text-sm/6 font-medium text-gray-900"
              >Pilih Program</label
            >
            <div class="mt-2 grid grid-cols-1">
              <select
                id="program"
                name="program"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="" disabled selected hidden>--- Pilih program ---</option>
                <option value="sd">Program SD</option>
                <option value="smp">Program SMP</option>
                <option value="ipa">Program SMA IPA</option>
                <option value="ips">Program SMA IPS</option>
              </select>
              <ChevronDownIcon
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <button
            type="button"
            @click="goBack"
            class="rounded-md bg-[#497498] px-3 py-2 text-sm/6 font-semibold text-[#F1F1EB] shadow-xs hover:bg-[#617b91] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#497498]"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-[#497498] px-3 py-2 text-sm font-semibold text-[#F1F1EB] shadow-xs hover:bg-[#617b91] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#497498]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import { ref } from 'vue'

const fullname = ref('')
const email = ref('')
const phone = ref('')
const school = ref('')
const level = ref('')
const program = ref('')

const submitForm = () => {
  const data = {
    fullname: fullname.value,
    email: email.value,
    phone: phone.value,
    school: school.value,
    level: level.value,
    program: program.value,
  }

  localStorage.setItem('pendaftaran', JSON.stringify(data))
  alert('Data tersimpan!')
}

const goBack = () => {
  window.history.back()
}
</script>
