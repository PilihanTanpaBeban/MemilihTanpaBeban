import { Title, Text, Container, Image, Group, Flex } from "@mantine/core";
import classes from "./HeroLanding.module.css";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import { useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";
import { lightPurple, primaryColor, secondaryColor } from "../../public/colors";
import heroImg from "../../public/assets/images/Home Illustration_1 1.png";

export const HeroImageBackground = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  return (
    <Group py={mobile ? 100 : 200} className={classes.wrapper} bg={lightPurple}>
      <Container size="xl">
        <Flex
          gap="md"
          justify="between"
          align="center"
          direction={mobile? "column-reverse" : "row"}
        >
          <div className={classes.inner}>
            <Title className={classes.title} c={primaryColor}>
              Pilihan Tanpa Beban
            </Title>

            <Group mt={20}>
              <Text className={classes.description}>
                Pernah gak kamu kepikiran kalau satu batang rokok yang
                diperjual-belikan punya banyak potensi konflik kepentingan dalam
                politik? <br />
                <br />
                Website ini akan ngebantu kamu untuk melihat fenomena politik
                dan rokok dalam satu platform informasi menjelang Pemilu 2024.
              </Text>
            </Group>

            <div className={classes.controls}>
              <SecondaryButton
                text="Sampaikan Aspirasi"
                radius={"xl"}
                size={"md"}
                onClick={scrollToBottom}
              />
            </div>
          </div>
          <Image src="/assets/images/hero_vector.png"></Image>
        </Flex>
      </Container>
    </Group>
  );
};
