<template>
  <footer class="relative w-full bg-[#497498] py-10 px-5 lg:px-10">
    <div class="w-full mx-auto max-w-7xl">
      <div class="grid justify-between grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h5 class="mb-6 text-3xl font-semibold text-[#F1F1EB]">EduSmart</h5>
        </div>

        <div class="grid grid-cols-2 gap-8">
          <ul>
            <p class="block mb-1 text-base font-semibold text-[#F1F1EB]">Product</p>

            <li>
              <router-link
                to="/program/sd"
                class="block text-[#F1F1EB] py-1 hover:text-slate-300 text-sm"
              >
                Program SD
              </router-link>
            </li>

            <li>
              <router-link
                to="/program/smp"
                class="block text-[#F1F1EB] py-1 hover:text-slate-300 text-sm"
              >
                Program SMP
              </router-link>
            </li>

            <li>
              <router-link
                to="/program/ipa"
                class="block text-[#F1F1EB] py-1 hover:text-slate-300 text-sm"
              >
                Program SMA IPA
              </router-link>
            </li>

            <li>
              <router-link
                to="/program/ips"
                class="block text-[#F1F1EB] py-1 hover:text-slate-300 text-sm"
              >
                Program SMA IPS
              </router-link>
            </li>
          </ul>

          <ul>
            <p class="block mb-1 text-base font-semibold text-[#F1F1EB]">Support</p>
            <li>
              <router-link to="/faq" class="block text-[#F1F1EB] py-1 hover:text-slate-300 text-sm"
                >FAQ</router-link
              >
            </li>
            <li>
              <a
                href="https://wa.me/+6289688602908"
                class="block text-[#F1F1EB] py-1 hover:text-slate-300 text-sm"
                >WhatsApp</a
              >
            </li>
            <li>
              <a
                href="https://www.instagram.com/oriana.nk?igsh=MTA2dmZ1cTl4dGt2bw=="
                class="block text-[#F1F1EB] py-1 hover:text-slate-300 text-sm"
                >Instagram</a
              >
            </li>
            <!-- <li>
              <a href="#" class="block text-[#F1F1EB] py-1 hover:text-slate-300 text-sm">Email</a>
            </li> -->
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center w-full py-6 mt-12">
        <p class="block mb-4 text-sm text-center text-slate-200 md:mb-0">
          © 2025 EduSmart. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
