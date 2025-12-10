<template>
  <section class="bg-[#FAF9F4] py-20 px-6 lg:px-16">
    <div class="mb-12">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-[#1E2143]">
        Kenalan dengan Tenaga Pendidik Kami
      </h2>
      <p class="mt-2 text-gray-600 sm:text-lg">
        Di EduSmart, kami percaya bahwa kualitas pengajar adalah kunci keberhasilan siswa. Semua
        tutor kami merupakan lulusan terbaik dari universitas ternama dan berpengalaman dalam
        membimbing siswa sesuai jenjangnya.
      </p>
    </div>

    <div class="max-w-5xl mx-auto grid gap-12 sm:grid-cols-3">
      <div
        v-for="(tutor, index) in tutors"
        :key="index"
        class="bg-[#DBE4EC] rounded-lg shadow-md p-8 flex flex-col items-center text-center"
      >
        <img :src="tutor.image" class="w-[247px] h-[370px] object-cover mb-6 rounded-lg" />
        <h3 class="text-2xl font-semibold mb-3 text-[#37556e]">{{ tutor.nama }}</h3>
        <h4 class="text-xl font medium mb-3 text-[#37556e]">{{ tutor.pdd }}</h4>
        <p class="text-gray-700 text-xl text-base leading-relaxed">{{ tutor.bidang }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import guru1 from '@/assets/guru 1.jpg'
import guru2 from '@/assets/guru 2.jpg'
import guru3 from '@/assets/guru 3.jpg'
import guru4 from '@/assets/guru 4.jpg'
import guru5 from '@/assets/guru 5.jpg'
import guru6 from '@/assets/guru 6.jpg'

const tutors = [
  {
    image: guru1,
    nama: 'Angela S.Pd',
    pdd: 'S1 Pendidikan Guru Universitas Negeri Jakarta',
    bidang: 'Matematika & Bahasa Indonesia ',
  },
  {
    image: guru2,
    nama: 'Bima Pratama S.Pd',
    pdd: 'S1 Pendidikan Ekonomi Universitas Negeri Malang',
    bidang: 'Ekonomi & Sosiologi',
  },
  {
    image: guru3,
    nama: 'Rina Aprilia S.Si',
    pdd: 'S1 Teknik Kimia Institut Teknologi Bandung',
    bidang: 'Kimia & Fisika',
  },
  {
    image: guru4,
    nama: 'Melisa Kartika M.Pd',
    pdd: 'S2 Pendidikan Matematika Universitas Gadjah Mada',
    bidang: 'Matematika & Fisika',
  },
  {
    image: guru5,
    nama: 'Dimas Ramadhan S.Kom',
    pdd: 'S1 Ilmu Komputer Universitas Brawijaya',
    bidang: 'Informatika dan Dasar Pemrograman',
  },
  {
    image: guru6,
    nama: 'Clara Prameswari S.Hum',
    pdd: 'Ilmu Bahasa & Sastra Universitas Indonesia',
    bidang: 'Bahasa Inggris',
  },
]
</script>
