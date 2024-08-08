# Next.js + Lyne + Lit SSR Error Reproduction

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

View the source code returned directly by the server. There are no prerendered components.

See the terminal with the server output. There is an error during SSR:

```text
ReferenceError: HTMLElement is not defined
  at __webpack_require__ (C:\Development\next-lyne-ssr-repro\.next\server\webpack-runtime.js:33:42)
  at __webpack_require__ (C:\Development\next-lyne-ssr-repro\.next\server\webpack-runtime.js:33:42)
  at eval (./src/app/TestComponent.tsx:7:85)
  at (ssr)/./src/app/TestComponent.tsx (C:\Development\next-lyne-ssr-repro\.next\server\app\page.js:162:1)
  at Object.__webpack_require__ [as require] (C:\Development\next-lyne-ssr-repro\.next\server\webpack-runtime.js:33:42)
```

```bash
npm run build
npm run start
```

Build works without errors but take a look at the source code returned by the server. Only the custom elements are prerendered, not their declarative shadow root. So, the web components are only rendered client-side as if we did not use Lit SSR at all.
