"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  ArrowLeft,
  ExternalLink,
  Gamepad2,
  CheckCircle,
  Trophy,
  X,
  Sparkles,
  Volume2,
  VolumeX,
  Compass,
  Zap,
  Info,
} from "lucide-react";
import Link from "next/link";

interface ZoneData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  color: number;
  hexColor: string;
  position: [number, number, number];
  description: string;
  tags: string[];
  liveUrl?: string;
  stats: string;
  stationType: "factory" | "pos" | "cloud" | "radar" | "clinic" | "academic";
}

const ZONES: ZoneData[] = [
  {
    id: "kkf-label",
    title: "KKF Label HQ",
    subtitle: "Industrial ERP & Manufacturing Engine",
    category: "Enterprise System",
    year: "2026",
    color: 0x0284c7,
    hexColor: "#0284c7",
    position: [-8, 0, -7],
    description:
      "Sistem otomasi ERP pabrik label kemasan industri skala besar. Dilengkapi kalkulator bahan baku dinamis dan analitik antrian pesanan.",
    tags: ["Next.js App Router", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://kkflabel.com",
    stats: "Produksi 10.000+ Roll Label/Bulan",
    stationType: "factory",
  },
  {
    id: "pjtech-umkm",
    title: "PJTech UMKM Kasir",
    subtitle: "Cloud Point-of-Sale & Multi-Branch Engine",
    category: "Retail Ecosystem",
    year: "2026",
    color: 0x059669,
    hexColor: "#059669",
    position: [8, 0, -7],
    description:
      "Platform digitalisasi kasir cerdas dan pembukuan komprehensif bagi pelaku UMKM dengan rekonsiliasi QRIS dan multi-tenant isolation.",
    tags: ["React 19", "Node.js", "Express", "Neon DB", "Redis"],
    liveUrl: "https://pjtechumkm.com",
    stats: "Aktif Melayani Ratusan UMKM",
    stationType: "pos",
  },
  {
    id: "pranajaya-tech",
    title: "PranaJaya Tech Center",
    subtitle: "Digital Infrastructure & Cloud Hub",
    category: "Agency Infrastructure",
    year: "2026",
    color: 0x4f46e5,
    hexColor: "#4f46e5",
    position: [-10, 0, 4],
    description:
      "Hub orkestrasi arsitektur cloud mandiri, DNS terpusat, sertifikasi SSL otomatis, dan engine deployment sistem multi-client.",
    tags: ["Next.js", "Docker", "Cloudflare DNS", "Nginx"],
    liveUrl: "https://pranajayatech.online",
    stats: "Uptime 99.9% Cloud Platform",
    stationType: "cloud",
  },
  {
    id: "whale-tracker",
    title: "Whale Predator Radar",
    subtitle: "High-Throughput On-Chain Event Stream",
    category: "Real-Time Systems",
    year: "2025",
    color: 0x06b6d4,
    hexColor: "#06b6d4",
    position: [10, 0, 4],
    description:
      "Engine pemantau pergerakan transaksi dompet kripto besar (whale) secara real-time via WebSocket dengan pemrosesan ribuan event/detik.",
    tags: ["WebSocket", "Redis Pub/Sub", "TypeScript", "TimescaleDB"],
    stats: "Sub-second Event Ingestion",
    stationType: "radar",
  },
  {
    id: "clinic-saas",
    title: "Klinik Pratama & Skripsi",
    subtitle: "Clinical Workflow & Usability Research",
    category: "Healthcare System",
    year: "2023 - 2025",
    color: 0xe11d48,
    hexColor: "#e11d48",
    position: [-4, 0, 9],
    description:
      "Audit alur pelayanan rekam medis klinik yang sukses memangkas waktu input data pasien dari 6 menit menjadi 2 menit dengan validasi SUS.",
    tags: ["SUS Score 81.2", "Efisiensi 66%", "UCD Research", "ICD-10"],
    stats: "Skor SUS 'Excellent' (81.2)",
    stationType: "clinic",
  },
  {
    id: "campus-unsap",
    title: "Universitas Sebelas April",
    subtitle: "Pendidikan S1 & Sertifikasi Google Cloud",
    category: "Academic & Certs",
    year: "2021 - 2025",
    color: 0x8b5cf6,
    hexColor: "#8b5cf6",
    position: [5, 0, 9],
    description:
      "Pendidikan Sarjana Teknik Informatika dengan predikat Sangat Memuaskan (IPK 3.43) serta sertifikasi resmi Google Cloud Computing.",
    tags: ["IPK 3.43", "Google Cloud", "Wadhwani Foundation"],
    stats: "Lulusan 2025 (S.Kom.)",
    stationType: "academic",
  },
];

export default function PortfolioGame() {
  const mountRef = useRef<HTMLDivElement>(null);
  const miniMapCanvasRef = useRef<HTMLCanvasElement>(null);

  const [activeZone, setActiveZone] = useState<ZoneData | null>(null);
  const [visitedZones, setVisitedZones] = useState<string[]>([]);
  const [nearZone, setNearZone] = useState<ZoneData | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showHeroBanner, setShowHeroBanner] = useState(true);
  const [fps, setFps] = useState(60);
  const [boltState, setBoltState] = useState<
    "idle" | "walking" | "sprinting" | "jumping"
  >("idle");

  // Audio Synthesizer (Web Audio API)
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playSound = (
    type: "step" | "jump" | "ball" | "discover" | "open" | "win",
  ) => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext
        )();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;

      if (type === "step") {
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(90, now + 0.04);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === "jump") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(540, now + 0.14);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.start(now);
        osc.stop(now + 0.14);
      } else if (type === "ball") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.09);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === "discover") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === "open") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
        osc.start(now);
        osc.stop(now + 0.24);
      } else if (type === "win") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.1);
        osc.frequency.setValueAtTime(659.25, now + 0.2);
        osc.frequency.setValueAtTime(880, now + 0.35);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      }
    } catch {
      // Audio not permitted
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- THREE.JS SCENE SETUP (WARM CLAY / SANCTUARY AESTHETIC) ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf6f1eb); // Warm cream floor tone
    scene.fog = new THREE.FogExp2(0xf6f1eb, 0.022);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    // Initial camera position looking at Bolt in Sanctuary
    camera.position.set(0, 8, 14);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    // --- LIGHTING (SOFT WARM ARCHITECTURAL LIGHTING) ---
    const hemiLight = new THREE.HemisphereLight(0xfff7ed, 0xe2d9cc, 0.85);
    scene.add(hemiLight);

    const mainLight = new THREE.DirectionalLight(0xfffbf0, 1.4);
    mainLight.position.set(16, 24, 14);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 70;
    const shadowDist = 20;
    mainLight.shadow.camera.left = -shadowDist;
    mainLight.shadow.camera.right = shadowDist;
    mainLight.shadow.camera.top = shadowDist;
    mainLight.shadow.camera.bottom = -shadowDist;
    mainLight.shadow.bias = -0.0004;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xbae6fd, 0.4);
    fillLight.position.set(-14, 12, -10);
    scene.add(fillLight);

    // --- PLAYROOM ENVIRONMENT (THE SANCTUARY) ---
    // 1. Warm Cream Floor
    const floorGeo = new THREE.PlaneGeometry(36, 36);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xf5efe6,
      roughness: 0.65,
      metalness: 0.05,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // 2. Terracotta Coral Running Track / Curved Ring (As seen in Dea Afrizal's video)
    const trackGeo = new THREE.RingGeometry(4.2, 7.8, 64);
    const trackMat = new THREE.MeshStandardMaterial({
      color: 0xe07a5f, // Terracotta coral
      roughness: 0.8,
      metalness: 0.02,
    });
    const track = new THREE.Mesh(trackGeo, trackMat);
    track.rotation.x = -Math.PI / 2;
    track.position.set(0, 0.015, -1);
    track.receiveShadow = true;
    scene.add(track);

    // Inner Cream Island
    const innerTrackGeo = new THREE.CircleGeometry(4.18, 64);
    const innerTrackMat = new THREE.MeshStandardMaterial({
      color: 0xfdfbf7,
      roughness: 0.6,
    });
    const innerTrack = new THREE.Mesh(innerTrackGeo, innerTrackMat);
    innerTrack.rotation.x = -Math.PI / 2;
    innerTrack.position.set(0, 0.02, -1);
    innerTrack.receiveShadow = true;
    scene.add(innerTrack);

    // 3. Playroom Walls (Back & Left Walls with clean architectural openings)
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xf3eee8,
      roughness: 0.9,
    });
    const baseboardMat = new THREE.MeshStandardMaterial({
      color: 0x99f6e4, // Mint pastel trim
      roughness: 0.4,
    });

    // Back Wall
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(36, 6, 0.6), wallMat);
    backWall.position.set(0, 3, -15);
    backWall.receiveShadow = true;
    scene.add(backWall);

    const backTrim = new THREE.Mesh(
      new THREE.BoxGeometry(36, 0.25, 0.65),
      baseboardMat,
    );
    backTrim.position.set(0, 0.125, -15);
    scene.add(backTrim);

    // Left Wall
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.6, 6, 36), wallMat);
    leftWall.position.set(-16, 3, 0);
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    const leftTrim = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 0.25, 36),
      baseboardMat,
    );
    leftTrim.position.set(-16, 0.125, 0);
    scene.add(leftTrim);

    // 4. Wooden Stairs & Elevated Mezzanine Ramp (As seen on left side in video)
    const rampGroup = new THREE.Group();
    rampGroup.position.set(-11, 0, -8);

    // Elevated platform
    const platformGeo = new THREE.BoxGeometry(7, 1.4, 5);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0xffedd5, // Warm birch/light oak
      roughness: 0.5,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.set(0, 0.7, 0);
    platform.castShadow = true;
    platform.receiveShadow = true;
    rampGroup.add(platform);

    // Ramp Incline (Walking ramp)
    const rampSlopeGeo = new THREE.BoxGeometry(4, 0.25, 4.5);
    const rampSlope = new THREE.Mesh(
      rampSlopeGeo,
      new THREE.MeshStandardMaterial({ color: 0x99f6e4, roughness: 0.4 }),
    );
    rampSlope.position.set(4.5, 0.7, 0);
    rampSlope.rotation.z = -0.32; // Slope down to floor
    rampSlope.castShadow = true;
    rampSlope.receiveShadow = true;
    rampGroup.add(rampSlope);

    // Mint Handrails / Guardrails
    const railMat = new THREE.MeshStandardMaterial({
      color: 0x5eead4,
      metalness: 0.3,
      roughness: 0.2,
    });
    const railTop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 6.8, 12),
      railMat,
    );
    railTop.rotation.z = Math.PI / 2;
    railTop.position.set(0, 2.1, 2.45);
    rampGroup.add(railTop);

    for (let r = -3; r <= 3; r += 1.5) {
      const post = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8),
        railMat,
      );
      post.position.set(r, 1.75, 2.45);
      post.castShadow = true;
      rampGroup.add(post);
    }
    scene.add(rampGroup);

    // 5. Furniture & Props: Minimalist Workstation & Plant (As in video background)
    // Credenza / Cabinet against back wall
    const credenzaGeo = new THREE.BoxGeometry(5.5, 1.8, 1.2);
    const credenzaMat = new THREE.MeshStandardMaterial({
      color: 0xfdfaf6,
      roughness: 0.3,
    });
    const credenza = new THREE.Mesh(credenzaGeo, credenzaMat);
    credenza.position.set(-1, 0.9, -14);
    credenza.castShadow = true;
    credenza.receiveShadow = true;
    scene.add(credenza);

    // Pastel Books & Devices on credenza
    const bookColors = [0x38bdf8, 0xf43f5e, 0x10b981, 0xfbbf24];
    for (let b = 0; b < 4; b++) {
      const book = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.6, 0.7),
        new THREE.MeshStandardMaterial({ color: bookColors[b] }),
      );
      book.position.set(-2.4 + b * 0.3, 1.95, -14);
      book.castShadow = true;
      scene.add(book);
    }

    // Modern Ceramic Plant Pot with Monstera Leaves
    const potGeo = new THREE.CylinderGeometry(0.65, 0.45, 1.1, 24);
    const potMat = new THREE.MeshStandardMaterial({
      color: 0xdd6b4d, // Terracotta
      roughness: 0.8,
    });
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.position.set(-5.5, 0.55, -13.8);
    pot.castShadow = true;
    scene.add(pot);

    // Leaves
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.4,
      side: THREE.DoubleSide,
    });
    for (let l = 0; l < 5; l++) {
      const angle = (l / 5) * Math.PI * 2;
      const leafStem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 1.2, 8),
        leafMat,
      );
      leafStem.position.set(
        -5.5 + Math.cos(angle) * 0.3,
        1.5,
        -13.8 + Math.sin(angle) * 0.3,
      );
      leafStem.rotation.z = Math.cos(angle) * 0.5;
      leafStem.rotation.x = Math.sin(angle) * 0.5;
      leafStem.castShadow = true;
      scene.add(leafStem);

      const leafBlade = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 8, 8),
        leafMat,
      );
      leafBlade.scale.set(1, 0.1, 1.8);
      leafBlade.position
        .copy(leafStem.position)
        .add(new THREE.Vector3(0, 0.5, 0));
      leafBlade.castShadow = true;
      scene.add(leafBlade);
    }

    // 6. Agility Ring / Hoop Obstacle on Floor (From video)
    const hoopGeo = new THREE.TorusGeometry(0.9, 0.08, 16, 32);
    const hoopMat = new THREE.MeshStandardMaterial({
      color: 0x2dd4bf, // Mint teal hoop
      roughness: 0.3,
    });
    const hoop = new THREE.Mesh(hoopGeo, hoopMat);
    hoop.rotation.x = -Math.PI / 2;
    hoop.position.set(1.8, 0.04, -2.5);
    scene.add(hoop);

    // Orange Agility Slalom Posts
    const poleColors = [0xf97316, 0xffffff, 0xf97316];
    for (let p = 0; p < 2; p++) {
      const poleGroup = new THREE.Group();
      const pz = -4.5 + p * 2.2;
      poleGroup.position.set(-1.2, 0, pz);

      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.35, 0.4, 0.1, 16),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8 }),
      );
      base.position.y = 0.05;
      base.castShadow = true;
      poleGroup.add(base);

      const poleStem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 1.8, 12),
        new THREE.MeshStandardMaterial({ color: 0xf97316 }),
      );
      poleStem.position.y = 0.95;
      poleStem.castShadow = true;
      poleGroup.add(poleStem);
      scene.add(poleGroup);
    }

    // 7. Interactive Green Tennis Ball with Physics!
    const ballRadius = 0.45;
    const ballGeo = new THREE.SphereGeometry(ballRadius, 32, 32);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0x93e047, // Vibrant lime tennis green
      roughness: 0.6,
      metalness: 0.05,
    });
    const ballMesh = new THREE.Mesh(ballGeo, ballMat);
    ballMesh.castShadow = true;
    ballMesh.receiveShadow = true;
    scene.add(ballMesh);

    // Tennis Seam (White line around ball)
    const seamGeo = new THREE.TorusGeometry(ballRadius + 0.005, 0.02, 16, 64);
    const seamMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const seam = new THREE.Mesh(seamGeo, seamMat);
    seam.rotation.x = Math.PI / 3;
    ballMesh.add(seam);

    // Ball Physics State
    const ballPos = new THREE.Vector3(0.5, ballRadius, -1.8);
    const ballVel = new THREE.Vector3(0, 0, 0);
    ballMesh.position.copy(ballPos);

    // --- INTERACTIVE PROJECT STATIONS (PRANATA'S ECOSYSTEM) ---
    const stationRings: THREE.Mesh[] = [];

    ZONES.forEach((zone) => {
      const [zx, , zz] = zone.position;

      // Outer Pulsing Glow Disc on Floor
      const discGeo = new THREE.RingGeometry(1.6, 2.1, 32);
      const discMat = new THREE.MeshBasicMaterial({
        color: zone.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
      });
      const disc = new THREE.Mesh(discGeo, discMat);
      disc.rotation.x = -Math.PI / 2;
      disc.position.set(zx, 0.03, zz);
      scene.add(disc);
      stationRings.push(disc);

      // Kiosk Station Hub
      const sGroup = new THREE.Group();
      sGroup.position.set(zx, 0, zz);

      // Pedestal Base
      const baseGeo = new THREE.CylinderGeometry(1.1, 1.3, 0.4, 16);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
      });
      const base = new THREE.Mesh(baseGeo, baseMat);
      base.position.y = 0.2;
      base.castShadow = true;
      base.receiveShadow = true;
      sGroup.add(base);

      if (zone.stationType === "factory") {
        // KKF Label: Packaging roll model & ERP terminal
        const rollGeo = new THREE.CylinderGeometry(0.55, 0.55, 1.2, 24);
        const rollMat = new THREE.MeshStandardMaterial({
          color: zone.color,
          roughness: 0.4,
        });
        const roll = new THREE.Mesh(rollGeo, rollMat);
        roll.position.set(0, 1.1, 0);
        roll.rotation.z = Math.PI / 2;
        roll.castShadow = true;
        sGroup.add(roll);
      } else if (zone.stationType === "pos") {
        // PJTech UMKM: Cashier register console & barcode scanner
        const desk = new THREE.Mesh(
          new THREE.BoxGeometry(1.2, 1, 0.9),
          new THREE.MeshStandardMaterial({ color: 0x1e293b }),
        );
        desk.position.y = 0.7;
        desk.castShadow = true;
        sGroup.add(desk);

        const screen = new THREE.Mesh(
          new THREE.BoxGeometry(0.8, 0.5, 0.08),
          new THREE.MeshBasicMaterial({ color: zone.color }),
        );
        screen.position.set(0, 1.4, 0.1);
        screen.rotation.x = -0.3;
        sGroup.add(screen);
      } else if (zone.stationType === "cloud") {
        // PranaJaya Tech: Server tower with glowing LED strips
        const tower = new THREE.Mesh(
          new THREE.BoxGeometry(0.9, 1.8, 0.9),
          new THREE.MeshStandardMaterial({
            color: 0x0f172a,
            roughness: 0.3,
            metalness: 0.7,
          }),
        );
        tower.position.y = 1.1;
        tower.castShadow = true;
        sGroup.add(tower);

        const ledStrip = new THREE.Mesh(
          new THREE.BoxGeometry(0.08, 1.4, 0.92),
          new THREE.MeshBasicMaterial({ color: zone.color }),
        );
        ledStrip.position.set(0.42, 1.1, 0);
        sGroup.add(ledStrip);
      } else if (zone.stationType === "radar") {
        // Whale Predator: Cyber radar dish
        const mast = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.18, 1.2, 8),
          new THREE.MeshStandardMaterial({ color: 0x475569 }),
        );
        mast.position.y = 0.8;
        sGroup.add(mast);

        const dish = new THREE.Mesh(
          new THREE.ConeGeometry(0.9, 0.45, 16),
          new THREE.MeshStandardMaterial({ color: zone.color, roughness: 0.2 }),
        );
        dish.position.set(0, 1.4, 0);
        dish.rotation.x = Math.PI / 4;
        dish.castShadow = true;
        sGroup.add(dish);
      } else if (zone.stationType === "clinic") {
        // Klinik Pratama: Healthcare pillar with 3D Cross
        const pillar = new THREE.Mesh(
          new THREE.BoxGeometry(0.9, 1.4, 0.9),
          new THREE.MeshStandardMaterial({ color: 0xffffff }),
        );
        pillar.position.y = 0.9;
        pillar.castShadow = true;
        sGroup.add(pillar);

        const crossH = new THREE.Mesh(
          new THREE.BoxGeometry(0.8, 0.25, 0.95),
          new THREE.MeshStandardMaterial({ color: zone.color }),
        );
        crossH.position.y = 1.1;
        sGroup.add(crossH);

        const crossV = new THREE.Mesh(
          new THREE.BoxGeometry(0.25, 0.8, 0.95),
          new THREE.MeshStandardMaterial({ color: zone.color }),
        );
        crossV.position.y = 1.1;
        sGroup.add(crossV);
      } else {
        // Campus UNSAP: Degree pedestal with graduation cap
        const col = new THREE.Mesh(
          new THREE.CylinderGeometry(0.4, 0.45, 1.3, 16),
          new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }),
        );
        col.position.y = 0.85;
        col.castShadow = true;
        sGroup.add(col);

        const cap = new THREE.Mesh(
          new THREE.BoxGeometry(0.9, 0.12, 0.9),
          new THREE.MeshStandardMaterial({ color: zone.color }),
        );
        cap.position.y = 1.55;
        cap.rotation.y = Math.PI / 4;
        sGroup.add(cap);
      }

      // Floating Hologram Diamond above kiosk
      const diamond = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.3, 0),
        new THREE.MeshStandardMaterial({
          color: zone.color,
          emissive: zone.color,
          emissiveIntensity: 0.5,
          roughness: 0.1,
        }),
      );
      diamond.position.y = 2.4;
      sGroup.add(diamond);

      scene.add(sGroup);
    });

    // --- PROCEDURAL 3D ROBOT DOG: BOLT (THE STAR COMPANION) ---
    const bolt = new THREE.Group();
    bolt.position.set(0, 0, 1);

    // 1. Chassis / Torso
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc, // Clean ceramic white
      roughness: 0.25,
      metalness: 0.15,
    });
    const darkAccentMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Dark graphite joints
      roughness: 0.4,
    });
    const cyanLedMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee, // Glowing cyan visor/accent
    });

    // Body Core
    const bodyGeo = new THREE.BoxGeometry(0.85, 0.55, 1.25);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 0.75;
    bodyMesh.castShadow = true;
    bolt.add(bodyMesh);

    // Spine Spine Cyber Strip
    const spineGeo = new THREE.BoxGeometry(0.2, 0.08, 1.05);
    const spine = new THREE.Mesh(spineGeo, darkAccentMat);
    spine.position.set(0, 1.05, 0);
    bolt.add(spine);

    // 2. Neck & Head
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.22, 0.35, 12),
      darkAccentMat,
    );
    neck.position.set(0, 0.95, 0.6);
    neck.rotation.x = 0.4;
    bolt.add(neck);

    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.15, 0.75);

    // Head Unit
    const headBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 0.45, 0.6),
      bodyMat,
    );
    headBox.castShadow = true;
    headGroup.add(headBox);

    // Glossy Dark Visor Faceplate
    const visorFace = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.28, 0.08),
      new THREE.MeshStandardMaterial({
        color: 0x090d16,
        roughness: 0.05,
      }),
    );
    visorFace.position.set(0, 0.02, 0.31);
    headGroup.add(visorFace);

    // Glowing Cyan Digital Eyes [ ●   ● ]
    const leftEye = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.08, 0.02),
      cyanLedMat,
    );
    leftEye.position.set(-0.16, 0.03, 0.36);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.08, 0.02),
      cyanLedMat,
    );
    rightEye.position.set(0.16, 0.03, 0.36);
    headGroup.add(rightEye);

    // Cute Robotic Antenna Ears
    const earGeo = new THREE.ConeGeometry(0.1, 0.35, 4);
    const leftEar = new THREE.Mesh(earGeo, darkAccentMat);
    leftEar.position.set(-0.32, 0.3, -0.05);
    leftEar.rotation.z = -0.4;
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, darkAccentMat);
    rightEar.position.set(0.32, 0.3, -0.05);
    rightEar.rotation.z = 0.4;
    headGroup.add(rightEar);

    bolt.add(headGroup);

    // 3. Wagging Tail
    const tailGroup = new THREE.Group();
    tailGroup.position.set(0, 0.9, -0.6);

    const tailStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.06, 0.5, 8),
      darkAccentMat,
    );
    tailStem.position.set(0, 0.2, -0.15);
    tailStem.rotation.x = -0.7;
    tailGroup.add(tailStem);

    const tailTip = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 8, 8),
      cyanLedMat,
    );
    tailTip.position.set(0, 0.4, -0.32);
    tailGroup.add(tailTip);
    bolt.add(tailGroup);

    // 4. Four Articulated Quadruped Legs: FL, FR, BL, BR
    interface LegRig {
      group: THREE.Group;
      upper: THREE.Mesh;
      lower: THREE.Mesh;
      paw: THREE.Mesh;
      baseX: number;
      baseZ: number;
    }

    const legs: LegRig[] = [];
    const legPositions: [number, number, string][] = [
      [-0.45, 0.42, "FL"],
      [0.45, 0.42, "FR"],
      [-0.45, -0.42, "BL"],
      [0.45, -0.42, "BR"],
    ];

    legPositions.forEach(([lx, lz]) => {
      const legPivot = new THREE.Group();
      legPivot.position.set(lx, 0.65, lz);

      // Shoulder Hip
      const hip = new THREE.Mesh(
        new THREE.SphereGeometry(0.14, 12, 12),
        darkAccentMat,
      );
      legPivot.add(hip);

      // Upper Leg
      const upperLeg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.07, 0.35, 8),
        bodyMat,
      );
      upperLeg.position.set(0, -0.18, 0);
      upperLeg.castShadow = true;
      legPivot.add(upperLeg);

      // Knee Joint
      const knee = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 8, 8),
        darkAccentMat,
      );
      knee.position.set(0, -0.35, 0);
      legPivot.add(knee);

      // Lower Leg & Paw
      const lowerLeg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.3, 8),
        darkAccentMat,
      );
      lowerLeg.position.set(0, -0.5, 0);
      legPivot.add(lowerLeg);

      // Rubber Foot Paw
      const paw = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.09, 0.12, 4, 8),
        darkAccentMat,
      );
      paw.position.set(0, -0.65, 0.04);
      paw.rotation.x = Math.PI / 2;
      paw.castShadow = true;
      legPivot.add(paw);

      bolt.add(legPivot);
      legs.push({
        group: legPivot,
        upper: upperLeg,
        lower: lowerLeg,
        paw: paw,
        baseX: lx,
        baseZ: lz,
      });
    });

    // Shadow Blob under Bolt
    const shadowGeo = new THREE.CircleGeometry(0.65, 24);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.35,
    });
    const boltShadow = new THREE.Mesh(shadowGeo, shadowMat);
    boltShadow.rotation.x = -Math.PI / 2;
    boltShadow.position.y = 0.03;
    bolt.add(boltShadow);

    scene.add(bolt);

    // --- CONTROLS & INTERACTION STATE ---
    const keys: Record<string, boolean> = {
      up: false,
      down: false,
      left: false,
      right: false,
      shift: false,
      space: false,
    };

    // Third-person Orbit Camera Parameters
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let orbitYaw = 0; // Horizontal orbit around Bolt
    let orbitPitch = 0.42; // Vertical elevation (~24 deg)
    let orbitDistance = 11.5; // Distance from Bolt

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouse = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - prevMouse.x;
      const deltaY = clientY - prevMouse.y;

      orbitYaw -= deltaX * 0.006;
      orbitPitch = Math.max(0.12, Math.min(1.2, orbitPitch + deltaY * 0.005));

      prevMouse = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      orbitDistance = Math.max(
        5.5,
        Math.min(22, orbitDistance + e.deltaY * 0.015),
      );
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    dom.addEventListener("wheel", handleWheel, { passive: false });

    // Keyboard Listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "KeyW" || e.code === "ArrowUp") keys.up = true;
      if (e.code === "KeyS" || e.code === "ArrowDown") keys.down = true;
      if (e.code === "KeyA" || e.code === "ArrowLeft") keys.left = true;
      if (e.code === "KeyD" || e.code === "ArrowRight") keys.right = true;
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") keys.shift = true;
      if (e.code === "Space") {
        keys.space = true;
        // Jump Bolt
        if (boltVerticalVel === 0 && boltYPos <= 0.05) {
          boltVerticalVel = 9.5;
          playSound("jump");
        }
      }
      if (e.code === "KeyE") {
        if (nearZoneRef.current) {
          triggerOpenZone(nearZoneRef.current);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "KeyW" || e.code === "ArrowUp") keys.up = false;
      if (e.code === "KeyS" || e.code === "ArrowDown") keys.down = false;
      if (e.code === "KeyA" || e.code === "ArrowLeft") keys.left = false;
      if (e.code === "KeyD" || e.code === "ArrowRight") keys.right = false;
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") keys.shift = false;
      if (e.code === "Space") keys.space = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Mobile touch virtual joystick
    const touchMove = { x: 0, y: 0, sprint: false, jump: false };
    (
      window as unknown as {
        __setTouchControls?: (
          dx: number,
          dy: number,
          sprint?: boolean,
          jump?: boolean,
        ) => void;
      }
    ).__setTouchControls = (dx, dy, sprint, jump) => {
      touchMove.x = dx;
      touchMove.y = dy;
      touchMove.sprint = !!sprint;
      if (jump && boltVerticalVel === 0 && boltYPos <= 0.05) {
        boltVerticalVel = 9.5;
        playSound("jump");
      }
    };

    // Physics & Animation Loop Variables
    let boltYPos = 0;
    let boltVerticalVel = 0;
    let walkPhase = 0;
    let stepSoundTimer = 0;
    const nearZoneRef = { current: null as ZoneData | null };

    const triggerOpenZone = (zone: ZoneData) => {
      setActiveZone(zone);
      playSound("open");
      setVisitedZones((prev) => {
        if (!prev.includes(zone.id)) {
          const updated = [...prev, zone.id];
          if (updated.length === ZONES.length) {
            playSound("win");
          }
          return updated;
        }
        return prev;
      });
    };

    // --- ANIMATION / GAME LOOP ---
    let reqId: number;
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.08);
      const time = clock.getElapsedTime();

      // FPS Counter calculation
      frameCount++;
      const nowMs = performance.now();
      if (nowMs - lastFpsUpdate >= 1000) {
        setFps(Math.round((frameCount * 1000) / (nowMs - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = nowMs;
      }

      // 1. Station Discs & Hologram Diamonds Pulse
      stationRings.forEach((ring, i) => {
        const sc = 1 + Math.sin(time * 3 + i) * 0.08;
        ring.scale.set(sc, sc, 1);
      });

      // 2. Bolt Movement Input & Camera-Relative Direction
      let inputX = 0;
      let inputZ = 0;

      if (keys.up) inputZ -= 1;
      if (keys.down) inputZ += 1;
      if (keys.left) inputX -= 1;
      if (keys.right) inputX += 1;

      if (touchMove.x !== 0 || touchMove.y !== 0) {
        inputX += touchMove.x;
        inputZ += touchMove.y;
      }

      const isSprinting = keys.shift || touchMove.sprint;
      const speed = isSprinting ? 12.5 : 6.8;
      const isMoving = inputX !== 0 || inputZ !== 0;

      if (boltVerticalVel > 0 || boltYPos > 0.05) {
        setBoltState("jumping");
      } else if (isMoving) {
        setBoltState(isSprinting ? "sprinting" : "walking");
      } else {
        setBoltState("idle");
      }

      if (isMoving) {
        // Calculate camera-relative movement vector
        const forward = new THREE.Vector3(
          -Math.sin(orbitYaw),
          0,
          -Math.cos(orbitYaw),
        ).normalize();
        const right = new THREE.Vector3(
          Math.cos(orbitYaw),
          0,
          -Math.sin(orbitYaw),
        ).normalize();

        const moveDir = new THREE.Vector3()
          .addScaledVector(forward, -inputZ)
          .addScaledVector(right, inputX)
          .normalize();

        bolt.position.x += moveDir.x * speed * delta;
        bolt.position.z += moveDir.z * speed * delta;

        // Smoothly face movement direction
        const targetRotY = Math.atan2(moveDir.x, moveDir.z);
        bolt.rotation.y = THREE.MathUtils.lerp(
          bolt.rotation.y,
          targetRotY,
          0.22,
        );

        // Quadruped Trot Gait Animation
        const gaitSpeed = isSprinting ? 22 : 12;
        walkPhase += delta * gaitSpeed;
        const swing = Math.sin(walkPhase) * (isSprinting ? 0.65 : 0.45);

        // Diagonal leg synchronization (FL & BR pair vs FR & BL pair)
        legs[0].group.rotation.x = swing; // FL
        legs[3].group.rotation.x = swing; // BR
        legs[1].group.rotation.x = -swing; // FR
        legs[2].group.rotation.x = -swing; // BL

        // Vertical body bounce during trot
        bodyMesh.position.y = 0.75 + Math.abs(Math.sin(walkPhase)) * 0.09;
        headGroup.position.y = 1.15 + Math.abs(Math.sin(walkPhase)) * 0.06;

        // Tail wag during movement
        tailGroup.rotation.y = Math.sin(time * 14) * 0.45;

        // Audio footstep ticker
        stepSoundTimer += delta;
        if (stepSoundTimer > (isSprinting ? 0.2 : 0.35)) {
          playSound("step");
          stepSoundTimer = 0;
        }
      } else {
        // Idle Animation: Relaxed breathing, tail wag, reset legs
        walkPhase = 0;
        legs.forEach((leg) => {
          leg.group.rotation.x = THREE.MathUtils.lerp(
            leg.group.rotation.x,
            0,
            0.2,
          );
        });
        bodyMesh.position.y = 0.75 + Math.sin(time * 2.5) * 0.03;
        headGroup.position.y = 1.15 + Math.sin(time * 2.5) * 0.02;
        tailGroup.rotation.y = Math.sin(time * 3.5) * 0.2;
      }

      // Jump Physics (Gravity & Floor/Ramp Height)
      if (boltVerticalVel !== 0 || boltYPos > 0) {
        boltYPos += boltVerticalVel * delta;
        boltVerticalVel -= 28 * delta; // Gravity
        if (boltYPos <= 0) {
          boltYPos = 0;
          boltVerticalVel = 0;
        }
      }

      // Playroom Room Boundaries (R = 15.5m)
      const distFromCenter = Math.sqrt(
        bolt.position.x ** 2 + bolt.position.z ** 2,
      );
      if (distFromCenter > 15.2) {
        bolt.position.x = (bolt.position.x / distFromCenter) * 15.2;
        bolt.position.z = (bolt.position.z / distFromCenter) * 15.2;
      }

      // Check Ramp Height (If Bolt is on the platform/ramp)
      let groundHeight = 0;
      if (
        bolt.position.x > -14.5 &&
        bolt.position.x < -7.5 &&
        bolt.position.z > -10.5 &&
        bolt.position.z < -5.5
      ) {
        // On elevated wooden platform
        groundHeight = 1.4;
      }
      bolt.position.y = groundHeight + boltYPos;

      // 3. Interactive Tennis Ball Physics & Bolt Kick Collision
      // Ball velocity & position update
      ballPos.x += ballVel.x * delta;
      ballPos.y += ballVel.y * delta;
      ballPos.z += ballVel.z * delta;

      // Ball gravity
      if (ballPos.y > ballRadius) {
        ballVel.y -= 24 * delta;
      } else {
        ballPos.y = ballRadius;
        if (Math.abs(ballVel.y) > 0.8) {
          ballVel.y = -ballVel.y * 0.45; // Bounce
        } else {
          ballVel.y = 0;
        }
      }

      // Friction damping
      ballVel.x *= 0.965;
      ballVel.z *= 0.965;

      // Ball rolling rotation based on velocity
      const ballSpeed = Math.sqrt(ballVel.x ** 2 + ballVel.z ** 2);
      if (ballSpeed > 0.05) {
        ballMesh.rotation.x += (ballVel.z / ballRadius) * delta;
        ballMesh.rotation.z -= (ballVel.x / ballRadius) * delta;
      }

      // Ball boundary bounce off room walls
      const ballDistCenter = Math.sqrt(ballPos.x ** 2 + ballPos.z ** 2);
      if (ballDistCenter > 15.2) {
        ballPos.x = (ballPos.x / ballDistCenter) * 15.2;
        ballPos.z = (ballPos.z / ballDistCenter) * 15.2;
        ballVel.x = -ballVel.x * 0.6;
        ballVel.z = -ballVel.z * 0.6;
      }

      // Bolt collision with Ball (Kick mechanic)
      const boltPos2D = new THREE.Vector2(bolt.position.x, bolt.position.z);
      const ballPos2D = new THREE.Vector2(ballPos.x, ballPos.z);
      const distToBall = boltPos2D.distanceTo(ballPos2D);
      const collisionThreshold = 0.85;

      if (distToBall < collisionThreshold) {
        const kickDir = ballPos2D.clone().sub(boltPos2D).normalize();
        const kickPower = isSprinting ? 14 : 7.5;
        ballVel.x = kickDir.x * kickPower;
        ballVel.z = kickDir.y * kickPower;
        ballVel.y = 2.4; // Small pop hop
        playSound("ball");

        // Push ball outside collision threshold
        ballPos.x = bolt.position.x + kickDir.x * collisionThreshold;
        ballPos.z = bolt.position.z + kickDir.y * collisionThreshold;
      }

      ballMesh.position.copy(ballPos);

      // 4. Smooth Third-Person Orbit Camera Follow
      const targetFocus = new THREE.Vector3(
        bolt.position.x,
        bolt.position.y + 0.8,
        bolt.position.z,
      );

      const camOffset = new THREE.Vector3(
        Math.sin(orbitYaw) * Math.cos(orbitPitch) * orbitDistance,
        Math.sin(orbitPitch) * orbitDistance,
        Math.cos(orbitYaw) * Math.cos(orbitPitch) * orbitDistance,
      );

      const targetCamPos = targetFocus.clone().add(camOffset);
      camera.position.lerp(targetCamPos, 0.1);
      camera.lookAt(targetFocus);

      // 5. Proximity Detection to Project Stations
      let foundNear: ZoneData | null = null;
      ZONES.forEach((zone) => {
        const [zx, , zz] = zone.position;
        const d = Math.sqrt(
          (bolt.position.x - zx) ** 2 + (bolt.position.z - zz) ** 2,
        );
        if (d < 3.2) {
          foundNear = zone;
        }
      });

      if (foundNear !== nearZoneRef.current) {
        if (foundNear && !nearZoneRef.current) {
          playSound("discover");
        }
        nearZoneRef.current = foundNear;
        setNearZone(foundNear);
      }

      // 6. Draw Mini-Map (Live Radar in Bottom Right)
      if (miniMapCanvasRef.current) {
        const canvas = miniMapCanvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const mapSize = canvas.width;
          const mapCenter = mapSize / 2;
          const mapScale = (mapSize / 34) * 0.9;

          ctx.clearRect(0, 0, mapSize, mapSize);

          // Room boundary circle
          ctx.beginPath();
          ctx.arc(mapCenter, mapCenter, 15.2 * mapScale, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(241, 245, 249, 0.85)";
          ctx.fill();
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = "#cbd5e1";
          ctx.stroke();

          // Terracotta ring path
          ctx.beginPath();
          ctx.arc(
            mapCenter,
            mapCenter - 1 * mapScale,
            6 * mapScale,
            0,
            Math.PI * 2,
          );
          ctx.lineWidth = 4 * mapScale;
          ctx.strokeStyle = "rgba(224, 122, 95, 0.35)";
          ctx.stroke();

          // Stations dots
          ZONES.forEach((zone) => {
            const [zx, , zz] = zone.position;
            const sx = mapCenter + zx * mapScale;
            const sy = mapCenter + zz * mapScale;

            ctx.beginPath();
            ctx.arc(sx, sy, 4.5, 0, Math.PI * 2);
            ctx.fillStyle = zone.hexColor;
            ctx.fill();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = "#ffffff";
            ctx.stroke();
          });

          // Tennis ball dot
          const bx = mapCenter + ballPos.x * mapScale;
          const by = mapCenter + ballPos.z * mapScale;
          ctx.beginPath();
          ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "#84cc16";
          ctx.fill();

          // Bolt Player Dot & Heading Indicator
          const px = mapCenter + bolt.position.x * mapScale;
          const py = mapCenter + bolt.position.z * mapScale;

          // Heading cone/arrow
          ctx.save();
          ctx.translate(px, py);
          ctx.rotate(bolt.rotation.y);

          ctx.beginPath();
          ctx.moveTo(0, 7);
          ctx.lineTo(-4, -4);
          ctx.lineTo(4, -4);
          ctx.closePath();
          ctx.fillStyle = "#0284c7";
          ctx.fill();
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = "#ffffff";
          ctx.stroke();

          ctx.restore();
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      dom.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      dom.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      delete (window as unknown as { __setTouchControls?: unknown })
        .__setTouchControls;
    };
  }, [audioEnabled]);

  // Virtual Touch Joystick for Mobile
  const joystickRef = useRef<HTMLDivElement>(null);
  const [touchActive, setTouchActive] = useState(false);
  const [knobPos, setKnobPos] = useState({ x: 0, y: 0 });
  const [isMobileSprinting, setIsMobileSprinting] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchActive(true);
    handleTouchMove(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!joystickRef.current) return;
    const touch = e.touches[0];
    const rect = joystickRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let deltaX = touch.clientX - centerX;
    let deltaY = touch.clientY - centerY;
    const maxRadius = rect.width / 2;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    if (distance > maxRadius) {
      deltaX = (deltaX / distance) * maxRadius;
      deltaY = (deltaY / distance) * maxRadius;
    }

    setKnobPos({ x: deltaX, y: deltaY });

    const normX = deltaX / maxRadius;
    const normY = deltaY / maxRadius;
    const setter = (
      window as unknown as {
        __setTouchControls?: (
          dx: number,
          dy: number,
          sprint?: boolean,
          jump?: boolean,
        ) => void;
      }
    ).__setTouchControls;
    if (setter) setter(normX, normY, isMobileSprinting, false);
  };

  const handleTouchEnd = () => {
    setTouchActive(false);
    setKnobPos({ x: 0, y: 0 });
    const setter = (
      window as unknown as {
        __setTouchControls?: (
          dx: number,
          dy: number,
          sprint?: boolean,
          jump?: boolean,
        ) => void;
      }
    ).__setTouchControls;
    if (setter) setter(0, 0, isMobileSprinting, false);
  };

  const handleMobileJump = () => {
    const setter = (
      window as unknown as {
        __setTouchControls?: (
          dx: number,
          dy: number,
          sprint?: boolean,
          jump?: boolean,
        ) => void;
      }
    ).__setTouchControls;
    if (setter) setter(knobPos.x / 50, knobPos.y / 50, isMobileSprinting, true);
  };

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen overflow-hidden bg-[#f6f1eb] select-none font-sans">
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* TOP LEFT: Brand Logo & Title (Matching Dea Afrizal's video: ROAM. ROBOT DOG SANCTUARY) */}
      <header className="absolute top-5 left-5 z-20 flex flex-col pointer-events-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-md">
            🐾
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900 leading-none">
              ROAM.
            </div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mt-0.5">
              ROBOT DOG SANCTUARY
            </div>
          </div>
        </div>
      </header>

      {/* TOP RIGHT: The Playroom 01 Badge + Audio + Return Link */}
      <div className="absolute top-5 right-5 z-20 flex items-center gap-3 pointer-events-auto">
        {/* Playroom Badge */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-bold text-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>THE PLAYROOM</span>
          <span className="text-slate-400 font-mono text-[11px]">01</span>
        </div>

        {/* Audio FX Toggle */}
        <button
          onClick={() => setAudioEnabled(!audioEnabled)}
          aria-label="Toggle Audio"
          className="p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:bg-white text-slate-700 transition cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
        >
          {audioEnabled ? (
            <Volume2 className="w-4 h-4 text-blue-600" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}
        </button>

        {/* Back to Portfolio */}
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition shadow-sm min-h-[40px]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Portofolio</span>
        </Link>
      </div>

      {/* FLOATING HERO TYPOGRAPHY (Matching Dea Afrizal's video aesthetic) */}
      {showHeroBanner && (
        <div className="absolute top-24 left-6 sm:left-10 z-10 pointer-events-auto max-w-sm space-y-2 select-none animate-in fade-in duration-500">
          <div className="text-[11px] font-extrabold tracking-widest uppercase text-slate-400">
            MADE FOR WANDERING
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
            A little room.
            <br />A big adventure.
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
            Ajak Bolt berjalan mengelilingi playroom untuk menemukan ekosistem
            proyek nyata &amp; domain resmi Pranata Pramudya.
          </p>
          <div className="pt-1 flex items-center gap-2">
            <button
              onClick={() => setShowHeroBanner(false)}
              className="text-[11px] font-bold text-slate-400 hover:text-slate-700 underline cursor-pointer"
            >
              Sembunyikan teks panduan
            </button>
          </div>
        </div>
      )}

      {/* PROXIMITY INTERACTION BANNER (Appears when Bolt is near a Station) */}
      {nearZone && !activeZone && (
        <div className="absolute bottom-28 sm:bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-auto animate-bounce">
          <button
            onClick={() => {
              setActiveZone(nearZone);
              playSound("open");
              setVisitedZones((prev) =>
                prev.includes(nearZone.id) ? prev : [...prev, nearZone.id],
              );
            }}
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-950 text-white border-2 shadow-2xl hover:scale-105 transition-all cursor-pointer font-bold text-sm min-h-[48px]"
            style={{ borderColor: nearZone.hexColor }}
          >
            <Sparkles
              className="w-5 h-5 animate-spin"
              style={{ color: nearZone.hexColor }}
            />
            <span>Periksa {nearZone.title}</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-white/20 font-mono">
              [SPACE / E / TAP]
            </span>
          </button>
        </div>
      )}

      {/* BOTTOM LEFT: YOUR COMPANION CARD (Direct replica from Dea Afrizal's video) */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-auto">
        <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-lg p-3.5 sm:p-4 min-w-[210px] sm:min-w-[240px] space-y-1">
          <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            <span>YOUR COMPANION</span>
            <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-mono">
              A-01
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center justify-between">
            <span>BOLT.</span>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
              {boltState}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">
            Your curious little cyber companion
          </p>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Out exploring</span>
            </div>
            <div className="font-mono text-slate-400">{fps} fps</div>
          </div>
        </div>
      </div>

      {/* BOTTOM CENTER: KEYCAP CONTROLS BAR (Matching video: W A S D, Shift, Space, Drag, Scroll) */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto items-center gap-2 bg-white/85 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-200 shadow-md text-xs font-semibold text-slate-700">
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-300 font-mono text-[11px] font-bold">
            W A S D
          </span>
          <span className="text-slate-500">Move</span>
        </div>
        <span className="text-slate-300">|</span>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-300 font-mono text-[11px] font-bold">
            Shift
          </span>
          <span className="text-slate-500">Sprint</span>
        </div>
        <span className="text-slate-300">|</span>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-300 font-mono text-[11px] font-bold">
            Space
          </span>
          <span className="text-slate-500">Jump / Kick</span>
        </div>
        <span className="text-slate-300">|</span>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-300 font-mono text-[11px] font-bold">
            Drag
          </span>
          <span className="text-slate-500">Orbit</span>
        </div>
        <span className="text-slate-300">|</span>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-300 font-mono text-[11px] font-bold">
            Scroll
          </span>
          <span className="text-slate-500">Zoom</span>
        </div>
      </div>

      {/* BOTTOM RIGHT: CIRCULAR RADAR MINI-MAP (Matching Dea Afrizal's video mini-map) */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto flex flex-col items-center">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-lg flex items-center justify-center">
          <canvas
            ref={miniMapCanvasRef}
            width={128}
            height={128}
            className="w-full h-full rounded-full"
          />
          <div className="absolute bottom-1.5 text-[9px] font-bold text-slate-400 tracking-wider uppercase font-mono">
            Sanctuary 01
          </div>
        </div>
      </div>

      {/* MOBILE CONTROLS (Joystick on Left, Sprint & Jump on Right) */}
      <div className="md:hidden absolute bottom-24 left-6 z-20 touch-none select-none">
        <div
          ref={joystickRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-24 h-24 rounded-full bg-slate-900/60 border-2 border-white/60 backdrop-blur-sm flex items-center justify-center shadow-xl"
        >
          <div
            className={`w-10 h-10 rounded-full bg-blue-500 shadow-md transition-transform ${
              touchActive ? "scale-110" : ""
            }`}
            style={{
              transform: `translate(${knobPos.x}px, ${knobPos.y}px)`,
            }}
          />
        </div>
      </div>

      <div className="md:hidden absolute bottom-24 right-6 z-20 flex flex-col gap-2.5 touch-none select-none">
        <button
          onClick={handleMobileJump}
          className="w-12 h-12 rounded-full bg-slate-900/80 text-white font-bold text-xs flex items-center justify-center border border-white/50 shadow-lg active:scale-95"
        >
          JUMP
        </button>
        <button
          onClick={() => setIsMobileSprinting(!isMobileSprinting)}
          className={`w-12 h-12 rounded-full font-bold text-[10px] flex items-center justify-center border shadow-lg active:scale-95 ${
            isMobileSprinting
              ? "bg-amber-500 text-slate-950 border-white"
              : "bg-slate-900/80 text-white border-white/50"
          }`}
        >
          RUN
        </button>
      </div>

      {/* MODAL: PROJECT TERMINAL DETAILS (Official domains verified) */}
      {activeZone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-2xl space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md text-white shadow-2xs"
                    style={{ backgroundColor: activeZone.hexColor }}
                  >
                    {activeZone.year} • {activeZone.category}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {activeZone.stats}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-slate-900">
                  {activeZone.title}
                </h2>
                <p className="text-xs font-semibold text-slate-500">
                  {activeZone.subtitle}
                </p>
              </div>

              <button
                onClick={() => setActiveZone(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {activeZone.description}
            </p>

            {/* Tech Badges */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Stack Teknologi &amp; Riset:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeZone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              {activeZone.liveUrl ? (
                <a
                  href={activeZone.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 transition-all shadow-md min-h-[44px] hover:opacity-90"
                  style={{ backgroundColor: activeZone.hexColor }}
                >
                  <span>
                    Buka Domain Resmi (
                    {activeZone.liveUrl.replace("https://", "")})
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="flex-1 px-4 py-3 rounded-xl text-xs font-medium bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-between min-h-[44px]">
                  <span>Arsitektur Sistem Internal</span>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
              )}

              <button
                onClick={() => setActiveZone(null)}
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors min-h-[44px] cursor-pointer"
              >
                Lanjut Bermain
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ALL STATIONS VISITED BANNER */}
      {visitedZones.length === ZONES.length && !activeZone && (
        <div className="absolute top-20 right-5 z-20 pointer-events-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-2xl shadow-xl max-w-xs space-y-1 animate-in slide-in-from-right duration-300">
          <div className="flex items-center gap-2 font-bold text-sm">
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span>Misi Selesai 100%!</span>
          </div>
          <p className="text-xs text-emerald-100">
            Hebat! Kamu bersama Bolt telah menjelajahi seluruh ekosistem proyek
            dan pencapaian Pranata Pramudya.
          </p>
        </div>
      )}
    </div>
  );
}
