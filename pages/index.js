import Head from "next/head";
import { Header } from "../components/Header";
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  );
}
