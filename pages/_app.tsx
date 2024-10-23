import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import "../public/global.css";
import Layout from "../app/components/Layout";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Pilihan Tanpa Beban</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="../assets/images/Favicon.png" />
        
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
