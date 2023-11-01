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
  BackgroundImage,
  AspectRatio,
} from "@mantine/core";
import React from "react";
import classes from "./hero-image-bg.module.css";
import { primaryColor, secondaryColor } from "../../public/colors";
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

const HeroBgImg: React.FC<TextProps> = ({
  text,
  imgFileName,
  pt,
  pb,
  subtitle,
  backgroundColor,
}) => {
  const backgroundImageUrl = `../../assets/images/${imgFileName}`;

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  return (
    <Group
      className={classes.wrapper}
      style={{ backgroundColor: primaryColor }}
    >
      <BackgroundImage
        src={backgroundImageUrl}
        pt={mobile ? 90 : pt}
        pb={mobile ? 90 : pb}
      >
        <Overlay color={"#120A23"} zIndex={1} />

        <Center className={classes.inner} w={"100%"}>
          <Flex direction={"column"} align={"center"} justify={"center"}>
            <Title className={classes.title}>
              {renderTextWithLineBreaks(text)}
            </Title>
            {subtitle && (
              <>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: mobile ? rem(16) : rem(32),
                    textAlign: "center",
                  }}
                >
                  {subtitle}
                </Text>
              </>
            )}
          </Flex>
        </Center>
      </BackgroundImage>
    </Group>
  );
};

export default HeroBgImg;
