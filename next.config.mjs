import createWithLitSSR from "@lit-labs/nextjs";

const withLitSSR = createWithLitSSR({ addDeclarativeShadowDomPolyfill: true });

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@sbb-esta/lyne-elements",
    "@sbb-esta/lyne-react",
    "@sbb-esta/lyne-design-tokens",
    "@lit-labs/nextjs",
    "@lit-labs/ssr",
    "@lit-labs/ssr-react",
    "@lit/react",
    "@lit/reactive-element",
    "lit",
    "lit-element",
    "lit-html",
  ],
};

export default withLitSSR(nextConfig);
