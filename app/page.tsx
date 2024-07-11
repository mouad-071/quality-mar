import ConctactUs from "@/app/_components/ConctactUs";
import ChooseUs from "@/app/_components/ChooseUs";
import Stats from "./_components/Stats";
import Head from "next/head";
import ContactUsForm from "./_components/ContactUsForm";
import WhoAreWe from "./_components/WhoAreWe";
import OurQuality from "./_components/OurQuality";
import AgriImportant from "./_components/AgriImportant";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
      <section>
        <ConctactUs />
        <div className="flex px-10 pt-20 ">
        <WhoAreWe/>
        </div>
        <div className="flex px-10 lg:px-40  ">
          <ChooseUs />
        </div>
        <AgriImportant/>
        <OurQuality/>
        {/* <Stats /> */}
      

      </section>
    </>
  );
}




























