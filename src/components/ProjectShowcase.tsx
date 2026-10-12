"use client";

import { useState } from "react";
import { Globe, Layers, Zap, CheckCircle, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  category: "enterprise" | "systems";
  year: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  footerNote: string;
}

const projects: ProjectItem[] = [
  {
    id: "kkf-label",
    category: "enterprise",
    year: "2026",
    badge: "Production Live",
    title: "KKF Label",
    subtitle: "Industrial ERP, Packaging Manufacturing & Inventory Tracker",
    description:
      "Sistem otomasi rantai pasok industri label packaging skala besar. Dilengkapi modul kalkulasi biaya bahan baku dinamis, pelacakan antrian pesanan real-time, dan analitik produksi multi-divisi.",
    tags: [
      "Next.js App Router",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma ORM",
    ],
    liveUrl: "https://kkflabel.com",
    footerNote: "Sistem Inti Operasional Pabrik",
  },
  {
    id: "pjtech-umkm",
    category: "enterprise",
    year: "2026",
    badge: "Multi-Tenant POS",
    title: "PJTech UMKM",
    subtitle: "Cloud Point-of-Sale (POS) & Retail Ecosystem",
    description:
      "Platform digitalisasi kasir dan pembukuan komprehensif bagi ratusan pelaku UMKM. Mendukung transaksi multi-cabang, pencatatan kas otomatis, laporan laba rugi instan, dan integrasi QRIS dinamis.",
    tags: [
      "React 19",
      "Node.js",
      "Express",
      "Neon PostgreSQL",
      "Redis Caching",
    ],
    liveUrl: "https://pjtechumkm.com",
    footerNote: "Digunakan oleh Pelaku Usaha Nyata",
  },
  {
    id: "pranajaya-tech",
    category: "enterprise",
    year: "2026",
    badge: "Platform Portal",
    title: "PranaJaya Tech",
    subtitle: "Enterprise Digital Agency & Cloud Infrastructure",
    description:
      "Hub solusi teknologi dan rekayasa perangkat lunak kustom. Mengelola deployment infrastruktur cloud mandiri, konfigurasi DNS tersentralisasi, sertifikat SSL otomatis, dan monitoring uptime sistem.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Cloudflare DNS",
      "Docker",
      "Nginx Proxy",
    ],
    liveUrl: "https://pranajayatech.online",
    footerNote: "Hub Ekosistem Digital Pranajaya",
  },
  {
    id: "whale-tracker",
    category: "systems",
    year: "2025",
    badge: "Distributed Stream",
    title: "Whale Predator Tracker",
    subtitle: "Distributed Real-Time On-Chain Transaction Engine",
    description:
      "Sistem pemantau pergerakan transaksi dompet bernilai tinggi (whale) secara real-time via WebSocket. Mampu memproses ribuan event per detik dengan pipeline agregasi data dan filter latensi rendah.",
    tags: [
      "Node.js",
      "WebSocket",
      "Redis Pub/Sub",
      "TypeScript",
      "TimescaleDB",
    ],
    footerNote: "Engine Agregasi Data Realtime",
  },
  {
    id: "lumestack",
    category: "systems",
    year: "2026",
    badge: "Microservices",
    title: "LumeStack Core Engine",
    subtitle: "High-Concurrency Microservices Backend Blueprint",
    description:
      "Pondasi microservices modular dengan gRPC inter-service communication, distributed tracing, rate limiting berbasis token-bucket, dan JWT stateless session auth zero-latency.",
    tags: [
      "Go / Node.js",
      "Docker Containers",
      "gRPC",
      "PostgreSQL",
      "Kong Gateway",
    ],
    footerNote: "High Throughput Microservices",
  },
  {
    id: "medical-saas",
    category: "enterprise",
    year: "2026",
    badge: "Clinical System",
    title: "SIM Rekam Medis Elektronik",
    subtitle: "Clinical Workflow Optimization & Electronic Medical Records",
    description:
      "Sistem informasi manajemen klinik terintegrasi yang memangkas 66% waktu pendaftaran dan administrasi pasien, dilengkapi validasi resep obat otomatis serta perancangan berbasis riset empiris SUS (skor 81.2).",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Audit SUS",
      "ICD-10 Standards",
      "Workflow Redesign",
    ],
    footerNote: "Efisiensi Alur Teruji 66%",
  },
];

export default function ProjectShowcase() {
  const [filter, setFilter] = useState<"all" | "enterprise" | "systems">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <div className="space-y-8">
      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px] ${
            filter === "all"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          Semua Proyek ({projects.length})
        </button>

        <button
          onClick={() => setFilter("enterprise")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px] ${
            filter === "enterprise"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          Enterprise &amp; UMKM (4)
        </button>

        <button
          onClick={() => setFilter("systems")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px] ${
            filter === "systems"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          Sistem &amp; Data Stream (2)
        </button>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-white border border-slate-200/90 p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Header Badges */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                  {project.year} • {project.badge}
                </span>

                {project.liveUrl ? (
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Domain Aktif
                  </span>
                ) : (
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                    Arsitektur Inti
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-blue-600 mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium bg-slate-50 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Action */}
            <div className="pt-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-blue-700 font-semibold text-xs sm:text-sm flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-all min-h-[44px]"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>
                      Kunjungi {project.liveUrl.replace("https://", "")}
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-blue-600" />
                </a>
              ) : (
                <div className="w-full text-slate-500 text-xs font-medium flex items-center justify-between p-3 rounded-xl bg-slate-50/70 border border-slate-200 min-h-[44px]">
                  <span>{project.footerNote}</span>
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
