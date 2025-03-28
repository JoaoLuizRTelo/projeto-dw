"use client";
import React, { useState } from "react";

export default function JogoAdivinhacao() {
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [numeroAleatorio, setNumeroAleatorio] = useState(
    () => Math.floor(Math.random() * 100) + 1
  );
  const [showPopup, setShowPopup] = useState(false);
  const [tentativas, setTentativas] = useState(0);

  const verificarNumero = () => {
    const numeroEscolhido = parseInt(numero);
    setTentativas((prev) => prev + 1);

    if (numeroEscolhido === numeroAleatorio) {
      setShowPopup(true);
    } else if (numeroEscolhido > numeroAleatorio) {
      setMensagem("O número secreto é menor!");
    } else {
      setMensagem("O número secreto é maior!");
    }
  };

  const reiniciarJogo = () => {
    setNumero("");
    setMensagem("");
    setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
    setShowPopup(false);
    setTentativas(0);
  };

  const ajustarNumero = (operacao: "aumentar" | "diminuir") => {
    const numeroAtual = parseInt(numero) || 0;
    if (operacao === "aumentar" && numeroAtual < 100) {
      setNumero((numeroAtual + 1).toString());
    } else if (operacao === "diminuir" && numeroAtual > 1) {
      setNumero((numeroAtual - 1).toString());
    }
  };

  return (
    <div className="p-8 bg-blue-100 text-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Jogo de Adivinhação
      </h1>
      <p className="text-lg mb-8 leading-relaxed text-center">
        Tente adivinhar o número secreto entre 1 e 100. Boa sorte!
      </p>

      <div className="max-w-md mx-auto flex items-center justify-center gap-4">
        <button
          onClick={() => ajustarNumero("diminuir")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 text-xl"
        >
          -
        </button>

        <input
          type="number"
          value={numero}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value >= 0 && value <= 100) {
              setNumero(value.toString());
            }
          }}
          className="w-24 p-2 text-center text-xl border rounded-lg"
          placeholder="1-100"
          min="1"
          max="100"
        />

        <button
          onClick={() => ajustarNumero("aumentar")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 text-xl"
        >
          +
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={verificarNumero}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Adivinhar
        </button>
      </div>

      {mensagem && !showPopup && (
        <div className="mt-6 p-4 bg-blue-100 rounded-lg max-w-md mx-auto">
          <p className="text-2xl font-semibold text-blue-600 text-center">
            {mensagem}
          </p>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Parabéns!</h2>
            <p className="text-lg mb-4">
              Você acertou o número {numeroAleatorio} em {tentativas}{" "}
              tentativas!
            </p>
            <button
              onClick={reiniciarJogo}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Jogar Novamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
