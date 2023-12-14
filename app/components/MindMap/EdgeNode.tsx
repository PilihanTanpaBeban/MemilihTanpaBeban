import { Image } from "@mantine/core";
import React from "react";

interface EdgeNodeProps {
  data: any;
}

const EdgeNode: React.FC<EdgeNodeProps> = ({ data }) => {
  return (
    <>
      <Image h="3501px" w="3358px" src={`../../assets/images/${data.image}`}></Image>
    </>
  );
};

export default EdgeNode;
