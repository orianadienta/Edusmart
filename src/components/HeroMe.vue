grid grid-

<template>
  <section
    id="herome"
    class="bg-[#DBE4EC] py-20 px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12"
  >
    <div class="lg:w-1/2">
      <h2 class="text-4xl sm:text-4xl font-extrabold text-[#1E2143] mb-6">
        Oriana Nadienta Kadarsih
      </h2>
      <h3 class="text-2xl sm:text-2xl font-extrabold text-[#1E2143] mb-6">
        11231078 - Informatika - ITK
      </h3>

      <p class="text-[#1E2143] mb-6 leading-relaxed">
        Nama saya Oriana Nadienta Kadarsih dengan NIM 11231078 dari Program Studi Informatika di
        Institut Teknologi Kalimantan. Saat ini saya berada di Semester 5 dan sedang mengerjakan
        COTS Mata Kuliah Desain Web.
      </p>
    </div>
    <!-- tambahin hide? -->
    <div class="meImage hidden md:flex justify-center lg:justify-end lg:w-1/2">
      <img
        src="@/assets/foto.jpg"
        alt="Tentang saya"
        class="rounded-lg shadow-md w-full max-w-[600px]"
      />
    </div>
  </section>
</template>

<style scoped>
.about {
  scroll-margin-top: 60px;
}
</style>
