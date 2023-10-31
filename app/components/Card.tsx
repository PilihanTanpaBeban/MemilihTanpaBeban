import {
  BackgroundImage,
  Card,
  Flex,
  Paper,
  Text,
  Title,
  rem,
  Image,
  Overlay,
} from "@mantine/core";
import React, { CSSProperties, useState } from "react";
import { primaryColor, secondaryColor } from "../../public/colors";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useDisclosure, useHover } from "@mantine/hooks";
import ModalDetail from "./Modal";

interface CardProps {
  id: number;
  textMitos: string;
  textFakta: string;
  style?: CSSProperties;
}

const CardMitosFakta: React.FC<CardProps> = ({
  id,
  textMitos,
  textFakta,
  style,
}) => {
  const { hovered, ref } = useHover();
  //   const { open } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const backgroundImageUrl = `../../assets/images/Mitos_Fakta_Image/${id}.png`;

  return (
    <Card
      shadow="xl"
      padding="xl"
      radius="xl"
      style={{
        ...style,
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        minHeight: rem(550),
      }}
      onClick={() => setIsModalOpen(!isModalOpen)}
      ref={ref}
    >
      <Card.Section>
        <BackgroundImage
          src={backgroundImageUrl}
          h={200}
          ta={"right"}
          style={{
            position: "relative",
          }}
        >
          {[2, 4, 5, 6].includes(id) ? (
            <Overlay
              zIndex={0}
              color="#000"
              backgroundOpacity={0}
              blur={4}
            />
          ) : null}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, 0))", // Gradient from black to transparent // Adjust the alpha value to control the darkness
            }}
          ></div>
          <div style={{ padding: 16, position: "absolute", width: "100%" }}>
            <IconArrowNarrowRight
              style={{
                width: rem(40),
                height: rem(40),
                color: "white",
              }}
              stroke={1.5}
            />
          </div>
        </BackgroundImage>
      </Card.Section>

      <Title mt={rem(27)} c={secondaryColor} style={{ fontSize: rem(24) }}>
        Mitos :
      </Title>
      <Text mt={rem(7)} style={{ textAlign: "justify", fontSize: rem(16) }}>
        {textMitos}
      </Text>
      <Title mt={rem(21)} c={secondaryColor} style={{ fontSize: rem(24) }}>
        Fakta :
      </Title>
      <Text mt={rem(7)} style={{ textAlign: "justify", fontSize: rem(16) }}>
        {textFakta}
      </Text>
      <ModalDetail
        id={id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Card>
  );
};

export default CardMitosFakta;
