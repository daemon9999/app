import Map from "@/layouts/farm/map";
import ResultData from "@/layouts/farm/result-data";
import Tabs from "@/layouts/farm/tabs";
import { useState } from "react";

export default function Farm() {
  const [selectedLoc, setSelectedLoc] = useState<number>(0);

  return (
    <>
      <section className="flex  container mx-auto w-[90%] py-10 gap-y-5 flex-col">
        <Tabs selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
        <Map selectedLoc={selectedLoc} />
        <ResultData selectedLoc={selectedLoc} />
      </section>
    </>
  );
}
