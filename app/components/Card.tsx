import { Flex, Paper, Text, Title, rem } from "@mantine/core";
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

const Card: React.FC<CardProps> = ({ id, textMitos, textFakta, style }) => {
  const { hovered, ref } = useHover();
  //   const { open } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Paper
      shadow="xl"
      radius="lg"
      p="xl"
      style={{
        ...style,
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
      ref={ref}
    >
      <Flex justify={"end"}>
        <IconArrowNarrowRight
          style={{
            cursor: "pointer",
            width: rem(40),
            height: rem(40),
            color: primaryColor,
            textAlign: "right",
          }}
          stroke={1.5}
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </Flex>
      <Title c={secondaryColor} fs={rem(24)}>
        Mitos :
      </Title>
      <Text style={{ textAlign: "justify" }}>{textMitos}</Text>
      <Title mt={rem(21)} c={secondaryColor} fs={rem(24)}>
        Fakta :
      </Title>
      <Text style={{ textAlign: "justify" }}>{textFakta}</Text>
      <ModalDetail
        id={id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Paper>
  );
};

export default Card;
