import Filter from "components/Filter";
import FilterKind from "components/FilterKind";
import FilterResult from "components/FilterResult";
import Header from "components/Header";
import Hoge from "components/Hoge";
import TabKind from "components/TabKind";
import Tablist from "components/Tablist";
import Head from "next/head";
import styles from "../styles/Home.module.css";

type Props = {
  title: string[];
};

const Bougu_list: any = [
  { pic: "1_bougu.png", title: "hoge1" },
  { pic: "2_bougu.png", title: "hoge2" },
  { pic: "3_bougu.png", title: "hoge3" },
  { pic: "4_bougu.png", title: "hoge4" },
  { pic: "1_bougu.png", title: "hoge1" },
  { pic: "2_bougu.png", title: "hoge2" },
  { pic: "3_bougu.png", title: "hoge3" },
  { pic: "4_bougu.png", title: "hoge4" },
  { pic: "1_bougu.png", title: "hoge1" },
  { pic: "2_bougu.png", title: "hoge2" },
  { pic: "3_bougu.png", title: "hoge3" },
  { pic: "4_bougu.png", title: "hoge4" },
  { pic: "1_bougu.png", title: "hoge1" },
  { pic: "2_bougu.png", title: "hoge2" },
  { pic: "3_bougu.png", title: "hoge3" },
  { pic: "4_bougu.png", title: "hoge4" },
];
const Acuse_list: any = [
  { pic: "1_ac.png", title: "アクセサリー１" },
  { pic: "2_ac.png", title: "ロトのしるし" },
  { pic: "3_ac.png", title: "王合流の印" },
  { pic: "4_ac.png", title: "虹色のリング" },
  { pic: "1_ac.png", title: "アクセサリー１" },
  { pic: "2_ac.png", title: "ロトのしるし" },
  { pic: "3_ac.png", title: "王合流の印" },
  { pic: "4_ac.png", title: "虹色のリング" },
  { pic: "1_ac.png", title: "アクセサリー１" },
  { pic: "2_ac.png", title: "ロトのしるし" },
  { pic: "3_ac.png", title: "王合流の印" },
  { pic: "4_ac.png", title: "虹色のリング" },
  { pic: "1_ac.png", title: "アクセサリー１" },
  { pic: "2_ac.png", title: "ロトのしるし" },
  { pic: "3_ac.png", title: "王合流の印" },
  { pic: "4_ac.png", title: "虹色のリング" },
  { pic: "1_ac.png", title: "アクセサリー１" },
  { pic: "2_ac.png", title: "ロトのしるし" },
  { pic: "3_ac.png", title: "王合流の印" },
  { pic: "4_ac.png", title: "虹色のリング" },
  { pic: "1_ac.png", title: "アクセサリー１" },
  { pic: "2_ac.png", title: "ロトのしるし" },
  { pic: "3_ac.png", title: "王合流の印" },
  { pic: "4_ac.png", title: "虹色のリング" },
];

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
        <div className="">
          <TabKind />
        </div>

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
