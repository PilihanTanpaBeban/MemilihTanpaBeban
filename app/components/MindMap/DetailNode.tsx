import { Center } from "@mantine/core";
import React from "react";
import { Handle, Position } from "reactflow";

interface RootNodeProps{
  data: any;
  isConnectable: any;
}

const DetailNode: React.FC<RootNodeProps> = ({ data,isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="a"
        isConnectable={isConnectable}
      />
      <Center
        style={{
          padding: 10
        }}
      >
        {data.label}
      </Center>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
    </>
  );
};

export default DetailNode;
