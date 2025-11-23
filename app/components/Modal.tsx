import {
  BackgroundImage,
  Blockquote,
  Button,
  Group,
  Modal,
  Overlay,
  Text,
  Title,
  rem,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { secondaryColor } from "../../public/colors";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";
import { renderTextWithLineBreaks } from "./LineBreakRender";
import styles from "./Modal.module.css";
import { IconX } from "@tabler/icons-react";
import type { FactItem } from "../util/FactsService";
import { parseLinksToArray } from "../util/LinksUtil";

interface ModalDetailProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
  fact?: FactItem;
}

const ModalDetail: React.FC<ModalDetailProps> = ({ id, isOpen, onClose, fact }) => {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  const [selectedData, setSelectedData] = useState<FactItem | null>(null);

  useEffect(() => {
    setSelectedData(fact ?? null);
  }, [fact, id]);

  const customModalStyles = {
    body: {
      padding: 0,
    },
  };

  const backgroundImageUrl =
    (typeof selectedData?.thumbnailImg === "string" && selectedData?.thumbnailImg?.length
      ? `/assets/images${selectedData.thumbnailImg}`
      : `../../assets/images/Mitos_Fakta_Image/${id}.png`);
  return (
    <>
      <Modal
        opened={isOpen}
        onClose={onClose}
        closeOnClickOutside={true}
        withCloseButton={false}
        onClick={(e) => e.stopPropagation()}
        size={mobile ? "100%" : "70%"}
        styles={customModalStyles}
        overlayProps={{
          backgroundOpacity: 0.8,
          blur: 3,
        }}
        radius={"xl"}
      >
        <BackgroundImage
          src={backgroundImageUrl}
          h={rem(400)}
          ta={"right"}
          style={{
            position: "relative",
          }}
        >
          {[2, 4, 5, 6, 7, 9,10, 11].includes(id) ? (
            <Overlay zIndex={0} color="#000" backgroundOpacity={0} blur={4} />
          ) : null}
          <IconX
            style={{
              width: rem(30),
              height: rem(30),
              color: "white",
              marginTop: "1rem",
              marginRight: "1rem",
              zIndex:"100"
            }}
            onClick={onClose}
            stroke={1.5}
          />
        </BackgroundImage>
        <div style={{ padding: rem(50) }}>
          <Title c={secondaryColor} order={3} w={"100%"}>
            Pernyataan:
          </Title>
          <Text ta={"justify"} fs={rem(16)} mt={rem(3)} mb={rem(16)}>
            {selectedData?.statement}
          </Text>
          <Title c={secondaryColor} order={3} w={"100%"}>
            Fakta:
          </Title>
          <Text ta={"justify"} mt={rem(3)} fs={rem(16)}>
            {/* {selectedData?.factContent ? renderTextWithLineBreaks(selectedData.factContent) : null} */}
            {selectedData?.factContent ? <div dangerouslySetInnerHTML={{ __html: selectedData.factContent }} /> : null}
          </Text>
          {selectedData?.links && parseLinksToArray(selectedData.links).length !== 0 && (
            <Blockquote color="violet" p={rem(20)}>
              <Text ta={"justify"}>Pelajari Selengkapnya:</Text>
              {parseLinksToArray(selectedData.links).map((href) => (
                <Text truncate="end" key={href}>
                  <a href={href} key={href}>
                    {href}
                  </a>
                </Text>
              ))}
            </Blockquote>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalDetail;
