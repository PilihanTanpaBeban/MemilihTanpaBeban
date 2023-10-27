import {
  Center,
  Group,
  MantineSpacing,
  Overlay,
  StyleProp,
  Title,
} from "@mantine/core";
import React from "react";
import classes from "./hero-image-bg.module.css";

interface TextProps {
  text: String;
  imgFileName: String;
  py?: StyleProp<MantineSpacing>;
}

const HeroBgImg: React.FC<TextProps> = ({ text, imgFileName, py }) => {
  const backgroundImageUrl = `../../assets/images/${imgFileName}`;

  return (
    <Group
      className={classes.wrapper}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      py={py}
    >
      <Overlay color="#000F2E" opacity={0.7} zIndex={1} />

      <Center className={classes.inner}>
        <Title className={classes.title}>{text}</Title>
      </Center>
    </Group>
  );
};

export default HeroBgImg;
