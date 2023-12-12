import React from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { rem } from "@mantine/core";
import MindMap from "../app/components/MindMap/MindMap";
import HeroVector from "../app/hero-vector/HeroVector";

function KonflikKepentinganPage() {
  return (
    <>
      <HeroVector
        pt={rem(0)}
        pb={rem(0)}
        text={"Konflik Kepentingan"}
        imgFileName={"konflik_kepentingan.webp"}
      ></HeroVector>
      <div>
        <MindMap/>
      </div>
    </>
  );
}

export default KonflikKepentinganPage;
