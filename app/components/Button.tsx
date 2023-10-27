import { Button } from "@mantine/core";
import React from "react";

interface ButtonProps {
  text: string;
  radius:string;
  size:string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text,radius,size,onClick }) => {
  return (
    <Button
      variant="filled"
      radius={radius}
      size={size}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
