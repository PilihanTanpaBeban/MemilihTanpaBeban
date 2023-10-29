import { useRef } from "react";
import Layout from "../app/components/Layout";
import ContohKasus from "../app/contoh-kasus/ContohKasus";
import FormAspirasi from "../app/form-aspirasi/FormAspirasi";
import { HeroImageBackground } from "../app/hero-landing/HeroLanding";
import LatarBelakang from "../app/latar-belakang/LatarBelakang";

export default function IndexPage() {
  const formAspirasiRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    if (formAspirasiRef.current) {
      formAspirasiRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeroImageBackground />
      <LatarBelakang />
      <ContohKasus />
      <FormAspirasi/>
    </>
  );
}
