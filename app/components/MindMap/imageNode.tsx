import React from "react";
import { Handle, Position } from "reactflow";
import { Flex, Group, Text, rem } from "@mantine/core";
import { renderTextWithLineBreaks, renderTextWithLineBreaksNoSpaces } from "../LineBreakRender";
import { bgGrayColor } from "../../../public/colors";
import picture from "../../../public/assets/images/photos/legislatif_1_1.jpg";

interface imageNodeProps {
  data: any;
  isConnectable: any;
}

const ImageNode: React.FC<imageNodeProps> = ({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        id="a"
      />
      <Handle
        type="source"
        position={Position.Top}
        isConnectable={isConnectable}
        id="b"
      />
      <Handle
        type="target"
        position={Position.Top}
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
      >
        <img
          style={{
            height: rem(data.height),
            width: rem(data.width),
            marginBottom: rem(10),
          }}
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
        position={Position.Right}
        isConnectable={isConnectable}
        id="e"
      />
      <Handle
        type="source"
        position={Position.Bottom}
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
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        id="h"
      />
    </>
  );
};

export default ImageNode;
