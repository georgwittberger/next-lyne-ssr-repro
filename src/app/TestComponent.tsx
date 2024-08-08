"use client";

import { SbbButton } from "@sbb-esta/lyne-react/button";
import { SbbContainer } from "@sbb-esta/lyne-react/container";
import { SbbFooter } from "@sbb-esta/lyne-react/footer";
import { SbbBlockLink } from "@sbb-esta/lyne-react/link";
import { SbbLinkList } from "@sbb-esta/lyne-react/link-list";

export default function TestComponent(): React.JSX.Element {
  return (
    <>
      <SbbContainer style={{ paddingBlock: "2rem" }}>
        <p>
          You see these components in the browser but take a look at the HTML
          code returned directly by the server. There are no prerendered
          elements because during SSR an error is thrown:
        </p>
        <pre>
          {`ReferenceError: HTMLElement is not defined
            at __webpack_require__ (C:\Development\next-lyne-ssr-repro\.next\server\webpack-runtime.js:33:42)
            at __webpack_require__ (C:\Development\next-lyne-ssr-repro\.next\server\webpack-runtime.js:33:42)
            at eval (./src/app/TestComponent.tsx:7:85)
            at (ssr)/./src/app/TestComponent.tsx (C:\Development\next-lyne-ssr-repro\.next\server\app\page.js:162:1)
            at Object.__webpack_require__ [as require] (C:\Development\next-lyne-ssr-repro\.next\server\webpack-runtime.js:33:42)`}
        </pre>
        <SbbButton onClick={() => alert("Can't touch this!")}>
          Click Me
        </SbbButton>
      </SbbContainer>
      <SbbFooter accessibilityTitle="Footer">
        <SbbLinkList titleLevel="2" titleContent="List title text">
          <SbbBlockLink href="#">Link 1</SbbBlockLink>
          <SbbBlockLink href="#">Link 2</SbbBlockLink>
          <SbbBlockLink href="#">Link 3</SbbBlockLink>
        </SbbLinkList>
      </SbbFooter>
    </>
  );
}
