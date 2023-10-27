import React from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { rem } from "@mantine/core";

function DisclaimerPage() {
  return (
    <>
      <HeroBgImg
        pt={rem(153)}
        pb={rem(145)}
        text={"Disclaimer"}
        imgFileName={"robby_rpic_1080_1920_px_2_1.webp"}
      ></HeroBgImg>
    </>
  );
}

export default DisclaimerPage;
