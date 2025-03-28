"use client";
import React, { useState, useEffect } from "react";

export default function JogoRapidez() {
  const TEMPO_JOGO = 30;
  const [posicao, setPosicao] = useState({ top: "50%", left: "50%" });
  const [pontos, setPontos] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(TEMPO_JOGO);
  const [jogoAtivo, setJogoAtivo] = useState(true);

  const moverQuadrado = () => {
    const novoTop = `${Math.floor(Math.random() * 80)}%`;
    const novoLeft = `${Math.floor(Math.random() * 80)}%`;
    setPosicao({ top: novoTop, left: novoLeft });
  };

  const reiniciarJogo = () => {
    setPontos(0);
    setTempoRestante(TEMPO_JOGO);
    setJogoAtivo(true);
    moverQuadrado();
  };

  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    let timerJogo: NodeJS.Timeout;

    if (jogoAtivo) {
      intervalo = setInterval(moverQuadrado, 1000);
      timerJogo = setInterval(() => {
        setTempoRestante((tempo) => {
          if (tempo <= 1) {
            clearInterval(intervalo);
            clearInterval(timerJogo);
            setJogoAtivo(false);
            return 0;
          }
          return tempo - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalo);
      clearInterval(timerJogo);
    };
  }, [jogoAtivo]);

  return (
    <div className="p-8 bg-green-100 min-h-screen text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        Jogo de Reflexo: Clique Rápido!
      </h1>
      <p className="text-lg mb-4">
        Clique no quadrado o mais rápido que puder!
      </p>
      <p className="text-xl mb-8">Tempo Restante: {tempoRestante}s</p>

      <div className="relative h-96 border rounded-lg bg-white">
        {jogoAtivo ? (
          <button
            onClick={() => setPontos(pontos + 1)}
            style={{ position: "absolute", ...posicao }}
            className="w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Fim de Jogo!
              </h2>
              <p className="text-xl mb-6 text-green-600">
                Sua pontuação final: {pontos} cliques
              </p>
              <button
                onClick={reiniciarJogo}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Jogar Novamente
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="text-2xl mt-6">Pontuação: {pontos}</p>
    </div>
  );
}
