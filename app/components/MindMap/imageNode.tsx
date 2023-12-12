import React, { useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import "./overview.css";
import { useRouter } from "next/router";
import {
  Flex,
  Group,
  List,
  Modal,
  Text,
  Title,
  rem,
  Image,
  Divider,
  Center,
  Badge,
  Blockquote,
  ScrollArea,
} from "@mantine/core";
import {
  renderTextWithLineBreaks,
  renderTextWithLineBreaksNoSpaces,
} from "../LineBreakRender";
import { IconInfoCircle } from "@tabler/icons-react";
import {
  bgGrayColor,
  lightPurple,
  primaryColor,
  secondaryColor,
} from "../../../public/colors";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../../theme";
import { PrimaryButton, SecondaryButton } from "../Button";

interface imageNodeProps {
  data: any;
  isConnectable: any;
}

const ImageNode: React.FC<imageNodeProps> = ({ data, isConnectable }) => {
  const [openModal, setModalOpen] = useState(false);
  const router = useRouter();
  const icon = <IconInfoCircle />;
  const [sourceHandleToogle, setSourceHandleToogle] = useState({
    up: false,
    right: false,
    bottom: false,
    left: false,
  });

  const moveToFakta = () => {
    router.push('/cek-fakta');
  }

  useEffect(() => {
    const handler = data.handle;
    if (handler)
      handler.target.forEach((direction: string) => {
        switch (direction) {
          case "up":
            setSourceHandleToogle;
            break;

          default:
            break;
        }
      });
  });

  const closeModal = () => {
    // Close the modal
    setModalOpen(false);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  const ListItem = data.details.map((item: any) => (
    <React.Fragment key={item.id}>
      <Flex direction="row" ta="justify" pr={mobile ? "" : rem(12)}>
        <a href={item.link.href}>
          <Badge size="lg" mr={rem(12)} color={secondaryColor}>
            {item.link.year}
          </Badge>
        </a>{" "}
        <Group>
          <Text>{item.text}</Text>
          {item.quote.length > 0 &&
            item.quote.map((quote: any) => (
              <Blockquote
                color={primaryColor}
                cite={`– ${data.name}`}
                icon={icon}
                mt="sm"
              >
                {quote}
              </Blockquote>
            ))}
        </Group>
      </Flex>
      <Divider my={rem(12)} />
    </React.Fragment>
  ));

  const faktaList = data.fakta.map((item: number, index: number) => (
    <strong>
      <span>
        {item}
        {index >= 0 &&
          index < data.fakta.length - 1 &&
          data.fakta.length > 2 && <span>, </span>}{" "}
        {index >= 0 && index == data.fakta.length - 2 && <span>dan </span>}
      </span>
    </strong>
  ));

  return (
    <>
      <Handle
        type="source"
        position={Position.Top}
        isConnectable={isConnectable}
        id="a"
      />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        id="b"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        id="c"
      />
      <Handle
        type="source"
        position={Position.Left}
        isConnectable={isConnectable}
        id="d"
      />
      <Flex
        bg={bgGrayColor}
        p={rem(10)}
        ta={"center"}
        align={"center"}
        content={"center"}
        direction={"column"}
        gap={0}
        w={rem(150)}
        onClick={showModal}
      >
        <Image
          mb={rem(10)}
          maw={rem(60)}
          src={`../../assets/images/photos/${data.image}`}
        />
        <Text fw={"bold"} style={{ fontSize: rem(12) }}>
          {data.name}
        </Text>
        <Text mt={0} style={{ fontSize: rem(8) }}>
          {renderTextWithLineBreaksNoSpaces(data.label)}
        </Text>
      </Flex>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        id="e"
      />
      <Handle
        type="target"
        position={Position.Right}
        isConnectable={isConnectable}
        id="f"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        isConnectable={isConnectable}
        id="g"
      />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        id="h"
      />
      {data.details && openModal && (
        <Modal
          withCloseButton={false}
          opened={openModal}
          onClose={closeModal}
          size={mobile ? "xl" : "55%"}
          bg={lightPurple}
          centered
        >
          <Flex
            direction={mobile ? "column" : "row"}
            align="flex-start"
            gap="md"
            p={rem(12)}
          >
            <Group ta="center">
              <Image
                w="225px"
                m="auto"
                src={`../../assets/images/photos/${data.image}`}
              />

              <Title c={primaryColor}>{data.name}</Title>
              <Text w="100%">{data.label}</Text>
            </Group>
            <div>
              <ScrollArea h={mobile ? "100vh" : "50vh"}>
                <Flex direction="column">{ListItem}</Flex>
              </ScrollArea>
              <Flex
                direction="row"
                align="center"
                justify="flex-end"
                py={rem(14)}
              >
                {data.fakta.length > 0 && (
                  <Blockquote color={lightPurple}>
                    {data.fakta.length > 0 && (
                      <Text c={primaryColor}>
                        Cek Fakta {faktaList} untuk mengetahui informasi
                        sebenarnya
                      </Text>
                    )}
                  </Blockquote>
                )}
                <Flex direction="column" gap="xs">
                  {data.fakta.length > 0 && (
                    <SecondaryButton
                      text={"Cek Fakta"}
                      radius={"md"}
                      onClick={moveToFakta}
                    />
                  )}
                  <PrimaryButton
                    onClick={closeModal}
                    text={"Tutup"}
                    radius={"md"}
                  />
                </Flex>
              </Flex>
            </div>
          </Flex>
        </Modal>
      )}
    </>
  );
};

export default ImageNode;
