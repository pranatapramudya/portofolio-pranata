"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-lg">
        <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-rose-100">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Terjadi Kendala Sistem
        </h2>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Komponen mengalami gangguan tak terduga. Silakan muat ulang halaman
          dengan menekan tombol pemulihan di bawah ini.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 cursor-pointer min-h-[44px]"
        >
          <RotateCcw className="w-4 h-4" />
          Pulihkan Halaman
        </button>
      </div>
    </div>
  );
}
