<template>
  <section class="bg-[#FAF9F4] py-16 px-6 lg:px-16">
    <div class="mb-12">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-[#1E2143]">Testimoni Siswa EDUSmart</h2>
      <p class="mt-2 text-[#1E2143] sm:text-lg">Yuk Lihat Apa Kata Mereka</p>
    </div>

    <div class="grid gap-8 md:grid-cols-2">
      <div
        v-for="(item, index) in testimoni"
        :key="index"
        class="p-6 bg-[#DBE4EC] rounded-xl shadow-sm border border-gray-200"
      >
        <h3 class="text-lg font-semibold text-[#37556e] mb-1">
          {{ item.nama }}
        </h3>
        <p class="text-sm text-gray-500 mb-3">
          {{ item.sekolah }}
        </p>

        <p class="text-gray-700 leading-relaxed">“{{ item.pesan }}”</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimoni = [
  {
    nama: 'Nabila Putri',
    sekolah: 'SMPN 12 Balikpapan',
    pesan:
      'Belajar di EduSmart bikin aku lebih paham materi sekolah. Tutornya sabar banget jelasin sampai ngerti. Sekarang nilai matematikaku naik drastis!',
  },
  {
    nama: 'Rizky Aditiya',
    sekolah: 'SMAN 3 Samarinda',
    pesan:
      'Awalnya aku susah banget ngikutin pelajaran fisika, tapi setelah ikut program SMA di EduSmart, ternyata gampang kalau dijelasin dengan cara yang seru!',
  },
  {
    nama: 'Clara Nugraheni',
    sekolah: 'SMPN 7 Balikpapan',
    pesan:
      'Metode belajarnya beda dari bimbel lain. Nggak cuma teori, tapi juga latihan dan pembahasan soal yang mirip ujian asli.',
  },
  {
    nama: 'Daffa Pratama',
    sekolah: 'SDN 02 Balikpapan',
    pesan:
      'Dulu aku sering remedial, sekarang malah jadi langganan ranking 5 besar. Makasih EduSmart udah bantu aku percaya diri belajar!',
  },
]
</script>
