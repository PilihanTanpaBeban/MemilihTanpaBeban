import React from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { rem } from "@mantine/core";
import MindMap from "../app/components/MindMap/MindMap";
import HeroVector from "../app/hero-vector/HeroVector";

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
      {/* <HeroVector
        pt={rem(50)}
        pb={rem(0)}
        text={"Potensi\nKonflik Kepentingan"}
        subtitle="Situs ini bertujuan untuk mengedukasi dan membuka wawasan para pengunjung mengenai konflik kepentingan yang mungkin terjadi pada calon anggota legislatif, calon eksekutif, para incumbent baik di tingkat legislatif maupun eksekutif, dengan industri rokok. Agar, para pengunjung dapat lebih mengenal para calon yang benar-benar memihak kepentingan masyarakat, dan menggunakan hak pilih dengan lebih bijak."
        imgFileName={"Konflik_Kepentingan.webp"}
      ></HeroVector>
      <div>
        <MindMap/>
      </div> */}
    </>
  );
}

export default KonflikKepentinganPage;
