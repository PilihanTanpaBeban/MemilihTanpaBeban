import React from 'react';
import { Stack, Flex, Text, Image } from '@mantine/core';
import { rem } from '@mantine/core';
import { checkColor } from './calonService';
import { white } from '../../../public/colors';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '../../../theme';
import { OPINI_NO_ARGUMENT } from './constants';

interface CalonPejabatBoxProps {
    pejabat_id: number;
    opini: string;
    name: string;
    partai: string;
    province: string;
    dapil: number;
    onBoxClick?: (pejabat_id: number) => void;

}

const CalonPejabatBox: React.FC<CalonPejabatBoxProps> = ({ pejabat_id, opini, name, partai, province, dapil, onBoxClick }) => {
    const url = "/assets/images/20_24/placeholder_female.jpeg";

    const handleBoxClick = () => {
        if (onBoxClick) {
            onBoxClick(pejabat_id);
        }
    }
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
    // 
    return (
        <div onClick={handleBoxClick} style={{ backgroundColor: white, borderRadius: rem(5), cursor: 'pointer', maxWidth: rem(283), height: 'auto', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>

            <Stack
                align="flex-end"
                h={mobile ? rem(185) : rem(283)}
                pt={rem(18)}
                style={{
                    backgroundImage: `url("${'/assets/images/IndonesiaMap/' + province + '/' + name + '.jpeg'}"), url("${url}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    width: '100%'
                }}
            >
                <Flex
                    bg="white"
                    px={rem(8)}
                    py={rem(5)}
                    w="50%"
                    align="center"
                    style={{ borderRadius: `${rem(9)} 0 0 ${rem(9)}` }}
                >
                    <div style={{ width: '22px', height: '18px', borderRadius: '50%', backgroundColor: checkColor(opini) }} />
                    <Text style={{ fontSize: (mobile && opini == 'No Argument') ? rem(8) : rem(12) }} fw="600" w="100%" ta="center">
                        {opini}
                    </Text>
                </Flex>
            </Stack>

            <Flex bg="white" align="center" justify="center" px={rem(15)} py={rem(10)} direction="column">
                <Flex h={mobile ? rem(90) : rem(65)} mb={rem(13)} align={'center'}>
                    <Text style={{ fontSize: rem(16) }} fw="600" ta={'center'}>
                        {name} ({partai})
                    </Text></Flex>
                <Text ta={'center'} mb={rem(7)}>Dapil {province} {dapil}</Text>
            </Flex>
        </div>
    );
};

export default CalonPejabatBox;