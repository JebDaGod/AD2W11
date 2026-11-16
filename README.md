AD2W11
Jacob Summers

ComponentCorner: React based PC component shopping app. Users can browse computer hardware and manage a shopping cart

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

APIs used
VantaSpec API: has CPUs GPUs motherboard RAM SSDs Power supplies cases and cooler with images prices and availability
productService.js handles API requests
Used Vite devlopment proxy to forward API request to VantaSpec during local. Vercel handles API in a rewrite and allow React to talk with external API

Product prices are converted from GBP to USD using an approximate conversion multiplier of 1.30.

Website link: https://ad2w11-git-main-jeb-site.vercel.app/

Technology used:
- React
- JavaScript
- Vite
- React Router
- CSS
- Context API
- localStorage
- VantaSpec API
- Vitest
- React Testing Library
- Vercel

Installation:
git clone https://github.com/JebDaGod/AD2W11
cd AD2W11
npm install
npm run dev
Open local URL

Known issues
Product availability and displayed information may not work because of VantaSpec API
Some products mya not have available images or prices
Currency conversion uses approxiamte hard coded formula (x1.3)
Shopping cart is local stored, no account or remote database
Can't actually purchase 

Future plans
Add product searching
Category filtering
Better details and comparison feature (HARD MAYBE ON THE LATTER)
Ability to increase decrease from cart with typable entry
Improve availbaility and pricing info
Add checkout interface
Expand testing