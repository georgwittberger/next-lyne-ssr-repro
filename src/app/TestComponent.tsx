"use client";

import { SbbButton } from "@sbb-esta/lyne-react/button";
import { SbbContainer } from "@sbb-esta/lyne-react/container";
import { SbbFooter } from "@sbb-esta/lyne-react/footer";
import { SbbBlockLink } from "@sbb-esta/lyne-react/link";
import { SbbLinkList } from "@sbb-esta/lyne-react/link-list";
import { SbbTitle } from "@sbb-esta/lyne-react/title";

export default function TestComponent(): React.JSX.Element {
  return (
    <>
      <SbbContainer style={{ paddingBlock: "2rem" }}>
        <SbbTitle level="1">
          Next.js + Lyne + Lit SSR Error Reproduction
        </SbbTitle>
        <SbbButton onClick={() => alert("Can't touch this!")}>
          Click Me
        </SbbButton>
        <SbbBlockLink
          href="https://github.com/georgwittberger/next-lyne-ssr-repro"
          target="_blank"
        >
          Show GitHub repository
        </SbbBlockLink>
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
