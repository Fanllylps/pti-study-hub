export const tugasData = {
  title: 'Implementasi Teknologi Informasi dalam Bisnis Digital',
  subtitle: 'Satu Kerangka, Tiga Business Case, Berdampak pada Nilai Bisnis',
  quote1: 'Bisnis digital bukan tentang seberapa banyak teknologi yang digunakan, tetapi seberapa baik teknologi mengubah data menjadi keputusan dan keputusan menjadi nilai bisnis.',
  quote2: 'Teknologi yang baik bukan teknologi dengan spesifikasi tertinggi, tetapi teknologi yang paling tepat untuk kebutuhan, skala, risiko, dan tujuan bisnis.',
  frameworkSteps: [
    { step: 1, name: 'Data', question: 'Apa yang dikumpulkan?', code: '01/DATA', desc: 'Data mentah transaksi, interaksi pelanggan, inventaris, sensor/GPS, dan aktivitas operasional harian.' },
    { step: 2, name: 'Processing', question: 'Bagaimana data diolah?', code: '02/PROCESSING', desc: 'Pemrosesan komputasi oleh hardware, sistem operasi, database relasional/NoSQL, dan algoritma analitik.' },
    { step: 3, name: 'Information', question: 'Apa yang dihasilkan?', code: '03/INFO', desc: 'Laporan visual, metrik performa, dashboard, tren penjualan, dan pola perilaku yang bermakna bagi manajemen.' },
    { step: 4, name: 'Decision', question: 'Keputusan apa yang diambil?', code: '04/DECISION', desc: 'Tindakan strategis, alokasi sumber daya, promosi harga, otomasi dispatch armada, dan pengadaan persediaan.' },
    { step: 5, name: 'Business Value', question: 'Dampak pada bisnis?', code: '05/VALUE', desc: 'Peningkatan omzet, efisiensi biaya operasional, utilisasi aset maksimal, dan loyalitas pelanggan tinggi.' }
  ],
  principles: [
    { no: '01', title: 'Mulai dari Masalah Bisnis', desc: 'Teknologi dipilih untuk menyelesaikan friksi dan masalah operasional nyata, bukan sekadar mengikuti tren atau gengsi teknologi terkini.' },
    { no: '02', title: 'Pahami Karakteristik Data', desc: 'Setiap bisnis menghasilkan data yang berbeda (transaksional statis vs streaming real-time), sehingga pendekatan arsitektur teknologi juga berbeda.' },
    { no: '03', title: 'Lihat Sistem secara Utuh', desc: 'Hardware, software, data, brainware (manusia), dan SOP proses bisnis harus bekerja selaras dalam satu kesatuan sistem informasi.' },
    { no: '04', title: 'Sesuaikan dengan Skala Bisnis', desc: 'Spesifikasi hardware dan infrastruktur server harus sebanding dengan tahap pertumbuhan bisnis (efisiensi biaya vs kapasitas beban).' },
    { no: '05', title: 'Fokus pada Nilai Bisnis', desc: 'Tujuan akhir TI adalah menghasilkan profitabilitas, kepuasan pengalaman pelanggan, kecepatan layanan, dan keunggulan daya saing.' }
  ],
  evolution: [
    { level: '1', title: 'Efficiency', subtitle: 'Mencatat & Mengendalikan', business: 'Coffee Shop', desc: 'Menggantikan pencatatan kertas kasir, mencegah kebocoran stok, dan mencatat transaksi penjualan secara akurat.' },
    { level: '2', title: 'Integration', subtitle: 'Menghubungkan Ekosistem', business: 'Marketplace', desc: 'Menghubungkan pembeli, ribuan penjual, bank penyedia pembayaran digital, dan armada logistik dalam satu platform.' },
    { level: '3', title: 'Intelligence', subtitle: 'Real-Time Decisions & AI', business: 'Transportasi Digital', desc: 'Mengambil keputusan detik-ke-detik (matching driver-rider, dynamic pricing, routing) menggunakan algoritma otomatis.' }
  ],
  cases: [
    {
      id: 'coffeeshop',
      no: '1',
      name: 'Coffee Shop',
      tagline: 'TI untuk efisiensi operasional dan pengendalian transaksi',
      scaleBadge: 'Skala Kecil (3 Outlet · ±500 trx/hari)',
      summary: 'Fokus pada digitalisasi titik penjualan (Point of Sale), monitoring stok bahan baku secara real-time untuk mencegah kebocoran, serta loyalty program pelanggan untuk mendorong repeat order.',
      metrics: {
        outlets: '3 Outlet fisik',
        volume: '± 500 transaksi per hari',
        payment: 'Cash, QRIS, Kartu Debit/Kredit',
        loyalty: 'Program poin pelanggan berbasis nomor telepon'
      },
      architecture: [
        { from: 'Customer', to: 'Kasir / POS Tablet', action: 'Memesan kopi & membayar via QRIS/Cash' },
        { from: 'POS Tablet', to: 'Printer Struk & Cash Drawer', action: 'Cetak tiket pesanan bar & buka laci kas' },
        { from: 'POS Tablet', to: 'Cloud POS Server (DB)', action: 'Potong otomatis stok sirup/biji kopi & catat jurnal kas' },
        { from: 'Cloud DB', to: 'Dashboard Owner / Manager', action: 'Visualisasi grafik omzet harian & sisa stok bahan' }
      ],
      hardware: [
        { device: 'POS Terminal / Tablet', spec: 'Intel N100 / Core i3, RAM 8GB, SSD 128GB, Touchscreen 10–14 inci', role: 'Perangkat kasir utama pencatat transaksi dan order pesanan meja.' },
        { device: 'Printer Struk Thermal', spec: 'Thermal Paper 80mm, Interface USB/LAN/Bluetooth', role: 'Mencetak struk pembayaran pelanggan dan tiket dapur/barista secara cepat.' },
        { device: 'Cash Drawer (Laci Kasir)', spec: 'RJ11 Trigger Otomatis, 4/5 Slot Uang Kertas', role: 'Penyimpanan uang tunai yang terkunci dan hanya terbuka saat transaksi cash diproses.' },
        { device: 'Barcode / QR Scanner', spec: '1D/2D Imager Scanner, USB Handheld', role: 'Memindai barcode kemasan merchandise/beans dan kode kupon promo.' },
        { device: 'CCTV IP Camera', spec: '1080p / 2K, Night Vision, Cloud/NVR Storage', role: 'Monitoring area kasir, inventaris gudang, dan keamanan outlet secara jarak jauh.' },
        { device: 'Router & Koneksi Internet', spec: 'Wi-Fi 5/6 Dual-band, Fiber 50–100 Mbps + 4G Backup', role: 'Koneksi transaksi POS ke cloud, pembayaran QRIS, serta Wi-Fi untuk pengunjung.' },
        { device: 'UPS (Uninterruptible Power Supply)', spec: '600–1200 VA Line-Interactive', role: 'Mencegah kerusakan database dan menjaga kasir tetap menyala saat listrik PLN padam tiba-tiba.' }
      ],
      software: [
        { type: 'Aplikasi POS Kasir', examples: 'Moka POS, Majoo, Olsera, iReap POS', desc: 'Antarmuka kasir touch-friendly, pencatatan pesanan, split bill, dan diskon.' },
        { type: 'Manajemen Inventaris & Stok', examples: 'Modul Terintegrasi POS / Odoo ERP', desc: 'Resep bahan baku otomatis (contoh: 1 latte memotong 18g espresso beans + 150ml susu).' },
        { type: 'Payment Gateway / QRIS', examples: 'Midtrans, Xendit, BCA Merchant, QRIS MPM/CPM', desc: 'Penyelesaian pembayaran digital non-tunai secara instan dan bebas uang kembalian.' },
        { type: 'CRM & Loyalty Program', examples: 'Member loyalty stamp, Voucher WhatsApp broadcast', desc: 'Merekam riwayat belanja pelanggan untuk pemberian reward promo ulang tahun/poin.' },
        { type: 'Business Intelligence Dashboard', examples: 'Dashboard Web POS / Google Looker Studio', desc: 'Laporan visual omzet harian, jam sibuk, perbandingan antar-cabang, dan menu dead-stock.' }
      ],
      valueChain: {
        data: ['Transaksi penjualan per jam', 'Menu dipesan dan harga', 'Pengurangan stok bahan baku (g/ml)', 'Nomor kontak & profil pelanggan', 'Metode pembayaran (QRIS/Cash/Kartu)', 'Waktu durasi transaksi per meja', 'Kinerja penjualan per kasir/shift'],
        processing: 'Data transaksi dikirim via HTTPS API ke Cloud Server POS; server mengurangi saldo stok bahan di tabel inventory relasional dan menjumlahkan buku kas harian secara otomatis.',
        information: ['Omzet dan laba kotor harian/mingguan', 'Peringkat menu terlaris (Top-Seller) vs Menu lambat laku', 'Pola jam paling ramai (Peak Hours: 12.00–14.00 dan 19.00–21.00)', 'Notifikasi stok bahan baku yang telah menyentuh batas minimum (Reorder Point)', 'Efektivitas promosi diskon terhadap kenaikan basket size'],
        decisions: ['Membuat jadwal pemesanan ulang (PO) biji kopi dan susu ke vendor sebelum habis', 'Menyesuaikan jadwal shift masuk barista agar maksimal pada jam sibuk', 'Membuat paket promo bundling menu kurang laku dengan menu favorit', 'Merencanakan ekspansi pembukaan cabang baru di lokasi dengan profil pelanggan mirip'],
        businessValue: ['Penjualan meningkat 15–25% berkat kecepatan layanan kasir dan retensi member', 'Kebocoran dan pembusukan stok bahan berkurang hingga 80%', 'Biaya operasional kasir lebih efisien dan pembukuan bebas selisih uang tunai', 'Kepuasan pelanggan naik karena antrean kasir cepat dan pembayaran instan']
      }
    },
    {
      id: 'marketplace',
      no: '2',
      name: 'Marketplace E-Commerce',
      tagline: 'TI untuk mengintegrasikan banyak pihak dan mengelola transaksi skala besar',
      scaleBadge: 'Skala Menengah–Besar (10.000 Seller · 1 Juta Customer)',
      summary: 'Mengintegrasikan ekosistem multi-pihak: pembeli, penjual produk, perbankan, dan kurir logistik. Fokus pada throughput transaksi tinggi, pencarian produk cepat, deteksi penipuan, dan algoritma rekomendasi.',
      metrics: {
        sellers: '10.000 Toko / Mitra Penjual aktif',
        customers: '1.000.000 Akun Pembeli terdaftar',
        catalog: 'Ratusan ribu varian SKU barang',
        transactions: 'Puluhan ribu pesanan harian simultan'
      },
      architecture: [
        { from: 'Customer (Web / Mobile App)', to: 'CDN & Cloudflare WAF', action: 'Akses katalog & checkout terenkripsi' },
        { from: 'Cloudflare / Load Balancer', to: 'Cluster App Server (Microservices)', action: 'Distribusi beban traffic (Nginx/HAProxy)' },
        { from: 'App Server', to: 'In-Memory Cache (Redis) & DB (PostgreSQL)', action: 'Cek stok barang real-time & catat order' },
        { from: 'App Server', to: 'Payment Gateway API & Kurir Logistik API', action: 'Verifikasi saldo escrow & generate nomor resi AWB otomatis' },
        { from: 'Seller Dashboard', to: 'Logistics Courier Pick-up', action: 'Penjual cetak resi dan serahkan paket ke kurir' }
      ],
      hardware: [
        { device: 'Application Server Cluster', spec: 'Cloud VMs (AWS EC2 / GCP Compute), 4 vCPU, 8–16GB RAM per instance (Auto-scaling)', role: 'Menjalankan logika bisnis web/API, autentikasi user, katalog, dan keranjang belanja.' },
        { device: 'Database Server (Master-Slave)', spec: 'Dedicated High-Memory Instance, 4–8 vCPU, 16–32GB RAM, Storage NVMe SSD Terkelola', role: 'Penyimpanan data transaksional ACID pesanan, saldo dompet, dan identitas pengguna.' },
        { device: 'In-Memory Caching Server', spec: 'Redis Cluster / Memcached (RAM 16GB)', role: 'Menyimpan sesi login, data produk populer, dan counter stok kilat (Flash Sale).' },
        { device: 'Object Storage (Cloud)', spec: 'AWS S3 / Google Cloud Storage (Scalable Terabytes)', role: 'Penyimpanan jutaan foto produk resolusi tinggi, video ulasan, dan berkas invoice faktur.' },
        { device: 'Load Balancer & CDN Global', spec: 'AWS CloudFront / Cloudflare Edge Network', role: 'Menyajikan gambar dan halaman web statis dari server terdekat ke pengguna, mengurangi latensi.' },
        { device: 'Firewall & WAF (Web App Firewall)', spec: 'DDoS Protection L3–L7, WAF ModSecurity / Cloud Armor', role: 'Mencegah serangan cyber, injeksi SQL, bot scraping harga, dan serangan brute-force.' }
      ],
      software: [
        { type: 'Frontend Web & Mobile App', examples: 'React.js, Next.js, Flutter, React Native, Swift, Kotlin', desc: 'Antarmuka aplikasi yang cepat, responsif di semua tipe smartphone dan browser.' },
        { type: 'Backend Architecture', examples: 'Node.js, Go (Golang), Python FastApi, Spring Boot (Microservices)', desc: 'Layanan API terpisah untuk Auth, Produk, Order, Payment, dan Notifikasi.' },
        { type: 'Database & Search Engine', examples: 'PostgreSQL (Transaksional), Elasticsearch (Pencarian Katalog Cepat), Redis (Cache)', desc: 'Menjamin konsistensi transaksi dan pencarian produk bertoleransi salah ketik.' },
        { type: 'Integrasi Payment Gateway', examples: 'Midtrans, Xendit, DOKU (Virtual Account, E-Wallet, Kartu Kredit)', desc: 'Sistem rekening bersama (escrow) yang menahan dana aman hingga barang tiba.' },
        { type: 'Integrasi API Logistik Kurir', examples: 'J&T, SiCepat, JNE, Ninja Van API Webhook', desc: 'Pengecekan ongkir otomatis, request penjemputan paket, dan pelacakan resi real-time.' },
        { type: 'Machine Learning & AI Engine', examples: 'Python, TensorFlow, Scikit-learn', desc: 'Mesin pemberi rekomendasi produk relevan ("Kamu Mungkin Juga Suka") dan deteksi transaksi palsu.' }
      ],
      valueChain: {
        data: ['Pencarian kata kunci dan klik tayang produk', 'Data seller, stok gudang, dan riwayat pesanan', 'Transaksi checkout, rekening bank, dan status pembayaran', 'Koordinat gudang seller dan alamat pengiriman customer', 'Rating bintang, ulasan teks, foto komplain', 'Perilaku browsing dan riwayat keranjang yang ditinggalkan'],
        processing: 'Event-driven streaming (Kafka/RabbitMQ) mengolah lonjakan pesanan; algoritma Elasticsearch mencocokkan query; sistem transaksi menahan dana escrow hingga validasi kurir.',
        information: ['Tingkat konversi pembeli (Conversion Rate dari klik ke beli)', 'Tren produk yang sedang naik daun di setiap kota', 'Skor reputasi seller berdasarkan kecepatan kirim dan komplain', 'Tingkat kegagalan pembayaran dan tingkat pembatalan pesanan', 'Peta rute logistik tercepat dan biaya per paket'],
        decisions: ['Menampilkan produk dengan rating tinggi di urutan teratas hasil pencarian', 'Menetapkan batasan promo diskon gratis ongkir pada kategori tertentu', 'Memberikan sanksi suspend pada toko seller yang terbukti curang atau fiktif', 'Menyediakan fitur pinjaman modal kerja bagi seller berkinerja tinggi'],
        businessValue: ['Gross Merchandise Value (GMV) tumbuh secara eksponensial tanpa batas fisik toko', 'Ekosistem seller berkembang mandiri menarik jutaan pembeli baru', 'Efisiensi biaya operasional berkat otomasi resi dan pembayaran tanpa campur tangan manusia', 'Customer Retention dan kepercayaan tinggi berkat perlindungan rekening escrow']
      }
    },
    {
      id: 'transport',
      no: '3',
      name: 'Transportasi Digital (Ride-Hailing)',
      tagline: 'TI untuk mengambil keputusan real-time berdasarkan data lokasi dan algoritma',
      scaleBadge: 'Skala Sangat Besar (100.000 Driver · 1 Juta Penumpang · Real-Time)',
      summary: 'Mengoperasikan sistem penugasan instan (real-time dispatch) armada kendaraan beroda dua dan empat berbasis koordinat GPS, algoritma penentuan harga dinamis (surge pricing), dan rute lalu lintas otomatis.',
      metrics: {
        drivers: '100.000 Mitra Pengemudi aktif',
        users: '1.000.000 Pengguna aplikasi',
        matching: 'Pencocokan dalam tempo < 3 detik',
        telemetry: 'Ping koordinat GPS tiap 3–5 detik per armada'
      },
      architecture: [
        { from: 'Smartphone Penumpang', to: 'Cellular Tower / 4G/5G Network', action: 'Kirim koordinat GPS jemput & tujuan via WebSocket' },
        { from: 'Platform Dispatch Core', to: 'Geospatial Index (H3 / Redis GEO)', action: 'Cari 10 driver online terdekat dalam radius 1–3 km' },
        { from: 'Matching & Dynamic Pricing Engine', to: 'Driver Smartphone App', action: 'Kirim notifikasi tawaran order ke driver dengan estimasi tarif' },
        { from: 'Driver Accept Order', to: 'Routing & Navigation (Google Maps API)', action: 'Pandu rute jemput belokan demi belokan (turn-by-turn)' },
        { from: 'Trip Selesai', to: 'Automated Payment & Rating Engine', action: 'Potong saldo e-wallet penumpang, bagi hasil ke driver & submit ulasan' }
      ],
      hardware: [
        { device: 'Smartphone Mitra Driver', spec: 'RAM 6–8GB, Storage 64GB+, Layar 6.5 inci Terang, GPS GLONASS/Galileo presisi tinggi, Baterai 5000+ mAh, OS Android 12+', role: 'Menerima order instan, menampilkan navigasi peta jalan tanpa lag, dan komunikasi audio/chat.' },
        { device: 'Smartphone Penumpang (Customer)', spec: 'RAM 4–8GB, 4G/5G, GPS akurat', role: 'Memilih lokasi jemput, memantau posisi armada bergerak di peta, dan pembayaran digital.' },
        { device: 'Aksesoris Armada Driver', spec: 'Shockproof Waterproof Phone Holder, Fast Charging Adaptor Motor/Mobil, Powerbank 10.000–20.000 mAh', role: 'Menjaga smartphone driver tetap aktif 12 jam di jalan tanpa risiko kehabisan baterai.' },
        { device: 'Infrastruktur Jaringan Telekomunikasi', spec: 'Konektivitas Seluler 4G LTE Advanced & 5G Low-Latency', role: 'Transmisi paket data telemetri real-time bolak-balik antara smartphone dan server pusat.' },
        { device: 'Cloud Compute Infrastructure (Ultra Scalable)', spec: 'Kubernetes Cluster (EKS/GKE), puluhan microservices autoscaling per lonjakan jam kerja', role: 'Memproses jutaan komputasi koordinat geospasial dan kalkulasi tarif dalam hitungan milidetik.' }
      ],
      software: [
        { type: 'Aplikasi Penumpang & Driver', examples: 'Native Kotlin / Swift & React Native / Flutter', desc: 'Aplikasi dengan rendering peta fluid, background location tracking hemat baterai.' },
        { type: 'Matching Engine (Algoritma Penjodohan)', examples: 'Go (Golang), C++, Rust, Graph Algorithms', desc: 'Menghitung skor kecocokan jarak, rating driver, arah tujuan, dan penerimaan order.' },
        { type: 'Routing & Map Services API', examples: 'Google Maps Platform API, Mapbox, OSRM (Open Source Routing Machine)', desc: 'Kalkulasi jarak tempuh, estimasi waktu tempuh (ETA), dan rute menghindari kemacetan.' },
        { type: 'Pricing Engine (Dynamic Surge Pricing)', examples: 'Machine Learning Model (Gradient Boosting / Reinforcement Learning)', desc: 'Menyesuaikan tarif secara otomatis saat terjadi ketimpangan demand (hujan/jam pulang kerja).' },
        { type: 'Real-Time Database & Geospatial Index', examples: 'Redis GEO, Uber H3 Spatial Index, Apache Cassandra, Kafka', desc: 'Menyimpan dan meng-query ratusan ribu koordinat kendaraan bergerak setiap detik.' },
        { type: 'Security & SOS Telematics', examples: 'Face Recognition Mitra Driver, Deteksi Rem Mendadak / Tabrakan berbasis Giroskop Smartphone', desc: 'Menjamin keamanan penumpang dan keaslian identitas akun pengemudi.' }
      ],
      valueChain: {
        data: ['Koordinat lintang-bujur (Latitude-Longitude) driver dan penumpang setiap 3 detik', 'Data permintaan perjalanan (waktu order, titik jemput, titik antar)', 'Kecepatan laju kendaraan dan kondisi kemacetan jalan real-time', 'Status ketersediaan driver (Online, Sibuk, Menuju Penjemputan, Offline)', 'Metode pembayaran (E-wallet, Kartu, Cash) dan histori top-up', 'Tingkat pembatalan (Cancellation Rate) dan bintang rating ulasan'],
        processing: 'Algoritma geospasial mengelompokkan area kota ke dalam hexagon H3; sistem menghitung rasio pasokan-permintaan (Supply-Demand Ratio) dan menjalankan solver pencocokan optimal.',
        information: ['Estimasi Waktu Kedatangan pengemudi (ETA) yang presisi', 'Peta panas (Heat Map) area lonjakan pesanan di kota', 'Rasio keberhasilan penugasan armada vs pembatalan', 'Tingkat utilitas waktu aktif pengemudi (berapa % jam kerja mengangkut penumpang)', 'Indeks kepuasan dan laporan insiden keselamatan di jalan'],
        decisions: ['Mengaktifkan tarif dinamis (Surge Price) di area hujan/konser untuk menarik lebih banyak driver merapat', 'Memberikan misi insentif bonus bagi driver yang bersedia mengambil order di zona defisit', 'Mengarahkan driver kosong ke zona permintaan tinggi sebelum pesanan masuk (Predictive Repositioning)', 'Melakukan pemutusan mitra sementara bagi driver dengan rating di bawah standar batas aman'],
        businessValue: ['Waktu tunggu penjemputan penumpang turun dari 15 menit menjadi di bawah 4 menit', 'Utilisasi waktu kerja driver maksimal sehingga penghasilan harian mitra meningkat', 'Volume transaksi harian melonjak jutaan trip berkat keandalan sistem di jam sibuk', 'Kepercayaan dan loyalitas publik tinggi berkat transparansi tarif dan keamanan terjamin']
      }
    }
  ],
  comparisonTable: [
    { dimension: 'Skala Pengguna & Transaksi', coffeeshop: 'Ratusan transaksi/hari (3 Outlet)', marketplace: 'Jutaan pengguna, 10.000 seller, puluhan ribu order/hari', transport: 'Jutaan penumpang, 100.000 driver, jutaan trip/hari' },
    { dimension: 'Kebutuhan Server & Cloud', coffeeshop: 'Rendah–Menengah (SaaS Cloud POS terkelola)', marketplace: 'Tinggi (Cluster Cloud Server Auto-scaling, Multi-Region)', transport: 'Sangat Tinggi (Kubernetes cluster real-time streaming)' },
    { dimension: 'Karakteristik Database', coffeeshop: 'Transaksional Relasional (ACID sederhana)', marketplace: 'Large-scale Relasional + Elasticsearch + Cache', transport: 'Real-time Geospatial streaming + In-Memory + NoSQL' },
    { dimension: 'Perangkat Keras Utama', coffeeshop: 'POS Terminal, Tablet, Printer Thermal, Cash Drawer, CCTV', marketplace: 'Cloud Server, Database NVMe, Load Balancer, Gadget user', transport: 'Smartphone Driver (GPS/Baterai), Smartphone User, Cloud Telemetri' },
    { dimension: 'Fokus Utama TI', coffeeshop: 'Efisiensi operasional toko & kontrol stok fisik', marketplace: 'Integrasi ekosistem multi-pihak & transaksi aman', transport: 'Real-time intelligence, dispatch instan & optimasi rute' },
    { dimension: 'Kompleksitas Algoritma', coffeeshop: 'Rendah (Pencatatan kasir, resep stok, laporan agregat)', marketplace: 'Tinggi (Search engine, rekomendasi AI, fraud detection)', transport: 'Sangat Tinggi (Geospatial matching, surge pricing, routing)' }
  ],
  assignmentGuide: {
    objectives: [
      'Menganalisis kebutuhan teknologi informasi pada model bisnis yang dipilih.',
      'Merancang arsitektur sistem informasi dari sisi pengguna, antarmuka, hingga database.',
      'Menyusun spesifikasi hardware, software, dan estimasi infrastruktur yang realistis.',
      'Menerapkan kerangka 5 langkah (Data -> Processing -> Information -> Decision -> Business Value) secara utuh.'
    ],
    deliverables: [
      { name: 'Makalah / Dokumen Analisis Bisnis (Word/PDF)', desc: 'Laporan komprehensif berisi pendahuluan bisnis, analisis masalah operasional, spesifikasi teknis hardware & software, diagram arsitektur sistem, dan analisis dampak nilai bisnis.' },
      { name: 'Model Data / Skema Relasi (ERD)', desc: 'Desain tabel database (Entitas, Atribut, Primary Key, Foreign Key) yang merepresentasikan aliran transaksi bisnis.' },
      { name: 'Slide Presentasi Eksekutif (PowerPoint)', desc: 'Slide visual ringkas (10–15 slide) yang memaparkan latar belakang, solusi TI, spesifikasi, dan keunggulan bisnis di hadapan dosen dan audiens.' }
    ],
    rubric: [
      { aspect: 'Pemahaman Masalah Bisnis', weight: '20%', desc: 'Kejelasan identifikasi masalah riil dan alasan mengapa teknologi informasi dibutuhkan sebagai solusi.' },
      { aspect: 'Kesesuaian Spesifikasi Hardware & Software', weight: '25%', desc: 'Ketepatan pemilihan spesifikasi perangkat keras dan tumpukan aplikasi sesuai skala dan beban kerja bisnis.' },
      { aspect: 'Penerapan Kerangka Nilai Bisnis (5-Step)', weight: '25%', desc: 'Kedalaman alur logika dari data yang dikumpulkan hingga menghasilkan keputusan manajerial dan nilai ekonomi.' },
      { aspect: 'Kualitas Arsitektur & Dokumentasi', weight: '15%', desc: 'Kerapian diagram alur sistem, kejelasan skema database, dan struktur laporan tertulis.' },
      { aspect: 'Presentasi & Kerja Sama Tim', weight: '15%', desc: 'Kekompakan tim, kemampuan mempertahankan argumen, serta kejelasan visual slide presentasi.' }
    ]
  }
};
