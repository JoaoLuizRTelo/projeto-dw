# Documentação do Arcade de Jogos

## 📖 Sumário
1. Visão Geral
2. Estrutura do Projeto
3. Componentes
4. Tecnologias Utilizadas
5. Jogos Disponíveis

## 🎮 Visão Geral
O Arcade de Jogos é uma aplicação web que oferece três jogos interativos diferentes: Jogo de Adivinhação, Jogo de Reflexo e Jogo de Memória. A aplicação foi desenvolvida usando Next.js e React, com estilização usando Tailwind CSS.

## 📁 Estrutura do Projeto
```
projeto-dw/
├── src/
│   ├── app/
│   │   ├── adivinhacao/
│   │   │   └── page.tsx
│   │   ├── rapidez/
│   │   │   └── page.tsx
│   │   ├── memoria/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
```

## 🧩 Componentes

### Layout Principal (`layout.tsx`)
- Define a estrutura base da aplicação
- Inclui cabeçalho com botão de retorno
- Rodapé com informações de copyright
- Responsivo para diferentes tamanhos de tela

### Página Inicial (`page.tsx`)
- Menu principal com cards dos jogos disponíveis
- Layout responsivo em grid para telas grandes
- Efeitos hover nos cards dos jogos

### Jogo de Adivinhação (`adivinhacao/page.tsx`)
**Funcionalidades:**
- Geração de número aleatório entre 1 e 100
- Sistema de dicas (maior/menor)
- Contador de tentativas
- Botões +/- para ajuste do número
- Modal de vitória

### Jogo de Reflexo (`rapidez/page.tsx`)
**Funcionalidades:**
- Quadrado que muda de posição aleatoriamente
- Timer de 30 segundos
- Contador de pontos
- Sistema de reinício

### Jogo de Memória (`memoria/page.tsx`)
**Funcionalidades:**
- Grid 4x4 de cartas
- Sistema de pares
- Animações de revelação
- Modal de vitória
- Contador de pares encontrados

## 🛠 Tecnologias Utilizadas
- **Next.js**: Framework React
- **React**: Biblioteca JavaScript
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS
- **CSS Modules**: Estilização modular

## 🎯 Jogos Disponíveis

### 1. Jogo de Adivinhação
- **Objetivo**: Adivinhar um número entre 1 e 100
- **Recursos**:
  - Feedback em tempo real
  - Sistema de dicas
  - Contagem de tentativas

### 2. Jogo de Reflexo
- **Objetivo**: Clicar no quadrado em movimento
- **Recursos**:
  - Timer regressivo
  - Pontuação
  - Movimento aleatório do alvo

### 3. Jogo de Memória
- **Objetivo**: Encontrar todos os pares de emojis
- **Recursos**:
  - Cartas com emojis
  - Sistema de pares
  - Contador de progresso

## 🔧 Como Executar
1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm run dev
```

3. Acesse no navegador:
```
http://localhost:3000
```

## 📱 Responsividade
- Layout adaptativo para dispositivos móveis
- Grid responsivo na página inicial
- Botões e elementos ajustados para touch
