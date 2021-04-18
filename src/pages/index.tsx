import Filter from "components/Filter";
import FilterKind from "components/FilterKind";
import FilterResult from "components/FilterResult";
import Header from "components/Header";
import Hoge from "components/Hoge";
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
        <div className="flex flex-col md:flex-row">
          <FilterKind />
          {/* <p>hoge</p> */}
          {/* <FilterResult title={Bougu_list} pic_folder={"pic_bougu"} /> */}
          {/* <FilterResult title={Acuse_list} pic_folder={"pic_acuse"} /> */}
          {/* <Tablist
            title={["hoge", "アクセサリー", "こころ", "hoge3"]}
            content={[
              <FilterResult
                title={"hoge"}
                title2={Bougu_list}
                pic_folder={"pic_bougu"}
              />,
              <p title={"hoge3"}>hoge3hoge3</p>,
            ]}
          /> */}
          {/* <Tablist
            title={["hoge", "hoge2"]}
            content={[<p title={"hoge"}>aiueo</p>, <p title={"hoge2"}>hoghoge</p>]}
          /> */}
          <Tablist
            title={["tab1", "Tab2", "Tab3", "Tab4"]}
            content={[
              <Hoge title={"tab1"} />,
              <FilterResult
                title={"Tab2"}
                title2={Bougu_list}
                pic_folder={"pic_bougu"}
              />,
              <FilterResult
                title={"Tab3"}
                title2={Acuse_list}
                pic_folder={"pic_acuse"}
              />,
            ]}
          />
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
