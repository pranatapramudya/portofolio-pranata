import {
  Briefcase,
  Code,
  Mail,
  Award,
  Sparkles,
  Server,
  Database,
  Cloud,
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Zap,
  Cpu,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/80"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <ScrollReveal className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Top Pill Status */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span>Systems Architecture &amp; Full Stack Engineer</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping ml-1" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Pranata Pramudya, <span className="text-blue-600">S.Kom.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Merancang arsitektur perangkat lunak skala tinggi, sistem automasi
            terdistribusi, dan ekosistem ERP multi-tenant dengan fokus pada
            keandalan operasional, keamanan data, dan efisiensi alur kerja
            nyata.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/25 flex items-center gap-2 min-h-[44px]"
            >
              <Briefcase className="w-4 h-4" />
              Eksplorasi Proyek Nyata
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm flex items-center gap-2 min-h-[44px]"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              Hubungi via Email
            </a>

            <a
              href="https://github.com/pranatapramudya"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-all shadow-sm flex items-center gap-2 min-h-[44px]"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub Profile
            </a>
          </div>

          {/* Core Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">66%</div>
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    Efisiensi Alur Kerja
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Memangkas durasi input data pasien dari 6 menit menjadi 2 menit
                pada audit alur kerja klinis.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">81.2</div>
                  <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                    Skor Usability (SUS)
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kategori &apos;Excellent&apos; pada riset empiris System
                Usability Scale untuk perancangan SIM kesehatan.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    3.43 / 4.0
                  </div>
                  <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                    IPK Akademik
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                S1 Teknik Informatika, Universitas Sebelas April (Lulusan 2025).
                Google Cloud Certified.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Fundamental Architectural Mastery */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white border-b border-slate-200/80">
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/40 border border-blue-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Next.js App Router Architecture SOP
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  Pondasi Arsitektur Baja: Mental Model Koki vs Pelayan
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Penerapan disiplin tinggi standar industri: Server Component
                  murni sebagai dapur utama (zero credential leak), isolasi
                  interaktivitas client pada daun komponen, multi-tenant
                  database partitioning, dan proteksi anti-IDOR berstandar
                  enterprise.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-blue-600 font-bold text-sm">
                    Server Component
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Dapur Aman &amp; Cepat
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-emerald-600 font-bold text-sm">
                    Multi-Tenant Guard
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Isolasi Data Anti-IDOR
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-indigo-600 font-bold text-sm">
                    Server Actions
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Zod Schema Validated
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-purple-600 font-bold text-sm">
                    Loading &amp; Error
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Streaming &amp; Boundary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Tech Stack Skills */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-12 bg-slate-50/60 border-b border-slate-200/80"
      >
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Keahlian Rekayasa &amp; Ekosistem Teknologi
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Kombinasi komprehensif antara arsitektur frontend modern, backend
              berkinerja tinggi, manajemen basis data relasional, dan keamanan
              sistem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 w-fit mb-4">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Frontend Engineering
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Modern reactive architectures, SSR, hydration optimization, and
                clean component trees.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Next.js (App Router)",
                  "React 19",
                  "TypeScript",
                  "Tailwind CSS",
                  "Redux Toolkit",
                  "Framer Motion",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-50 border border-slate-200 text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-sm">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 w-fit mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Backend &amp; Services
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Distributed microservices, asynchronous message queues, and
                robust REST/GraphQL APIs.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Node.js",
                  "Express",
                  "NestJS",
                  "FastAPI (Python)",
                  "REST API",
                  "WebSocket Realtime",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-50 border border-slate-200 text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-all shadow-sm">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100 w-fit mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Database &amp; Storage
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Schema design, query indexing, ACID compliance, and multi-tenant
                partitioning.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "PostgreSQL (Neon)",
                  "MySQL",
                  "Prisma ORM",
                  "Redis Cache",
                  "MongoDB",
                  "Data Migrations",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-50 border border-slate-200 text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 transition-all shadow-sm">
              <div className="p-3 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100 w-fit mb-4">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                DevOps &amp; Security
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Automated deployment pipelines, serverless functions, and
                containerization.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Docker",
                  "Google Cloud (GCP)",
                  "Vercel",
                  "GitHub Actions CI/CD",
                  "Linux / Bash",
                  "Task Scheduler",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-50 border border-slate-200 text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Production Projects Showcase */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-12 bg-white border-b border-slate-200/80"
      >
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              Live Production Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
              Proyek &amp; Ekosistem Digital Nyata
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Sistem produksi yang aktif beroperasi melayani kebutuhan bisnis
              riil dengan domain resmi, uptime andal, dan performa tinggi.
            </p>
          </div>

          <ProjectShowcase />
        </ScrollReveal>
      </section>

      {/* Career History & Empirical Achievements */}
      <section
        id="achievements"
        className="py-20 px-4 sm:px-6 lg:px-12 bg-slate-50/70 border-b border-slate-200/80"
      >
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
              Professional Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Riwayat Karir &amp; Capaian Nyata
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Perjalanan karir profesional dari riset klinis dan rekayasa
              antarmuka pengguna hingga kepemimpinan arsitektur sistem
              enterprise berskala produksi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline Column */}
            <div className="lg:col-span-2 p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                Linimasa Karir Profesional
              </h3>

              <div className="relative border-l-2 border-slate-200 ml-3 pl-6 space-y-8">
                {/* 2026: KKF Label */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                      2026 — Sekarang
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      PT KKF Label Sukses Makmur
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Full Stack Software Architect
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Memimpin perancangan dan implementasi infrastruktur digital
                    ERP untuk pabrikasi label. Mengembangkan sistem kalkulasi
                    estimasi pesanan kustom secara otomatis dan mengintegrasikan
                    basis data pergudangan terpadu.
                  </p>
                </div>

                {/* 2026: LumeStack Cloud Solutions */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded">
                      2026
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      LumeStack Cloud Solutions
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Lead Cloud Systems Engineer
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Mendesain arsitektur microservices terdistribusi,
                    mengimplementasikan caching Redis bertingkat, dan
                    mengotomasi pipeline deployment CI/CD cloud.
                  </p>
                </div>

                {/* 2025: Whale Predator Tracker */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded">
                      2025
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Whale Predator Tracker Engine
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Distributed Systems Engineer
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Membangun engine pemantau transaksi on-chain dengan latency
                    rendah melalui koneksi WebSocket tersinkronisasi dan filter
                    data otomatis.
                  </p>
                </div>

                {/* 2023 - 2025: Magang Klinik Pratama & Skripsi */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      2023 — 2025
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Klinik Pratama &amp; Proyek Skripsi
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    UI/UX Researcher &amp; Systems Analyst
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Melakukan audit alur operasional klinis, memangkas proses
                    pendaftaran dari 6 menit menjadi 2 menit (efisiensi 66%),
                    serta meraih skor SUS 81.2 (kategori &apos;Excellent&apos;)
                    dalam pengujian empiris.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certifications Column */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Pendidikan &amp; Sertifikasi
                </h3>

                {/* Formal Education */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 w-fit px-2 py-0.5 rounded mb-2">
                    2021 — 2025
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    S1 Teknik Informatika
                  </h4>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">
                    Universitas Sebelas April (Sumedang)
                  </div>
                  <div className="inline-block mt-2.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    IPK: 3.43 / 4.00 (Sangat Memuaskan)
                  </div>
                </div>

                {/* Professional Certifications */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        Google Cloud Computing Foundations
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Google Cloud (2025)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        JobReady Employability Skills
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Wadhwani Foundation (2025)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        Applied Microsoft Office Suite
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Sertifikasi Kompetensi Terapan (2023)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                <span>Domisili: Sumedang, Jawa Barat</span>
                <span className="text-blue-700 font-semibold">
                  Siap Kerja On-site / Remote
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Section - Clean & Zero Phone Privacy */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Mari Terhubung &amp; Berkolaborasi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Terbuka untuk peluang rekrutmen posisi Full Stack Engineer, Systems
            Architect, maupun konsultasi implementasi ekosistem digital
            institusi Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
            {/* Email Primary */}
            <a
              href="mailto:pranatapramudya39@gmail.com"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2.5 shadow-md shadow-blue-500/25 min-h-[44px]"
            >
              <Mail className="w-4 h-4" />
              pranatapramudya39@gmail.com
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pranata-pramudya-2a4427292/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 bg-slate-50 border border-slate-300 hover:bg-slate-100 hover:border-slate-400 transition-all flex items-center justify-center gap-2.5 shadow-xs min-h-[44px]"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
              LinkedIn Profile
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/pranatapramudya"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-all flex items-center justify-center gap-2.5 min-h-[44px]"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>&copy; 2026 Pranata Pramudya, S.Kom. Hak Cipta Dilindungi.</p>
          <p className="text-slate-400">
            Dirancang dengan Next.js App Router (Light Mode &amp; Server
            Component).
          </p>
        </div>
      </footer>
    </main>
  );
}
