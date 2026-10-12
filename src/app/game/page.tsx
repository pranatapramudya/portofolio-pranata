import type { Metadata } from "next";
import PortfolioGame from "@/components/game/PortfolioGame";

export const metadata: Metadata = {
  title: "3D Game Simulator | Pranata Pramudya, S.Kom",
  description:
    "Jelajahi ekosistem proyek dan sistem nyata Pranata Pramudya dalam simulasi dunia 3D interaktif.",
};

export default function GamePage() {
  return <PortfolioGame />;
}
