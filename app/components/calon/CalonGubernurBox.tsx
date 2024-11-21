import React, { useEffect } from 'react';
import { Stack, Flex, Text, Image } from '@mantine/core';
import { rem } from '@mantine/core';
import { checkColor } from './calonService';
import { white } from '../../../public/colors';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '../../../theme';
import { OPINI_NO_ARGUMENT } from './constants';

interface CalonGubernurBoxProps {
    Dapil_id: number;
    Province_Name: string;
    data: any[];
    onBoxClick?: (pejabat_id: number[]) => void;
}

const CalonGubernurBox: React.FC<CalonGubernurBoxProps> = ({ Dapil_id, Province_Name, data, onBoxClick }) => {
    const url = "/assets/images/20_24/placholder_user.jpeg";

    const handleBoxClick = () => {
        if (onBoxClick) {
            onBoxClick([data[0].Pejabat_id, data[1].Pejabat_id]);
        }
    }
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

    return (
        <div onClick={handleBoxClick} style={{ padding: '0 20px 20px 20px', backgroundColor: white, borderRadius: rem(5), cursor: 'pointer', maxWidth: rem(584), height: 'auto', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>
            <Text my={rem(17)} ta={'center'} style={{ fontSize: rem(20) }} fw={'bold'}>Calon Gubernur {Province_Name}<br />Nomor Urut {Dapil_id} </Text>
            <Flex display={'row'} gap={'md'}>
                {data.map((item, index) => (
                    <Stack key={index} w={'100%'}>
                        <Stack
                            align="flex-end"
                            h={mobile ? rem(185) : rem(283)}
                            pt={rem(18)}
                            style={{
                                backgroundImage: `url("${'/assets/images/FotoCagub/' + Province_Name + '/' + Dapil_id + '/' + item.Pejabat_Name + '.jpeg'}"), url("${url}")`,
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
                                <div style={{ width: '22px', height: '18px', borderRadius: '50%', backgroundColor: checkColor(item.Alignment_Name) }} />
                                <Text style={{ fontSize: (mobile && item.Alignment_Name == 'No Argument') ? rem(8) : rem(12) }} fw="600" w="100%" ta="center">
                                    {item.Alignment_Name}
                                </Text>
                            </Flex>
                        </Stack>
                        <Flex direction={'column'} gap={'sm'}>
                            <Text style={{ fontSize: rem(16), fontWeight: 600, textAlign: 'center' }}>{item.Pejabat_Name}</Text>
                            <Text style={{ fontSize: rem(16), textAlign: 'center' }}>{item.Pejabat_type}</Text>
                        </Flex>
                    </Stack>
                ))}
            </Flex>
        </div>
    );
};

export default CalonGubernurBox;