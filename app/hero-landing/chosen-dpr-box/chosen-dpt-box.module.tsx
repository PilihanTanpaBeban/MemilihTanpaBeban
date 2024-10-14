import {
    Flex,
    rem,
    Image,
    Text,
    Badge,
    Blockquote,
    Divider,
    Group,
    List,
    Modal,
    ScrollArea,
    Title,
    BackgroundImage,
    AspectRatio,
} from "@mantine/core";
import React, { useState } from "react";
import {
    lightPurple,
    primaryColor,
    secondaryColor,
} from "../../../public/colors";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../../theme";
import { PrimaryButton } from "../../components/Button";
import { IconInfoCircle } from "@tabler/icons-react";
import { renderTextWithLineBreaksNoSpaces } from "../../components/LineBreakRender";

interface boxPejabatProps {
    data: any;
    style?: React.CSSProperties;
    className?: string;
}

const BoxChosenDpr: React.FC<boxPejabatProps> = ({ data, style }) => {
    const icon = <IconInfoCircle />;

    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
    const laptop = useMediaQuery(`(max-width: ${theme.breakpoints?.lg})`);
    return (
        <>
            <Flex
                p={rem(12)}
                ta={"center"}
                align={"center"}
                content={"center"}
                direction={"column"}
                gap={0}
                style={{
                    ...style, border: `1px solid #F0F0F0`, borderRadius: "4px"
                }}
            >   
            {/* <AspectRatio ratio={107 / 122}> */}
                    <Image
                        mb={rem(14)}
                        // h={rem(122)}
                        // w={rem(107)}
                        src={`../../assets/images/photos/${data.image}`}
                        bgsz={"contain"}
                        bgr="no-repeat"
                    />
                    {/* </AspectRatio> */}
                <Flex align="center" justify="center">
                    <Text
                        ta="center"
                        tt="capitalize"
                        fw={"bold"}
                        mb={rem(5)}
                        style={{ fontSize: rem(10) }}
                    >
                        {renderTextWithLineBreaksNoSpaces(data.nama)}
                    </Text>
                </Flex>
                <Text
                    style={{
                        fontSize: rem(8)
                    }}
                >
                    {data.dapil}
                </Text>
            </Flex>
        </>
    );
};

export default BoxChosenDpr;
