import { Flex, Text, rem } from "@mantine/core";
import React from "react";
import { Handle, Position } from "reactflow";
import { primaryColor, secondaryColor } from "../../../public/colors";

interface RootNodeProps {
  data: any;
  isConnectable: any;
}

const TitleNode: React.FC<RootNodeProps> = ({ data, isConnectable }) => {
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
        w={rem(222)}
        h={rem(69)}
        style={{ borderRadius: rem(20) }}
        align="center"
        justify="center"
        bg={secondaryColor}
        c="white"
        direction="column"
        ta="center"
      >
        <Text style={{fontSize:rem(12)}} fw={"bold"}>
          {data.title}
        </Text>
        <Text style={{fontSize:rem(10)}}>{data.description}</Text>
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
    </>
  );
};

export default TitleNode;
