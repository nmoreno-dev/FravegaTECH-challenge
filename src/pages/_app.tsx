import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "../components/Providers";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
