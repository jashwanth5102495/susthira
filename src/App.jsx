import React, { useState } from 'react';

export default function App() {
  const [showDetails, setShowDetails] = useState(false);

  const marqueeFull = `Manufactured By:\nSUSTHIRA BIO ORGANICS LLP\nNo.1, Aswath Narayana Road\nNear Akshaya Nagar, Tirumala Nagar\nAttur\nYelahanka\nBangalore -560064\nBangalore Urban\nKarnataka State\nMarketing By:\nN CHEM SCIENCES\nMPL No.14-1-20/7/18 9 26 27 & 36\n38\nSadashiva Phase-III, Eklaspur Village\nBypass Manchalapur Road\nRaichur - 584101\nRaichur Dist\nKarnataka State`;
  const marqueeSingleLine = marqueeFull.replace(/\n+/g, ' • ');

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background: deep green gradient with soft golden glow */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1200px 600px at 70% 20%, rgba(223,193,108,0.20), transparent 60%), radial-gradient(800px 500px at 20% 80%, rgba(223,193,108,0.12), transparent 60%), linear-gradient(160deg, #162515 0%, #1f2f1e 40%, #243722 70%, #283c26 100%)",
        }}
      />

      {/* Decorative leaves (subtle) */}
      <img src="/new.jpeg" alt="" className="absolute -z-10 left-[-10%] top-[10%] w-[40%] opacity-15 blur-[0.5px] object-contain" />
      <img src="/new.jpeg" alt="" className="absolute -z-10 right-[-12%] bottom-0 w-[45%] opacity-10 blur-[0.5px] object-contain rotate-180" />

      {/* top spacer before scrolling text */}
      <div className="h-4 sm:h-6" />

      {/* Scrolling headline bar */}
      <div className="w-full bg-[#1e2d1c]/90 text-[#e8d8a6] border-b border-white/10 py-2 cursor-pointer overflow-hidden" onClick={() => setShowDetails(true)} title="Click to view full details">
        <div className="marquee-inline whitespace-nowrap text-xs sm:text-sm px-4">
          {marqueeSingleLine}
        </div>
      </div>

      {/* Brand heading */}
      <header className="pt-0 sm:pt-0 mt-6 sm:mt-8 pb-6 text-center select-none">
        <h1 className="text-[30px] sm:text-[56px] font-extrabold tracking-normal sm:tracking-wide whitespace-nowrap text-[#e8d8a6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          N Chem Sciences
        </h1>
      </header>

      {/* Main panel */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        {/* Product name card */}
        <section className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-4 sm:p-6 flex items-center shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#e8d8a6]/20 text-[#e8d8a6] mr-4">
              <span className="text-2xl">🌿</span>
            </div>
            <div className="flex-1">
              <div className="text-[#d9c98f] text-xs sm:text-sm">Product Name:</div>
              <div className="text-white text-xl sm:text-2xl font-semibold tracking-wide">HUMICID</div>
            </div>
          </div>
        </section>

        {/* Info grid */}
        <section className="mt-8 grid grid-cols-1 gap-4">
          {/* Gazette */}
          <div className="rounded-xl bg-white/8 border border-white/15 p-4 text-white">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/20 text-[#e8d8a6] mr-3">
                <span className="text-lg">📰</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Gazette Notification:</div>
                <div className="text-base sm:text-lg">SO:3922(E), Dated:12-09-2024</div>
              </div>
            </div>
          </div>

          {/* Title of Bio Stimulant */}
          <div className="rounded-xl bg-white/8 border border-white/15 p-4 text-white">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/20 text-[#e8d8a6] mr-3">
                <span className="text-lg">⚗️</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Title of Bio Stimulant:</div>
                <div className="text-base sm:text-lg">Humic Acid 5% (powder)</div>
              </div>
            </div>
          </div>

          {/* Composition */}
          <div className="rounded-xl bg-white/8 border border-white/15 p-4 text-white">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/20 text-[#e8d8a6] mr-3">
                <span className="text-lg">🧪</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Composition</div>
                <ul className="mt-1 space-y-1 list-disc pl-5 text-sm sm:text-base">
                  <li>Humic Acid 5% (powder)</li>
                  <li>Humic Acid 5% (powder)</li>
                  <li>Polys affection</li>
                  <li>PlsC irailicion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Crops */}
          <div className="rounded-xl bg-white/8 border border-white/15 p-4 text-white">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/20 text-[#e8d8a6] mr-3">
                <span className="text-lg">🌶️</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Crops:</div>
                <div className="text-base sm:text-lg">Chilli Pepper</div>
              </div>
            </div>
          </div>

          {/* Dosage */}
          <div className="rounded-xl bg-white/8 border border-white/15 p-4 text-white">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/20 text-[#e8d8a6] mr-3">
                <span className="text-lg">🧴</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Dosage:</div>
                <div className="text-base sm:text-lg">three foliar application at 0.5 g/L</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal for full details */}
      {showDetails && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4" onClick={() => setShowDetails(false)}>
          <div className="max-w-3xl w-full rounded-2xl bg-[#243722] border border-white/20 text-[#e8d8a6] shadow-[0_20px_40px_rgba(0,0,0,0.35)] p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-lg font-semibold">Manufacturing & Marketing Details</div>
              <button className="px-3 py-1 rounded-md bg-[#e8d8a6]/20 text-[#e8d8a6] border border-[#e8d8a6]/40 hover:bg-[#e8d8a6]/30" onClick={() => setShowDetails(false)}>Close</button>
            </div>
            <pre className="text-sm whitespace-pre-wrap leading-relaxed">{marqueeFull}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
