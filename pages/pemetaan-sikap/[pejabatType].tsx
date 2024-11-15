import { Box, Button, Container, Flex, rem, Select, Title, Text, Modal, LoadingOverlay } from '@mantine/core';
import React, { useRef, useState } from 'react';
import { theme } from '../../theme';
import { lightPurple, primaryColor } from '../../public/colors';
import Map from '../../app/components/Map/Map';
import { indonesiaProvinces } from '../../app/components/calon/const';
import CalonPejabatBox from '../../app/components/calon/CalonPejabatBox';
import CalonGubernurBox from '../../app/components/calon/CalonGubernurBox'; // Ensure this is a valid React component
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import ModalDetailPejabat from '../../app/components/calon/ModalDetailPejabat';
import classes from '../../app/components/calon/calon.module.css';
import { useEffect } from 'react';
import { getAllDataV2, getSearchResultV2 } from '../../app/components/calon/model/APIService';
import { SearchRequestBodyV2 } from '../../app/components/calon/model/Requests';
import { useRouter } from 'next/router';
import ModalDetailGubernur from '../../app/components/calon/ModalDetailGubernur';

const Calon: React.FC = () => {
    // select search
    const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
    const [searchProvince, setSearchProvince] = useState<string | null>(null);
    const [province, setProvince] = useState<string | null>(null);
    const searchTarget = useRef<HTMLDivElement>(null);

    const [modalVisibleDPR, { open: openDPR, close: closeDPR }] = useDisclosure(false);
    const [modalVisibleGubernur, { open: openGubernur, close: closeGubernur }] = useDisclosure(false);
    const [selectedDPR, setSelectedDPR] = useState<number>()
    const [selectedGubernur, setSelectedGubernur] = useState<number[]>()

    // data
    const [dataDPR, setDataDPR] = useState<any[]>([]);
    const [dataGubernur, setDataGubernur] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [limitDPR, setLimitDPR] = useState(0);
    const [limitGubernur, setLimitGubernur] = useState(0);

    const [loading, setLoading] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const router = useRouter()
    const pejabatTypeParam = router.query.pejabatType as string;

    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
    const tablet = useMediaQuery(`(max-width: ${theme.breakpoints?.md})`);

    const fetchData = async (page: number) => {
        setLoading(true);
        try {
            const pejabat_type = pejabatTypeParam == 'calon-gubernur' ? 'Gubernur' : pejabatTypeParam == 'dpr-ri' ? 'DPR' : null;
            const response = await getAllDataV2({ page, pejabat_type });
            if (pejabatTypeParam == 'calon-gubernur') {
                setDataGubernur((prevData: any[]) => [...prevData, ...response.data]);
            } else if (pejabatTypeParam == 'dpr-ri') {
                setDataDPR((prevData: any[]) => [...prevData, ...response.data]);
            }
            pejabatTypeParam == 'calon-gubernur' ? setLimitGubernur(response.totalData) : setLimitDPR(response.totalData);
            // setLimit(response.totalData);
            setPage(page);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            await new Promise(resolve => setTimeout(resolve, 200));
            setLoading(false);
        }
    };

    const handleSearch = async (page: number) => {
        setLoading(true);
        try {
            const searchRequestBody: SearchRequestBodyV2 = {
                page: page,
                pejabat_type: pejabatTypeParam == 'calon-gubernur' ? 'Gubernur' : pejabatTypeParam == 'dpr-ri' ? 'DPR' : null,
                province_id: searchProvince ? searchProvince : selectedProvince ? selectedProvince : null
            };
            if (!searchRequestBody.province_id) {
                setDataDPR([]);
                setDataGubernur([]);
                fetchData(1);
                setIsSearch(false);
            } else {
                const response = await getSearchResultV2(page, searchRequestBody);
                if (page == 1) {
                    if (pejabatTypeParam == 'calon-gubernur') {
                        setDataGubernur(response.data);
                    } else if (pejabatTypeParam == 'dpr-ri') {
                        setDataDPR(response.data);
                    }
                    pejabatTypeParam == 'calon-gubernur' ? setLimitGubernur(response.totalData) : setLimitDPR(response.totalData)
                    // setLimit(response.totalData)
                    setPage(page);
                    setIsSearch(true);
                } else {
                    setPage(page);
                    if (pejabatTypeParam == 'calon-gubernur') {
                        setDataGubernur((prevData: any[]) => [...prevData, ...response.data]);
                    } else if (pejabatTypeParam == 'dpr-ri') {
                        setDataDPR((prevData: any[]) => [...prevData, ...response.data]);
                    }
                }
            }

        scrollAfterProvClick();
        } catch (error) {
            console.error('Error searching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (pejabatTypeParam) {
            setPage(1); // Reset page to 1 when pejabatType changes
            setDataDPR([]);
            setDataGubernur([]);
            fetchData(page)
        };
    }, [router.query.pejabatType]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 && !loading) {
            if ((dataDPR.length > 1 && dataDPR.length < limitDPR) || (dataGubernur.length > 1 && dataGubernur.length < limitGubernur))
                isSearch ? handleSearch(page + 1) : fetchData(page + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page, loading]);

    const handleModalDPROpen = (pejabatId: number) => {
        setSelectedDPR(pejabatId);
        openDPR();
    };

    const handleModalGubernurOpen = (pejabatId: number[]) => {
        setSelectedGubernur([pejabatId[0], pejabatId[1]]);
        openGubernur();
    };

    const handleProvinceClick = (Province_id: string) => {
        setSelectedProvince(null);
        setSearchProvince(Province_id);
        scrollAfterProvClick();
    };

    const scrollAfterProvClick = ()=>{
        if (searchTarget.current)
            searchTarget.current.scrollIntoView({ behavior: 'smooth' })};

    const handleRequestSearch = (province: string | null) => {
        setSearchProvince(null);
        setProvince(province);
    }

    useEffect(() => {
        if (searchProvince !== null || province !== null) {
            handleSearch(1);
        }
    }, [searchProvince, province]);

    const calonPejabatBox = dataDPR.map((data: any, index: number) => {
        return (
            <React.Fragment key={index}>
                <CalonPejabatBox
                    dapil={data.Dapil_id}
                    pejabat_id={data.Pejabat_id}
                    opini={data.Alignment_Name}
                    name={data.Pejabat_Name}
                    partai={data.Partai_Name}
                    province={data.Province_Name}
                    onBoxClick={handleModalDPROpen}
                />
            </React.Fragment>
        );
    });

    const calonGubernurBox = dataGubernur.map((data: any, index: number) => {
        return (
            <React.Fragment key={index}>
                <CalonGubernurBox
                    Dapil_id={data.Dapil_id}
                    Province_Name={data.Province_Name}
                    data={data.data}
                    onBoxClick={handleModalGubernurOpen}
                />
            </React.Fragment>
        );
    });

    return (
        <Box pb={rem(150)} bg={"#F7FAFF"}>
            <Box bg={lightPurple}>
                <Container size="xl" py={rem(56)}>
                    <Flex direction={"column"} align={"center"} justify={"center"}>
                        <Title mb={rem(40)} c={primaryColor} fw={"800"} style={{ fontSize: rem(36) }}>
                            Pilih {pejabatTypeParam == 'dpr-ri' ? 'DPR RI' : pejabatTypeParam == 'calon-gubernur' ? 'Calon Gubernur' : undefined} Berdasarkan Daerah Pemilihan
                        </Title>
                        <Map mapWidth={mobile ? 400 : tablet ? 800 : 1150} onProvinceClick={handleProvinceClick} province={selectedProvince} />
                    </Flex>
                </Container>
            </Box>
            <Container size={"xl"} ref={searchTarget}>
                <Flex h={!mobile ? rem(44) : '100%'} mt={rem(56)} mb={!mobile ? rem(100) : rem(50)} gap={"xl"} direction={mobile ? "column" : "row"} align="center" justify={mobile || tablet ? 'center' : "start"}>
                    <Select
                        classNames={{ input: classes.input }}
                        value={selectedProvince || searchProvince}
                        placeholder="Provinsi"
                        data={indonesiaProvinces.map(category => ({ value: category.id, label: category.title }))}
                        maxDropdownHeight={200}
                        searchable
                        clearable
                        nothingFoundMessage="Provinsi tidak ditemukan..."
                        onChange={setSelectedProvince}
                    />
                    <Button onClick={() => handleRequestSearch(selectedProvince)} h={'100%'} px={rem(40)} py={rem(11)} style={{ fontSize: rem(16), backgroundColor: primaryColor, color: 'white', border: 'none', borderRadius: rem(8) }}>
                        <Text fw={'600'}>Search</Text>
                    </Button>
                </Flex>

                {(dataDPR.length > 0 || dataGubernur.length > 0) && <Title ta={"center"} mb={rem(50)} c={primaryColor}>Klik Untuk Deskripsi Lebih Detail</Title>}

                <Box pos="relative" style={{ padding: mobile || tablet ? "0 12px" : "0" }}>
                    <LoadingOverlay
                        visible={loading}
                        zIndex={1000}
                        overlayProps={{ radius: 'sm', blur: 2 }}
                        loaderProps={{ color: primaryColor, type: 'bars' }}
                    />
                    {pejabatTypeParam == 'calon-gubernur' && (
                        <>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: mobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
                                gap: '20px',
                                rowGap: '20px',
                            }}>
                                {dataGubernur && dataGubernur.length > 0 && calonGubernurBox}
                            </div>
                            {dataGubernur.length === 0 && <Text fw={'bold'} ta={"center"}>Data tidak ditemukan</Text>}
                        </>
                    )}

                    {pejabatTypeParam == 'dpr-ri' && (
                        <>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : tablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
                                gap: '20px',
                                rowGap: '20px',
                            }}>
                                {dataDPR.length > 0 && calonPejabatBox}
                            </div>
                            {dataDPR.length === 0 && <Text fw={'bold'} ta={"center"}>Data tidak ditemukan</Text>}
                        </>
                    )}
                </Box>
            </Container>

            <Modal centered
                size={mobile || tablet ? "100%" : "70%"} opened={modalVisibleDPR} onClose={closeDPR} withCloseButton={false}>
                {selectedDPR !== undefined && <ModalDetailPejabat data={selectedDPR} />}
            </Modal>

            <Modal centered
                size={'auto'} opened={modalVisibleGubernur} onClose={closeGubernur} withCloseButton={false}>
                {selectedGubernur !== undefined && <ModalDetailGubernur data={selectedGubernur} />}
            </Modal>
        </Box>
    );
};

export default Calon;