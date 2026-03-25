"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function IRPF() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const nextPage = (e: React.MouseEvent) => {
    e.preventDefault(); 
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  
  const prevPage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-[#060a26] text-white flex flex-col font-sans selection:bg-[#b49444]/30">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#0a1144] blur-[120px] rounded-full"></div>
        <div className="absolute top-[30%] -right-[10%] w-[40%] h-[50%] bg-[#b49444]/10 blur-[120px] rounded-full"></div>
      </div>

      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#060a26]/70 border-b border-[#b49444]/25 py-3 md:py-0 md:h-28">
        <div className="max-w-[1400px] mx-auto flex flex-col md:grid md:grid-cols-3 items-center justify-between px-4 h-full gap-3 md:gap-4 relative z-10">
          
          <div className="flex justify-center md:col-start-2 order-1 md:order-none">
            <div className="relative top-3 w-32 h-12 md:w-56 md:h-20 transition-transform duration-300 hover:scale-110">
              <Image src="/reluz-irpf-2026/logo_reluz.png" alt="Logo Reluz" fill className="object-contain" priority />
            </div>
          </div>

          <div className="flex w-full justify-between gap-2 md:contents order-2 md:order-none">
            
            <div className="flex justify-start md:col-start-1 md:row-start-1">
              <a 
                href="https://api.whatsapp.com/send?phone=551145431276&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Reluz%20Cont%C3%A1bil." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-[#b49444] to-[#8a7131] text-white px-3 py-2 sm:px-4 md:px-6 md:py-3 rounded-full font-bold text-[10px] sm:text-xs md:text-sm transition-all duration-300 hover:scale-105 active:scale-95 border border-[#e8d399]/30 whitespace-nowrap shadow-md w-full justify-center md:w-auto md:justify-start"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                FALE CONOSCO
              </a>
            </div>

            <div className="flex justify-end md:col-start-3 md:row-start-1">
              <a 
                href="/reluz-irpf-2026/guia_irpf_2026.pdf" 
                download="Guia_IRPF_2026_Reluz.pdf"
                className="flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-[#b49444] to-[#8a7131] text-white px-3 py-2 sm:px-4 md:px-6 md:py-3 rounded-full font-bold text-[10px] sm:text-xs md:text-sm transition-all duration-300 hover:scale-105 active:scale-95 border border-[#e8d399]/30 whitespace-nowrap shadow-md w-full justify-center md:w-auto md:justify-end"
              >
                <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">BAIXAR RELATÓRIO PDF</span>
                <span className="sm:hidden">BAIXAR PDF</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center py-10 px-4">
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#8a7131] via-[#fff4d2] to-[#8a7131] bg-[length:200%_auto] animate-shine pb-2 drop-shadow-lg">
            IRPF 2026
          </h1>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#e8d399] animate-pulse shadow-[0_0_5px_#e8d399]"></div>
              <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#b49444]/60"></div>
            </div>

            <p className="uppercase tracking-[0.6em] text-xs md:text-sm font-bold bg-gradient-to-r from-[#b49444] via-[#b49444] to-[#b49444] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(180,148,68,0.5)]">
              Entenda mais sobre
            </p>

            <div className="flex items-center gap-1">
              <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#b49444]/60"></div>
              <div className="w-1 h-1 rounded-full bg-[#e8d399] animate-pulse shadow-[0_0_5px_#e8d399]"></div>
            </div>
          </div>
        </div>

        {/* CONTAINER DO DOCUMENTO */}
        <div className="w-full max-w-3xl group mt-8">
          <div className="relative bg-[#0a1144]/40 border border-[#b49444]/20 rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden p-3 md:p-6">
            
        {/* ÁREA DA PÁGINA */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl relative flex items-start justify-center min-h-[400px]">
            
            {/* Fazemos um loop para gerar as 3 páginas de uma vez */}
            {[1, 2, 3].map((numFoto) => (
              <Image 
                key={numFoto}
                src={`/reluz-irpf-2026/Foto${numFoto}.jpg`}
                alt={`Página ${numFoto} do Guia IRPF`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: currentPage === numFoto ? 'block' : 'none' 
                }}
                className="animate-in fade-in duration-300"
                priority={numFoto === 1}
                unoptimized={true}
              />
            ))}

          </div>

            {/* CONTROLES DE NAVEGAÇÃO INTERATIVOS */}
            <div className="bg-[#0a1144]/80 border-t border-[#b49444]/20 p-4 sm:p-5 flex justify-between items-center mt-4 rounded-xl">
              <button 
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`p-2 sm:p-3 rounded-full border transition-all shadow-lg ${
                  currentPage === 1 
                    ? 'border-gray-600 text-gray-600 opacity-50 cursor-not-allowed' 
                    : 'border-[#b49444]/30 text-[#b49444] hover:bg-[#b49444] hover:text-white group/btn hover:shadow-[#b49444]/20'
                }`}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:-translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-col items-center">
                <span className="text-[10px] sm:text-[14px] uppercase tracking-widest text-gray-400 font-bold mb-0.5 sm:mb-1">Página</span>
                <span className="text-base sm:text-lg font-mono tracking-tighter text-white">
                  0{currentPage} <span className="text-[#b49444]">/</span> 0{totalPages}
                </span>
              </div>

              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`p-2 sm:p-3 rounded-full border transition-all shadow-lg ${
                  currentPage === totalPages 
                    ? 'border-gray-600 text-gray-600 opacity-50 cursor-not-allowed' 
                    : 'border-[#b49444]/30 text-[#b49444] hover:bg-[#b49444] hover:text-white group/btn hover:shadow-[#b49444]/20'
                }`}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </main>

      <footer className="py-6 text-center border-t border-white/20 mt-auto relative z-10">
        <p className="text-[10px] text-[#b49444] uppercase tracking-[0.4em]">
          © 2026 Reluz Escritório Contábil
        </p>
      </footer>
    </div>
  );
}