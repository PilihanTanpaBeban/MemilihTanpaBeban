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
  BackgroundImage,
} from "@mantine/core";
import {
  renderTextWithLineBreaksNoSpaces,
} from "../LineBreakRender";
import { IconInfoCircle } from "@tabler/icons-react";
import {
  bgGrayColor,
  bgOrange,
  lightPurple,
  primaryColor,
  secondaryColor,
} from "../../../public/colors";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../../theme";
import { PrimaryButton, SecondaryButton } from "../Button";
import Link from "next/link";

interface imageNodeProps {
  data: any;
  isConnectable: any;
}

const ImageNode: React.FC<imageNodeProps> = ({ data, isConnectable }) => {
  const [openModal, setModalOpen] = useState(false);
  const icon = <IconInfoCircle />;

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
        {item.link && (
          <a href={item.link.href} target="_blank">
            <Badge size="lg" mr={rem(12)} color={secondaryColor}>
              {item.link.year}
            </Badge>
          </a>
        )}

        <Group>
          {item.text != "" && <Text>{item.text}</Text>}
          {item.list && item.list.length != 0 && (
            <List>
              {item.list.map((content: any) => (
                <List.Item>{content}</List.Item>
              ))}
            </List>
          )}
          {item.quote.length > 0 &&
            item.quote.map((quote: any) => (
              <Blockquote
                color={primaryColor}
                cite={`– ${data.name}`}
                icon={icon}
                mt="sm" ml="sm"
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
    <span>
      <strong color={primaryColor}>
        <Link
          style={{ textDecoration: "none" }}
          href={`/cek-fakta?fakta=${item}`}
        >
          {item}
        </Link>
        {index >= 0 &&
          index < data.fakta.length - 1 &&
          data.fakta.length > 2 && <span>, </span>}
      </strong>
      {index >= 0 && index == data.fakta.length - 2 && <span> dan </span>}
    </span>
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
        direction="column"
        align="center"
        justify="center"
        maw={data.width}
        style={{
          borderRadius: rem(5),
          cursor:"pointer",
          boxShadow: "0px 1px 10px 5px rgba(0, 0, 0, 0.05)",
        }}
        onClick={ (data.id == 66 || data.id == 67 ||data.id == 68 ||data.id == 69) ? undefined : showModal }
      >
        <BackgroundImage
          mb="sm"
          src={`../../assets/images/photos/${data.image}`}
          w={data.width}
          h={data.height}
          bgsz="contain"
          bgr="no-repeat"
        />
        <Flex
          direction="column"
          ta="center"
          align="center"
          justify={data.bg == bgOrange ? "center" : "flex-start"}
          h={rem(48)}
          px={rem(6)}
          bg={data.bg}
          w="100%"
          c={data.bg == bgOrange ? "white" : "black"}
        >
          <Text tt="capitalize" fw="bold" style={{ fontSize: data.id == "79" ? rem(6) : rem(8) }}>
            {data.name}
          </Text>
          {data.label && (
            <Text style={{ fontSize: rem(5) }}>
              {renderTextWithLineBreaksNoSpaces(data.label)}
            </Text>
          )}
        </Flex>
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

              <Title tt="capitalize" c={primaryColor}>
                {data.name}
              </Title>
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
                      <Text>
                        Cek Fakta {faktaList} untuk mengetahui informasi
                        sebenarnya
                      </Text>
                    )}
                  </Blockquote>
                )}
                <Flex direction="column" gap="xs">
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
