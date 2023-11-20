import {
  Image,
  Group,
  MantineSpacing,
  Overlay,
  StyleProp,
  Title,
  Text,
  Flex,
  rem,
  BackgroundImage,
  Container,
} from "@mantine/core";
import React from "react";
import classes from "./hero-vector.module.css";
import { lightPurple, primaryColor, secondaryColor } from "../../public/colors";
import { renderTextWithLineBreaks } from "../components/LineBreakRender";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";

interface TextProps {
  text: String;
  imgFileName: String;
  pt?: StyleProp<MantineSpacing>;
  pb?: StyleProp<MantineSpacing>;
  subtitle?: String;
  backgroundColor?: String;
}

const HeroVector: React.FC<TextProps> = ({ text, imgFileName, pt, pb }) => {
  const backgroundImageUrl = `../../assets/images/${imgFileName}`;

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  return (
    <Group
      className={classes.wrapper}
      style={{ backgroundColor: lightPurple }}
      pt={60}
      pb={60}
    >
      <Container size={"xl"}>
        <Flex
          gap="xl"
          justify="flex-start"
          align="center"
          direction={mobile ? "column-reverse" : "row"}
        >
          <div className={classes.inner}>
            <Title className={classes.title} c={primaryColor}>
              {text}
            </Title>
          </div>
          <div></div>
          <Image
            pt={mobile ? 0 : pt}
            pb={mobile ? 0 : pb}
            src={backgroundImageUrl}
          ></Image>
        </Flex>
      </Container>
    </Group>
  );
};

export default HeroVector;
