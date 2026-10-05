import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center py-16 sm:py-24 px-8 sm:px-12 md:px-16 bg-[#FEFDE8]">
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-amber-200/30 via-yellow-200/40 to-yellow-100/30 blur-[100px] rounded-full"
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-white/90 border border-amber-200/70 text-zinc-700 mb-10 sm:mb-12 shadow-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span>Next.js 프로젝트가 준비되었습니다</span>
        </div>

        {/* Hero Title */}
        <h1 className="mb-8 sm:mb-10 text-center leading-tight break-keep">
          <span className="block text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-500 mb-2 sm:mb-3">
            안녕하세요.
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2">
            <span className="text-cyan-500 bg-yellow-200 px-4 py-2 rounded-xl inline-block">구름이</span>
            <span className="text-zinc-500"> 인사드려요</span>
          </span>
        </h1>

        {/* Profile Image (Circular) */}
        <div className="mb-8 sm:mb-10 flex justify-center">
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white shadow-xl shadow-amber-900/10">
            <Image
              src="/gureum.jpg"
              alt="구름이 사진"
              fill
              sizes="(max-width: 640px) 144px, 160px"
              className="object-cover"
              style={{ objectPosition: "center 33%" }}
              priority
            />
          </div>
        </div>

        <p className="text-xl sm:text-2xl text-zinc-700 font-medium mb-12 sm:mb-16 max-w-xl text-center leading-relaxed mx-auto">
          콘텐츠 기획과 마케팅
        </p>

        {/* Feature Cards / Tech Stack */}
        <div className="grid grid-cols-3 gap-3 w-full mb-8">
          <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/60 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5">
            <p className="text-xs text-zinc-500 uppercase font-semibold">Framework</p>
            <p className="text-base font-bold text-zinc-900 mt-1">Next.js</p>
            <p className="text-[11px] text-sky-600 font-medium mt-0.5">App Router</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/60 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5">
            <p className="text-xs text-zinc-500 uppercase font-semibold">Language</p>
            <p className="text-base font-bold text-zinc-900 mt-1">TypeScript</p>
            <p className="text-[11px] text-sky-600 font-medium mt-0.5">Strict Type</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/60 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5">
            <p className="text-xs text-zinc-500 uppercase font-semibold">Styling</p>
            <p className="text-base font-bold text-zinc-900 mt-1">Tailwind CSS</p>
            <p className="text-[11px] text-sky-600 font-medium mt-0.5">v4 Engine</p>
          </div>
        </div>

        {/* Getting Started Guide Box */}
        <div className="w-full text-left p-5 rounded-2xl bg-white/90 border border-amber-200/80 backdrop-blur-md shadow-md">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-amber-100">
            <span className="text-xs font-semibold text-zinc-600">시작 가이드</span>
            <span className="text-[11px] font-mono text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/60 font-semibold">app/page.tsx</span>
          </div>

          <p className="text-sm text-zinc-600 leading-relaxed mb-3">
            화면을 수정하려면 <code className="px-1.5 py-0.5 rounded bg-amber-50 text-sky-700 font-mono text-xs border border-amber-200/50">app/page.tsx</code> 파일을 열어 코드를 변경해 보세요.
          </p>

          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300 flex items-center justify-between shadow-inner">
            <span className="text-zinc-400"># 개발 서버 실행 (PowerShell)</span>
            <span className="text-sky-400 font-medium">npm run dev</span>
          </div>
        </div>
      </div>
    </main>
  );
}
