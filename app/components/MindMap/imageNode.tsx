import React from "react";
import { Handle, Position } from "reactflow";
import { Text, rem } from "@mantine/core";

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
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="a"
        isConnectable={isConnectable}
      />
      <div
        style={{
          height: data.image.height,
          width: data.image.width,
          backgroundImage: `url(${data.image.url})`,
          backgroundRepeat: "no-repeat",
        }}
      />
      <Text style={{fontSize:rem(4)}}>{data.label}</Text>
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

export default ImageNode;
