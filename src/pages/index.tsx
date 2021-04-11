import Contents from "components/Contents";
import Footer from "components/Footer";
import Header from "components/Header";
import HeaderSticky from "components/HeaderSticky";
import Head from "next/head";
import styles from "../styles/Home.module.css";

type Propsp = {
  id: number;
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-col">
        {/* HEADER */}
        <Header />
        <HeaderSticky />
        {/* END HEADER */}

        {/* BODY */}
        <Contents />
        {/* END BODY */}

        {/* FOOTER */}
        <Footer />
        {/* END FOOTER */}
      </div>
    </div>
  );
}
