import Head from "next/head";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Results } from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  try {
    const request = await fetch(
      `https://api.themoviedb.org/3/${
        requests[genre]?.url || requests.fetchTrending.url
      }`
    );
    return {
      props: request.json(),
    };
  } catch (e) {
    console.error(e);
  }
}
