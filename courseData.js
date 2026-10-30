export const courseMeta = {
  title: 'Pengantar Teknologi Informasi',
  author: 'Agus Prayitno, S.T., M.Kom.',
  program: 'S1 Bisnis Digital',
  credits: '3 SKS',
  note: 'Materi dikompilasi dari 7 modul perkuliahan PTI dan Panduan Tugas Kelompok Bisnis Digital. Dirancang untuk memahami fondasi teknologi komputasi dan implementasinya dalam penciptaan nilai bisnis.',
  assessment: {
    breakdown: [
      'Kognitif (Pemahaman Teori & Konsep): Ujian Tengah Semester (UTS) 30%, Ujian Akhir Semester (UAS) 40%.',
      'Psikomotorik & Afektif (Penerapan & Tugas Kelompok): Tugas Mandiri, Praktik, dan Presentasi Tugas Kelompok 30%.'
    ],
    grades: [
      ['81–100', 'A', '4.0'],
      ['76–80', 'B+', '3.5'],
      ['65–75', 'B', '3.0'],
      ['60–64', 'C+', '2.5'],
      ['55–59', 'C', '2.0'],
      ['45–54', 'D', '1.0'],
      ['0–44', 'E', '0.0']
    ],
    eligibility: [
      'Terdaftar aktif sebagai mahasiswa semester berjalan pada program studi S1 Bisnis Digital dan memprogram KRS.',
      'Memenuhi kewajiban administratif perkuliahan sebelum pelaksanaan UTS dan UAS.',
      'Tingkat kehadiran minimum tatap muka perkuliahan adalah 75% dari total pertemuan efektif.',
      'Mahasiswa wajib mengumpulkan tugas kelompok analisis implementasi TI bisnis digital tepat waktu sebagai prasyarat nilai akhir.',
      'Pengecualian ketidakhadiran hanya berlaku untuk alasan sakit resmi (surat dokter) atau penugasan resmi universitas/instansi.'
    ]
  }
};

