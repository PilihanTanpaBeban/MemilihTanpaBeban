import { Box, Divider, Flex, Image, List, LoadingOverlay, rem, Text, Title } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { checkColor } from './calonService';
import { primaryColor } from '../../../public/colors';
import { theme } from '../../../theme';
import { getDetailPejabat } from './model/APIService';
import { DetailRequestBody, DetailRequestBodyV2 } from './model/Requests';
import { useMediaQuery } from '@mantine/hooks';
import { renderTextWithHtml } from '../LineBreakRender';
import classes from './ModalDetailPejabat.module.css';

interface ModalDetailPejabatProps {
    data: number;
}
const ModalDetailPejabat: React.FC<ModalDetailPejabatProps> = ({ data }) => {
    const [detailPejabat, setDetailPejabat] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
    const tablet = useMediaQuery(`(max-width: ${theme.breakpoints?.md})`);
    const fetchDetailPejabat = async () => {
        setLoading(true);
        const request: DetailRequestBody = {
            pejabat_id: data,
        }
        try {
            const response = await getDetailPejabat(request);
            console.log('response', response.data);
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
            {!loading && !detailPejabat && <Text ta={'center'} style={{ fontSize: rem(16) }}>Silahkan coba kembali</Text>}
            {
                !loading && detailPejabat &&
                <Box p={mobile || tablet ? rem(20) : rem(57)} pos={'relative'}>
                    <Flex gap={"33px"} direction={mobile ? 'column' : "row"}>
                        <Image w={mobile ? '100%' : tablet ? rem(170) : rem(260)} h={"auto"} alt='Pejabat' src={`/assets/images/IndonesiaMap/${detailPejabat.Province_Name}/${detailPejabat.Pejabat_Name}.jpeg`} />
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
                            {(detailPejabat.Komisi_Pejabat != null && detailPejabat.Komisi_Pejabat != '') &&
                                <Text fw={'600'}>Komisi {detailPejabat.Komisi_Pejabat}</Text>}
                            <Flex gap={"xl"} mt={rem(20)} direction={"row"}>
                                <Flex gap={'sm'} direction={"column"} align={'center'}>
                                    <Text style={{ fontSize: rem(14) }} ta={'center'}>
                                        Partai
                                    </Text>
                                    <Image alt='Partai' maw={rem(75)} src={`/assets/images/Partai/${detailPejabat.Partai_Name?.toLowerCase()}.png`} />
                                </Flex>
                                <Flex miw={rem(135)} gap={'sm'} direction={"column"} >
                                    <Text style={{ fontSize: rem(14) }}>
                                        Daerah Pemilihan
                                    </Text>
                                    <Text style={{ fontSize: rem(20), fontWeight: '500' }}>
                                        {detailPejabat.Province_Name} {detailPejabat.Dapil_id}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>

                    </Flex>
                    <Flex className={classes.textQuote} gap={'md'} mt={rem(60)} direction={'column'}>
                        <Title style={{ fontSize: rem(24) }} c={primaryColor}>Quote:</Title>

                        {detailPejabat.Quote_Desc == null && <Text style={{ fontSize: rem(16) }}>Belum ada statement di media massa terkait isu pengendalian tembakau</Text>}
                        <Text ta={'justify'}>
                            {detailPejabat.Quote_Desc != null && renderTextWithHtml(detailPejabat.Quote_Desc)}
                        </Text>

                    </Flex>
                </Box>
            }
        </Box>
    );
};

export default ModalDetailPejabat;