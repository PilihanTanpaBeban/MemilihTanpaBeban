import { Box, Divider, Flex, Image, List, LoadingOverlay, rem, Text, Title } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { checkColor } from './calonService';
import { primaryColor } from '../../../public/colors';
import { theme } from '../../../theme';
import { getDetailPejabat } from './model/APIService';
import { DetailRequestBody } from './model/Requests';
import { useMediaQuery } from '@mantine/hooks';

interface ModalDetailPejabatProps {
    data: number;
}
const insights: string[] = new Array(2).fill('');
const ModalDetailPejabat: React.FC<ModalDetailPejabatProps> = ({ data }) => {
    const [detailPejabat, setDetailPejabat] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
    const fetchDetailPejabat = async () => {
        setLoading(true);
        const request: DetailRequestBody = {
            pejabat_id: data
        }
        try {
            const response = await getDetailPejabat(request);
            setDetailPejabat(response.data[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDetailPejabat();
    }, []);

    return (
        <Box h={mobile ? '100svh' : loading ? '50vh' : '100%'} pos={'relative'}>
            <LoadingOverlay
                visible={loading}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 2 }}
                loaderProps={{ color: primaryColor, type: 'bars' }}
            />
            {
                !loading && detailPejabat &&
                <Box p={rem(57)} pos={'relative'}>
                    <Flex gap={"33px"} direction={"row"}>
                        <Image width={rem(260)} height={"auto"} src={"/assets/images/20_24/placeholder_female.jpeg"} />
                        <Flex direction={"column"}>
                            <Flex
                                bg="white"
                                px={rem(8)}
                                py={rem(5)}
                                w={rem(140)}
                                align="center"
                                style={{ borderRadius: rem(9), boxShadow: `0 0 ${rem(7)} rgba(0, 0, 0, 0.15)` }}
                            >
                                <div style={{ width: '22px', height: '18px', borderRadius: '50%', backgroundColor: checkColor(detailPejabat.Alignment_Name) }} />
                                <Text style={{ fontSize: rem(12) }} fw="600" w="100%" ta="center">
                                    {detailPejabat.Alignment_Name}
                                </Text>
                            </Flex>
                            <Title mt={rem(10)}>{detailPejabat.Pejabat_Name}</Title>
                            <Flex gap={"xl"} mt={rem(20)} direction={"row"}>
                                <Flex gap={'sm'} direction={"column"} align={'center'} justify={'center'}>
                                    <Text style={{ fontSize: rem(14) }} ta={'center'}>
                                        Partai
                                    </Text>
                                    <Image src={`/assets/images/partai/${detailPejabat.Partai_Name?.toLowerCase()}.png`} />
                                </Flex>
                                <Flex miw={rem(135)} gap={'sm'} direction={"column"} align={'center'} >
                                    <Text style={{ fontSize: rem(14) }} ta={'center'}>
                                        Daerah Pemilihan
                                    </Text>
                                    <Text style={{ fontSize: rem(20), fontWeight: '500' }} ta={'center'}>
                                        {detailPejabat.Province_Name}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>

                    </Flex>
                    <Flex gap={'md'} mt={rem(60)} direction={'column'}>
                        <Title mb={rem(12)} style={{ fontSize: rem(24) }} c={primaryColor}>Quote:</Title>
                        {(detailPejabat.quote == null || detailPejabat.quote.length == 0) && <Text style={{ fontSize: rem(16) }}>Belum ada statement di media massa terkait isu pengendalian tembakau</Text>}
                        {detailPejabat.quote && detailPejabat.quote.length > 0 && <List>
                            {detailPejabat.quote.map((item: string, index: number) => {
                                return (
                                    <List.Item key={index}><Text style={{ fontSize: rem(16) }}>
                                        {item}</Text></List.Item>
                                );
                            })}
                        </List>}
                    </Flex>
                    {(detailPejabat.Insight_Desc != null && detailPejabat.Insight_Desc.length > 0) &&
                        <Flex gap={'md'} direction={'column'}>
                            <Divider mt={rem(30)} my="md" />
                            <Title mb={rem(12)} style={{ fontSize: rem(24) }} c={primaryColor}>Insight:</Title><List spacing={'sm'}>
                                {detailPejabat.Insight_Desc.map((item: string, index: number) => {
                                    return (
                                        <List.Item key={index}>
                                            <Text style={{ fontSize: rem(16) }}>{item}</Text></List.Item>
                                    );
                                })}
                            </List>
                        </Flex>}
                </Box>
            }
        </Box>
    );
};

export default ModalDetailPejabat;