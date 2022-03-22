import type { NextPage } from "next";
import Head from "next/head";
import Timer from "../components/timer";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Časovač | Delta Škola Dev</title>
        <meta
          name="description"
          content="Časovač pro prezentace maturitních projektů"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Timer />
    </div>
  );
};

export default Home;
