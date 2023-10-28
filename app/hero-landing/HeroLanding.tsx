import { Title, Text, Container, Overlay } from "@mantine/core";
import classes from "./HeroLanding.module.css";
import {PrimaryButton} from "../components/Button";

export function HeroImageBackground() {

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.9} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Pilihan Tanpa Beban</Title>

        <Container mt={36} size={640}>
          <Text className={classes.description}>
            Media informasi yang menyediakan informasi tentang calon legislatif
            dan eksekutif yang terafiliasi dengan industri rokok dan pro
            kesehatan. Informasi ini dapat membantu Anda membuat pilihan politik
            yang sehat, yaitu pilihan yang didasari oleh informasi yang akurat
            dan berkualitas.
          </Text>
        </Container>

        <div className={classes.controls}>
        <PrimaryButton text="Sampaikan Aspirasi" radius={"xl"} size={"md"} />
        </div>
      </div>
    </div>
  );
}
