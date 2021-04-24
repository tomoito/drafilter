import Filter from "components/Filter";
import FilterKind from "components/FilterKind";
import FilterResult from "components/FilterResult";
import Header from "components/Header";
import Hoge from "components/Hoge";
import TabKind from "components/TabKind";
import Head from "next/head";
import styles from "../styles/Home.module.css";

type Props = {
  title: string[];
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen flex flex-col">
        {/* HEADER */}
        <Header />
        <Filter />
        {/* END HEADER */}

        {/* BODY */}
        <TabKind />
        <div className=""></div>

        {/* BODY NAV */}
        {/* END BODY NAV */}

        {/* BODY CONTENT */}
        {/* END BODY NAV */}

        {/* END CONTENT */}

        {/* FOOTER */}
        {/* END FOOTER */}
      </div>
    </div>
  );
}
