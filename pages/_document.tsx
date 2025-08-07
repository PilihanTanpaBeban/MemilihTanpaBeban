import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript />
        <link
          type="text/css"
          rel="stylesheet"
          href="https://unpkg.com/jsmind@0.7.5/style/jsmind.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="MemilihTanpaBeban adalah platform yang dirancang untuk membantu Anda membuat keputusan yang terinformasi tanpa bias. Jelajahi berbagai topik dan dapatkan wawasan." />
        <meta name="keywords" content="pemilu, tanpa beban, pilih, pilihan, bebas, pilkada, pilpres, anggota dewan, memilih tanpa beban, partai, partai politik, pemilu 2024" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
