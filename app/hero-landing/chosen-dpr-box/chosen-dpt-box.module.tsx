import {
    Flex,
    rem,
    Image,
    Text,
} from "@mantine/core";
import React from "react";
import {
    white,
} from "../../../public/colors";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../../theme";
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
    const tablet = useMediaQuery(`(max-width: ${theme.breakpoints?.md})`);
    const laptop = useMediaQuery(`(max-width: ${theme.breakpoints?.lg})`);
    const desktop = useMediaQuery(`(max-width: ${theme.breakpoints?.xl})`);
    return (
        <Flex
            px={rem(10)}
            pt={rem(10)}
            pb={rem(5)}
            ta={"center"}
            align={"center"}
            content={"center"}
            direction={"column"}
            gap={0}
            style={{
                ...style, border: `1px solid #F0F0F0`, borderRadius: "4px"
            }}
            maw={mobile ? '100%' : tablet ? '100%' : rem(130)}
            // w={tablet?:'auto'}
            // h={tablet?rem(140):'auto'}
            bg={white}
        >
            <Image
                mb={rem(9)}
                // h={rem(147)}
                w={'100%'}
                src={`../../assets/images/DprTerpilih/${data.image}`}
                bgsz={"cover"}
                bgr="no-repeat"
            />
            {/* </AspectRatio> */}
            <Flex align="center" justify="center">
                <Text
                    ta="center"
                    tt="capitalize"
                    fw={"bold"}
                    mb={rem(5)}
                    style={{ fontSize: tablet?rem(8):rem(10) }}
                >
                    {renderTextWithLineBreaksNoSpaces(data.nama)}
                </Text>
            </Flex>
            <Text
                style={{
                    fontSize: rem(7)
                }}
            >
                {data.dapil}
            </Text>
        </Flex>
    );
};

export default BoxChosenDpr;
