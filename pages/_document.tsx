import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript />
        <link type="text/css" rel="stylesheet" href="https://unpkg.com/jsmind@0.7.5/style/jsmind.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
