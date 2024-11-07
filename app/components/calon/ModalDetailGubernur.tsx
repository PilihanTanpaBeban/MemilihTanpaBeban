import { Box, Divider, Flex, Image, List, LoadingOverlay, rem, Text, Title } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { checkColor } from './calonService';
import { primaryColor } from '../../../public/colors';
import { theme } from '../../../theme';
import { getDetailPejabat, getDetailPejabatV2 } from './model/APIService';
import { DetailRequestBody, DetailRequestBodyV2 } from './model/Requests';
import { useMediaQuery } from '@mantine/hooks';
import { renderTextWithHtml } from '../LineBreakRender';
import classes from './ModalDetailPejabat.module.css';

interface ModalDetailGubernurProps {
    data: number[];
}
const ModalDetailGubernur: React.FC<ModalDetailGubernurProps> = ({ data }) => {
    const [detailPejabat, setDetailPejabat] = useState<any[] | null>(null);
    const [loading, setLoading] = useState(false);

    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
    const tablet = useMediaQuery(`(max-width: ${theme.breakpoints?.md})`);
    const fetchDetailPejabat = async () => {
        setLoading(true);
        const request: DetailRequestBodyV2 = {
            pejabat_id: data,
        }
        console.log('request', request)
        try {
            const response = await getDetailPejabatV2(request);
            console.log('response', response.data);
            setDetailPejabat(response.data);
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
                <Box p={mobile || tablet ? rem(20) : rem(40)} pos={'relative'}>
                    {detailPejabat.map((pejabat, index) => (
                        <><Flex gap={'md'} direction={!mobile ? 'row' : 'column'} key={pejabat.Pejabat_id}>
                            <Flex gap={"33px"} direction={mobile ? 'column' : "row"}>
                                <Image mah={rem(300)} w={mobile ? '100%' : tablet ? rem(170) : rem(220)} fit='cover' alt='Calon Gubernur' src={`/assets/images/FotoCagub/${pejabat.Province_Name}/${pejabat.Dapil_id}/${pejabat.Pejabat_Name}.jpeg`} />
                                <Flex direction={"column"} gap={rem(10)}>
                                    <Flex
                                        bg="white"
                                        px={rem(8)}
                                        py={rem(5)}
                                        w={rem(140)}
                                        align="center"
                                        style={{ borderRadius: rem(9), boxShadow: `0 0 ${rem(7)} rgba(0, 0, 0, 0.15)` }}
                                    >
                                        <div style={{ width: '22px', height: '18px', borderRadius: '50%', backgroundColor: checkColor(pejabat.Alignment_Name) }} />
                                        <Text style={{ fontSize: rem(12) }} fw="600" w="100%" ta="center">
                                            {pejabat.Alignment_Name}
                                        </Text>
                                    </Flex>
                                    <Flex direction={'column'}>
                                        <Title style={{ fontSize: rem(30) }} w={!mobile ? rem(350) : '100%'} mb={rem(5)} mt={rem(10)}>{pejabat.Pejabat_Name}</Title>
                                        <Text>Calon {pejabat.Pejabat_Type}</Text></Flex>
                                    <Flex gap={"xl"} mt={rem(20)} direction={"row"}>
                                        <Flex miw={rem(135)} gap={'sm'} direction={"column"}>
                                            <Text style={{ fontSize: rem(14) }}>
                                                Daerah Pemilihan
                                            </Text>
                                            <Text style={{ fontSize: rem(18), fontWeight: '500' }}>
                                                {pejabat.Province_Name}
                                            </Text>
                                        </Flex>
                                        <Flex miw={rem(135)} gap={'sm'} direction={"column"}>
                                            <Text style={{ fontSize: rem(14) }}>
                                                Nomor Urut
                                            </Text>
                                            <Text style={{ fontSize: rem(18), fontWeight: '500' }}>
                                                {pejabat.Dapil_id}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex className={classes.textQuote} gap={'md'} mt={rem(60)} direction={'column'}>
                                <Title style={{ fontSize: rem(24) }} c={primaryColor}>Quote:</Title>
                                {pejabat.Quote_Desc == null && <Text style={{ fontSize: rem(16) }}>Belum ada statement di media massa terkait isu pengendalian tembakau</Text>}
                                <Text ta={'justify'}>
                                    {pejabat.Quote_Desc != null && renderTextWithHtml(pejabat.Quote_Desc)}
                                </Text>
                            </Flex>
                        </Flex>{index != detailPejabat.length - 1 ? (<Divider my={rem(25)} />) : null}</>
                    ))}
                </Box>
            }
        </Box>
    );
};

export default ModalDetailGubernur;