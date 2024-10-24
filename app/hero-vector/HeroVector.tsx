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
  ChipGroup,
} from "@mantine/core";
import React, { ReactNode } from "react";
import classes from "./hero-vector.module.css";
import { lightPurple, primaryColor, secondaryColor } from "../../public/colors";
import { renderTextWithLineBreaks } from "../components/LineBreakRender";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";

interface TextProps {
  text?: String;
  imgFileName: String;
  pt?: StyleProp<MantineSpacing>;
  pb?: StyleProp<MantineSpacing>;
  subtitle?: String;
  backgroundColor?: String;
  children?: ReactNode;
}

const HeroVector: React.FC<TextProps> = ({ text, imgFileName, subtitle, pt, pb, children }) => {
  const backgroundImageUrl = `../../assets/images/${imgFileName}`;

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  return (
    <div style={{ backgroundColor: lightPurple }}>
      <Container
        size={"xl"}
        className={classes.wrapper}
        pt={mobile ? 60 : 0}
        pb={mobile ? 60 : 0}
      >
        <Flex
          gap="xl"
          justify="flex-start"
          align="center"
          direction={mobile ? "column-reverse" : "row"}
        >
          <div className={classes.inner}>
            <Title className={classes.title} c={primaryColor}>
              {text && renderTextWithLineBreaks(text)}
              {!text && children}
            </Title>
            <Text ta="justify" mt="md">{subtitle}</Text>
          </div>
          <div></div>
          <Image
            pt={mobile ? 0 : pt}
            pb={mobile ? 0 : pb}
            src={backgroundImageUrl}
          ></Image>
        </Flex>
      </Container>
    </div>
  );
};

export default HeroVector;
