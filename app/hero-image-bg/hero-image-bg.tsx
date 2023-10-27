import {
  Center,
  Group,
  MantineSpacing,
  Overlay,
  StyleProp,
  Title,
  Text,
  Flex,
  rem,
} from "@mantine/core";
import React from "react";
import classes from "./hero-image-bg.module.css";
import { secondaryColor } from "../../public/colors";

interface TextProps {
  text: String;
  imgFileName: String;
  pt?: StyleProp<MantineSpacing>;
  pb?: StyleProp<MantineSpacing>;
  subtitle?: String;
}

const renderTextWithLineBreaks = (text: String) => {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const HeroBgImg: React.FC<TextProps> = ({
  text,
  imgFileName,
  pt,
  pb,
  subtitle,
}) => {
  const backgroundImageUrl = `../../assets/images/${imgFileName}`;

  return (
    <Group
      className={classes.wrapper}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      pt={pt}
      pb={pb}
    >
      <Overlay color={secondaryColor} opacity={0.7} zIndex={1} />

      <Center className={classes.inner} w={"100%"}>
        <Flex direction={"column"} align={"center"} justify={"center"}>
          <Title className={classes.title}>
            {renderTextWithLineBreaks(text)}
          </Title>
          {subtitle && (
            <>
              <Text style={{fontWeight:600, fontSize:rem(32)}}>{subtitle}</Text>
            </>
          )}
        </Flex>
      </Center>
    </Group>
  );
};

export default HeroBgImg;
