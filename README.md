# Next.js + Lyne + Lit SSR Error Reproduction

## Development Mode

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Mode

```bash
npm install
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Issues

View the source code of the page in your browser. Notice that there are custom elements as rendered by the React component but without declarative shadow root.

Disable JavaScript in your browser and reload the page. Notice that only the plain text nodes appear with no styling.
