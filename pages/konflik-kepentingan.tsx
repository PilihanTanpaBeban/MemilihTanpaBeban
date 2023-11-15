import React from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { rem } from "@mantine/core";
import MindMap from "../app/components/MindMap/MindMap";

function KonflikKepentinganPage() {
  return (
    <>
      <HeroBgImg
        pt={rem(300)}
        pb={rem(350)}
        text={"Coming Soon!"}
        subtitle={"Nantikan Launching di Akhir 2023"}
        imgFileName={"prodigi_3_1.png"}
      ></HeroBgImg>
      <div>
        {/* <MindMap/> */}
      </div>
    </>
  );
}

export default KonflikKepentinganPage;
