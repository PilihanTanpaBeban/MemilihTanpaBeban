import { Box, Button, Container, Flex, rem, Select, Title, Text, Modal, LoadingOverlay } from '@mantine/core';
import React, { useState } from 'react';
import { theme } from '../theme';
import { lightPurple, primaryColor } from '../public/colors';
import Map from '../app/components/Map/Map';
import { categories, indonesiaProvinces } from '../app/components/calon/const';
import CalonPejabatBox from '../app/components/calon/CalonPejabatBox';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import ModalDetailPejabat from '../app/components/calon/ModalDetailPejabat';
import classes from '../app/components/calon/calon.module.css';
import { useEffect } from 'react';
import { getAllData, getSearchResult } from '../app/components/calon/model/APIService';
import { AllRequestBody, SearchRequestBody } from '../app/components/calon/model/Requests';

const Calon: React.FC = () => {
    // select search
    const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
    const [searchProvince, setSearchProvince] = useState<string | null>(null);
    const [province, setProvince] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const [modalVisible, { open, close }] = useDisclosure(false);
    const [selectedPejabat, setSelectedPejabat] = useState<number>()

    // data
    const [data, setData] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
    const tablet = useMediaQuery(`(max-width: ${theme.breakpoints?.md})`);

    const fetchData = async (page: number) => {
        setLoading(true);
        try {
            const response = await getAllData({ page });
            setData((prevData: any[]) => [...prevData, ...response.data]);
            setLimit(response.totalData);
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
            const searchRequestBody: SearchRequestBody = {
                pejabat_type_id: selectedCategory === '1' ? 1 : selectedCategory === '2' ? 2 : null,
                province_id: searchProvince ? searchProvince : selectedProvince ? selectedProvince : null
            };
            if (!searchRequestBody.pejabat_type_id && !searchRequestBody.province_id) {
                console.log('if');
                setData([]);
                fetchData(1);
                setIsSearch(false);
                return;
            } else {
                const response = await getSearchResult(page, searchRequestBody);
                page == 1 ? setData(response.data) : setData([...data, ...response.data])
                setLimit(response.totalData)
                setPage(page);
                setIsSearch(true);
            }
        } catch (error) {
            console.error('Error searching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(page);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 && !loading) {
            if (data.length < limit)
                isSearch ? handleSearch(page + 1) : fetchData(page + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page, loading]);

    const handleModalOpen = (pejabatId: number) => {
        setSelectedPejabat(pejabatId);
        open();
    };

    const handleProvinceClick = (Province_id: string) => {
        setSelectedProvince(null);
        setSearchProvince(Province_id);
        // handleSearch(1);
    };

    const handleSelectProvince = (province: string | null) => {
        setSearchProvince(null);
        setProvince(province);
        console.log(province);
    }

    useEffect(() => {
        if (searchProvince !== null || province !== null) {
            console.log(searchProvince, province);
            handleSearch(1);
        }
    }, [searchProvince, province]);

    const calonPejabatBox = data.map((data: any, index: number) => {
        const url = `/assets/images/IndonesiaMap/${data.Province_Name}/${data.Pejabat_Name}.jpeg`;
        return (
            <React.Fragment key={index}>
                <CalonPejabatBox
                    dapil={data.Dapil_id}
                    pejabat_id={data.Pejabat_id}
                    opini={data.Alignment_Name}
                    name={data.Pejabat_Name}
                    partai={data.Partai_Name}
                    province={data.Province_Name}
                    onBoxClick={handleModalOpen}
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
                            Pilih Berdasarkan Daerah Pemilihan
                        </Title>
                        <Map mapWidth={mobile ? 400 : tablet ? 800 : 1150} onProvinceClick={handleProvinceClick} province={selectedProvince}/>
                    </Flex>
                </Container>
            </Box>
            <Container size={"xl"}>
                <Flex h={!mobile ? rem(44) : '100%'} mt={rem(56)} mb={!mobile ? rem(100) : rem(50)} gap={"xl"} direction={mobile ? "column" : "row"} align="center" justify={mobile || tablet ? 'center' : "start"}>
                    <Select
                        classNames={{ input: classes.input }}
                        placeholder="Categori"
                        data={categories.map(category => ({ value: category.id, label: category.position }))}
                        nothingFoundMessage="Jabatan tidak ditemukan..."
                        value={'1'}
                        disabled
                    // onChange={(value) => setSelectedCategory(value)}
                    />

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
                    <Button onClick={() => handleSelectProvince(selectedProvince)} h={'100%'} px={rem(40)} py={rem(11)} style={{ fontSize: rem(16), backgroundColor: primaryColor, color: 'white', border: 'none', borderRadius: rem(8) }}>
                        <Text fw={'600'}>Search</Text>
                    </Button>
                </Flex>

                <Title ta={"center"} mb={rem(50)} c={primaryColor}>Klik Untuk Deskripsi Lebih Detail</Title>

                <Box pos="relative" style={{ padding: mobile || tablet ? "0 12px" : "0" }}>
                    <LoadingOverlay
                        visible={loading}
                        zIndex={1000}
                        overlayProps={{ radius: 'sm', blur: 2 }}
                        loaderProps={{ color: primaryColor, type: 'bars' }}
                    />
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : tablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
                        gap: '20px',
                        rowGap: '20px',
                    }}>
                        {calonPejabatBox}
                    </div>
                </Box>
            </Container>

            <Modal centered
                size={mobile || tablet ? "100%" : "70%"} opened={modalVisible} onClose={close} withCloseButton={false}>
                {selectedPejabat !== undefined && <ModalDetailPejabat data={selectedPejabat} />}
            </Modal>
        </Box>
    );
};

export default Calon;