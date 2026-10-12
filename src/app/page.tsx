import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import {
  MailIcon as Mail,
  LinkedinIcon as Linkedin,
  ChevronRightIcon as ChevronRight,
  TerminalIcon as Terminal,
  ServerIcon as Server,
  BriefcaseIcon as Briefcase,
  CodeIcon as Code,
  AwardIcon as Award,
  ExternalLinkIcon as ExternalLink,
  GithubIcon as Github,
  SmartphoneIcon as Smartphone,
  DatabaseIcon as Database,
  ShieldCheckIcon as ShieldCheck,
  CheckCircleIcon as CheckCircle,
} from "@/components/icons";

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          {/* Photo Section */}
          <div
            className="order-first md:order-last w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative flex-shrink-0"
            style={{ perspective: "1000px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
            <div
              className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-[0_20px_50px_rgba(34,211,238,0.25)] animate-float transition-all duration-500 bg-slate-900 z-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/images/foto-profil.jpg"
                alt="Pranata Pramudya, S.Kom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <div className="inline-block p-1 rounded-full bg-slate-900/80 border border-slate-700/80 mb-5 backdrop-blur-md">
              <div className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 bg-slate-950/70 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for Full-Time Roles & Systems Architecture
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">
              Pranata Pramudya
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-cyan-300/90 mb-4">
              S.Kom | Systems Architect & Process Optimization Specialist
            </p>

            <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-xl leading-relaxed">
              Lulusan S.Kom yang berfokus pada arsitektur sistem, pengembangan
              aplikasi web/mobile modern, dan optimalisasi alur kerja digital.
              Memiliki rekam jejak dalam mentransformasi proses bisnis manual
              menjadi sistem otomatis efisien yang berhasil{" "}
              <span className="text-cyan-300 font-semibold">
                memangkas waktu operasional hingga 66%
              </span>
              .
            </p>

            {/* Highlights Badges */}
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start mb-8">
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-cyan-400" /> Juara 1 Inovasi
                Teknologi RS (2026)
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-950/60 text-blue-300 border border-blue-800/60 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" /> S1 Teknik
                Informatika (IPK 3.43)
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-800/60 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-indigo-400" /> Next.js 14 �
                Prisma � PostgreSQL � Capacitor
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Hubungi Saya
              </a>
              <a
                href="https://wa.me/6281395053922"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-950/50 border border-emerald-700/60 hover:bg-emerald-900/60 transition-all flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                WhatsApp (0813-9505-3922)
              </a>
              <a
                href="https://github.com/pranatapramudya"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-slate-950 border-y border-slate-800/80 relative z-10"
      >
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Core Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2 mb-4">
              Keahlian Profesional & Arsitektur
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 p-7 rounded-2xl hover:border-cyan-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  Systems & Backend Architecture
                </h3>
                <p className="text-xs text-slate-400 mb-5">
                  Perancangan arsitektur data terdistribusi, API performa
                  tinggi, dan ketahanan transaksi cloud.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />{" "}
                    Next.js (App Router & Server Actions)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />{" "}
                    TypeScript & Node.js Runtime
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />{" "}
                    Prisma ORM & Database Modeling
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />{" "}
                    PostgreSQL (Neon Serverless & Supabase)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />{" "}
                    RESTful APIs & Rate-Limiting Anti-Spam
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-cyan-400/90 font-mono">
                PostgreSQL � Prisma � TypeScript
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-7 rounded-2xl hover:border-blue-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  Frontend & Cross-Platform Mobile
                </h3>
                <p className="text-xs text-slate-400 mb-5">
                  Pengembangan antarmuka responsif mobile-first, gateway
                  pembayaran instan, dan kompilasi APK Android native.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />{" "}
                    React 19 & Next.js 14 Web Application
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />{" "}
                    Tailwind CSS Modern Design System
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />{" "}
                    Capacitor (Web-to-Native Android APK)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />{" "}
                    Integrasi Midtrans API (QRIS & E-Wallet)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />{" "}
                    Clerk Enterprise Authentication & RBAC
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-blue-400/90 font-mono">
                React 19 � TailwindCSS � Capacitor
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-7 rounded-2xl hover:border-indigo-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  Automation, AI & Process Optimization
                </h3>
                <p className="text-xs text-slate-400 mb-5">
                  Audit alur kerja digital, pemangkasan friksi operasional, dan
                  integrasi agen cerdas bertenaga LLM.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />{" "}
                    Playwright Browser Automation & Stealth Mode
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />{" "}
                    Integrasi Groq LLM / AI Reasoning Pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />{" "}
                    Webhook Pipelines (Real-time to Telegram)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />{" "}
                    Audit Alur Kerja Rekam Medis (Efisiensi 66%)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />{" "}
                    Google Cloud Computing Foundations (Tersertifikasi)
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-indigo-400/90 font-mono">
                Playwright � Groq AI � UCD Analysis
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Production Deployments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2 mb-4">
              Proyek Portofolio & Platform Resmi
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-4">
              Koleksi aplikasi skala penuh yang aktif melayani pengguna nyata,
              dirancang dengan arsitektur modern, keamanan enterprise, dan
              integrasi payment gateway.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: KKF Label */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-cyan-500/60 transition-all flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    Production SaaS & APK � 2026
                  </span>
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                  KKF Label
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mb-3">
                  Premium Fashion E-Commerce & Android Native Mobile
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Platform e-commerce butik fashion mandiri end-to-end dengan
                  gateway pembayaran Midtrans (QRIS & e-wallet), database
                  inventaris Prisma + Supabase, autentikasi Clerk, serta
                  kompilasi APK Android via Capacitor.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Next.js 14
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Prisma ORM
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Midtrans QRIS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Capacitor APK
                  </span>
                </div>
              </div>
              <a
                href="https://kkflabel.com"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 font-semibold text-xs sm:text-sm flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all"
              >
                <span>Buka kkflabel.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 2: PJTech Kasir / UMKM Solutions */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-blue-500/60 transition-all flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    SaaS Kasir & POS UMKM � 2026
                  </span>
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-300 transition-colors">
                  PJTech UMKM
                </h3>
                <p className="text-xs font-medium text-blue-400/90 mb-3">
                  Sistem Kasir Pintar, POS & Solusi Digitalisasi UMKM
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Platform kasir digital pintar berbasis Next.js untuk
                  operasional warung, kafe, dan retail. Dilengkapi pencatatan
                  transaksi instan, multi-tenant inventaris, integrasi printer
                  Bluetooth, dan analitik keuntungan harian.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Next.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Multi-Tenant
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Bluetooth POS
                  </span>
                </div>
              </div>
              <a
                href="https://pjtechumkm.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 font-semibold text-xs sm:text-sm flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900 transition-all"
              >
                <span>Buka pjtechumkm.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 3: PranaJaya Tech */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-indigo-500/60 transition-all flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    Tech Studio & Services � 2026
                  </span>
                  <Server className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">
                  PranaJaya Tech
                </h3>
                <p className="text-xs font-medium text-indigo-400/90 mb-3">
                  Digital Solution Studio & Engineering Hub
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Layanan perancangan arsitektur sistem, automasi digital
                  bisnis, dan rekayasa perangkat lunak modern untuk korporasi
                  dan UKM berskala nasional, menghadirkan solusi teknologi
                  mutakhir yang tepat guna.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Next.js 15
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    System Design
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Software Studio
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Production
                  </span>
                </div>
              </div>
              <a
                href="https://pranajayatech.online"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 font-semibold text-xs sm:text-sm flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 transition-all"
              >
                <span>Buka pranajayatech.online</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 4: Whale Predator Tracker */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-emerald-500/60 transition-all flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    Real-time Data Architecture � 2025
                  </span>
                  <Server className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-300 transition-colors">
                  Whale Predator Tracker
                </h3>
                <p className="text-xs font-medium text-emerald-400/90 mb-3">
                  Integrated Financial Analytics & Security Engine
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Arsitektur sistem pemantauan data finansial terintegrasi yang
                  menghubungkan berbagai API pihak ketiga (Helius, Coinglass,
                  Rugcheck) dengan automated security filtering dan notifikasi
                  Webhook-to-Telegram real-time.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Next.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    TypeScript
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Coinglass API
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Telegram Webhook
                  </span>
                </div>
              </div>
              <a
                href="https://predator-tracker.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 font-semibold text-xs sm:text-sm flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all"
              >
                <span>Lihat Dasbor Analitik</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 5: Enterprise Medical SaaS */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-purple-500/60 transition-all flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    Healthcare System � 2026
                  </span>
                  <Briefcase className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors">
                  Enterprise Medical SaaS
                </h3>
                <p className="text-xs font-medium text-purple-400/90 mb-3">
                  Sadulur Care (White-Label Implementation)
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Arsitektur aplikasi full-stack yang mengelola data
                  terdistribusi 10 unit fasilitas layanan medis, sinkronisasi
                  kuis edukasi pasien real-time, rate-limiting anti-spam, dan
                  kompilasi mobile native Android APK.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Next.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Prisma ORM
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Capacitor APK
                  </span>
                </div>
              </div>
              <a
                href="https://sadulur-care.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 font-semibold text-xs sm:text-sm flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-900 transition-all"
              >
                <span>Lihat Platform Medis</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 6: UI/UX & Healthcare Optimization */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-amber-500/60 transition-all flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    Award-Winning Thesis � 2023 - 2025
                  </span>
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">
                  Healthcare Workflow & UI/UX E-RM
                </h3>
                <p className="text-xs font-medium text-amber-400/90 mb-3">
                  Magang Klinik & Riset Usability User-Centered Design
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  Audit alur kerja manual dan perancangan ulang arsitektur
                  sistem informasi rekam medis klinik yang sukses memangkas
                  waktu input data dari 6 menit menjadi 2 menit per pasien.
                  Meraih skor Usability 'Excellent' (81.2) dan Juara 1 Inovasi
                  RS.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Figma Prototype
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    UCD Research
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Process Audit
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Score 81.2
                  </span>
                </div>
              </div>
              <a
                href="https://www.figma.com/proto/WvSVFBmHlPevd3STqV8RAx/Klinik-UI?node-id=1-2&t=Mh7nSVuzJSExEE5j-1"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 font-semibold text-xs sm:text-sm flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all"
              >
                <span>Buka Prototipe Figma</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-24 bg-slate-950 border-t border-slate-800/80 relative z-10"
      >
        <ScrollReveal className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Milestones & Accreditations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2 mb-4">
              Pencapaian, Sertifikasi & Akademik
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Pencapaian & Rekam Jejak
              </h3>
              <div className="space-y-5">
                <div className="border-l-2 border-amber-500/80 pl-4">
                  <div className="text-xs font-semibold text-amber-400">
                    Tahun 2026
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    Juara 1 Inovasi Teknologi Rumah Sakit
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Tingkat Kabupaten � Pengakuan resmi atas implementasi
                    perancangan sistem informasi rekam medis modern.
                  </div>
                </div>
                <div className="border-l-2 border-cyan-500/80 pl-4">
                  <div className="text-xs font-semibold text-cyan-400">
                    Tahun 2025
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    Efisiensi Alur Kerja 66% di Klinik
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Memangkas durasi input proses pasien dari 6 Menit menjadi 2
                    Menit melalui audit alur kerja dan implementasi antarmuka
                    intuitif.
                  </div>
                </div>
                <div className="border-l-2 border-blue-500/80 pl-4">
                  <div className="text-xs font-semibold text-blue-400">
                    Tahun 2025
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    Skor Usability 'Excellent' (81.2)
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Pengujian empiris System Usability Scale (SUS) pada proyek
                    skripsi perancangan sistem informasi kesehatan.
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  Pendidikan & Sertifikasi
                </h3>

                {/* Formal Education */}
                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="text-xs font-semibold text-cyan-400">
                    2021 � 2025
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    S1 Teknik Informatika | Universitas Sebelas April
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 mt-1">
                    Indeks Prestasi Kumulatif (IPK): 3.43
                  </div>
                </div>

                {/* Professional Certifications */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-200">
                        Google Cloud Computing Foundations
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Google Cloud (2025)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-200">
                        JobReady Employability Skills
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Wadhwani Foundation (2025)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-200">
                        Applied Microsoft Office
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Sertifikasi Kompetensi Terapan (2023)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Lokasi: Sumedang, Jawa Barat</span>
                <span className="text-cyan-400 font-semibold">
                  Siap Kerja On-site / Remote
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative z-10"
      >
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Mari Berkolaborasi & Terhubung
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mb-10 max-w-2xl mx-auto">
            Saya terbuka untuk diskusi mengenai peluang karir, rekrutmen posisi
            Full Stack / Systems Architect, maupun pengembangan solusi digital
            di instansi/perusahaan Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:pranatapramudya39@gmail.com"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              <Mail className="w-4 h-4" />
              pranatapramudya39@gmail.com
            </a>

            <a
              href="https://wa.me/6281395053922"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-950/60 border border-emerald-700/70 hover:bg-emerald-900/60 transition-all flex items-center justify-center gap-2.5"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              WhatsApp: 0813-9505-3922
            </a>

            <a
              href="https://www.linkedin.com/in/pranata-pramudya-2a4427292/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all flex items-center justify-center gap-2.5"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              LinkedIn Profile
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-800/80 bg-slate-950">
        <p>
          &copy; 2026 Pranata Pramudya, S.Kom. Systems Architecture & Full Stack
          Engineer.
        </p>
      </footer>
    </main>
  );
}
