# Ruang Belajar — Pengantar Teknologi Informasi (PTI)

Platform web interaktif pembelajaran mata kuliah **Pengantar Teknologi Informasi (3 SKS)** untuk program studi **S1 Bisnis Digital**, diadaptasi langsung dari materi modul perkuliahan Dosen **Agus Prayitno, S.T., M.Kom.** dan panduan tugas kelompok implementasi TI.

---

## 🌟 Fitur Utama

1. **Dashboard Progres Belajar Real-Time**:
   - Pelacakan progres otomatis per modul dan total progres mata kuliah menggunakan `localStorage`.
   - Ringkasan administrasi perkuliahan: komponen penilaian, bobot huruf mutu, dan syarat kehadiran ujian.

2. **7 Modul Perkuliahan Lengkap (P-1 s.d. P-7)**:
   - **Pertemuan 1**: Konsep Dasar TI, Hierarki Data-Informasi-Knowledge-Wisdom (DIKW), 5 Komponen Sistem TI, & Evolusi TI.
   - **Pertemuan 2**: Hardware Komputer, Anatomi Von Neumann, CPU Machine Cycle (Fetch-Decode-Execute-Store), Hierarki Memori (RAM, ROM, SSD NVMe), & Bus Sistem.
   - **Pertemuan 3**: Software Sistem vs Aplikasi, Lapisan Abstraksi Sistem, Enterprise Systems (ERP, CRM, SCM, HRIS), & Model Lisensi SaaS.
   - **Pertemuan 4**: Sistem Operasi & 5 Fungsi Vital (Process Scheduling, Virtual Memory Paging, File System, Device I/O, Keamanan), Kategori OS & Dominasi Linux di Cloud.
   - **Pertemuan 5**: Jaringan Komputer, Komunikasi Data, PAN/LAN/MAN/WAN, Switch vs Router vs Gateway, Pengalamatan IP, DNS, & Model TCP/IP/HTTPS.
   - **Pertemuan 6**: Sistem Informasi & Basis Data, 5 Komponen SI, Spreadsheet vs DBMS Relasional (ACID), Primary Key & Foreign Key, Siklus OLTP ke OLAP/BI.
   - **Pertemuan 7**: Aplikasi Perkantoran: Pengolahan Kata, Spreadsheet (Formula SUM/IF/VLOOKUP & Pivot Table), Presentasi Eksekutif, & Pipeline Mini Business Report.

3. **Modul Khusus Tugas Kelompok (3 Business Cases)**:
   - Kerangka 5 Langkah Terpadu: `Data ➔ Processing ➔ Information ➔ Decision ➔ Business Value`.
   - Studi Kasus 1: **Coffee Shop** (Efisiensi operasional & transaksi).
   - Studi Kasus 2: **Marketplace E-Commerce** (Integrasi ekosistem multi-pihak skala besar).
   - Studi Kasus 3: **Transportasi Digital** (Pengambilan keputusan real-time & algoritma geospasial).
   - Matriks perbandingan spesifikasi hardware, database, arsitektur cloud, dan kompleksitas algoritma.
   - Pedoman penyusunan luaran (dokumen makalah, ERD database, slide presentasi) & rubrik penilaian dosen.

4. **Persiapan UTS (14 Soal Kisi-kisi)**:
   - 14 pertanyaan esai komprehensif dengan pembahasan mendalam dan poin-poin kunci jawaban.
   - Filter soal berdasarkan pertemuan perkuliahan.
   - Tautan balik langsung ke subbab materi dan studi kasus.

5. **Visualisasi & Simulator Interaktif**:
   - Simulator Hierarki DIKW dengan contoh bisnis riil.
   - Simulator Machine Cycle CPU 4 langkah interaktif (Fetch, Decode, Execute, Store) dengan indikator register & bus.
   - Eksplorasi Sistem Aplikasi Enterprise (ERP, CRM, SCM, BI).
   - Explorer 5 Fungsi Vital OS & mitigasi risiko crash.
   - Simulator Topologi Jaringan & Transmisi Paket Data.
   - Database ERD Explorer: Relasi tabel, Primary Key & Foreign Key.
   - Pipeline integrasi data spreadsheet ke dokumen Word dan presentasi PowerPoint.

6. **Active Recall & Evaluasi Mandiri**:
   - Flashcards interaktif dua sisi untuk menguji daya ingat konsep kunci per modul.
   - Mini Quiz pilihan ganda dengan umpan balik langsung dan penjelasan detail alasan jawaban benar/salah.

7. **Pencarian Cerdas (Global Search)**:
   - Akses cepat via keyboard shortcut `Ctrl + K` / `Cmd + K`.
   - Pencarian fuzzy bertoleransi salah ketik (`oneEditAway`), sinonim istilah, dan pembobotan judul/isi.

8. **Tema Dark & Light Mode**:
   - Desain editorial elegan dengan tipografi Instrument Serif, Inter, dan JetBrains Mono.
   - Pilihan tema Gelap / Terang yang tersimpan otomatis.

---

## 🚀 Cara Menjalankan di Perangkat Lokal (Termux / Laptop)

Masuk ke folder proyek dan jalankan web server:

```bash
cd ~/pti-study-hub
node serve.js
```

Buka browser di HP atau laptop Anda:
- Perangkat lokal: `http://localhost:3000` atau `http://127.0.0.1:3000`

---

## ☁️ Cara Deploy ke Vercel

Karena aplikasi ini dibangun dengan arsitektur **Vanilla Modern ES Modules (Pure Static)** tanpa perlu langkah build rumit, Anda dapat langsung mengunggahnya ke Vercel:

1. Buka [Vercel Dashboard](https://vercel.com).
2. Tambahkan project baru (*Add New Project*).
3. Sambungkan repositori GitHub Anda (atau gunakan Vercel CLI via `npx vercel`).
4. Framework Preset: **Other** (Root directory: `./`).
5. Klik **Deploy** — website akan langsung online dengan domain gratis `.vercel.app`!
