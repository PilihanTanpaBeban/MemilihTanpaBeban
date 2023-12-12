import { Flex, Text, rem } from "@mantine/core";
import React from "react";
import { Handle, Position } from "reactflow";
import {
  bgOrange,
  primaryColor,
} from "../../../public/colors";

interface RootNodeProps {
  data: any;
  isConnectable: any;
}

const RootNode: React.FC<RootNodeProps> = ({ data, isConnectable }) => {
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
        p="auto"
        w={data.bg == bgOrange ? rem(264) : rem(140)}
        h={rem(39)}
        style={{ fontSize: rem(16), borderRadius: rem(20) }}
        align="center"
        justify="center"
        bg={data.bg}
      >
        <Text c="white" fw={"bold"}>
          {data.title}
        </Text>
      </Flex>
      
    </>
  );
};

export default RootNode;
