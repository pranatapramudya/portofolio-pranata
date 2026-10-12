"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  ArrowLeft,
  ExternalLink,
  Gamepad2,
  Compass,
  CheckCircle,
  Trophy,
  X,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
  ChevronRight,
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
  buildingType: "factory" | "shop" | "cloud" | "radar" | "clinic" | "campus";
}

const ZONES: ZoneData[] = [
  {
    id: "kkf-label",
    title: "KKF Label HQ",
    subtitle: "Industrial ERP & Manufacturing Engine",
    category: "Enterprise System",
    year: "2026",
    color: 0x0284c7, // Sky Blue
    hexColor: "#0284c7",
    position: [-8, 0, -8],
    description:
      "Sistem otomasi ERP pabrik label kemasan industri skala besar. Dilengkapi kalkulator bahan baku dinamis dan analitik antrian pesanan.",
    tags: ["Next.js App Router", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://kkflabel.com",
    stats: "Produksi 10.000+ Roll Label/Bulan",
    buildingType: "factory",
  },
  {
    id: "pjtech-umkm",
    title: "PJTech UMKM Kasir",
    subtitle: "Cloud Point-of-Sale & Multi-Branch Engine",
    category: "Retail Ecosystem",
    year: "2026",
    color: 0x059669, // Emerald
    hexColor: "#059669",
    position: [8, 0, -8],
    description:
      "Platform digitalisasi kasir cerdas dan pembukuan komprehensif bagi pelaku UMKM dengan rekonsiliasi QRIS dan multi-tenant isolation.",
    tags: ["React 19", "Node.js", "Express", "Neon DB", "Redis"],
    liveUrl: "https://pjtechumkm.com",
    stats: "Aktif Melayani Ratusan UMKM",
    buildingType: "shop",
  },
  {
    id: "pranajaya-tech",
    title: "PranaJaya Tech Center",
    subtitle: "Digital Infrastructure & Cloud Hub",
    category: "Agency Infrastructure",
    year: "2026",
    color: 0x4f46e5, // Indigo
    hexColor: "#4f46e5",
    position: [-10, 0, 4],
    description:
      "Hub orkestrasi arsitektur cloud mandiri, DNS terpusat, sertifikasi SSL otomatis, dan engine deployment sistem multi-client.",
    tags: ["Next.js", "Docker", "Cloudflare DNS", "Nginx"],
    liveUrl: "https://pranajayatech.online",
    stats: "Uptime 99.9% Cloud Platform",
    buildingType: "cloud",
  },
  {
    id: "whale-tracker",
    title: "Whale Predator Radar",
    subtitle: "High-Throughput On-Chain Event Stream",
    category: "Real-Time Systems",
    year: "2025",
    color: 0x06b6d4, // Cyan
    hexColor: "#06b6d4",
    position: [10, 0, 4],
    description:
      "Engine pemantau pergerakan transaksi dompet kripto besar (whale) secara real-time via WebSocket dengan pemrosesan ribuan event/detik.",
    tags: ["WebSocket", "Redis Pub/Sub", "TypeScript", "TimescaleDB"],
    stats: "Sub-second Event Ingestion",
    buildingType: "radar",
  },
  {
    id: "clinic-saas",
    title: "Klinik Pratama & Skripsi",
    subtitle: "Clinical Workflow & Usability Research",
    category: "Healthcare System",
    year: "2023 - 2025",
    color: 0xe11d48, // Rose
    hexColor: "#e11d48",
    position: [-3, 0, 10],
    description:
      "Audit alur pelayanan rekam medis klinik yang sukses memangkas waktu input data pasien dari 6 menit menjadi 2 menit dengan validasi SUS.",
    tags: ["SUS Score 81.2", "Efisiensi 66%", "UCD Research", "ICD-10"],
    stats: "Skor SUS 'Excellent' (81.2)",
    buildingType: "clinic",
  },
  {
    id: "campus-unsap",
    title: "Universitas Sebelas April",
    subtitle: "Pendidikan S1 & Sertifikasi Google Cloud",
    category: "Academic & Certs",
    year: "2021 - 2025",
    color: 0x8b5cf6, // Violet
    hexColor: "#8b5cf6",
    position: [5, 0, 10],
    description:
      "Pendidikan Sarjana Teknik Informatika dengan predikat Sangat Memuaskan (IPK 3.43) serta sertifikasi resmi Google Cloud Computing.",
    tags: ["IPK 3.43", "Google Cloud", "Wadhwani Foundation"],
    stats: "Lulusan 2025 (S.Kom.)",
    buildingType: "campus",
  },
];

export default function PortfolioGame() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeZone, setActiveZone] = useState<ZoneData | null>(null);
  const [visitedZones, setVisitedZones] = useState<string[]>([]);
  const [nearZone, setNearZone] = useState<ZoneData | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showControlsHint, setShowControlsHint] = useState(true);

  // Audio synthesize ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play simple 8-bit sound fx using Web Audio API
  const playSound = (type: "step" | "discover" | "open" | "win") => {
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
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.05);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === "discover") {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === "open") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
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
      // Audio not supported or blocked
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f5f9); // Slate-100 clean sky
    scene.fog = new THREE.FogExp2(0xf1f5f9, 0.025);

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Isometric-style Perspective Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 18, 22);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(15, 25, 15);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 80;
    const d = 25;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // --- WORLD ENVIRONMENT / ISLAND ---
    // Floating island platform
    const islandGeo = new THREE.CylinderGeometry(18, 16, 2, 32);
    const islandMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
      metalness: 0.1,
    });
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.position.y = -1;
    island.receiveShadow = true;
    scene.add(island);

    // Grid Floor Overlay
    const gridHelper = new THREE.GridHelper(32, 32, 0xcbd5e1, 0xe2e8f0);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);

    // Center Plaza Pad
    const plazaGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.1, 32);
    const plazaMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.4,
    });
    const plaza = new THREE.Mesh(plazaGeo, plazaMat);
    plaza.position.y = 0.02;
    plaza.receiveShadow = true;
    scene.add(plaza);

    // Decorative Low-Poly Trees around island perimeter
    const treeMatTrunk = new THREE.MeshStandardMaterial({ color: 0x94a3b8 });
    const treeMatLeaves = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.6,
    });
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * Math.PI * 2;
      const radius = 15.5 + Math.sin(i * 3) * 0.8;
      const tx = Math.cos(angle) * radius;
      const tz = Math.sin(angle) * radius;

      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.25, 1.2, 6),
        treeMatTrunk,
      );
      trunk.position.set(tx, 0.6, tz);
      trunk.castShadow = true;
      scene.add(trunk);

      const foliage = new THREE.Mesh(
        new THREE.ConeGeometry(1.2, 2.2, 7),
        treeMatLeaves,
      );
      foliage.position.set(tx, 1.8, tz);
      foliage.castShadow = true;
      scene.add(foliage);
    }

    // --- BUILDINGS & INTERACTIVE ZONES ---
    const zoneRings: THREE.Mesh[] = [];

    ZONES.forEach((zone) => {
      const [zx, , zz] = zone.position;

      // Pedestal Ring
      const ringGeo = new THREE.RingGeometry(1.6, 2.1, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: zone.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(zx, 0.05, zz);
      scene.add(ring);
      zoneRings.push(ring);

      // Building Group
      const bGroup = new THREE.Group();
      bGroup.position.set(zx, 0, zz);

      // Procedural Low-Poly Landmark Buildings
      if (zone.buildingType === "factory") {
        // Factory Block + Chimney
        const body = new THREE.Mesh(
          new THREE.BoxGeometry(2.4, 2, 2),
          new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.5 }),
        );
        body.position.y = 1;
        body.castShadow = true;
        bGroup.add(body);

        const roof = new THREE.Mesh(
          new THREE.ConeGeometry(1.8, 1, 4),
          new THREE.MeshStandardMaterial({ color: zone.color }),
        );
        roof.position.y = 2.5;
        roof.rotation.y = Math.PI / 4;
        roof.castShadow = true;
        bGroup.add(roof);

        const chimney = new THREE.Mesh(
          new THREE.CylinderGeometry(0.25, 0.25, 1.5, 8),
          new THREE.MeshStandardMaterial({ color: 0x64748b }),
        );
        chimney.position.set(0.7, 2.5, 0.7);
        chimney.castShadow = true;
        bGroup.add(chimney);
      } else if (zone.buildingType === "shop") {
        // POS Storefront
        const shop = new THREE.Mesh(
          new THREE.BoxGeometry(2.2, 1.8, 2.2),
          new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }),
        );
        shop.position.y = 0.9;
        shop.castShadow = true;
        bGroup.add(shop);

        const awning = new THREE.Mesh(
          new THREE.BoxGeometry(2.4, 0.3, 0.8),
          new THREE.MeshStandardMaterial({ color: zone.color }),
        );
        awning.position.set(0, 1.8, 1.1);
        awning.rotation.x = 0.2;
        bGroup.add(awning);
      } else if (zone.buildingType === "cloud") {
        // Cloud Server Tower
        const tower = new THREE.Mesh(
          new THREE.CylinderGeometry(1, 1.2, 3, 8),
          new THREE.MeshStandardMaterial({
            color: 0x1e293b,
            roughness: 0.3,
            metalness: 0.6,
          }),
        );
        tower.position.y = 1.5;
        tower.castShadow = true;
        bGroup.add(tower);

        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(0.7, 16, 16),
          new THREE.MeshStandardMaterial({
            color: zone.color,
            emissive: zone.color,
            emissiveIntensity: 0.4,
          }),
        );
        orb.position.y = 3.5;
        bGroup.add(orb);
      } else if (zone.buildingType === "radar") {
        // Radar Dish Station
        const base = new THREE.Mesh(
          new THREE.CylinderGeometry(1.2, 1.4, 1.2, 8),
          new THREE.MeshStandardMaterial({ color: 0x334155 }),
        );
        base.position.y = 0.6;
        base.castShadow = true;
        bGroup.add(base);

        const dish = new THREE.Mesh(
          new THREE.ConeGeometry(1.4, 0.7, 16),
          new THREE.MeshStandardMaterial({ color: zone.color, roughness: 0.3 }),
        );
        dish.position.set(0, 1.8, 0);
        dish.rotation.x = Math.PI / 4;
        dish.rotation.z = Math.PI / 6;
        bGroup.add(dish);
      } else if (zone.buildingType === "clinic") {
        // Medical Clinic with Cross
        const clinic = new THREE.Mesh(
          new THREE.BoxGeometry(2.4, 2, 2.4),
          new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }),
        );
        clinic.position.y = 1;
        clinic.castShadow = true;
        bGroup.add(clinic);

        const crossH = new THREE.Mesh(
          new THREE.BoxGeometry(1.2, 0.4, 0.1),
          new THREE.MeshStandardMaterial({ color: zone.color }),
        );
        crossH.position.set(0, 1.4, 1.26);
        bGroup.add(crossH);

        const crossV = new THREE.Mesh(
          new THREE.BoxGeometry(0.4, 1.2, 0.1),
          new THREE.MeshStandardMaterial({ color: zone.color }),
        );
        crossV.position.set(0, 1.4, 1.26);
        bGroup.add(crossV);
      } else {
        // Campus University Pillar
        const base = new THREE.Mesh(
          new THREE.BoxGeometry(2.2, 0.6, 2.2),
          new THREE.MeshStandardMaterial({ color: 0x475569 }),
        );
        base.position.y = 0.3;
        bGroup.add(base);

        const cap = new THREE.Mesh(
          new THREE.BoxGeometry(1.8, 0.2, 1.8),
          new THREE.MeshStandardMaterial({ color: zone.color }),
        );
        cap.position.y = 2.4;
        cap.rotation.y = Math.PI / 4;
        bGroup.add(cap);

        const pillar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.3, 0.3, 1.8, 8),
          new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }),
        );
        pillar.position.y = 1.3;
        bGroup.add(pillar);
      }

      scene.add(bGroup);
    });

    // --- PLAYER CHARACTER (LOW-POLY ROBOT/DEV AVATAR) ---
    const player = new THREE.Group();
    player.position.set(0, 0, 0);

    // Body
    const bodyGeo = new THREE.CapsuleGeometry(0.4, 0.6, 8, 12);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.3,
      metalness: 0.2,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 0.9;
    bodyMesh.castShadow = true;
    player.add(bodyMesh);

    // Head
    const headGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
    });
    const headMesh = new THREE.Mesh(headGeo, headMat);
    headMesh.position.y = 1.6;
    headMesh.castShadow = true;
    player.add(headMesh);

    // Visor / Eyes
    const visorGeo = new THREE.BoxGeometry(0.4, 0.15, 0.2);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
    });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 1.6, 0.26);
    player.add(visor);

    // Cyan glowing visor light
    const eyeLight = new THREE.Mesh(
      new THREE.BoxGeometry(0.32, 0.08, 0.05),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 }),
    );
    eyeLight.position.set(0, 1.6, 0.35);
    player.add(eyeLight);

    // Little Antenna
    const antPole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.3, 8),
      new THREE.MeshStandardMaterial({ color: 0x64748b }),
    );
    antPole.position.set(0, 2.05, 0);
    player.add(antPole);

    const antTip = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x10b981 }),
    );
    antTip.position.set(0, 2.25, 0);
    player.add(antTip);

    // Player Shadow Blob
    const shadowGeo = new THREE.CircleGeometry(0.5, 16);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.4,
    });
    const pShadow = new THREE.Mesh(shadowGeo, shadowMat);
    pShadow.rotation.x = -Math.PI / 2;
    pShadow.position.y = 0.03;
    player.add(pShadow);

    scene.add(player);

    // --- INPUT CONTROLS ---
    const keys: Record<string, boolean> = {
      up: false,
      down: false,
      left: false,
      right: false,
      space: false,
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "KeyW" || e.code === "ArrowUp") keys.up = true;
      if (e.code === "KeyS" || e.code === "ArrowDown") keys.down = true;
      if (e.code === "KeyA" || e.code === "ArrowLeft") keys.left = true;
      if (e.code === "KeyD" || e.code === "ArrowRight") keys.right = true;
      if (e.code === "Space" || e.code === "KeyE") {
        keys.space = true;
        // Trigger action
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
      if (e.code === "Space" || e.code === "KeyE") keys.space = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Touch Joystick Virtual State
    const touchMove = { x: 0, y: 0 };
    (
      window as unknown as {
        __setTouchJoystick?: (x: number, y: number) => void;
      }
    ).__setTouchJoystick = (x, y) => {
      touchMove.x = x;
      touchMove.y = y;
    };

    // State refs for animation loop
    const nearZoneRef = { current: null as ZoneData | null };
    let walkCycle = 0;
    let stepSoundTimer = 0;

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

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);

      // Pulse zone rings
      const time = clock.getElapsedTime();
      zoneRings.forEach((ring, i) => {
        const scale = 1 + Math.sin(time * 3 + i) * 0.08;
        ring.scale.set(scale, scale, 1);
      });

      // Movement vector calculation
      let dx = 0;
      let dz = 0;

      if (keys.up) dz -= 1;
      if (keys.down) dz += 1;
      if (keys.left) dx -= 1;
      if (keys.right) dx += 1;

      // Add touch joystick input
      if (touchMove.x !== 0 || touchMove.y !== 0) {
        dx += touchMove.x;
        dz += touchMove.y;
      }

      const speed = 7.5; // Walk speed
      const isMoving = dx !== 0 || dz !== 0;

      if (isMoving) {
        const moveVec = new THREE.Vector2(dx, dz).normalize();
        player.position.x += moveVec.x * speed * delta;
        player.position.z += moveVec.y * speed * delta;

        // Island boundaries (radius ~15.5)
        const distFromCenter = Math.sqrt(
          player.position.x ** 2 + player.position.z ** 2,
        );
        if (distFromCenter > 15.5) {
          player.position.x = (player.position.x / distFromCenter) * 15.5;
          player.position.z = (player.position.z / distFromCenter) * 15.5;
        }

        // Face movement direction
        const targetAngle = Math.atan2(moveVec.x, moveVec.y);
        player.rotation.y = THREE.MathUtils.lerp(
          player.rotation.y,
          targetAngle,
          0.25,
        );

        // Walking bob effect
        walkCycle += delta * 15;
        bodyMesh.position.y = 0.9 + Math.abs(Math.sin(walkCycle)) * 0.12;

        stepSoundTimer += delta;
        if (stepSoundTimer > 0.35) {
          playSound("step");
          stepSoundTimer = 0;
        }
      } else {
        // Idle breathing
        bodyMesh.position.y = 0.9 + Math.sin(time * 2) * 0.04;
      }

      // Smooth Camera follow (Lerp)
      const targetCamX = player.position.x;
      const targetCamZ = player.position.z + 18;
      const targetCamY = 16;

      camera.position.x = THREE.MathUtils.lerp(
        camera.position.x,
        targetCamX,
        0.08,
      );
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        targetCamY,
        0.08,
      );
      camera.position.z = THREE.MathUtils.lerp(
        camera.position.z,
        targetCamZ,
        0.08,
      );
      camera.lookAt(player.position.x, 1, player.position.z);

      // Check Proximity to Zones
      let foundNear: ZoneData | null = null;
      ZONES.forEach((zone) => {
        const [zx, , zz] = zone.position;
        const d = Math.sqrt(
          (player.position.x - zx) ** 2 + (player.position.z - zz) ** 2,
        );
        if (d < 3.0) {
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

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
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
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      delete (window as unknown as { __setTouchJoystick?: unknown })
        .__setTouchJoystick;
    };
  }, [audioEnabled]);

  // Touch Virtual Joystick Handlers for Mobile
  const joystickRef = useRef<HTMLDivElement>(null);
  const [touchActive, setTouchActive] = useState(false);
  const [knobPos, setKnobPos] = useState({ x: 0, y: 0 });

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
        __setTouchJoystick?: (x: number, y: number) => void;
      }
    ).__setTouchJoystick;
    if (setter) setter(normX, normY);
  };

  const handleTouchEnd = () => {
    setTouchActive(false);
    setKnobPos({ x: 0, y: 0 });
    const setter = (
      window as unknown as {
        __setTouchJoystick?: (x: number, y: number) => void;
      }
    ).__setTouchJoystick;
    if (setter) setter(0, 0);
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-slate-900 select-none">
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Top Game Bar HUD */}
      <header className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <Link
            href="/"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 text-slate-800 text-xs sm:text-sm font-bold shadow-md hover:bg-white transition-all backdrop-blur-md border border-slate-200 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Portofolio</span>
          </Link>

          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            aria-label="Toggle Sound"
            className="p-2.5 rounded-xl bg-white/90 text-slate-700 hover:text-blue-600 shadow-md backdrop-blur-md border border-slate-200 transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {audioEnabled ? (
              <Volume2 className="w-5 h-5 text-blue-600" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-400" />
            )}
          </button>
        </div>

        {/* Progress Quest Box */}
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-xl shadow-md flex items-center gap-3">
          <Trophy className="w-4 h-4 text-amber-500" />
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Eksplorasi
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-slate-900">
              {visitedZones.length} / {ZONES.length} Zona
            </div>
          </div>
        </div>
      </header>

      {/* Near Zone Action Prompt */}
      {nearZone && !activeZone && (
        <div className="absolute bottom-28 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-auto animate-bounce">
          <button
            onClick={() => {
              setActiveZone(nearZone);
              playSound("open");
              setVisitedZones((prev) =>
                prev.includes(nearZone.id) ? prev : [...prev, nearZone.id],
              );
            }}
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-950 text-white border-2 border-white/80 shadow-2xl hover:scale-105 transition-transform cursor-pointer font-bold text-sm sm:text-base min-h-[48px]"
            style={{ borderColor: nearZone.hexColor }}
          >
            <Sparkles
              className="w-5 h-5 animate-spin"
              style={{ color: nearZone.hexColor }}
            />
            <span>Masuk ke {nearZone.title}</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-white/20 font-mono">
              [SPACE / TAP]
            </span>
          </button>
        </div>
      )}

      {/* Controls Helper (Desktop & Mobile) */}
      {showControlsHint && (
        <aside className="absolute top-20 left-4 z-10 pointer-events-auto max-w-xs bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-lg text-xs space-y-2 text-slate-700">
          <div className="flex items-center justify-between font-bold text-slate-900">
            <span className="flex items-center gap-1.5">
              <Gamepad2 className="w-4 h-4 text-blue-600" />
              Kontrol Simulator
            </span>
            <button
              onClick={() => setShowControlsHint(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-1 text-[11px] text-slate-600">
            <p>
              ⌨️ <strong>Keyboard:</strong> Tombol W/A/S/D atau Panah untuk
              jalan.
            </p>
            <p>
              📱 <strong>HP / Mobile:</strong> Gunakan Virtual Joystick di kiri
              bawah.
            </p>
            <p>
              🎯 <strong>Interaksi:</strong> Dekati bangunan dan tekan tombol
              aksi.
            </p>
          </div>
        </aside>
      )}

      {/* Mobile Virtual Joystick (Shown on touch screens) */}
      <div className="lg:hidden absolute bottom-6 left-6 z-20 select-none touch-none">
        <div
          ref={joystickRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-28 h-28 rounded-full bg-slate-900/60 border-2 border-white/50 backdrop-blur-sm shadow-xl flex items-center justify-center"
        >
          <div
            className={`w-12 h-12 rounded-full bg-blue-500 shadow-md transition-transform ${touchActive ? "scale-110" : ""}`}
            style={{
              transform: `translate(${knobPos.x}px, ${knobPos.y}px)`,
            }}
          />
        </div>
      </div>

      {/* Zone Detail Modal Dialog */}
      {activeZone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 p-7 shadow-2xl space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md text-white shadow-2xs"
                    style={{ backgroundColor: activeZone.hexColor }}
                  >
                    {activeZone.year} • {activeZone.category}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {activeZone.stats}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">
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
                Stack Teknologi / Riset:
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

            {/* Action Buttons */}
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
                    Buka Website Resmi (
                    {activeZone.liveUrl.replace("https://", "")})
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="flex-1 px-4 py-3 rounded-xl text-xs font-medium bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-between min-h-[44px]">
                  <span>Arsitektur Sistem &amp; Riset Internal</span>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
              )}

              <button
                onClick={() => setActiveZone(null)}
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors min-h-[44px] cursor-pointer"
              >
                Lanjut Main
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Completion Banner when all zones visited */}
      {visitedZones.length === ZONES.length && !activeZone && (
        <div className="absolute top-20 right-4 z-20 pointer-events-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-2xl shadow-xl max-w-xs space-y-1 animate-in slide-in-from-right duration-300">
          <div className="flex items-center gap-2 font-bold text-sm">
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span>Misi Selesai 100%!</span>
          </div>
          <p className="text-xs text-emerald-100">
            Hebat! Kamu telah menjelajahi seluruh ekosistem proyek dan
            pencapaian Pranata Pramudya.
          </p>
        </div>
      )}
    </div>
  );
}
