"use client";
import React, { useState, useEffect } from "react";

const cartasIniciais = [
  { id: 1, emoji: "🐶", encontrado: false },
  { id: 2, emoji: "🐱", encontrado: false },
  { id: 3, emoji: "🦊", encontrado: false },
  { id: 4, emoji: "🐻", encontrado: false },
  { id: 1, emoji: "🐶", encontrado: false },
  { id: 2, emoji: "🐱", encontrado: false },
  { id: 3, emoji: "🦊", encontrado: false },
  { id: 4, emoji: "🐻", encontrado: false },
];

export default function JogoMemoria() {
  const [cartas, setCartas] = useState(() =>
    cartasIniciais.sort(() => Math.random() - 0.5)
  );
  const [selecionadas, setSelecionadas] = useState<number[]>([]);
  const [paresEncontrados, setParesEncontrados] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const reiniciarJogo = () => {
    const novasCartas = cartasIniciais.map((carta) => ({
      ...carta,
      encontrado: false,
    }));
    setCartas(novasCartas.sort(() => Math.random() - 0.5));
    setSelecionadas([]);
    setParesEncontrados(0);
    setShowPopup(false);
  };

  useEffect(() => {
    if (paresEncontrados === cartasIniciais.length / 2) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [paresEncontrados]);

  const selecionarCarta = (index: number) => {
    if (
      selecionadas.length < 2 &&
      !cartas[index].encontrado &&
      !selecionadas.includes(index)
    ) {
      setSelecionadas((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (selecionadas.length === 2) {
      const [primeira, segunda] = selecionadas;
      const cartasAtuais = [...cartas];

      if (cartasAtuais[primeira].id === cartasAtuais[segunda].id) {
        cartasAtuais[primeira].encontrado = true;
        cartasAtuais[segunda].encontrado = true;
        setCartas(cartasAtuais);
        setParesEncontrados((prev) => prev + 1);
      }

      const timer = setTimeout(() => {
        setSelecionadas([]);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [selecionadas]);

  return (
    <div
      className="p-8 bg-yellow-100 text-center relative min-h-screen"
      style={{ padding: "20px" }}
    >
      <h1 className="text-4xl font-bold text-yellow-600 mb-6">
        Jogo de Memória
      </h1>
      <p className="text-lg mb-4">Encontre todos os pares de cartas!</p>
      <div
        className="flex flex-col items-center"
        style={{ margin: "20px 0px 20px 0px" }}
      >
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto justify-center items-center">
          {cartas.map((carta, index) => (
            <button
              key={index}
              onClick={() => selecionarCarta(index)}
              className={`w-16 h-16 text-2xl bg-white border rounded-lg ${
                selecionadas.includes(index) || carta.encontrado
                  ? ""
                  : "bg-gray-400"
              }`}
            >
              {(selecionadas.includes(index) || carta.encontrado) &&
                carta.emoji}
            </button>
          ))}
        </div>
      </div>
      <p className="text-xl mt-6">Pares Encontrados: {paresEncontrados}</p>

      {showPopup && (
        <div className="absolute  inset-0 bg-[#0000007c] flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg text-center lg:w-[20vw] lg:h-[10vw] m-5">
            <div className="">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4 bg-amber-200 rounded-t-lg">
                Parabéns!
              </h2>
            
            <p className="text-lg mb-6 mx-4" style={{ padding: "0px 0px 10px 0px" }}>
              Você completou o jogo!
            </p>
            <button
              onClick={reiniciarJogo}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded p-4 m-4 lg:m-0"
              style={{ padding: "5px" }}
            >
              Jogar Novamente
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
