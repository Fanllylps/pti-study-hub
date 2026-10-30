export const utsGuide = [
  {
    number: 1, meeting: 1,
    question: 'Jelaskan perbedaan mendasar antara Data, Informasi, dan Knowledge dalam konteks Teknologi Informasi bisnis.',
    answer: 'Data adalah fakta mentah, angka, atau simbol hasil observasi transaksi yang belum memiliki makna kontekstual (misalnya catatan angka "250" atau timestamp transaksi). Informasi adalah data yang telah diproses, dikelompokkan, dan diberi konteks sehingga memiliki arti bagi pembaca (misalnya "omzet penjualan kopi hari ini 250 cup senilai Rp6.250.000"). Knowledge (pengetahuan) adalah pemahaman mendalam yang diperoleh dari akumulasi informasi yang dikaitkan dengan pengalaman dan tren, sehingga dapat digunakan untuk mengambil keputusan (misalnya "penjualan 250 cup selalu terjadi di jam makan siang, sehingga shift barista perlu ditambah pada pukul 11.30–14.00").',
    points: [
      'Data: fakta mentah tanpa konteks (contoh: log transaksi kasir).',
      'Informasi: data terstruktur yang bermakna (contoh: laporan penjualan harian).',
      'Knowledge: pemahaman pola dan tren untuk landasan tindakan/kebijakan bisnis.',
      'Hierarki DIKW: Data → Informasi → Knowledge → Wisdom.'
    ],
    module: 'm1', section: 0, target: 'm1-concept-0-0', reference: 'Pertemuan 1 · Konsep Dasar TI & Hierarki Data'
  },
  {
    number: 2, meeting: 1,
    question: 'Sebutkan dan jelaskan 5 komponen utama dalam Sistem Teknologi Informasi.',
    answer: 'Lima komponen utama sistem TI adalah: (1) Hardware (perangkat keras fisik seperti komputer, server, smartphone, POS terminal), (2) Software (perangkat lunak/program yang memberi instruksi kepada hardware), (3) Brainware / People (manusia yang mengoperasikan, mengelola, dan memanfaatkan sistem seperti programmer, analis, staf, dan pengguna akhir), (4) Data (fakta dan rekaman transaksi yang disimpan dan diolah menjadi informasi), dan (5) Jaringan / Network (infrastruktur telekomunikasi dan protokol yang menghubungkan perangkat untuk berbagi data dan sumber daya).',
    points: [
      'Hardware: komponen fisik pemroses, input, output, dan penyimpanan.',
      'Software: program sistem operasi dan aplikasi.',
      'Brainware: sumber daya manusia pengelola dan pengguna.',
      'Data: bahan mentah yang mengalir dalam sistem.',
      'Jaringan: media komunikasi dan protokol penghubung (LAN/Internet).'
    ],
    module: 'm1', section: 1, target: 'm1-concept-1-0', reference: 'Pertemuan 1 · Komponen Sistem Teknologi Informasi'
  },
  {
    number: 3, meeting: 2,
    question: 'Jelaskan empat tahap dalam siklus mesin (Machine Cycle) pada Central Processing Unit (CPU).',
    answer: 'Machine Cycle adalah empat langkah fundamental yang dilakukan CPU untuk mengeksekusi setiap instruksi program: (1) Fetch: Control Unit (CU) mengambil kode instruksi biner dari memori utama (RAM) dan menyimpannya di Instruction Register. (2) Decode: Control Unit menerjemahkan instruksi tersebut menjadi sinyal-sinyal kontrol operasional. (3) Execute: Arithmetic Logic Unit (ALU) mengeksekusi instruksi tersebut, baik berupa perhitungan aritmatika maupun logika perbandingan. (4) Store: hasil eksekusi disimpan kembali ke register internal CPU atau ditulis ke memori (RAM) untuk digunakan selanjutnya.',
    points: [
      'Fetch: pengambilan instruksi dari RAM ke CPU.',
      'Decode: penerjemahan instruksi oleh Control Unit (CU).',
      'Execute: komputasi kalkulasi/logika oleh Arithmetic Logic Unit (ALU).',
      'Store: penulisan hasil komputasi kembali ke register atau RAM.'
    ],
    module: 'm2', section: 1, target: 'm2-concept-1-1', reference: 'Pertemuan 2 · Arsitektur CPU & Machine Cycle'
  },
  {
    number: 4, meeting: 2,
    question: 'Bandingkan karakteristik RAM, ROM, dan Solid State Drive (SSD) dari segi fungsi, volatilitas, dan kecepatan.',
    answer: 'RAM (Random Access Memory) adalah memori kerja utama yang bersifat volatil (data hilang saat listrik padam), berkecepatan sangat tinggi, dan berfungsi menyimpan program serta data aktif yang sedang diproses CPU. ROM (Read-Only Memory) bersifat non-volatil (permanen), berisi program BIOS/UEFI firmware untuk proses booting awal komputer, dan kecepatannya menengah. SSD (Solid State Drive) adalah media penyimpanan sekunder non-volatil berbasis chip NAND flash memory yang berfungsi menyimpan sistem operasi, aplikasi, dan file pengguna secara permanen; kecepatannya jauh lebih tinggi daripada hard disk magnetik (HDD) namun lebih lambat daripada RAM.',
    points: [
      'RAM: volatil, kecepatan sangat tinggi, memori kerja CPU saat sistem hidup.',
      'ROM: non-volatil, permanen dari pabrik, menyimpan firmware bootstrap booting.',
      'SSD: non-volatil, penyimpanan sekunder berkapasitas besar, menggunakan flash NAND tanpa komponen bergerak mekanik.'
    ],
    module: 'm2', section: 2, target: 'm2-concept-2-0', reference: 'Pertemuan 2 · Hierarki Memori & Media Penyimpanan'
  },
  {
    number: 5, meeting: 2,
    question: 'Jelaskan tiga jenis Bus Sistem pada arsitektur komputer beserta peran masing-masing.',
    answer: 'Bus sistem adalah jalur komunikasi sirkuit fisik yang menghubungkan CPU dengan memori dan perangkat I/O. Terdiri dari 3 jenis: (1) Data Bus: jalur dua arah (bidirectional) yang membawa transfer bit data aktual antara CPU, RAM, dan perangkat eksternal. (2) Address Bus: jalur satu arah (unidirectional dari CPU) yang membawa alamat memori lokasi data yang ingin dibaca atau ditulis oleh CPU; lebar address bus menentukan kapasitas maksimal RAM yang dapat dialamati. (3) Control Bus: jalur pembawa sinyal kendali dan timing (seperti sinyal Read, Write, Interrupt, Clock) untuk mengoordinasikan seluruh operasi sistem.',
    points: [
      'Data Bus: jalur transmisi data riil (dua arah).',
      'Address Bus: jalur penunjuk lokasi memori/port fisik (satu arah dari CPU).',
      'Control Bus: jalur sinkronisasi sinyal perintah baca/tulis/interupsi.'
    ],
    module: 'm2', section: 3, target: 'm2-concept-3-0', reference: 'Pertemuan 2 · Bus Sistem Komputer'
  },
  {
    number: 6, meeting: 3,
    question: 'Apa perbedaan mendasar antara System Software dan Application Software? Berikan contohnya.',
    answer: 'System Software adalah perangkat lunak tingkat rendah yang mengelola, mengontrol sumber daya perangkat keras, dan menyediakan lingkungan dasar bagi program lain untuk berjalan; contohnya Sistem Operasi (Windows, Linux, macOS), Device Driver, dan utilitas sistem. Sedangkan Application Software adalah perangkat lunak tingkat pengguna yang dirancang khusus untuk membantu manusia menyelesaikan tugas-tugas spesifik seperti produktivitas, transaksi, atau hiburan; contohnya Microsoft Excel, Google Chrome, Adobe Photoshop, dan aplikasi POS kasir.',
    points: [
      'System Software: mengelola hardware dan menjadi fondasi (OS, Device Driver, BIOS).',
      'Application Software: berorientasi pada kebutuhan pengguna spesifik (Office, ERP, Browser).',
      'Hierarki interaksi: Pengguna → Application Software → Operating System → Device Driver → Hardware.'
    ],
    module: 'm3', section: 1, target: 'm3-concept-1-0', reference: 'Pertemuan 3 · Software Sistem vs Aplikasi'
  },
  {
    number: 7, meeting: 3,
    question: 'Jelaskan peran sistem Enterprise Resource Planning (ERP) dan Customer Relationship Management (CRM) dalam bisnis modern.',
    answer: 'ERP (Enterprise Resource Planning) adalah sistem aplikasi terintegrasi yang menyatukan seluruh proses operasional inti bisnis—mulai dari akuntansi, manajemen persediaan (inventory), rantai pasok (supply chain), manufaktur, hingga sumber daya manusia (HRIS)—dalam satu basis data terpusat, sehingga menghilangkan silo data departemen. CRM (Customer Relationship Management) berfokus pada pengelolaan interaksi dengan pelanggan, rekam jejak prospek penjualan, histori pembelian, komplain, dan retensi/loyalitas pelanggan untuk meningkatkan kepuasan dan omzet jangka panjang.',
    points: [
      'ERP: integrasi proses operasional internal (keuangan, stok, rantai pasok, SDM) dalam satu database tunggal.',
      'CRM: pengelolaan hubungan pelanggan, saluran penjualan, dan layanan purnajual untuk retensi pelanggan.',
      'Keduanya saling bertukar data: order di CRM otomatis memicu pemotongan stok di ERP.'
    ],
    module: 'm3', section: 2, target: 'm3-concept-2-0', reference: 'Pertemuan 3 · Aplikasi Enterprise (ERP & CRM)'
  },
  {
    number: 8, meeting: 4,
    question: 'Sebutkan dan jelaskan 5 fungsi vital Sistem Operasi dalam pengelolaan sumber daya komputer.',
    answer: 'Lima fungsi vital sistem operasi adalah: (1) Process Management: mengatur penjadwalan CPU (multitasking), alokasi waktu eksekusi proses, dan pembuatan/terminasi proses. (2) Memory Management: mengalokasikan dan membebaskan ruang memori utama (RAM) untuk aplikasi, serta mengelola virtual memory paging ketika RAM penuh. (3) File System Management: mengorganisasikan penyimpanan file ke dalam direktori/folder, mengatur izin akses (read/write), dan integritas data pada storage. (4) Device Management (I/O): mengelola komunikasi dengan perangkat input/output melalui device driver dan buffer data. (5) Security & Access Control: memverifikasi otentikasi pengguna, hak akses user, dan mencegah program asing merusak memori sistem.',
    points: [
      'Process Management: penjadwalan CPU dan multitasking.',
      'Memory Management: alokasi RAM dan virtual memory paging.',
      'File System: struktur direktori, hierarki file, dan kontrol akses.',
      'Device Management: antarmuka I/O melalui device driver.',
      'Security: otentikasi pengguna dan proteksi isolasi ruang memori.'
    ],
    module: 'm4', section: 1, target: 'm4-concept-1-0', reference: 'Pertemuan 4 · Fungsi-fungsi Utama Sistem Operasi'
  },
  {
    number: 9, meeting: 5,
    question: 'Bandingkan fungsi perangkat Switch dan Router dalam arsitektur jaringan komputer.',
    answer: 'Switch bekerja pada Data Link Layer (Layer 2) menggunakan alamat MAC (Media Access Control) untuk menghubungkan beberapa komputer/node dalam satu jaringan lokal (LAN) yang sama secara efisien tanpa tabrakan paket (collision). Sedangkan Router bekerja pada Network Layer (Layer 3) menggunakan alamat IP (Internet Protocol) untuk menghubungkan dua atau lebih jaringan yang berbeda (misalnya menghubungkan jaringan LAN lokal kantor ke jaringan WAN / Internet) dan menentukan rute tercepat (routing) pengiriman paket data melintasi internet.',
    points: [
      'Switch: menghubungkan perangkat di dalam satu LAN yang sama berbasis alamat fisik MAC.',
      'Router: menghubungkan antarjaringan yang berbeda (LAN ke Internet) berbasis alamat logis IP.',
      'Switch tidak bisa mengarahkan paket ke Internet tanpa bantuan Router / Gateway.'
    ],
    module: 'm5', section: 2, target: 'm5-concept-2-1', reference: 'Pertemuan 5 · Perangkat Keras Jaringan (Switch vs Router)'
  },
  {
    number: 10, meeting: 5,
    question: 'Jelaskan model protokol TCP/IP dan peran dari protokol HTTP, DNS, dan TCP.',
    answer: 'Model protokol TCP/IP adalah standar komunikasi jaringan bertingkat (Application, Transport, Internet, Network Access). Protokol HTTP (Hypertext Transfer Protocol) berada di Application Layer untuk mentransfer halaman web antara browser klien dan web server. Protokol DNS (Domain Name System) berfungsi menerjemahkan nama domain yang mudah dibaca manusia (seperti google.com) menjadi alamat IP numerik server (seperti 142.250.190.46). Protokol TCP (Transmission Control Protocol) di Transport Layer bertugas memecah data menjadi paket-paket bernomor urut, menjamin pengiriman paket secara andal (reliable), bebas galat, dan menyusunnya kembali sesuai urutan di sisi penerima.',
    points: [
      'DNS: buku telepon internet (Domain Name → Alamat IP).',
      'HTTP / HTTPS: protokol transfer dokumen web (port 80 / 443).',
      'TCP: protokol transfer data andal (connection-oriented, handshake 3 arah, retransmisi paket hilang).'
    ],
    module: 'm5', section: 3, target: 'm5-concept-3-0', reference: 'Pertemuan 5 · Protokol TCP/IP, DNS & HTTP'
  },
  {
    number: 11, meeting: 6,
    question: 'Mengapa bisnis digital yang berkembang harus beralih dari Spreadsheet ke Database Management System (DBMS)?',
    answer: 'Spreadsheet (seperti Excel) sangat baik untuk analisis kalkulasi individu skala kecil, namun memiliki kelemahan fatal ketika bisnis bertumbuh: (1) Tidak mendukung multi-user concurrent update (sering konflik atau file terkunci), (2) Keamanan dan pembatasan hak akses berbasis kolom/baris sangat minim, (3) Terjadi redundansi data dan anomali inkonsistensi data, dan (4) Skalabilitas terbatas (Excel dibatasi ~1 juta baris dan melambat drastis). Sebaliknya, DBMS menjamin sifat ACID (Atomicity, Consistency, Isolation, Durability), mendukung ribuan transaksi simultan secara real-time, integritas relasional via Foreign Key, dan enkripsi keamanan tingkat tinggi.',
    points: [
      'Multi-user concurrency: DBMS mendukung ribuan akses bersamaan tanpa tabrakan.',
      'Integritas data: Foreign Key mencegah record yatim dan duplikasi.',
      'Keamanan: hak akses granular per pengguna dan tabel.',
      'Skalabilitas: menangani jutaan transaksi data secara konsisten dan terindeks cepat.'
    ],
    module: 'm6', section: 1, target: 'm6-concept-1-1', reference: 'Pertemuan 6 · Spreadsheet vs DBMS Relasional'
  },
  {
    number: 12, meeting: 6,
    question: 'Jelaskan konsep Primary Key dan Foreign Key dalam model data relasional beserta contohnya.',
    answer: 'Primary Key adalah satu atribut (kolom) unik yang tidak boleh bernilai kosong (NOT NULL) dan berfungsi sebagai pengidentifikasi tunggal bagi setiap baris rekaman (record) dalam satu tabel database; contohnya kolom `id_pelanggan` pada tabel Pelanggan. Foreign Key adalah kolom dalam suatu tabel yang nilainya merujuk (referencing) ke Primary Key pada tabel lain; tujuannya adalah membangun relasi antar-tabel dan menjaga integritas referensial data (referential integrity); contohnya kolom `id_pelanggan` pada tabel Pesanan yang merujuk ke tabel Pelanggan, sehingga pesanan tidak mungkin dibuat untuk pelanggan yang tidak terdaftar.',
    points: [
      'Primary Key: unik, tidak boleh kosong, penanda tunggal baris (contoh: ID Pelanggan).',
      'Foreign Key: kolom penghubung yang merujuk ke Primary Key tabel induk.',
      'Fungsi relasional: menjaga integritas data (mencegah pesanan fiktif tanpa data pembeli).'
    ],
    module: 'm6', section: 2, target: 'm6-concept-2-0', reference: 'Pertemuan 6 · Relasi Tabel: Primary & Foreign Key'
  },
  {
    number: 13, meeting: 7,
    question: 'Jelaskan fungsi Pivot Table pada spreadsheet dan bagaimana integrasi Office mendukung pembuatan Mini Business Report.',
    answer: 'Pivot Table adalah fitur analitik pada spreadsheet yang memungkinkan pengguna meringkas, mengelompokkan, dan menganalisis dataset transaksi besar secara dinamis tanpa mengubah susunan data mentah aslinya (misalnya mengelompokkan 10.000 transaksi ke dalam total penjualan per kategori produk dan per bulan). Integrasi Office terjadi ketika data mentah diolah menggunakan formula & Pivot Table di Excel, hasilnya divisualisasikan dalam grafik, kemudian ditautkan (linked) ke dokumen Word untuk laporan naratif resmi dan ke PowerPoint untuk presentasi ringkas kepada eksekutif/investor; bila data Excel diperbarui, grafik di Word dan PPT ikut terbarui.',
    points: [
      'Pivot Table: agregasi dan pemotongan data dinamis (slicing & dicing) ribuan transaksi dalam hitungan detik.',
      'Integrasi 3 Aplikasi: Excel (pengolahan data) → Word (laporan resmi komprehensif) → PowerPoint (ekstraksi presentasi eksekutif).',
      'Dynamic linking: pembaruan data spreadsheet otomatis merefleksikan chart pada laporan.'
    ],
    module: 'm7', section: 1, target: 'm7-concept-1-1', reference: 'Pertemuan 7 · Analisis Spreadsheet & Integrasi Office'
  },
  {
    number: 14, meeting: 0,
    question: 'Uraikan kerangka 5 langkah (The 5-Step Value Chain) implementasi TI dalam bisnis digital pada tugas kelompok.',
    answer: 'Kerangka 5 langkah implementasi TI adalah alur transformasi komputasi menjadi dampak ekonomi terukur: (1) Data: Apa data mentah yang dikumpulkan dari interaksi pelanggan dan operasi bisnis (misal: GPS driver, keranjang belanja, log transaksi kasir). (2) Processing: Bagaimana data tersebut disimpan dan diolah menggunakan hardware, database, dan algoritma (misal: matching engine, agregasi SQL, machine learning). (3) Information: Apa wawasan terstruktur yang dihasilkan (misal: peta kepadatan permintaan, menu terlaris, status pengiriman). (4) Decision: Keputusan manajerial atau otomatisasi apa yang diambil berdasarkan informasi itu (misal: dynamic pricing, restok bahan, rekrutmen mitra). (5) Business Value: Apa dampak finansial dan operasional terukurnya bagi perusahaan (misal: peningkatan omzet, efisiensi biaya, utilisasi armada naik, customer retention tinggi).',
    points: [
      '1. Data: pengumpulan data operasional & perilaku pengguna.',
      '2. Processing: komputasi hardware, algoritma, dan database.',
      '3. Information: pengubahan data menjadi wawasan terstruktur.',
      '4. Decision: tindakan strategis bisnis berbasis bukti analitik.',
      '5. Business Value: efisiensi, margin keuntungan, dan loyalitas pelanggan.'
    ],
    module: 'tugas', section: 0, target: 'tugas-framework', reference: 'Panduan Tugas Kelompok · 5-Step Value Chain'
  }
];
