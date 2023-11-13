import { Center,Group,Text, rem } from "@mantine/core";
import React from "react";
import { Handle, Position } from "reactflow";
import { secondaryColor } from "../../../public/colors";

interface RootNodeProps {
  data: any;
  isConnectable: any;
}

const RootNode: React.FC<RootNodeProps> = ({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <Group
        style={{
          height: data.label?"50px":"100px",
          width: data.label?"50px":"100px",
          borderRadius: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign:"center",
          gap:0
        }}
        bg={secondaryColor}
        c={'#fff'}
      >
        <Text style={{fontSize:data.label?rem(5):rem(8)}} fw={"bold"}>{data.title}</Text>
        <Text style={{fontSize:rem(4)}}>{data.label}</Text>
      </Group>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </>
  );
};

export default RootNode;
