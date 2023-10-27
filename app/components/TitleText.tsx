import { Text } from "@mantine/core";
import React from "react";
import { secondaryColor } from "../../public/colors";

interface TextProps {
  text:string;
  size:string;
}

const TitleText: React.FC<TextProps> = ({ text,size }) => {
  return (
    <Text style={{fontSize:size, color:secondaryColor, fontWeight:"bold"}}>
        {text}
    </Text>
  );
};

export default TitleText;
