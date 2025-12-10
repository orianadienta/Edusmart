<template>
  <section
    id="about"
    class="VisiMisiSection bg-[#FAF9F4] py-20 px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12"
  >
    <div class="aboutImage lg:w-1/2 flex justify-center lg:justify-start">
      <img
        src="@/assets/visimisi.jpg"
        alt="Tentang EDUSmart"
        class="rounded-lg shadow-md w-full max-w-[600px]"
      />
    </div>

    <div class="lg:w-1/2">
      <h2 class="text-4xl sm:text-4xl font-extrabold text-[#1E2143] mb-6">Komitmen Kami</h2>
      <h3 class="text-2xl font-semibold text-[#1E2143] mb-6">Visi</h3>
      <p class="text-[#1E2143] mb-6 leading-relaxed">
        Menjadi lembaga bimbingan belajar tatap muka terpercaya yang membantu siswa meraih prestasi
        akademik dan membangun semangat belajar sepanjang hayat.
      </p>
      <h3 class="text-2xl font-semibold text-[#1E2143] mb-6">Misi</h3>
      <ul class="list-disc list-inside text-[#1E2143] space-y-2">
        <li>Memberikan layanan bimbingan yang sesuai kebutuhan setiap siswa.</li>
        <li>Menciptakan suasana belajar yang menyenangkan dan mendukung.</li>
        <li>Meningkatkan kompetensi pengajar agar selalu adaptif terhadap perubahan kurikulum.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  scroll-margin-top: 60px;
}
</style>
