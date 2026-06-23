import Image from "next/image";

// Icons
const Mail = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const Linkedin = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const FileText = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>;
const ChevronRight = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>;
const Terminal = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>;
const Server = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>;
const Briefcase = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const Code = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          
          {/* Photo Section */}
          <div className="order-first md:order-last w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative flex-shrink-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
            {/* Image Container with Float Animation */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-700/50 shadow-[0_0_40px_rgba(34,211,238,0.2)] animate-float transform hover:scale-105 transition-transform duration-500 bg-slate-800">
              <Image 
                src="/images/foto-profil.jpg" 
                alt="Pranata Pramudya" 
                fill 
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <div className="inline-block p-1 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6 backdrop-blur-md">
              <div className="px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-slate-900/50 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for Work
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
              Pranata
              <br />
              Pramudya
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-slate-300 mb-6">
              S.Kom | Tech-Savvy Professional
            </p>
            
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              Lulusan Sarjana Komputer yang memiliki kemampuan adaptasi teknologi tinggi, 
              teliti dalam pengolahan data, dan disiplin. Siap berkarir dengan memanfaatkan 
              logika terstruktur untuk efisiensi pekerjaan.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-full font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center gap-2 group"
              >
                <Mail className="w-5 h-5" />
                Hubungi Saya
              </a>
              <a 
                href="https://drive.google.com/file/d/1Z5A6gZFijY_xlFF7TZdeYFg7EdPrCFkg/view?usp=sharing" 
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-full font-semibold text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Lihat CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50 border-y border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Keahlian Profesional</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">Administrasi</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-500" /> Microsoft Office
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-500" /> Pengelolaan Data & Arsip
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-500" /> Korespondensi Bisnis
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">IT & Digital</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500" /> Logika Pemrograman
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500" /> Troubleshooting
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-500" /> Adaptasi Software Baru
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">Soft Skills</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500" /> Komunikasi Efektif
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500" /> Manajemen Waktu
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500" /> Kerjasama Tim
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Proyek Portofolio</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 p-6 hover:border-cyan-500/50 transition-all flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">Aplikasi Kalkulator</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Aplikasi web kalkulator fungsional menggunakan JavaScript murni untuk melatih logika.
                </p>
              </div>
              <a href="/proyek_kalkulator/index.html" target="_blank" className="text-cyan-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Proyek <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 p-6 hover:border-blue-500/50 transition-all flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">UI/UX Rekam Medis</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Desain prototipe aplikasi klinik menggunakan metode User Centered Design di Figma.
                </p>
              </div>
              <a href="https://www.figma.com/proto/WvSVFBmHlPevd3STqV8RAx/Klinik-UI?node-id=1-2&t=Mh7nSVuzJSExEE5j-1" target="_blank" className="text-blue-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Figma <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 p-6 hover:border-indigo-500/50 transition-all flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">Premium SaaS Boilerplate</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Starter kit Next.js dengan Prisma, TypeScript, dan Autentikasi untuk meluncurkan SaaS dalam hitungan jam.
                </p>
              </div>
              <a href="/proyek_landing_page/index.html" target="_blank" className="text-indigo-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Web <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 p-6 hover:border-teal-500/50 transition-all flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 text-teal-400 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">Aplikasi Cuaca</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Aplikasi web dinamis yang mengambil data cuaca live dari API OpenWeatherMap.
                </p>
              </div>
              <a href="/proyek_cuaca/index.html" target="_blank" className="text-teal-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Proyek <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 p-6 hover:border-emerald-500/50 transition-all flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">Whale Predator Tracker</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Aplikasi pemantauan aset finansial real-time yang terintegrasi dengan Coinglass API.
                </p>
              </div>
              <a href="https://predator-tracker.vercel.app/" target="_blank" className="text-emerald-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Tracker <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 p-6 hover:border-pink-500/50 transition-all flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 text-pink-400 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">KKF Label</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Aplikasi web e-commerce butik fashion wanita modern dengan desain minimalis elegan.
                </p>
              </div>
              <a href="https://kkf-label.vercel.app/" target="_blank" className="text-pink-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Aplikasi <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/80 border-t border-slate-800 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">Mari Terhubung</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Saya terbuka untuk diskusi mengenai peluang karir di perusahaan Bapak/Ibu. Silakan hubungi saya melalui email atau LinkedIn.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:pranatapramudya39@gmail.com" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              Kirim Email
            </a>
            <a href="https://www.linkedin.com/in/pranatapramudya-2a4427292/" target="_blank" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-3">
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Pranata Pramudya. Professional Portfolio.</p>
      </footer>
    </main>
  );
}
