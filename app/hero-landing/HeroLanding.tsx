import { Title, Text, Container, Overlay, Group } from "@mantine/core";
import classes from "./HeroLanding.module.css";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import { useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";

export const HeroImageBackground = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  return (
    <Group py={mobile ? 100 : 210} className={classes.wrapper}>
      <Overlay color="#000" zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Pilihan Tanpa Beban</Title>

        <Container mt={20} size={640}>
          <Text className={classes.description}>
            Situs ini bertujuan untuk mengedukasi dan membuka wawasan para
            pengunjung mengenai konflik kepentingan yang mungkin terjadi pada
            calon anggota legislatif, calon eksekutif, para incumbent baik di
            tingkat legislatif maupun eksekutif, dengan industri rokok. Agar,
            para pengunjung dapat lebih mengenal para calon yang benar-benar
            memihak kepentingan masyarakat, dan menggunakan hak pilih dengan
            lebih bijak.
          </Text>
        </Container>

        <div className={classes.controls}>
          <SecondaryButton
            text="Sampaikan Aspirasi"
            radius={"xl"}
            size={"md"}
            onClick={scrollToBottom}
          />
        </div>
      </div>
    </Group>
  );
};
