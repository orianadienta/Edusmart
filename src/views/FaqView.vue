<template>
  <main class="min-h-screen bg-[#FAF9F4]">
    <Faq :faqs="faqs" />
  </main>
</template>

<script setup>
import Faq from '@/components/FaqCard.vue'

const faqs = [
  {
    category: 'Pertanyaan Umum',
    items: [
      {
        question: 'Siapa saja yang dapat mengikuti program pembelajaran di EDUSmart Bimbel?',
        answer:
          'Program pembelajaran EDUSmart Bimbel dapat diikuti oleh siswa SD, SMP, SMA jurusan IPA dan IPS yang ingin meningkatkan pemahaman akademik dan kemampuan belajar.',
      },
    ],
  },
  {
    category: 'Kelas dan Pengajaran',
    items: [
      {
        question: 'Bagaimana EDUSmart menentukan kurikulum pembelajarannya?',
        answer:
          'EDUSmart mengikuti kurikulum nasional dan menyesuaikannya dengan kebutuhan siswa serta gaya belajar masing-masing.',
      },
      {
        question: 'Bagaimana kondisi ruangan pembelajaran di EDUSmart?',
        answer:
          'Ruangan pembelajaran nyaman, ber-AC, kondusif, dan dilengkapi fasilitas pendukung agar siswa fokus belajar.',
      },
      {
        question: 'Apakah ada ujian dan tugas yang diberikan di pengajaran EDUSmart?',
        answer:
          'Ya, EDUSmart memberikan latihan, tugas, dan evaluasi berkala untuk mengukur pemahaman siswa.',
      },
    ],
  },
  {
    category: 'Pendaftaran',
    items: [
      {
        question: 'Bagaimana prosedur pendaftaran di EDUSmart?',
        answer:
          'Calon peserta dapat mendaftar melalui website, WhatsApp, atau langsung datang ke kantor cabang terdekat.',
      },
      {
        question: 'Apa saja diskon-diskon yang dapat saya terima?',
        answer:
          'Diskon tersedia untuk pendaftaran awal, paket lama belajar, dan promo tertentu di waktu-waktu spesial.',
      },
    ],
  },
  {
    category: 'Pertanyaan Lain',
    items: [
      {
        question: 'Untuk pertanyaan lain dapat menghubungi kontak kami',
        answer:
          'Anda dapat menghubungi kontak WhatsApp, email, atau sosial media kami untuk informasi lebih lanjut.',
      },
    ],
  },
]
</script>
