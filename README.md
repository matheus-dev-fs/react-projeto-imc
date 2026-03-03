# React Projeto IMC

Projeto simples em **React + TypeScript** para calcular o **IMC (Índice de Massa Corporal)** e exibir a classificação (Magreza, Normal, Sobrepeso, Obesidade).

Desenvolvido durante o curso de **React** da **B7Web**.

## Funcionalidades

- Input de **altura (m)** e **peso (kg)**
- Cálculo do IMC
- Exibição do resultado em um card com:
  - faixa do IMC
  - valor calculado (“Seu IMC”)
  - categoria com cor/ícone

## Tecnologias

- React (Create React App)
- TypeScript
- CSS Modules

## Estrutura do projeto (resumo)

- `src/App.tsx` – página principal e controle de estado (altura, peso, resultado)
- `src/helpers/imc.helper.ts` – regras de negócio:
  - `levels` (faixas/categorias)
  - `calculateImc(height, weight)`
- `src/interfaces/level.interface.ts` – tipagem do objeto `Level`
- `src/components`
  - `input.component.tsx`
  - `button.component.tsx`
  - `grid-item/grid-item.component.tsx` (card de cada categoria)
- `src/assets` – ícones/imagens usados na UI

## Como rodar

```bash
npm install
npm start
```

Acesse: `http://localhost:3000`

## Como usar

1. Digite sua **altura** (ex.: `1.75`)
2. Digite seu **peso** (ex.: `70`)
3. Clique em **Calcular IMC**
4. Para voltar e calcular novamente, clique na seta de voltar no resultado.

## Créditos

Projeto feito no curso de React da [B7Web](https://b7web.com.br/).  