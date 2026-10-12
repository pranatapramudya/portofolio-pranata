export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 sm:p-12 space-y-12 animate-pulse">
      {/* Hero Skeleton */}
      <section className="max-w-4xl mx-auto space-y-6 pt-10 text-center">
        <div className="h-7 w-64 bg-slate-200/80 rounded-full mx-auto" />
        <div className="h-14 w-3/4 bg-slate-200/80 rounded-2xl mx-auto" />
        <div className="h-5 w-2/3 bg-slate-200/80 rounded-lg mx-auto" />
        <div className="flex justify-center gap-4 pt-4">
          <div className="h-12 w-40 bg-slate-200/80 rounded-xl" />
          <div className="h-12 w-36 bg-slate-200/80 rounded-xl" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
          <div className="h-28 bg-white border border-slate-200 rounded-2xl shadow-sm" />
          <div className="h-28 bg-white border border-slate-200 rounded-2xl shadow-sm" />
          <div className="h-28 bg-white border border-slate-200 rounded-2xl shadow-sm" />
        </div>
      </section>

      {/* Projects Skeleton */}
      <section className="max-w-6xl mx-auto space-y-6 pt-10">
        <div className="h-8 w-48 bg-slate-200/80 rounded-xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-72 bg-white border border-slate-200 rounded-2xl shadow-sm" />
          <div className="h-72 bg-white border border-slate-200 rounded-2xl shadow-sm" />
          <div className="h-72 bg-white border border-slate-200 rounded-2xl shadow-sm" />
        </div>
      </section>
    </main>
  );
}
