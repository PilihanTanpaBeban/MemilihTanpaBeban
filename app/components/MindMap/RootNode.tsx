import { Center,Group,Text, rem } from "@mantine/core";
import React from "react";
import { Handle, Position } from "reactflow";
import { lightPurple, primaryColor, secondaryColor } from "../../../public/colors";

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
      <Group
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign:"center",
          borderRadius:"25px",
          gap:0,
          boxShadow:"23px 15px 39px 0px #F7FAFF"
        }}
        bg={lightPurple}
        c={primaryColor}
      >
        <Text style={{fontSize:data.label?rem(10):rem(14)}} fw={"bold"}>{data.title}</Text>
        <Text style={{fontSize:rem(10)}}>{data.label}</Text>
      </Group>
    </>
  );
};

export default RootNode;
