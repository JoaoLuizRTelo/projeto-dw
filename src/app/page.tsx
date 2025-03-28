"use client";
import Link from 'next/link';

export default function MenuJogos() {
  return (
    <div className="p-8 bg-[#300047] indigo-100 text-center min-h-screen">
      <h1 className="text-5xl font-bold text-amber-100 mb-6">Bem-vindo ao Arcade de Jogos Rápidos!</h1>
      <p className="text-lg mb-8 text-white">Escolha um jogo para começar a diversão:</p>

      <div className="lg:grid grid-cols-3 gap-4">
        <Link href="/adivinhacao">
          <p className="p-6 bg-[#ff9800] text-white rounded-lg shadow-lg hover:bg-[#ffcc11] lg:mt-0 mt-2">
            Jogo de Adivinhação
          </p>
        </Link>

        <Link href="/rapidez">
          <p className="p-6 bg-[#ff9800] text-white rounded-lg shadow-lg hover:bg-[#ffcc11] lg:mt-0 mt-2">
            Jogo de Reflexo
          </p>
        </Link>

        <Link href="/memoria">
          <p className="p-6 bg-[#ff9800] text-white rounded-lg shadow-lg hover:bg-[#ffcc11] lg:mt-0 mt-2">
            Jogo de Memória
          </p>
        </Link>
      </div>
    </div>
  );
}