export const course = [
  {
    id: 'm1',
    no: '01',
    title: 'Konsep Dasar Teknologi Informasi',
    short: 'Konsep Dasar TI',
    accent: 'terracotta',
    outcome: 'Menjelaskan hakikat data vs informasi, hierarki DIKW, 5 komponen sistem TI, evolusi komputer, dan peran TI dalam transformasi bisnis digital.',
    source: 'Pertemuan 1 · Agus Prayitno, S.T., M.Kom. · Pengantar Teknologi Informasi (3 SKS)',
    summary: [
      'Data adalah fakta mentah; informasi adalah data berstruktur; knowledge adalah pola aksi; wisdom adalah pertimbangan nilai jangka panjang.',
      'Sistem TI terbentuk dari 5 pilar yang tidak terpisahkan: Hardware, Software, Brainware, Data, dan Jaringan (Network).',
      'Evolusi TI bergerak dari komputasi sentralisasi (Mainframe) menuju komputasi personal (PC), jaringan (Internet), hingga era cloud dan kecerdasan buatan (AI).',
      'Teknologi informasi bukan sekadar alat pembantu administrasi, melainkan mesin penggerak keunggulan kompetitif dan model bisnis digital modern.'
    ],
    sections: [
      {
        title: 'Data, Informasi, dan Hierarki DIKW',
        slides: '4–7',
        intro: 'Dalam bisnis digital, memahami perbedaan antara sekadar mengumpulkan data dan menghasilkan wawasan yang dapat ditindaklanjuti adalah kunci penciptaan nilai.',
        concepts: [
          {
            name: 'Hierarki DIKW (Data, Information, Knowledge, Wisdom)',
            definition: 'Kerangka konseptual yang menggambarkan bagaimana fakta mentah ditransformasikan melalui proses kognitif dan analitis menjadi pemahaman yang bijaksana.',
            mechanism: 'Data (fakta tanpa konteks) dikelompokkan dan dihitung menjadi Informasi (data bermakna). Informasi yang dianalisis dalam konteks pengalaman membentuk Knowledge (pola untuk tindakan). Knowledge yang digabungkan dengan visi etis dan dampak jangka panjang menjadi Wisdom.',
            example: 'Angka "200" (Data) → "200 gelas kopi terjual hari ini senilai Rp5.000.000" (Informasi) → "Penjualan 200 gelas selalu terkonsentrasi pada jam 12.00–14.00 sehingga barista butuh shift tambahan" (Knowledge) → "Mengubah tata letak bar dan memesan mesin espresso otomatis agar pelanggan tidak menunggu lebih dari 3 menit" (Wisdom).',
            takeaway: 'Teknologi bertugas mengotomasi pengumpulan Data dan pemrosesan menjadi Informasi, sehingga manusia dapat berfokus pada Knowledge dan Wisdom.'
          },
          {
            name: 'Karakteristik Informasi yang Berkualitas',
            definition: 'Kriteria yang menentukan apakah suatu informasi bernilai dan layak digunakan sebagai landasan pengambilan keputusan manajerial.',
            mechanism: 'Informasi harus Akurat (bebas galat), Tepat Waktu (tersedia saat keputusan butuh dibuat), Relevan (sesuai kebutuhan spesifik pengambil keputusan), Lengkap (mencakup seluruh parameter penting), dan Ekonomis (biaya perolehan lebih kecil dari nilai yang dihasilkan).',
            example: 'Laporan penjualan harian yang dikirim ke manajer toko setiap jam 21.00 via dashboard otomatis jauh lebih berkualitas daripada rekap kertas manual yang baru selesai 5 hari kemudian.',
            takeaway: 'Informasi yang terlambat tiba sama nilainya dengan informasi yang salah, karena kesempatan pasar telah lewat.'
          }
        ],
        matrix: [
          ['Dimensi', 'Data', 'Informasi', 'Knowledge', 'Wisdom'],
          ['Bentuk', 'Fakta mentah, simbol, angka acak', 'Tabel terstruktur, grafik, laporan', 'Pemahaman pola, wawasan tren', 'Prinsip, strategi, etika bisnis'],
          ['Tingkat Konteks', 'Sangat rendah / tidak ada', 'Tinggi (diberi konteks & satuan)', 'Kontekstual berdasarkan pengalaman', 'Menyeluruh (jangka panjang & holistik)'],
          ['Pertanyaan Kunci', 'Apa yang tercatat?', 'Siapa, kapan, di mana, berapa?', 'Bagaimana dan mengapa terjadi?', 'Ke mana arah terbaik masa depan?'],
          ['Pelaku Utama', 'Sensor, kasir, log sistem', 'Sistem komputer, DBMS, analitik', 'Manusia (analis, manajer)', 'Pimpinan puncak, eksekutif']
        ]
      },
      {
        title: 'Lima Komponen Sistem Teknologi Informasi',
        slides: '8–12',
        intro: 'Sistem TI tidak bekerja hanya dengan membeli komputer canggih; kelima komponen harus saling terintegrasi dan selaras.',
        concepts: [
          {
            name: 'Pilar 5 Komponen TI (Hardware, Software, Brainware, Data, Jaringan)',
            definition: 'Komponen fundamental pembentuk ekosistem komputasi yang bekerja bersama untuk mengumpulkan, mengolah, menyimpan, dan mendistribusikan informasi.',
            mechanism: 'Hardware menyediakan daya komputasi fisik; Software memberi instruksi kerja; Data menjadi bahan mentah; Jaringan menghubungkan pertukaran data; Brainware merancang, mengoperasikan, dan mengevaluasi hasil untuk tujuan bisnis.',
            example: 'Pada kasir ritel: Tablet & printer (Hardware), Aplikasi kasir POS (Software), Kasir & Supervisor (Brainware), Katalog produk & transaksi (Data), serta Wi-Fi ke cloud server (Jaringan).',
            takeaway: 'Jika salah satu pilar gagal (misalnya internet putus atau karyawan tidak terlatih), keseluruhan sistem TI akan lumpuh.'
          },
          {
            name: 'Brainware dalam Era Bisnis Digital',
            definition: 'Sumber daya manusia yang terlibat dalam perancangan, pengelolaan, pemeliharaan, dan pemanfaatan sistem teknologi informasi.',
            mechanism: 'Dibagi menjadi tingkat teknis (software engineer, database administrator, network engineer), tingkat fungsional (data analyst, product manager), dan pengguna akhir (end-user: kasir, pelanggan, staf operasional).',
            example: 'Keberhasilan aplikasi mobile banking bukan hanya karena kodenya bagus, tetapi karena pengguna akhir mudah memahaminya dan tim IT sigap menambal celah keamanan.',
            takeaway: 'Brainware adalah penentu apakah investasi hardware dan software yang mahal dapat menghasilkan return of investment (ROI) bagi bisnis.'
          }
        ]
      },
      {
        title: 'Evolusi TI & Perannya dalam Bisnis Digital',
        slides: '13–18',
        intro: 'Perkembangan komputasi telah mengubah lanskap bisnis dari pencatatan klerikal manual menjadi ekosistem digital otomatis.',
        concepts: [
          {
            name: 'Gelombang Evolusi Komputasi Bisnis',
            definition: 'Tahapan transformasi komputasi dari pemrosesan batch terpusat hingga komputasi tepi (edge computing) dan kecerdasan buatan.',
            mechanism: 'Era Mainframe (1960-an: sentralisasi) → Era PC (1980-an: komputasi individu di meja) → Era Internet/Client-Server (1990–2000-an: konektivitas global) → Era Cloud & Mobile (2010-an: komputasi on-demand di mana saja) → Era AI & Smart Automation (2020-an: keputusan mandiri).',
            example: 'Dahulu memesan taksi harus menelepon operator pangkalan (manual); kini aplikasi mencocokkan jutaan penumpang dan armada secara real-time lewat cloud server dan algoritma pintar.',
            takeaway: 'Setiap gelombang baru memotong biaya transaksi (*transaction cost*) dan membuka model bisnis baru yang sebelumnya mustahil.'
          },
          {
            name: 'TI sebagai Strategic Enabler vs Operational Tool',
            definition: 'Pergeseran peran TI dari sekadar alat efisiensi kantor (back-office) menjadi pendorong model bisnis inti (front-office) yang menciptakan diferensiasi pasar.',
            mechanism: 'Sebagai Operational Tool, TI mempercepat pembukuan dan penggajian. Sebagai Strategic Enabler, TI memungkinkan produk baru (fintech, SaaS), kanal distribusi baru (omnichannel), dan monetisasi data.',
            example: 'Netflix beralih dari menyewa DVD via pos (TI operasional) menjadi platform streaming on-demand global berbasis algoritma rekomendasi personal (TI strategis).',
            takeaway: 'Mahasiswa Bisnis Digital harus melihat TI sebagai aset strategis pencipta proposisi nilai, bukan pos biaya overhead.'
          }
        ]
      }
    ],
    flashcards: [
      ['Apa perbedaan mendasar antara Data dan Informasi?', 'Data adalah fakta mentah yang belum diolah dan tidak memiliki konteks (misal angka "100"), sedangkan Informasi adalah data yang telah diorganisasikan sehingga memiliki makna bagi pembaca (misal "100 stok sisa barang").'],
      ['Sebutkan 5 komponen utama dalam Sistem Teknologi Informasi!', 'Hardware (perangkat keras), Software (perangkat lunak), Brainware (manusia/pengguna), Data (rekaman transaksi), dan Jaringan/Network (infrastruktur telekomunikasi).'],
      ['Mengapa Brainware dianggap sebagai komponen paling krusial dalam sistem TI bisnis?', 'Karena secanggih apa pun hardware dan software yang dibeli perusahaan, sistem tidak akan menghasilkan nilai bisnis tanpa keahlian manusia dalam mengoperasikan, menginterpretasikan data, dan membuat keputusan strategis.'],
      ['Apa yang dimaksud dengan TI sebagai "Strategic Enabler" dalam bisnis digital?', 'TI bertindak bukan hanya untuk membantu efisiensi pekerjaan rutin kantor, melainkan menjadi fondasi utama yang memungkinkan lahirnya model bisnis baru, produk inovatif, dan keunggulan kompetitif di pasar.']
    ],
    quiz: [
      {
        q: 'Manakah di bawah ini yang merupakan contoh konkret dari tahap "Knowledge" dalam hierarki DIKW?',
        options: [
          'Catatan angka "45" pada log transaksi kasir kasir minimarket.',
          'Laporan bahwa ada 45 transaksi produk mi instan pada tanggal 28 Oktober.',
          'Kesimpulan bahwa penjualan mi instan selalu melonjak 3x lipat pada tanggal gajian sehingga stok perlu ditambah 50 karton sebelum tanggal 25.',
          'Struk pembayaran belanjaan pelanggan yang dicetak oleh printer thermal kasir.'
        ],
        answer: 2,
        why: 'Knowledge menghubungkan informasi (penjualan mi instan) dengan pola/tren masa lalu (tanggal gajian) untuk menghasilkan tindakan yang dapat dieksekusi (reorder 50 karton sebelum tgl 25).'
      },
      {
        q: 'Jika sebuah toko online memiliki server cloud yang andal dan website yang canggih, namun pesanan pelanggan tertahan 3 hari karena staf gudang tidak tahu cara menggunakan dashboard, komponen TI manakah yang mengalami kegagalan?',
        options: [
          'Hardware',
          'Software',
          'Brainware',
          'Network'
        ],
        answer: 2,
        why: 'Kegagalan terletak pada Brainware (sumber daya manusia), karena staf belum dilatih atau tidak memiliki keterampilan untuk mengoperasikan sistem software dengan benar.'
      },
      {
        q: 'Berikut ini adalah karakteristik informasi yang berkualitas tinggi untuk bisnis, KECUALI...',
        options: [
          'Akurat dan bebas dari kekeliruan perhitungan',
          'Tepat waktu saat keputusan strategis harus diambil',
          'Memiliki volume yang sebesar mungkin hingga memenuhi seluruh ruang penyimpanan',
          'Relevan dengan masalah operasional yang sedang dihadapi'
        ],
        answer: 2,
        why: 'Volume data yang terlalu besar tanpa relevansi justru menyebabkan information overload yang membingungkan pengambil keputusan. Kualitas ditentukan oleh akurasi, aktualitas, dan relevansi.'
      }
    ]
  },
  {
    id: 'm2',
    no: '02',
    title: 'Perangkat Keras Komputer (Hardware)',
    short: 'Perangkat Keras',
    accent: 'emerald',
    outcome: 'Menguasai anatomi sistem komputer, arsitektur CPU dan Machine Cycle, hierarki memori dan media penyimpanan, bus sistem, serta kriteria pemilihan hardware bisnis.',
    source: 'Pertemuan 2 · Agus Prayitno, S.T., M.Kom. · Pengantar Teknologi Informasi (3 SKS)',
    summary: [
      'Model arsitektur Von Neumann membagi komputer menjadi 4 pilar fungsional: Input, Processing (CPU), Output, dan Storage.',
      'CPU memproses setiap instruksi melalui siklus mesin 4 tahap: Fetch (ambil dari RAM), Decode (terjemahkan), Execute (hitung), dan Store (simpan).',
      'Hierarki memori menyeimbangkan kecepatan dan biaya: Register (tercepat & termahal) → Cache L1-L3 → RAM → SSD NVMe → HDD/Cloud Storage (paling lambat & termurah).',
      'Pemilihan hardware bisnis harus berorientasi pada jenis beban kerja (workload): transaksi ritel, komputasi analitik, atau server cloud dengan ketersediaan tinggi.'
    ],
    sections: [
      {
        title: 'Model Von Neumann & Anatomi Sistem Komputer',
        slides: '4–7',
        intro: 'Hampir seluruh komputer modern—dari smartphone saku hingga superkomputer data center—menggunakan prinsip arsitektur Von Neumann.',
        concepts: [
          {
            name: 'Arsitektur Komputer Model Von Neumann',
            definition: 'Desain teoritis sistem komputer yang menyimpan instruksi program dan data kerja di dalam memori yang sama (Stored-Program Concept).',
            mechanism: 'Komputer terdiri dari unit pemroses pusat (CPU dengan ALU dan Control Unit), unit memori utama, sistem bus penghubung, serta perangkat input dan output.',
            example: 'Ketika kasir memindai barcode (Input), CPU menghitung harga dan diskon (Process), monitor kasir menampilkan total (Output), dan database lokal mencatatnya ke SSD (Storage).',
            takeaway: 'Memori dan prosesor yang terpisah menimbulkan fenomena "Von Neumann Bottleneck", di mana kecepatan CPU sering dibatasi oleh kecepatan transfer jalur bus dari memori.'
          },
          {
            name: 'Empat Blok Fungsional Komputer',
            definition: 'Klasifikasi perangkat keras berdasarkan fungsi alur datanya: Perangkat Masukan (Input), Pemrosesan (Processing), Keluaran (Output), dan Penyimpanan (Storage).',
            mechanism: 'Input menangkap sinyal dunia nyata menjadi bit biner (keyboard, barcode scanner, sensor); Processing memanipulasi bit tersebut (CPU, GPU); Output menampilkan hasil ke manusia/mesin lain (layar monitor, printer kasir); Storage menyimpan bit secara permanen.',
            example: 'Perangkat Point-of-Sale (POS) menggabungkan barcode scanner (Input), CPU Intel N100 (Processing), printer struk thermal (Output), dan SSD 128GB (Storage).',
            takeaway: 'Kebutuhan bisnis menentukan kombinasi perangkat I/O dan daya pemrosesan yang wajib disediakan.'
          }
        ]
      },
      {
        title: 'Arsitektur CPU & Machine Cycle',
        slides: '8–12',
        intro: 'CPU adalah otak komputer. Kecepatannya mengeksekusi instruksi per detik (GHz) bergantung pada koordinasi unit-unit internalnya.',
        concepts: [
          {
            name: 'Komponen Internal CPU (ALU, CU, Register, Clock)',
            definition: 'Struktur internal Central Processing Unit yang bertugas membagi tugas operasional instruksi mesin.',
            mechanism: 'Control Unit (CU) mengarahkan lalu lintas data dan instruksi; Arithmetic Logic Unit (ALU) melakukan kalkulasi matematika (+, -, *, /) dan logika boolean (AND, OR, NOT, perbandingan >); Register adalah sel memori internal ultra-cepat untuk menampung operand; Clock menghasilkan pulsa detak frekuensi (GHz) untuk sinkronisasi langkah.',
            example: 'Saat menghitung diskon belanja 20%: CU mengambil instruksi perkalian, memuat harga ke Register A, menginstruksikan ALU mengalikan dengan 0.8, lalu menyimpan hasilnya di Register B.',
            takeaway: 'Jumlah core (multi-core) memungkinkan CPU menjalankan beberapa tugas secara paralel secara bersamaan tanpa lag.'
          },
          {
            name: 'Siklus Mesin (Machine Cycle / Instruction Cycle)',
            definition: 'Rangkaian empat langkah berkelanjutan yang diulang oleh CPU untuk memproses setiap baris instruksi biner kode program.',
            mechanism: '1. FETCH: Mengambil kode instruksi berikutnya dari RAM berdasarkan penunjuk Program Counter (PC). 2. DECODE: CU menerjemahkan opcode instruksi menjadi sinyal kontrol sirkuit. 3. EXECUTE: ALU mengeksekusi operasi aritmatika atau manipulasi bit. 4. STORE: Menyimpan hasil perhitungan kembali ke register internal atau RAM.',
            example: 'Setiap klik mouse, penambahan item keranjang belanja, atau rendering halaman web diuraikan menjadi jutaan kali Machine Cycle per detik.',
            takeaway: 'Efisiensi CPU modern diukur dari IPC (Instructions Per Cycle), bukan sekadar angka frekuensi GHz semata.'
          }
        ],
        matrix: [
          ['Fase Machine Cycle', 'Aktor Pelaksana', 'Aksi Teknis', 'Dampak pada Data'],
          ['1. Fetch', 'Control Unit & Bus', 'Ambil instruksi dari alamat RAM ke Instruction Register', 'Instruksi siap di CPU'],
          ['2. Decode', 'Instruction Decoder (CU)', 'Pahami jenis perintah (ADD, SUB, LOAD, JUMP)', 'Sinyal kontrol sirkuit aktif'],
          ['3. Execute', 'ALU / FPU', 'Hitung nilai matematika atau bandingkan logika', 'Data operand diproses'],
          ['4. Store', 'Control Unit & Bus', 'Tulis output ke register kerja atau RAM tujuan', 'Hasil kalkulasi tersimpan']
        ]
      },
      {
        title: 'Hierarki Memori & Media Penyimpanan',
        slides: '13–16',
        intro: 'Tidak ada satu jenis memori yang sekaligus tercepat, termurah, dan berkapasitas terbesar; komputer menggunakan hierarki bertingkat.',
        concepts: [
          {
            name: 'Hierarki Piramida Memori Komputer',
            definition: 'Tingkatan memori dari yang tercepat dengan kapasitas terkecil hingga yang terlambat dengan kapasitas terbesar.',
            mechanism: 'Register CPU (ukuran Bytes, kecepatan < 1 ns) → L1/L2/L3 Cache (KB–MB, 1–10 ns) → RAM Utama (GB, 10–50 ns) → NVMe SSD (GB–TB, mikrodetik) → HDD & Cloud Storage (TB–PB, milidetik).',
            example: 'Data produk yang sedang aktif di-checkout kasir berada di RAM; data foto katalog yang jarang diakses disimpan di SSD atau cloud storage.',
            takeaway: 'Prinsip Locality of Reference: 90% waktu komputasi hanya mengakses 10% data yang sama, sehingga caching sangat efektif mempercepat aplikasi.'
          },
          {
            name: 'RAM vs ROM vs Storage (SSD/NVMe vs HDD)',
            definition: 'Perbedaan mendasar antara memori kerja sementara dan media penyimpanan data permanen.',
            mechanism: 'RAM bersifat volatil (isi terhapus seketika saat listrik mati); ROM bersifat non-volatil permanen (menyimpan firmware booting UEFI/BIOS); SSD/HDD bersifat non-volatil untuk penyimpanan jangka panjang sistem operasi, aplikasi, dan file.',
            example: 'Jika kasir tidak dilengkapi UPS dan listrik padam, data belanja di RAM kasir yang belum disimpan ke database SSD akan hilang seketika.',
            takeaway: 'SSD NVMe menggunakan chip memori flash tanpa komponen mekanis bergerak, menghasilkan kecepatan baca/tulis 5–20 kali lipat dibanding HDD magnetik jadul.'
          }
        ]
      },
      {
        title: 'Bus Sistem & Spesifikasi Hardware Bisnis',
        slides: '17–19',
        intro: 'Bagaimana data berpindah antar-komponen, dan bagaimana menentukan spesifikasi komputer yang tepat sesuai kebutuhan bisnis.',
        concepts: [
          {
            name: 'Tiga Jalur Bus Sistem (Data, Address, Control Bus)',
            definition: 'Kumpulan sirkuit jalur konduktor fisik yang menghubungkan CPU dengan RAM dan modul I/O.',
            mechanism: 'Data Bus (dua arah: membawa data aktual); Address Bus (satu arah dari CPU: menentukan alamat memori yang dituju); Control Bus (mengirim sinyal koordinasi seperti Read, Write, Clock, dan Interrupt).',
            example: 'Address bus 64-bit memungkinkan sistem mengalamati memori teoritis hingga 16 Exabytes RAM, melampaui batas 4GB pada sistem 32-bit lawas.',
            takeaway: 'Lebar bus data (data bus width) menentukan berapa banyak bit yang dapat ditransfer dalam satu detak jam komputasi.'
          },
          {
            name: 'Pemilihan Hardware Berbasis Workload Bisnis',
            definition: 'Metode mencocokkan spesifikasi CPU, RAM, storage, dan keandalan perangkat dengan kebutuhan operasional nyata tanpa pemborosan anggaran.',
            mechanism: 'Untuk POS Kasir: utamakan efisiensi daya, layar sentuh tahan debu/cipratan, dan UPS cadangan (Intel N100/i3, 8GB RAM, SSD 128GB). Untuk Server Database Bisnis: utamakan multi-core CPU, RAM berkapasitas besar (ECC), dan konfigurasi RAID NVMe SSD redundan.',
            example: 'Membeli PC gaming berharga mahal untuk komputer kasir warung kopi adalah pemborosan modal kerja (*over-spec*), sementara memakai tablet murah tanpa pendingin untuk kasir restoran ramai berisiko *overheating* dan *freeze* saat jam sibuk.',
            takeaway: 'Hardware terbaik untuk bisnis bukan yang paling mahal, melainkan yang paling stabil, tahan lama, dan memiliki Total Cost of Ownership (TCO) terendah.'
          }
        ]
      }
    ],
    flashcards: [
      ['Apa saja 4 tahap dalam Machine Cycle CPU?', 'Fetch (mengambil instruksi dari RAM), Decode (menerjemahkan instruksi), Execute (menjalankan perhitungan oleh ALU), dan Store (menyimpan hasil ke register/RAM).'],
      ['Mengapa SSD jauh lebih cepat daripada Hard Disk Drive (HDD)?', 'Karena SSD menggunakan chip flash memory elektronik tanpa ada komponen mekanik bergerak, sedangkan HDD harus memutar piringan magnetik dan menggerakkan jarum head baca-tulis fisik.'],
      ['Apa fungsi dari Address Bus pada sistem komputer?', 'Address Bus adalah jalur satu arah dari CPU yang membawa informasi alamat fisik memori atau port I/O di mana data akan dibaca atau ditulis.'],
      ['Apa perbedaan mendasar antara memori volatil dan non-volatil?', 'Memori volatil (seperti RAM) membutuhkan arus listrik terus-menerus dan datanya akan lenyap saat listrik mati. Memori non-volatil (seperti ROM, SSD, HDD) dapat menyimpan data secara permanen meski tanpa aliran listrik.']
    ],
    quiz: [
      {
        q: 'Unit di dalam CPU yang bertugas melakukan operasi perhitungan matematika (seperti perkalian harga barang) dan perbandingan logika (seperti mengecek apakah stok > 0) adalah...',
        options: [
          'Control Unit (CU)',
          'Arithmetic Logic Unit (ALU)',
          'Program Counter (PC)',
          'Instruction Register (IR)'
        ],
        answer: 1,
        why: 'ALU (Arithmetic Logic Unit) adalah kalkulator inti CPU yang bertanggung jawab mengeksekusi semua operasi aritmatika dan logika perbandingan.'
      },
      {
        q: 'Urutan hierarki memori dari yang memiliki kecepatan akses TERTINGGI hingga TERENDAH yang benar adalah...',
        options: [
          'RAM → Register CPU → Cache → NVMe SSD',
          'Register CPU → Cache → RAM Utama → NVMe SSD',
          'Cache → Register CPU → NVMe SSD → RAM Utama',
          'NVMe SSD → RAM Utama → Cache → Register CPU'
        ],
        answer: 1,
        why: 'Register berada langsung di dalam inti CPU (tercepat), diikuti Cache L1/L2/L3, kemudian RAM utama, dan terakhir penyimpanan sekunder seperti NVMe SSD.'
      },
      {
        q: 'Sebuah kafe membeli tablet Android murah seharga 800 ribu untuk kasir. Saat akhir pekan ramai, tablet tersebut sering hang dan mati mendadak karena kehabisan memori kerja dan panas. Kesalahan utama pemilihan hardware ini adalah...',
        options: [
          'Salah memilih merek printer kasir',
          'Tidak mempertimbangkan kapasitas RAM dan ketahanan beban kerja operasional (workload)',
          'Kabel koneksi LAN terlalu panjang',
          'Ukuran layar tablet terlalu kecil untuk dilihat barista'
        ],
        answer: 1,
        why: 'Hardware untuk bisnis harus memiliki kapasitas RAM dan sistem pendinginan yang memadai untuk menangani ratusan transaksi secara stabil tanpa freeze saat jam ramai.'
      }
    ]
  },
  {
    id: 'm3',
    no: '03',
    title: 'Perangkat Lunak Sistem dan Aplikasi',
    short: 'Perangkat Lunak',
    accent: 'indigo',
    outcome: 'Membedakan software sistem dan aplikasi, memahami lapisan abstraksi komputer, enterprise applications (ERP, CRM, SCM, HRIS), dan model lisensi modern.',
    source: 'Pertemuan 3 · Agus Prayitno, S.T., M.Kom. · Pengantar Teknologi Informasi (3 SKS)',
    summary: [
      'Software adalah kumpulan instruksi, program, dan data yang memerintahkan perangkat keras komputer untuk melakukan tugas spesifik.',
      'Software $\\neq$ Aplikasi: Aplikasi hanyalah salah satu cabang dari software; jenis lainnya adalah Software Sistem (OS, Driver, Firmware) dan Alat Bantu Pemrograman.',
      'Sistem Enterprise (ERP, CRM, SCM, HRIS, BI) mengintegrasikan silo-silo departemen menjadi satu database terpadu untuk keputusan cepat.',
      'Model distribusi software telah bergeser dari lisensi putus (On-Premise / Perpetual) menjadi sewa berbasis cloud (Software as a Service / SaaS).'
    ],
    sections: [
      {
        title: 'Hakikat Software & Lapisan Abstraksi Sistem',
        slides: '4–7',
        intro: 'Bagaimana instruksi biner yang tidak kasatmata dapat menggerakkan jutaan transistor perangkat keras untuk melayani pengguna.',
        concepts: [
          {
            name: 'Definisi Software vs Hardware vs Aplikasi',
            definition: 'Hardware adalah komponen fisik yang kasat mata dan dapat disentuh. Software adalah kode instruksi digital yang memberi nyawa pada hardware. Aplikasi adalah software spesifik yang didesain untuk tugas pengguna akhir.',
            mechanism: 'Pengguna berinteraksi dengan antarmuka Aplikasi (GUI); Aplikasi meminta layanan ke Sistem Operasi (OS) melalui API; OS memerintahkan Device Driver; Device Driver mengirim sinyal biner elektrik ke Hardware fisik.',
            example: 'Ketika Anda mengklik tombol "Cetak Struk" di aplikasi kasir: Aplikasi mengirim dokumen ke Print Spooler OS → OS menggunakan Driver printer Epson → Sinyal dikirim via USB kabel → Head printer thermal memanaskan kertas struk.',
            takeaway: 'Abstraksi berlapis memungkinkan pengembang aplikasi tidak perlu tahu cara kerja rinci sirkuit elektronik printer.'
          },
          {
            name: 'Lapisan Abstraksi Komputasi (The Computing Stack)',
            definition: 'Tingkatan hierarkis sistem komputer yang memisahkan kompleksitas perangkat keras dari pengguna akhir.',
            mechanism: 'Lapisan terluar: Pengguna (Brainware) → Aplikasi (POS, Browser, Office) → Sistem Operasi (Windows, Android, Linux) → Device Drivers & BIOS/Firmware → Perangkat Keras Fisik (CPU, RAM, Chipset).',
            example: 'Saat meng-update aplikasi POS, kasir tidak perlu mengganti sistem operasi tablet atau membeli motherboard baru berkat isolasi lapisan abstraksi.',
            takeaway: 'Semakin tinggi lapisan abstraksi, semakin mudah digunakan oleh manusia tetapi semakin jauh dari kontrol langsung sirkuit perangkat keras.'
          }
        ]
      },
      {
        title: 'Software Sistem vs Software Aplikasi',
        slides: '8–11',
        intro: 'Mengapa komputer tidak dapat langsung menjalankan browser atau game tanpa adanya software sistem pendukung.',
        concepts: [
          {
            name: 'Perangkat Lunak Sistem (System Software)',
            definition: 'Kategori program tingkat rendah yang bertugas mengelola, mengontrol sumber daya perangkat keras, dan menyediakan fondasi dasar bagi program lain untuk berjalan.',
            mechanism: 'Mencakup Sistem Operasi (Windows, Linux, macOS), Firmware/UEFI, Device Drivers (pengontrol printer, kartu grafis, Wi-Fi), serta utilitas sistem (antivirus, disk defragmenter, task manager).',
            example: 'Tanpa Device Driver yang tepat, Windows tidak akan mengenali printer thermal kasir yang baru dicolokkan ke port USB.',
            takeaway: 'System Software berorientasi pada komputer (machine-centric), memastikan mesin beroperasi stabil dan aman.'
          },
          {
            name: 'Perangkat Lunak Aplikasi (Application Software)',
            definition: 'Program yang dibuat khusus untuk membantu pengguna manusia menyelesaikan kebutuhan, pekerjaan, atau hiburan spesifik.',
            mechanism: 'Dijalankan di atas sistem operasi, memanfaatkan library sistem untuk berinteraksi dengan pengguna melalui Graphic User Interface (GUI).',
            example: 'Aplikasi akuntansi MYOB, lembar kerja Microsoft Excel, aplikasi kasir Moka POS, hingga browser Google Chrome.',
            takeaway: 'Application Software berorientasi pada manusia (user-centric), dirancang untuk menyelesaikan tugas bisnis nyata.'
          }
        ],
        matrix: [
          ['Kriteria', 'System Software (Software Sistem)', 'Application Software (Software Aplikasi)'],
          ['Tujuan Utama', 'Mengelola dan mengoperasikan hardware komputer', 'Membantu pengguna menyelesaikan tugas pekerjaan spesifik'],
          ['Interaksi Pengguna', 'Bekerja di latar belakang (background) tanpa banyak interaksi langsung', 'Berinteraksi langsung melalui antarmuka grafis (GUI) aktif'],
          ['Ketergantungan', 'Dapat berjalan mandiri setelah booting hardware', 'Wajib berjalan di atas sistem operasi (tidak bisa jalan sendiri)'],
          ['Contoh Nyata', 'Linux Kernel, Windows 11, iOS, Driver Kartu Jaringan, BIOS', 'Moka POS, Microsoft Word, PostgreSQL Studio, WhatsApp Desktop']
        ]
      },
      {
        title: 'Sistem Aplikasi Enterprise (ERP, CRM, SCM, HRIS)',
        slides: '12–15',
        intro: 'Ketika bisnis berskala besar, aplikasi terpisah-pisah di tiap departemen menimbulkan kekacauan data yang diatasi oleh Enterprise Systems.',
        concepts: [
          {
            name: 'ERP (Enterprise Resource Planning)',
            definition: 'Sistem perangkat lunak modular terpadu yang mengintegrasikan seluruh proses bisnis inti perusahaan ke dalam satu basis data tunggal terpusat.',
            mechanism: 'Modul Keuangan, Pembelian, Persediaan Gudang, Penjualan, dan Manufaktur saling terhubung secara real-time. Ketika pesanan baru dimasukkan di modul penjualan, stok di modul gudang otomatis terpotong dan jurnal akuntansi di modul keuangan langsung tercatat.',
            example: 'Sistem SAP, Oracle ERP Cloud, atau Odoo ERP yang dipakai perusahaan manufaktur dan ritel besar.',
            takeaway: 'Menghilangkan "Silo Data" (kondisi di mana departemen keuangan dan gudang memiliki catatan jumlah stok yang berbeda).'
          },
          {
            name: 'CRM (Customer Relationship Management) & Modul Terkait',
            definition: 'Aplikasi yang berfokus mengelola seluruh siklus hidup interaksi dengan pelanggan, mulai dari prospek penjualan, transaksi, hingga layanan purna jual.',
            mechanism: 'Merekam histori belanja, preferensi produk, dan komplain pelanggan, sehingga tim pemasaran dapat mengirim penawaran personal dan tim CS dapat merespons keluhan secara cepat.',
            example: 'Salesforce, HubSpot, atau fitur member loyalty pada aplikasi POS modern.',
            takeaway: 'Mempertahankan pelanggan lama (*customer retention*) melalui CRM biayanya 5–7 kali lebih murah daripada mencari pelanggan baru.'
          }
        ]
      },
      {
        title: 'Model Lisensi & Distribusi Software (SaaS vs On-Premise)',
        slides: '16–18',
        intro: 'Bagaimana perusahaan membeli, menyewa, dan mengelola kepemilikan perangkat lunak mereka.',
        concepts: [
          {
            name: 'Kategori Lisensi (Proprietary, Open Source, Freeware)',
            definition: 'Perjanjian hukum yang mengatur hak cipta, modifikasi, dan penggunaan kode sumber program komputer.',
            mechanism: 'Proprietary (kode sumber tertutup, berbayar, dilarang disalin seperti Windows/Microsoft Office); Open Source (kode sumber terbuka bebas dimodifikasi dan dikembangkan bersama seperti Linux/PostgreSQL); Freeware (gratis digunakan tapi kode sumber tetap tertutup).',
            example: 'Banyak startup memilih database Open Source (PostgreSQL) untuk menghemat biaya lisensi jutaan rupiah di awal berdiri.',
            takeaway: 'Open Source bukan berarti tanpa biaya; perusahaan tetap membutuhkan brainware yang kompeten untuk memeliharanya.'
          },
          {
            name: 'Software as a Service (SaaS) vs On-Premise',
            definition: 'Pergeseran dari membeli lisensi perangkat lunak yang diinstal di server lokal kantor menjadi menyewa aplikasi berbasis web yang di-host di cloud.',
            mechanism: 'On-Premise: perusahaan membeli lisensi putus (*CapEx*), membeli server fisik sendiri, dan mempekerjakan teknisi IT. SaaS: perusahaan membayar biaya sewa bulanan (*OpEx*) per pengguna; pembaruan versi dan keamanan ditangani otomatis oleh vendor cloud.',
            example: 'Dahulu kasir membeli CD software kasir Rp15 juta; kini menyewa Moka POS / Majoo seharga Rp250.000 per bulan yang selalu ter-update otomatis.',
            takeaway: 'SaaS menurunkan hambatan modal awal (*barrier to entry*) bagi UMKM dan startup untuk menikmati software berstandar enterprise.'
          }
        ]
      }
    ],
    flashcards: [
      ['Mengapa pernyataan "Semua aplikasi adalah software, tetapi tidak semua software adalah aplikasi" benar?', 'Karena software mencakup seluruh instruksi program, termasuk software sistem (seperti OS dan Device Driver) yang bukan merupakan aplikasi untuk pengguna akhir.'],
      ['Apa keuntungan terbesar penerapan sistem ERP bagi perusahaan besar?', 'Integrasi data menyeluruh dalam satu database tunggal, sehingga menghilangkan redundansi dan ketidaksinkronan data antar-departemen (keuangan, stok, produksi).'],
      ['Apa perbedaan utama antara model lisensi On-Premise dan SaaS (Software as a Service)?', 'On-Premise diinstal di server lokal milik sendiri dengan biaya beli putus di awal (CapEx), sedangkan SaaS diakses lewat browser/cloud dengan sistem langganan bulanan (OpEx) tanpa pusing memelihara server fisik.'],
      ['Apa peran dari Device Driver dalam sistem operasi?', 'Device driver adalah software sistem perantara yang menerjemahkan instruksi umum sistem operasi menjadi perintah khusus yang dapat dimengerti oleh perangkat keras fisik tertentu (seperti printer atau scanner).']
    ],
    quiz: [
      {
        q: 'Manakah dari software berikut yang tergolong ke dalam kategori SYSTEM SOFTWARE?',
        options: [
          'Microsoft Excel',
          'Linux Kernel & Device Driver Kartu Jaringan',
          'Aplikasi Kasir Moka POS',
          'Adobe Photoshop'
        ],
        answer: 1,
        why: 'Linux Kernel dan Device Driver adalah system software yang mengelola komunikasi perangkat keras dan menyediakan lingkungan eksekusi untuk program lain.'
      },
      {
        q: 'Sistem aplikasi yang dirancang khusus untuk mengelola rekam jejak interaksi pelanggan, peluang penjualan, dan layanan purnajual guna meningkatkan loyalitas konsumen disebut...',
        options: [
          'SCM (Supply Chain Management)',
          'CRM (Customer Relationship Management)',
          'HRIS (Human Resource Information System)',
          'DBMS (Database Management System)'
        ],
        answer: 1,
        why: 'CRM berfokus pada relasi pelanggan (Customer Relationship), memantau kepuasan, histori transaksi, dan penanganan komplain.'
      },
      {
        q: 'Sebuah kafe rintisan memilih berlangganan aplikasi kasir berbasis cloud dengan biaya Rp200.000/bulan daripada membeli software kasir putus seharga Rp10.000.000. Model penyediaan software ini dikenal sebagai...',
        options: [
          'On-Premise Deployment',
          'Software as a Service (SaaS)',
          'Platform as a Service (PaaS)',
          'Firmware Embedded'
        ],
        answer: 1,
        why: 'SaaS adalah model distribusi software di mana aplikasi di-host di cloud dan disewa secara berkala (langganan) tanpa perlu membeli lisensi permanen atau server fisik sendiri.'
      }
    ]
  },
  {
    id: 'm4',
    no: '04',
    title: 'Sistem Operasi & Pengelolaan Sumber Daya Komputer',
    short: 'Sistem Operasi',
    accent: 'terracotta',
    outcome: 'Memahami arsitektur dan 5 fungsi vital sistem operasi, kategori OS modern, serta perannya dalam stabilitas dan keamanan bisnis digital.',
    source: 'Pertemuan 4 · Agus Prayitno, S.T., M.Kom. · Pengantar Teknologi Informasi (3 SKS)',
    summary: [
      'Sistem Operasi (OS) bertindak sebagai jembatan perantara antara perangkat keras fisik dan pengguna beserta aplikasi.',
      'Lima fungsi vital OS: Process Management (penjadwalan CPU), Memory Management (alokasi RAM), File System, Device Driver (I/O), dan User/Security Access.',
      'Sistem Operasi diklasifikasikan menjadi Desktop OS (Windows, macOS), Mobile OS (Android, iOS), Server OS (Linux, Windows Server), dan Embedded OS.',
      'Stabilitas dan uptime bisnis digital bergantung pada ketepatan memilih sistem operasi server (Linux mendominasi 90%+ server cloud dunia).'
    ],
    sections: [
      {
        title: 'Hakikat OS: Manajer Sumber Daya & Abstraksi',
        slides: '4–7',
        intro: 'Tanpa sistem operasi, programmer harus menulis kode mesin rumit hanya untuk menyalakan piksel monitor atau membaca sektor hard drive.',
        concepts: [
          {
            name: 'Definisi & Peran Sistem Operasi (Operating System)',
            definition: 'Perangkat lunak sistem paling mendasar yang mengontrol eksekusi program aplikasi dan bertindak sebagai antarmuka antara aplikasi dan perangkat keras komputer.',
            mechanism: 'OS memiliki Kernel (jantung sistem operasi) yang memegang kendali penuh atas CPU, alokasi memori, dan interupsi perangkat keras. OS mengabstraksikan instruksi fisik menjadi System Call standar yang dipanggil oleh aplikasi.',
            example: 'Ketika 5 aplikasi dibuka bersamaan di komputer kasir, OS yang membagi waktu prosesor dan ruang RAM agar tidak saling bentrok.',
            takeaway: 'Dua peran utama OS: Sebagai Extended Machine (menyediakan abstraksi yang mudah bagi programmer) dan Resource Manager (mengatur pembagian sumber daya hardware secara adil dan efisien).'
          },
          {
            name: 'Kernel Space vs User Space',
            definition: 'Pemisahan wilayah memori sistem untuk melindungi keamanan dan integritas komputer dari kegagalan aplikasi.',
            mechanism: 'Kernel Space memiliki hak akses tertinggi (Ring 0) untuk berinteraksi langsung dengan hardware. User Space (Ring 3) adalah tempat aplikasi pengguna berjalan dengan hak terbatas; aplikasi dilarang mengakses hardware secara langsung tanpa izin Kernel.',
            example: 'Jika aplikasi browser web mengalami crash atau error, komputer tidak akan mati total (blue screen) karena crash hanya terjadi di User Space.',
            takeaway: 'Isolasi memori ini menjaga server bisnis tetap beroperasi melayani pelanggan meski salah satu modul web service mengalami galat.'
          }
        ]
      },
      {
        title: 'Lima Fungsi Vital Sistem Operasi',
        slides: '8–12',
        intro: 'Mengurai lima tugas maha penting yang dijalankan OS secara simultan setiap milidetik.',
        concepts: [
          {
            name: '1. Process & CPU Management (Multitasking & Scheduling)',
            definition: 'Kemampuan OS mengatur giliran eksekusi ribuan proses komputasi pada satu atau lebih core CPU.',
            mechanism: 'Algoritma penjadwalan (seperti Round Robin atau Priority Scheduling) membagi waktu eksekusi CPU dalam satuan irisan waktu (Time Slice). OS melakukan Context Switching secara sangat cepat sehingga pengguna merasa aplikasi berjalan bersamaan (*concurrency*).',
            example: 'Komputer kasir dapat mencetak struk di latar belakang sembari kasir tetap mengetik pesanan baru tanpa lag.',
            takeaway: 'Penjadwalan yang buruk akan menyebabkan "deadlock" atau sistem menjadi tidak responsif.'
          },
          {
            name: '2. Memory Management (RAM & Virtual Memory)',
            definition: 'Fungsi OS melacak setiap byte memori RAM, mengalokasikan ruang untuk aplikasi baru, dan membebaskannya saat aplikasi ditutup.',
            mechanism: 'Ketika kapasitas RAM fisik habis, OS menggunakan teknik Virtual Memory (Paging) dengan memindahkan data sementara yang sedang tidak aktif ke partisi storage SSD/HDD (Swap File) untuk memberi ruang bagi proses yang mendesak.',
            example: 'Server e-commerce yang memiliki RAM 16GB tetap bisa melayani lonjakan pengunjung flash sale berkat swap memory tanpa langsung crash.',
            takeaway: 'Aplikasi yang lupa membebaskan memori akan menyebabkan Memory Leak yang lama kelamaan memperlambat komputer.'
          },
          {
            name: '3. File System Management',
            definition: 'Struktur logis yang digunakan OS untuk mengorganisasikan, menamai, menyimpan, dan mengambil file dari media penyimpanan fisik.',
            mechanism: 'Mengatur hierarki direktori/folder, tabel alokasi file, metadata (tanggal dibuat, ukuran, pemilik), serta hak perizinan akses (Read, Write, Execute). Contoh format: NTFS (Windows), EXT4 (Linux), APFS (macOS).',
            example: 'File laporan keuangan toko hanya dapat dibaca (Read) oleh kasir, namun dapat diedit (Write) oleh manajer berkat izin file system NTFS/Linux.',
            takeaway: 'File system memastikan data tidak rusak (corrupt) saat terjadi pemadaman listrik melalui fitur Journaling.'
          },
          {
            name: '4. Device & I/O Management',
            definition: 'Manajemen komunikasi antara komputer dan seluruh perangkat input/output eksternal.',
            mechanism: 'Menggunakan buffer antrean, spooling cetak (Print Spooler), dan device driver untuk menyamakan perbedaan kecepatan antara CPU yang super cepat dan perangkat I/O yang lambat.',
            example: 'Ketika mencetak 10 struk sekaligus, CPU langsung mengirim semua data ke Spooler memori dalam 1 detik, lalu membiarkan printer menyelesaikannya perlahan tanpa menahan kerja CPU.',
            takeaway: 'Spooling membebaskan CPU agar bisa langsung mengerjakan tugas berikutnya tanpa menunggu hardware mekanik selesai.'
          },
          {
            name: '5. Security, Protection & Access Control',
            definition: 'Mekanisme OS untuk mengotentikasi identitas pengguna dan mencegah akses tidak sah ke data maupun sumber daya sistem.',
            mechanism: 'Manajemen akun pengguna (User/Admin), kontrol hak akses (Permissions), enkripsi file (BitLocker/FileVault), serta pencatatan log audit aktivitas sistem.',
            example: 'Kasir hanya bisa login ke antarmuka POS dan tidak memiliki izin menginstal aplikasi luar atau membuka file pembukuan pemilik toko.',
            takeaway: 'Prinsip Least Privilege: berikan hak akses seminimal mungkin yang diperlukan staf untuk menjalankan pekerjaannya.'
          }
        ]
      },
      {
        title: 'Kategori Sistem Operasi & Ekosistem Bisnis',
        slides: '13–18',
        intro: 'Mengapa server data center menggunakan Linux, sedangkan komputer kasir dan kantor banyak memakai Windows.',
        concepts: [
          {
            name: 'Kategori OS (Desktop, Mobile, Server, Embedded)',
            definition: 'Pembagian sistem operasi berdasarkan target perangkat keras dan lingkungan operasionalnya.',
            mechanism: 'Desktop OS (Windows, macOS) memprioritaskan kenyamanan GUI dan kompatibilitas aplikasi perkantoran; Mobile OS (Android, iOS) memprioritaskan efisiensi daya baterai, koneksi seluler, dan layar sentuh; Server OS (Ubuntu Server, Red Hat, Windows Server) memprioritaskan uptime 24/7, kestabilan jaringan, dan efisiensi tanpa GUI grafis (CLI); Embedded OS (FreeRTOS) tertanam di mesin EDC, router, atau mobil.',
            example: 'Server aplikasi Tokopedia/Gojek menggunakan Linux di cloud; smartphone kurir menggunakan Android; laptop admin kantor menggunakan Windows 11.',
            takeaway: 'Tidak ada satu OS terbaik untuk semua skenario; pilihan terbaik adalah yang sesuai dengan peruntukan beban kerja.'
          },
          {
            name: 'Dominasi Linux di Infrastruktur Cloud & Server',
            definition: 'Alasan mengapa lebih dari 90% server cloud dunia, superkomputer, dan platform digital modern berjalan di atas sistem operasi berbasis kernel Linux.',
            mechanism: 'Linux bersifat Open Source (bebas biaya royalti lisensi per core CPU), sangat stabil (dapat berjalan bertahun-tahun tanpa restart), modular dan ringan (tanpa beban GUI yang memakan RAM), serta memiliki keamanan berbasis permission ketat.',
            example: 'Ketika startup menyewa 100 instance server di AWS atau Google Cloud, menggunakan Linux menghemat miliaran rupiah biaya lisensi tahunan dibandingkan Windows Server.',
            takeaway: 'Memahami dasar-dasar Linux adalah keterampilan wajib bagi praktisi bisnis digital dan arsitek sistem modern.'
          }
        ]
      }
    ],
    flashcards: [
      ['Apa peran utama Kernel dalam sistem operasi?', 'Kernel adalah modul inti sistem operasi yang mengelola sumber daya perangkat keras (CPU, memori, I/O) secara langsung dan menjembatani panggilan sistem (system call) dari aplikasi pengguna.'],
      ['Bagaimana Virtual Memory bekerja saat kapasitas RAM fisik komputer telah penuh?', 'OS menggunakan teknik Paging dengan memindahkan blok data yang sedang tidak aktif di RAM ke partisi ruang penyimpanan sekunder (Swap space di SSD/HDD) agar RAM memiliki ruang untuk proses mendesak.'],
      ['Mengapa sistem operasi server modern di data center umumnya tidak mengaktifkan Graphic User Interface (GUI)?', 'Karena antarmuka grafis (GUI) memakan banyak memori RAM dan daya CPU yang berharga; server beroperasi lebih cepat, stabil, dan aman hanya menggunakan Command Line Interface (CLI).'],
      ['Sebutkan fungsi dari fitur Print Spooler pada sistem operasi!', 'Print Spooler menyimpan dokumen antrean cetak di dalam buffer memori/storage sementara, sehingga aplikasi dan CPU tidak perlu menunggu printer fisik yang lambat selesai mencetak.']
    ],
    quiz: [
      {
        q: 'Fitur sistem operasi yang bertugas memindahkan data sementara dari RAM ke ruang hard drive/SSD saat memori utama penuh disebut...',
        options: [
          'Multithreading',
          'Virtual Memory / Paging',
          'Context Switching',
          'Cache Buffering'
        ],
        answer: 1,
        why: 'Virtual Memory memanfaatkan ruang storage sekunder (paging/swap) untuk memperluas kapasitas RAM yang terbatas secara virtual.'
      },
      {
        q: 'Alasan utama mengapa raksasa platform digital seperti Google, Amazon AWS, dan Gojek memilih Linux sebagai sistem operasi server data center mereka adalah...',
        options: [
          'Linux memiliki game yang lebih lengkap',
          'Kestabilan tinggi (uptime 24/7), efisiensi sumber daya tanpa beban GUI, keamanan ketat, dan hemat biaya lisensi',
          'Hanya Linux yang bisa terhubung ke jaringan internet',
          'Linux tidak memerlukan perangkat keras RAM sama sekali'
        ],
        answer: 1,
        why: 'Linux sangat efisien, stabil bertahun-tahun tanpa reboot, aman, dan open-source bebas royalti lisensi komersial.'
      },
      {
        q: 'Di sebuah kantor cabang, staf kasir dilarang menginstal game atau mengubah setting jaringan komputer kasir. Konsep keamanan sistem operasi yang diterapkan ini disebut...',
        options: [
          'Kernel Crash Prevention',
          'Prinsip Hak Akses Minimal (Principle of Least Privilege / Access Control)',
          'Disk Defragmentation',
          'Device Driver Spoofing'
        ],
        answer: 1,
        why: 'Least Privilege memastikan setiap user account hanya diberikan izin kerja seminimal mungkin yang diperlukan untuk tugasnya guna mencegah malfungsi atau ancaman malware.'
      }
    ]
  },
  {
    id: 'm5',
    no: '05',
    title: 'Jaringan Komputer & Komunikasi Data',
    short: 'Jaringan Komputer',
    accent: 'emerald',
    outcome: 'Memahami prinsip komunikasi data, klasifikasi geografis jaringan, media transmisi kabel vs nirkabel, peran switch/router/gateway, pengalamatan IP, dan model TCP/IP.',
    source: 'Pertemuan 5 · Agus Prayitno, S.T., M.Kom. · Pengantar Teknologi Informasi (3 SKS)',
    summary: [
      'Komunikasi data membutuhkan 5 elemen mutlak: Pengirim (Sender), Media Transmisi, Penerima (Receiver), Pesan (Message), dan Protokol aturan.',
      'Jaringan diklasifikasikan berdasarkan jangkauan: PAN (Personal: Bluetooth), LAN (Local: Kantor/Outlet), MAN (Metropolitan: Kota), dan WAN (Wide: Antar-negara/Internet).',
      'Perbedaan esensial: Switch menghubungkan perangkat di dalam satu jaringan LAN yang sama; Router menghubungkan antar-jaringan yang berbeda (LAN ke Internet).',
      'Protokol TCP/IP menjadi bahasa universal internet: TCP menjamin keandalan pengiriman paket bebas rusak, IP menangani pengalamatan rute global, DNS menerjemahkan nama domain.'
    ],
    sections: [
      {
        title: 'Prinsip Dasar Komunikasi Data & Topologi',
        slides: '4–7',
        intro: 'Komputer yang terisolasi hanya dapat memproses data lokal; jaringan komputer menghubungkan data menjadi nilai bisnis global.',
        concepts: [
          {
            name: 'Lima Elemen Komunikasi Data',
            definition: 'Komponen yang wajib ada agar pertukaran data biner antar-entitas elektronik dapat terjadi dengan sukses.',
            mechanism: '1. Pengirim (Sender): sumber pembuat pesan. 2. Penerima (Receiver): target tujuan pesan. 3. Media Transmisi: jalur fisik kabel/gelombang udara. 4. Pesan (Message): data atau informasi yang dikirim. 5. Protokol (Protocol): kumpulan aturan formal yang disepakati kedua belah pihak.',
            example: 'Ketika mesin EDC kasir mengirim transaksi ke bank: Mesin EDC (Sender), Kabel LAN / Sinyal 4G (Media), Server Bank (Receiver), Detail nominal & kartu (Message), Protokol ISO-8583 / HTTPS (Protocol).',
            takeaway: 'Tanpa protokol yang sama, pengirim dan penerima tidak akan saling mengerti meski media fisiknya terhubung (ibarat dua orang berbicara bahasa berbeda).'
          },
          {
            name: 'Konsep Pemaketan Data (Packet Switching)',
            definition: 'Metode pengiriman data di internet di mana pesan besar dipecah menjadi unit-unit kecil yang disebut paket data.',
            mechanism: 'Setiap paket data disisipi Header (berisi IP Pengirim, IP Tujuan, dan Nomor Urut) dan Payload (potongan isi data). Paket-paket dapat menempuh rute rute kabel yang berbeda-beda melintasi dunia, lalu dirakit kembali sesuai nomor urut di komputer penerima.',
            example: 'Streaming video YouTube atau transfer file laporan dipecah menjadi ribuan paket data berukuran ~1.500 bytes per paket.',
            takeaway: 'Packet switching menjamin efisiensi saluran; jika satu paket hilang di jalan, sistem hanya mengirim ulang paket yang hilang tersebut, bukan seluruh file.'
          }
        ]
      },
      {
        title: 'Klasifikasi Jaringan Berdasarkan Cakupan Geografis',
        slides: '8–11',
        intro: 'Dari koneksi nirkabel earphone di saku hingga jaringan kabel serat optik bawah laut lintas benua.',
        concepts: [
          {
            name: 'PAN, LAN, MAN, dan WAN',
            definition: 'Pengelompokan jaringan komputer berdasarkan luas wilayah jangkauan fisiknya.',
            mechanism: 'PAN (Personal Area Network: jarak < 10m via Bluetooth, menghubungkan smartphone dan smartwatch/printer portabel); LAN (Local Area Network: satu ruangan, gedung kantor, atau outlet toko via Wi-Fi/kabel UTP); MAN (Metropolitan Area Network: cakupan satu kota, menghubungkan kantor cabang bank sekota via kabel fiber optic perkotaan); WAN (Wide Area Network: mencakup negara hingga benua; Internet adalah WAN terbesar).',
            example: 'Outlet kopi memiliki LAN untuk kasir dan Wi-Fi pengunjung; terhubung ke WAN internet via ISP Indihome/Biznet untuk sinkronisasi database cloud pusat.',
            takeaway: 'Skala jaringan menentukan jenis perangkat keras, protokol keamanan, dan biaya infrastruktur yang harus disiapkan.'
          }
        ],
        matrix: [
          ['Jenis Jaringan', 'Jangkauan Geografis', 'Media Utama', 'Kepemilikan & Kecepatan', 'Contoh Kasus Bisnis'],
          ['PAN (Personal)', '1 – 10 meter', 'Bluetooth, Zigbee, USB', 'Pribadi, Kecepatan sedang (1–3 Mbps)', 'Printer struk portabel bluetooth kasir jalanan'],
          ['LAN (Local)', 'Gedung / Kampus / Outlet', 'Kabel UTP (Ethernet), Wi-Fi 6', 'Milik perusahaan sendiri, Sangat cepat (100–1000 Mbps)', 'Jaringan kasir POS, printer dapur, dan CCTV outlet'],
          ['MAN (Metropolitan)', 'Satu kota (10 – 50 km)', 'Kabel Serat Optik (Fiber), Gelombang Mikro', 'Penyedia telekomunikasi kota, Cepat', 'Menghubungkan kantor pusat cabang bank di Jakarta'],
          ['WAN (Wide)', 'Lintas provinsi / negara / global', 'Kabel Laut Serat Optik, Satelit Starlink', 'Konsorsium global (Internet), Kecepatan bervariasi', 'Akses platform marketplace e-commerce antar-pulau']
        ]
      },
      {
        title: 'Media Transmisi & Perangkat Keras Jaringan',
        slides: '12–15',
        intro: 'Memilih antara kabel tembaga, kabel cahaya, atau gelombang radio udara, serta memahami alat perute data.',
        concepts: [
          {
            name: 'Kabel UTP vs Fiber Optic vs Wireless (Wi-Fi/Seluler)',
            definition: 'Karakteristik fisik media pembawa sinyal komunikasi data.',
            mechanism: 'Twisted Pair (UTP Cat6): kabel tembaga murah, mudah dipasang di ruangan, jarak maksimal 100 meter, rentan interferensi elektromagnetik. Fiber Optic: sinyal cahaya dalam serat kaca murni, kecepatan cahaya terabytes, jarak hingga puluhan kilometer, kebal interferensi elektromagnetik. Wireless (Wi-Fi/5G): gelombang radio tanpa kabel, fleksibel untuk perangkat mobile, namun sinyalnya dapat terhalang dinding beton.',
            example: 'Komputer kasir dan CCTV wajib menggunakan kabel UTP LAN agar koneksinya stabil anti-putus; sedangkan smartphone pelanggan menggunakan Wi-Fi.',
            takeaway: 'Untuk perangkat stasioner yang membutuhkan reliabilitas transaksi tinggi, koneksi kabel selalu lebih unggul daripada nirkabel.'
          },
          {
            name: 'Switch vs Router vs Gateway',
            definition: 'Tiga perangkat keras vital yang mengatur jalannya paket data di jaringan.',
            mechanism: 'Switch: bekerja di Layer 2 (Data Link), membaca Alamat MAC fisik untuk mendistribusikan data ke port perangkat di dalam satu jaringan LAN yang sama. Router: bekerja di Layer 3 (Network), membaca Alamat IP untuk mengarahkan paket data keluar jaringan lokal menuju jaringan lain (Internet). Gateway: perantara penerjemah protokol antar-dua jaringan yang memiliki arsitektur berbeda.',
            example: 'Tablet kasir terhubung ke Switch toko; jika ingin mengirim laporan ke Cloud di internet, Switch meneruskannya ke Router; Router meneruskannya ke ISP.',
            takeaway: 'Switch tidak bisa menggantikan fungsi Router jika perangkat Anda ingin terhubung ke Internet.'
          }
        ]
      },
      {
        title: 'Pengalamatan IP, DNS & Model Protokol TCP/IP',
        slides: '16–18',
        intro: 'Bagaimana miliaran komputer di seluruh dunia dapat saling menemukan dan bertukar data tanpa salah alamat.',
        concepts: [
          {
            name: 'Alamat IP (IPv4 vs IPv6) & Alamat MAC',
            definition: 'Identitas pengalamatan logis dan fisik perangkat dalam jaringan komputer.',
            mechanism: 'Alamat MAC (Media Access Control) adalah alamat fisik 48-bit unik permanen yang ditanam di kartu jaringan (NIC) dari pabrik. Alamat IP (Internet Protocol) adalah alamat logis yang diberikan jaringan; IPv4 berformat 32-bit (contoh: 192.168.1.1, kuota ~4,3 miliar alamat hampir habis); IPv6 berformat 128-bit heksadesimal dengan kapasitas triliunan alamat baru.',
            example: 'Di outlet: Router memberikan IP lokal privat (192.168.1.10) ke tablet kasir secara dinamis melalui DHCP.',
            takeaway: 'IP Privat digunakan di dalam jaringan lokal kantor; IP Publik digunakan untuk dikenali di internet global.'
          },
          {
            name: 'Model TCP/IP, Protokol DNS & HTTP/HTTPS',
            definition: 'Arsitektur protokol komunikasi berlapis yang menjadi tulang punggung internet.',
            mechanism: 'DNS (Domain Name System) bertindak sebagai "buku telepon internet", menerjemahkan nama domain yang diketik manusia (misal: bankmandiri.co.id) menjadi alamat IP server (misal: 103.247.12.5). TCP (Transmission Control Protocol) memecah data, memberi nomor urut, dan memeriksa apakah ada paket hilang. HTTPS (Port 443) mengenkripsi data web dengan sertifikat SSL/TLS agar aman dari penyadapan password.',
            example: 'Saat checkout di toko online, simbol gembok HTTPS menjamin nomor kartu kredit Anda dienkripsi sehingga tidak bisa dicuri hacker di jaringan Wi-Fi publik.',
            takeaway: 'Jangan pernah memasukkan data rahasia perbankan atau password pada website yang masih menggunakan HTTP tanpa enkripsi (port 80).'
          }
        ]
      }
    ],
    flashcards: [
      ['Apa perbedaan fungsi utama antara Switch dan Router?', 'Switch menghubungkan berbagai perangkat di dalam satu jaringan lokal (LAN) yang sama berbasis alamat fisik MAC, sedangkan Router menghubungkan antar-jaringan yang berbeda (LAN ke Internet) berbasis alamat logis IP.'],
      ['Mengapa protokol HTTPS sangat penting bagi website bisnis e-commerce dibandingkan HTTP biasa?', 'Karena HTTPS menggunakan enkripsi SSL/TLS (Port 443) untuk melindungi kerahasiaan data transaksi, password, dan informasi pembayaran pelanggan dari aksi penyadapan (man-in-the-middle attack).'],
      ['Apa peran dari sistem Domain Name System (DNS) di internet?', 'DNS berfungsi sebagai "buku telepon internet" yang menerjemahkan nama domain alfabetis yang mudah diingat manusia (seperti google.com) menjadi alamat IP numerik server fisik (seperti 142.250.190.46).'],
      ['Sebutkan keuntungan utama kabel serat optik (Fiber Optic) dibanding kabel tembaga (UTP)!', 'Fiber optic mentransmisikan sinyal cahaya murni sehingga memiliki kecepatan bandwidth sangat tinggi, jangkauan jarak jauh tanpa penurunan kualitas sinyal, dan 100% kebal terhadap gangguan interferensi elektromagnetik/petir.']
    ],
    quiz: [
      {
        q: 'Perangkat jaringan yang bertugas menentukan rute terbaik (routing) dan meneruskan paket data keluar dari jaringan LAN kantor menuju jaringan internet luar adalah...',
        options: [
          'Hub',
          'Network Switch',
          'Router',
          'Repeater'
        ],
        answer: 2,
        why: 'Router bekerja pada Layer 3 (Network Layer) untuk menghubungkan jaringan yang berbeda dan merutekan paket data berdasarkan alamat IP tujuan.'
      },
      {
        q: 'Kategori jaringan yang mencakup area terbatas seperti satu ruangan kafe, laboratorium komputer kampus, atau satu gedung perkantoran disebut...',
        options: [
          'WAN (Wide Area Network)',
          'LAN (Local Area Network)',
          'MAN (Metropolitan Area Network)',
          'SAN (Storage Area Network)'
        ],
        answer: 1,
        why: 'LAN (Local Area Network) dirancang untuk menghubungkan komputer dan perangkat dalam jarak geografis dekat/terbatas seperti satu ruangan atau gedung.'
      },
      {
        q: 'Ketika seorang kasir mengetik alamat website "portal.kafe.com" di browser, sistem jaringan yang menerjemahkan nama tersebut menjadi alamat IP "103.55.21.8" adalah...',
        options: [
          'DHCP Server',
          'Domain Name System (DNS)',
          'Proxy Server',
          'File Transfer Protocol (FTP)'
        ],
        answer: 1,
        why: 'DNS adalah layanan direktori nama domain yang memetakan nama host yang ramah manusia ke alamat IP mesin tujuan.'
      }
    ]
  },
  {
    id: 'm6',
    no: '06',
    title: 'Sistem Informasi, Basis Data & Pengelolaan Informasi',
    short: 'Sistem Informasi & Basis Data',
    accent: 'indigo',
    outcome: 'Menghubungkan 5 komponen SI, memahami transisi Spreadsheet ke DBMS, model data relasional (Primary & Foreign Key), serta siklus data-to-decision.',
    source: 'Pertemuan 6 · Agus Prayitno, S.T., M.Kom. · Pengantar Teknologi Informasi (3 SKS)',
    summary: [
      'Sistem Informasi (SI) mengombinasikan 5 elemen: Hardware, Software, Data, People (Brainware), dan Process (SOP Prosedur Bisnis).',
      'Spreadsheet hanya cocok untuk analisis individu skala kecil; bisnis bertumbuh wajib memakai DBMS untuk multi-user concurrency, keamanan, dan integritas data ACID.',
      'Model Relasional mengorganisasikan data ke dalam tabel terstruktur yang dihubungkan melalui Primary Key (kunci unik tabel induk) dan Foreign Key (penghubung tabel anak).',
      'Siklus nilai data mengalir dari Transaksi Harian (OLTP) $\\rightarrow$ Gudang Data (Data Warehouse) $\\rightarrow$ Analisis Bisnis (OLAP/BI) $\\rightarrow$ Keputusan Manajerial.'
    ],
    sections: [
      {
        title: 'Hakikat Sistem Informasi & 5 Komponen',
        slides: '4–7',
        intro: 'Sistem Informasi bukan sekadar program komputer; SI adalah perpaduan harmonis antara manusia, teknologi, dan prosedur kerja.',
        concepts: [
          {
            name: 'Definisi Sistem Informasi (Information System)',
            definition: 'Kumpulan komponen yang saling terkait yang mengumpulkan (input), memproses, menyimpan, dan mendistribusikan informasi untuk mendukung pengambilan keputusan dan kendali dalam suatu organisasi.',
            mechanism: 'Komponen SI mencakup: Hardware (alat fisik), Software (kode instruksi), Data (rekaman transaksi), People (pengguna & pengelola), dan Process/Procedures (aturan operasional / SOP bisnis).',
            example: 'Sistem Informasi Minimarket tidak hanya aplikasi kasirnya, tetapi juga mencakup SOP kapan kasir harus menyetor uang tunai ke brankas dan siapa yang berhak mengubah harga produk.',
            takeaway: 'Jika aplikasi canggih tetapi SOP proses tidak ditaati karyawan, Sistem Informasi tersebut akan gagal memberikan hasil bisnis.'
          }
        ]
      },
      {
        title: 'Spreadsheet vs Database Management System (DBMS)',
        slides: '8–11',
        intro: 'Banyak bisnis memulai pencatatan dengan Excel, namun mengalami bencana kekacauan data saat transaksi mulai membesar.',
        concepts: [
          {
            name: 'Keterbatasan Spreadsheet untuk Operasional Transaksional',
            definition: 'Kelemahan aplikasi lembar kerja (seperti Excel/Google Sheets) ketika dipaksakan menjadi basis data utama transaksi bisnis.',
            mechanism: 'Spreadsheet tidak mendukung akses tulis bersamaan secara masif (concurrency lock issue), rentan terhadap kesalahan manusia (*human error* terhapus rumus/sel), tidak memiliki pembatasan hak akses berbasis baris/kolom, dan tidak dapat memaksakan aturan integritas relasional.',
            example: 'Ketika dua kasir mengedit file Excel stok yang sama secara bersamaan, perubahan yang disimpan kasir pertama sering tertimpa dan hilang tanpa jejak.',
            takeaway: 'Spreadsheet dirancang untuk kalkulasi dan analisis personal, bukan untuk mesin pencatat transaksi multi-pengguna (*transactional engine*).'
          },
          {
            name: 'DBMS (Database Management System) & Prinsip ACID',
            definition: 'Sistem perangkat lunak khusus yang dirancang untuk mendefinisikan, membuat, memelihara, dan mengontrol akses ke basis data secara aman dan andal.',
            mechanism: 'DBMS (seperti PostgreSQL, MySQL, Oracle) menjamin sifat ACID: 1. Atomicity (transaksi selesai seluruhnya atau batal seluruhnya jika gagal di tengah jalan). 2. Consistency (data selalu mematuhi aturan validasi). 3. Isolation (transaksi yang berjalan simultan tidak saling mengganggu). 4. Durability (data yang tersimpan permanen tidak akan hilang meski server mati listrik).',
            example: 'Pada transfer bank Rp500.000: Saldo rekening A berkurang Rp500.000 dan saldo rekening B bertambah Rp500.000. Jika jaringan putus sebelum saldo B bertambah, DBMS otomatis membatalkan (*rollback*) pemotongan saldo A.',
            takeaway: 'Sifat ACID pada DBMS adalah garansi mutlak agar pembukuan keuangan dan transaksi bisnis digital tidak pernah mengalami selisih sepeser pun.'
          }
        ],
        matrix: [
          ['Karakteristik', 'Spreadsheet (Excel / Google Sheets)', 'DBMS Relasional (PostgreSQL / MySQL)'],
          ['Tujuan Utama', 'Analisis data, simulasi keuangan, visualisasi cepat', 'Pencatatan transaksi terpusat, konsistensi data tinggi'],
          ['Akses Pengguna', 'Satu orang atau kolaborasi tim kecil terbatas', 'Ribuan pengguna/aplikasi bersamaan (Concurrent Multi-User)'],
          ['Integritas Data', 'Rendah (mudah salah ketik, tidak ada foreign key kaku)', 'Sangat tinggi (aturan tipe data, primary key, foreign key terisolasi)'],
          ['Kapasitas Skalabilitas', 'Maksimal ~1 juta baris, melambat di atas 100 ribu', 'Miliaran baris transaksi terindeks cepat (Terabytes/Petabytes)'],
          ['Keamanan & Akses', 'Proteksi password file sederhana (semua terbuka)', 'Hak akses granular (per tabel, per kolom, per role pengguna)']
        ]
      },
      {
        title: 'Model Relasional: Primary Key & Foreign Key',
        slides: '12–15',
        intro: 'Bagaimana tabel-tabel data dihubungkan untuk menghindari duplikasi data yang membengkak.',
        concepts: [
          {
            name: 'Tabel, Record, Field, dan Normalisasi Data',
            definition: 'Struktur dasar model data relasional (RDBMS) yang dirancang oleh Edgar F. Codd.',
            mechanism: 'Tabel (Entity) terdiri dari kolom/Field (Atribut: tipe data tertentu) dan baris/Record (Tuple: satu entri data nyata). Normalisasi adalah teknik memecah data ke dalam tabel-tabel terpisah untuk menghilangkan anomali redundansi.',
            example: 'Alih-alih mengetik nama dan alamat pembeli berulang-ulang di setiap baris pesanan, data pembeli disimpan di tabel `Pelanggan`, dan tabel `Pesanan` hanya menyimpan ID pembeli.',
            takeaway: 'Normalisasi mencegah anomali pembaruan (misal: pelanggan ganti alamat, cukup update di 1 baris saja).'
          },
          {
            name: 'Primary Key (PK) & Foreign Key (FK)',
            definition: 'Fondasi utama yang menciptakan relasi logis antar-tabel dalam database relasional.',
            mechanism: 'Primary Key (PK) adalah kolom unik yang tidak boleh bernilai NULL, menjadi pengenal tunggal bagi setiap baris rekaman. Foreign Key (FK) adalah kolom pada tabel kedua yang nilainya merujuk ke Primary Key tabel pertama untuk menegakkan Integritas Referensial (*Referential Integrity*).',
            example: 'Tabel `Pelanggan` memiliki PK `id_pelanggan`. Tabel `Pesanan` memiliki FK `id_pelanggan`. DBMS akan menolak jika ada kasir mencoba membuat pesanan untuk `id_pelanggan` yang tidak ada di tabel `Pelanggan`.',
            takeaway: 'Integritas referensial Foreign Key mencegah terjadinya "data yatim piatu" (*orphan record*) dalam sistem bisnis.'
          }
        ]
      },
      {
        title: 'Siklus Pengolahan Data: Dari Transaksi ke Keputusan Bisnis',
        slides: '16–18',
        intro: 'Menelusuri bagaimana klik pelanggan di smartphone bermuara menjadi keputusan ekspansi bisnis di ruang rapat direksi.',
        concepts: [
          {
            name: 'Siklus Nilai: OLTP vs OLAP (Business Intelligence)',
            definition: 'Pemisahan antara sistem pemrosesan transaksi harian dan sistem analitik pendukung keputusan strategis.',
            mechanism: 'OLTP (Online Transaction Processing): database yang dioptimasi untuk kecepatan baca/tulis transaksi cepat kasir (Insert/Update harian). Data dari OLTP diekstraksi secara berkala (ETL) ke Data Warehouse. OLAP (Online Analytical Processing) / BI: database yang dioptimasi untuk query agregasi kompleks jangka panjang (melihat tren tahunan, perbandingan antar-wilayah).',
            example: 'Kasir menginput order kopi di sistem OLTP (respons < 0.1 detik); manajer menggunakan dashboard Power BI (OLAP) untuk melihat cabang mana yang paling menguntungkan tahun ini.',
            takeaway: 'Memisahkan OLTP dan OLAP mencegah aktivitas pembuatan laporan laporan analitik berat memperlambat antrean kasir toko.'
          }
        ]
      }
    ],
    flashcards: [
      ['Apa perbedaan mendasar antara Primary Key dan Foreign Key?', 'Primary Key adalah penanda unik mutlak bagi setiap baris data di dalam satu tabel (tidak boleh ganda & tidak boleh kosong), sedangkan Foreign Key adalah kolom di tabel lain yang merujuk pada Primary Key tersebut untuk membangun relasi antar-tabel.'],
      ['Apa yang dimaksud dengan sifat "Atomicity" pada prinsip ACID dalam DBMS?', 'Atomicity menjamin bahwa sebuah rangkaian transaksi harus selesai secara utuh 100%; jika terjadi gangguan atau galat di tengah jalan, seluruh perubahan transaksi akan dibatalkan (*rollback*) kembali ke kondisi awal.'],
      ['Mengapa bisnis digital yang berkembang tidak disarankan menggunakan Excel sebagai basis data transaksi utama?', 'Karena Excel tidak mendukung akses tulis simultan oleh ratusan user (concurrency limit), rawan data tertimpa atau terhapus rumus manusia, tidak memiliki integritas referensial otomatis, dan melambat drastis saat baris data membengkak.'],
      ['Apa perbedaan fungsi antara sistem OLTP dan OLAP dalam perusahaan?', 'OLTP (Online Transaction Processing) dirancang untuk memproses transaksi operasional harian secara cepat (seperti input kasir), sedangkan OLAP (Online Analytical Processing) dirancang untuk menganalisis data historis skala besar guna mendukung keputusan manajerial.']
    ],
    quiz: [
      {
        q: 'Dalam database toko online, tabel "Pelanggan" memiliki kolom `id_pelanggan` sebagai Primary Key. Pada tabel "Pesanan", kolom `id_pelanggan` yang merujuk ke tabel Pelanggan bertindak sebagai...',
        options: [
          'Secondary Index',
          'Foreign Key',
          'Candidate Key',
          'Composite Key'
        ],
        answer: 1,
        why: 'Foreign Key adalah kolom yang merujuk pada Primary Key tabel lain untuk menjaga integritas relasi antar-tabel data.'
      },
      {
        q: 'Prinsip pada DBMS yang memastikan bahwa ketika uang didebet dari rekening pengirim namun transfer gagal sebelum masuk ke rekening penerima, saldo pengirim dikembalikan secara utuh seperti semula adalah...',
        options: [
          'Atomicity',
          'Consistency',
          'Isolation',
          'Durability'
        ],
        answer: 0,
        why: 'Atomicity (konsep "all or nothing"): seluruh langkah transaksi harus berhasil dieksekusi bersama, atau dibatalkan sama sekali jika ada kegagalan.'
      },
      {
        q: 'Sistem Informasi terdiri dari 5 komponen yang saling terkait. Jika sebuah perusahaan memiliki server hebat, software mutakhir, data rapi, dan karyawan pintar, namun tidak memiliki SOP alur verifikasi pesanan yang jelas sehingga terjadi salah kirim barang, komponen yang bermasalah adalah...',
        options: [
          'Hardware',
          'Process / Prosedur',
          'Data',
          'Brainware'
        ],
        answer: 1,
        why: 'Process / Prosedur mencakup kebijakan, tata kerja, dan SOP aturan operasional yang mengatur bagaimana manusia dan teknologi berinteraksi dalam sistem.'
      }
    ]
  },
  {
    id: 'm7',
    no: '07',
    title: 'Aplikasi Perkantoran: Dokumen, Data & Presentasi',
    short: 'Aplikasi Perkantoran',
    accent: 'terracotta',
    outcome: 'Menguasai produktivitas aplikasi perkantoran, analisis spreadsheet finansial/operasional (Formula, Pivot Table, Visualisasi), serta alur integrasi pelaporan bisnis (Mini Business Report).',
    source: 'Pertemuan 7 · Agus Prayitno, S.T., M.Kom. · Pengantar Teknologi Informasi (3 SKS)',
    summary: [
      'Aplikasi perkantoran (Word Processor, Spreadsheet, Presentation) adalah perangkat kerja fundamental untuk menyusun komunikasi bisnis profesional.',
      'Spreadsheet berfungsi sebagai mesin kalkulasi dan pemodelan bisnis: formula matematika, logika kondisional (IF), pencarian data (VLOOKUP/XLOOKUP), dan ringkasan Pivot Table.',
      'Desain presentasi eksekutif harus mengedepankan kejelasan visual, hierarki informasi, dan storytelling data, bukan sekadar menumpuk paragraf teks di slide.',
      'Alur kerja terintegrasi: Analisis data di Excel $\\rightarrow$ Penulisan laporan naratif resmi di Word $\\rightarrow$ Ekstraksi poin eksekutif ke PowerPoint untuk pengambilan keputusan manajerial.'
    ],
    sections: [
      {
        title: 'Produktivitas & Kolaborasi Aplikasi Perkantoran Modern',
        slides: '4–7',
        intro: 'Pergeseran dari aplikasi desktop terisolasi menuju ekosistem kolaborasi dokumen real-time berbasis cloud.',
        concepts: [
          {
            name: 'Trilogi Aplikasi Perkantoran Inti',
            definition: 'Tiga kategori perangkat lunak produktivitas yang menjadi standar komunikasi operasional di seluruh dunia kerja bisnis.',
            mechanism: 'Pengolah Kata / Word Processor (Microsoft Word, Google Docs) untuk menyusun dokumen naratif resmi, proposal, dan SOP; Pengolah Angka / Spreadsheet (Microsoft Excel, Google Sheets) untuk kalkulasi, budgeting, dan pemodelan data; Perangkat Presentasi (PowerPoint, Google Slides) untuk komunikasi visual ringkas di hadapan pemangku kepentingan.',
            example: 'Penyusunan rencana bisnis: Analisis proyeksi laba-rugi dibuat di Excel, proposal investor ditulis lengkap di Word, dan pitch deck dipresentasikan lewat PowerPoint.',
            takeaway: 'Kecakapan menguasai ketiga aplikasi ini adalah keterampilan paling dasar yang diharapkan dari lulusan Sarjana Bisnis Digital.'
          },
          {
            name: 'Kolaborasi Dokumen Real-Time di Era Cloud',
            definition: 'Kemampuan beberapa orang mengedit, mengomentari, dan merevisi dokumen yang sama secara bersamaan melalui web.',
            mechanism: 'Penyimpanan terpusat di cloud (OneDrive, Google Drive), fitur pelacakan riwayat versi (Version History), dan kontrol izin akses (Viewer, Commenter, Editor).',
            example: 'Tim mahasiswa mengerjakan laporan tugas kelompok PTI secara bersamaan di Google Docs tanpa perlu repot mengirim file bolak-balik via WhatsApp dengan nama "Laporan_Final_Revisi_Fix.docx".',
            takeaway: 'Menghilangkan kebingungan versi dokumen (*version collision*) dan mempercepat penyelesaian proyek tim hingga 3 kali lipat.'
          }
        ]
      },
      {
        title: 'Analisis Spreadsheet: Formula, Logika, & Pivot Table',
        slides: '8–12',
        intro: 'Mengubah lembaran ribuan baris transaksi kasir menjadi grafik tren omzet yang bermakna.',
        concepts: [
          {
            name: 'Formula Esensial & Fungsi Logika Bisnis',
            definition: 'Perhitungan matematis dan pengambilan keputusan bersyarat otomatis pada sel-sel spreadsheet.',
            mechanism: 'Fungsi Agregasi: `=SUM()` (menghitung total), `=AVERAGE()` (rata-rata nilai belanja per pelanggan), `=COUNTIF()` (menghitung jumlah transaksi tertentu). Fungsi Logika: `=IF(kondisi, jika_benar, jika_salah)` (contoh pemberian diskon jika belanja > Rp100.000). Fungsi Lookup: `=VLOOKUP()` atau `=XLOOKUP()` (mencari harga barang otomatis berdasarkan kode barcode).',
            example: 'Formula `=IF(C2>100000, C2*0.1, 0)` secara otomatis memberikan diskon 10% jika nilai belanja di sel C2 melebihi Rp100.000.',
            takeaway: 'Otomasi formula mencegah salah hitung manual dan menghemat ratusan jam kerja pembukuan setiap bulan.'
          },
          {
            name: 'Pivot Table: Agregasi Dinamis Ribuan Data',
            definition: 'Fitur spreadsheet canggih yang mampu merangkum, mengelompokkan, dan memutar dimensi data besar secara interaktif dalam hitungan detik.',
            mechanism: 'Pengguna menyeret kolom ke empat area: Rows (baris pengelompokan), Columns (kolom matriks), Values (angka yang dijumlahkan/dihitung rata-rata), dan Filters (penyaring kondisi).',
            example: 'Dari 15.000 baris transaksi setahun, dalam 3 klik Pivot Table dapat menampilkan total omzet per kategori menu kopi untuk masing-masing cabang outlet.',
            takeaway: 'Pivot Table adalah alat Business Intelligence paling cepat dan praktis untuk menganalisis performa bisnis tanpa perlu menguasai bahasa pemrograman SQL.'
          }
        ]
      },
      {
        title: 'Desain Komunikasi Visual & Presentasi Eksekutif',
        slides: '13–15',
        intro: 'Presentasi bisnis yang buruk adalah presentasi yang membacakan paragraf teks panjang di layar proyektor.',
        concepts: [
          {
            name: 'Prinsip Presentasi Bisnis Efektif (Storytelling Data)',
            definition: 'Metode menyampaikan pesan gagasan bisnis dan temuan analitik secara visual, ringkas, dan memikat audiens pengambil keputusan.',
            mechanism: 'Prinsip One Slide, One Key Message; rasio kontras warna tinggi untuk keterbacaan; visualisasi angka menggunakan grafik yang tepat (Grafik Garis untuk tren waktu, Grafik Batang untuk perbandingan kategori, Grafik Donat untuk proporsi); menghindari wall of text.',
            example: 'Alih-alih menulis paragraf: "Omzet bulan Mei mengalami kenaikan sebesar 25 persen dibandingkan bulan April dikarenakan...", tampilkan grafik batang vertikal dengan tanda panah hijau mencolok bertuliskan "+25% MoM".',
            takeaway: 'Slide presentasi adalah alat bantu visual untuk memperkuat narasi pembicara, bukan contekan teks untuk dibacakan.'
          }
        ]
      },
      {
        title: 'Alur Integrasi Lintas Aplikasi (Mini Business Report)',
        slides: '16–18',
        intro: 'Bagaimana menghubungkan data mentah spreadsheet ke naskah laporan Word dan presentasi PowerPoint secara dinamis.',
        concepts: [
          {
            name: 'Pipeline Integrasi Pelaporan Bisnis (Excel $\\rightarrow$ Word $\\rightarrow$ PPT)',
            definition: 'Alur kerja profesional yang menghubungkan ketiga aplikasi perkantoran dalam penyusunan laporan bisnis komprehensif.',
            mechanism: '1. Tahap Data & Analitik (Excel): Olah data transaksi, hitung formula, buat Pivot Table dan grafik visual. 2. Tahap Laporan Lengkap (Word): Tautkan grafik Excel menggunakan fitur "Paste Special - Paste Link" ke dokumen Word, tambahkan narasi metodologi dan analisis mendalam. 3. Tahap Eksekutif (PowerPoint): Salin poin-poin kesimpulan strategis dan grafik utama ke slide presentasi.',
            example: 'Ketika data penjualan akhir bulan dimasukkan ke Excel, grafik di dokumen Word dan slide PowerPoint otomatis ikut terbarui tanpa perlu diedit ulang secara manual.',
            takeaway: 'Dynamic linking menghemat waktu pembuatan laporan rutin bulanan dan menjamin konsistensi angka di semua dokumen organisasi.'
          }
        ]
      }
    ],
    flashcards: [
      ['Apa kegunaan utama dari fitur Pivot Table pada software spreadsheet seperti Excel?', 'Untuk meringkas, mengelompokkan, dan menganalisis dataset transaksi besar secara cepat dan fleksibel tanpa perlu menulis formula rumit atau mengubah data mentah aslinya.'],
      ['Apa perbedaan fungsi antara rumus SUM, AVERAGE, dan COUNTIF pada Excel?', 'SUM menjumlahkan total nilai angka pada range sel; AVERAGE menghitung nilai rata-rata; COUNTIF menghitung banyaknya sel yang memenuhi kriteria kondisi tertentu (misal menghitung transaksi dengan nominal di atas Rp100.000).'],
      ['Bagaimana konsep "Paste Link" (Dynamic Linking) menghubungkan data antara Excel dan Word/PowerPoint?', 'Dengan Paste Link, objek grafik atau tabel yang ditempelkan di Word/PPT tetap terhubung secara dinamis ke file sumber Excel; jika data di Excel diperbarui, tampilan di Word/PPT akan otomatis ikut terbarui.'],
      ['Mengapa presentasi bisnis eksekutif harus menghindari "Wall of Text" (paragraf panjang di slide)?', 'Karena audiens akan sibuk membaca teks di slide daripada mendengarkan penjelasan presenter; presentasi efektif harus berfokus pada pesan utama visual, data grafik, dan poin ringkas.']
    ],
    quiz: [
      {
        q: 'Seorang manajer operasional ingin mengetahui total omzet penjualan untuk kategori "Makanan Ringan" saja dari daftar 2.000 transaksi. Rumus spreadsheet yang paling tepat digunakan adalah...',
        options: [
          '=COUNT(A2:A2000)',
          '=SUMIF(B2:B2000, "Makanan Ringan", C2:C2000)',
          '=AVERAGE(C2:C2000)',
          '=VLOOKUP("Makanan Ringan", B2:C2000, 2, FALSE)'
        ],
        answer: 1,
        why: 'Fungsi SUMIF menjumlahkan nilai pada rentang sel tertentu (C2:C2000) hanya jika sel pada kolom kategori (B2:B2000) memenuhi kriteria "Makanan Ringan".'
      },
      {
        q: 'Fitur pada spreadsheet yang memungkinkan pengguna memutar baris dan kolom untuk melihat ringkasan omzet per cabang dan per bulan dari ribuan baris data mentah dalam hitungan detik adalah...',
        options: [
          'Goal Seek',
          'Pivot Table',
          'Data Validation',
          'Conditional Formatting'
        ],
        answer: 1,
        why: 'Pivot Table adalah fitur agregasi dinamis multi-dimensi untuk merangkum dan mengeksplorasi data transaksi besar secara instan.'
      },
      {
        q: 'Alur kerja pembuatan "Mini Business Report" yang ideal dan terintegrasi secara profesional adalah...',
        options: [
          'Menulis slide PPT dahulu → membuat narasi di Word → menghitung angka sembarang di Excel',
          'Mengolah data & grafik di Excel → menautkannya ke dokumen laporan naratif di Word → mengekstrak ringkasan eksekutif ke PowerPoint',
          'Menyalin grafik dari internet → menempelkannya langsung ke Word tanpa data mentah',
          'Membuat seluruh laporan tebal 50 halaman hanya menggunakan aplikasi PowerPoint'
        ],
        answer: 1,
        why: 'Alur analitis berawal dari pengolahan data mentah (Excel), dituangkan ke dalam analisis dokumen komprehensif (Word), lalu diringkas menjadi pesan visual pengambil keputusan (PowerPoint).'
      }
    ]
  }
];
