import {
  Flex,
  rem,
  Image,
  Text,
  Badge,
  Blockquote,
  Divider,
  Group,
  List,
  Modal,
  ScrollArea,
  Title,
  BackgroundImage,
} from "@mantine/core";
import React, { useState } from "react";
import {
  lightPurple,
  primaryColor,
  secondaryColor,
} from "../../../public/colors";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../../theme";
import { PrimaryButton } from "../Button";
import { IconInfoCircle } from "@tabler/icons-react";
import { renderTextWithLineBreaksNoSpaces } from "../LineBreakRender";

interface boxPejabatProps {
  data: any;
}

const BoxPejabat: React.FC<boxPejabatProps> = ({ data }) => {
  const [openModal, setModalOpen] = useState(false);
  const icon = <IconInfoCircle />;

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  const ListItem = data.details.map((item: any) => (
    <React.Fragment key={item.id}>
      <Flex direction="row" ta="justify" pr={mobile ? "" : rem(12)}>
        <a href={item.link.href} target="_blank">
          <Badge size="lg" mr={rem(12)} color={secondaryColor}>
            {item.link.year}
          </Badge>
        </a>{" "}
        <Group>
          {item.text != "" && <Text>{item.text}</Text>}
          {item.list && item.list.length != 0 && (
            <List>
              {item.list.map((content: any, index: number) => (
                <React.Fragment key={index}>
                  <List.Item>{content}</List.Item>
                </React.Fragment>
              ))}
            </List>
          )}
          {item.quote.length > 0 &&
            item.quote.map((quote: any, index: number) => (
              <React.Fragment key={index}>
                <Blockquote
                  color={primaryColor}
                  cite={`– ${data.nama}`}
                  icon={icon}
                  mt="md"
                  ml="sm"
                >
                  {quote}
                </Blockquote>
              </React.Fragment>
            ))}
        </Group>
      </Flex>
      <Divider my={rem(12)} />
    </React.Fragment>
  ));

  const closeModal = () => {
    setModalOpen(false);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Flex
        p={rem(10)}
        ta={"center"}
        align={"center"}
        content={"center"}
        direction={"column"}
        gap={0}
        w={rem(300)}
        onClick={showModal}
        style={{
          cursor: "pointer",
          boxShadow: "0px 1px 10px 5px rgba(0, 0, 0, 0.05)",
        }}
      >
        <BackgroundImage
          mb={rem(10)}
          h={rem(225)}
          src={`../../assets/images/20_24/${data.image}`}
          bgsz={"contain"}
          bgr="no-repeat"
        />
        <Flex h={rem(70)} align="center" justify="center">
          <Text
            ta="center"
            tt="capitalize"
            fw={"bold"}
            style={{ fontSize: rem(18) }}
          >
            {data.nama}
          </Text>
        </Flex>
        <Text
          h={rem(100)}
          style={{
            fontSize: data.image == "eksekutif_10.png" ? rem(11) : rem(14),
          }}
        >
          {renderTextWithLineBreaksNoSpaces(data.jabatan)}
        </Text>
      </Flex>
      {data.details && openModal && (
        <Modal
          withCloseButton={false}
          opened={openModal}
          onClose={closeModal}
          size={mobile ? "xl" : "80%"}
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
                src={`../../assets/images/20_24/${data.image}`}
              />

              <Title ta={"center"} w={"100%"} tt="capitalize" c={primaryColor}>
                {data.nama}
              </Title>
              <Text w="100%">{data.jabatan}</Text>
            </Group>
            <div>
              <ScrollArea h={mobile ? "100vh" : "50vh"}>
                {data.urlEmbed != "" && (
                  <iframe
                    width="100%"
                    height="315"
                    src={data.urlEmbed}
                  ></iframe>
                )}
                <Flex mb="md" direction="column">
                  {ListItem}
                </Flex>
              </ScrollArea>
              <Flex
                direction="row"
                align="center"
                justify="flex-end"
                py={rem(14)}
              >
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

export default BoxPejabat;
