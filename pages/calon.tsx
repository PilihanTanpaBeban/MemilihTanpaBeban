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

// export const sampleData =
//     [
//         { id: 1, name: "H. Irmawan, S.Sos.", partai: "PKB", jabatan: "Sample Jabatan 1", opini: "Pro" },
//         { id: 2, name: "A. Budi, M.T.", partai: "PDI", jabatan: "Sample Jabatan 2", opini: "Contra" },
//         { id: 3, name: "C. Dewi, S.H.", partai: "Golkar", jabatan: "Sample Jabatan 3", opini: "Pro" },
//         { id: 4, name: "D. Eka, S.E.", partai: "Gerindra", jabatan: "Sample Jabatan 4", opini: "Normative" },
//         { id: 5, name: "E. Fajar, S.Kom.", partai: "PKS", jabatan: "Sample Jabatan 5", opini: "Pro" },
//         { id: 6, name: "F. Gita, M.Sc.", partai: "Nasdem", jabatan: "Sample Jabatan 6", opini: "Contra" },
//         { id: 7, name: "G. Hadi, S.T.", partai: "PAN", jabatan: "Sample Jabatan 7", opini: "Normative" },
//         { id: 8, name: "H. Indra, S.Pd.", partai: "PPP", jabatan: "Sample Jabatan 8", opini: "Pro" },
//         { id: 9, name: "I. Joko, S.Si.", partai: "Demokrat", jabatan: "Sample Jabatan 9", opini: "Contra" },
//         { id: 10, name: "J. Kartika, S.Psi.", partai: "Hanura", jabatan: "Sample Jabatan 10", opini: "Normative" }
//     ]

const Calon: React.FC = () => {
    // select search
    const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
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
                province_id: selectedProvince ? selectedProvince : null
            };
            if (!searchRequestBody.pejabat_type_id && !searchRequestBody.province_id) {
                setData([]);
                fetchData(1);
                setIsSearch(false);
                return;
            } else {
                const response = await getSearchResult(page, searchRequestBody);
                page == 1 ? setData(response.data) : setData([...data, ...response.data])
                setLimit(response.totalData)
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

    const calonPejabatBox = data.map((data: any, index: number) => {
        return (
            <CalonPejabatBox
                key={data.index}
                pejabat_id={data.Pejabat_id}
                opini={data.Alignment_Name}
                name={data.Pejabat_Name}
                partai={data.Partai_Name}
                province={data.Province_Name}
                onBoxClick={handleModalOpen}
            />
        );
    });

    const handleProvinceClick = (provinceName: string) => {
        setSelectedProvince(provinceName);
    };

    return (
        <Box bg={"#F7FAFF"}>
            <Box bg={lightPurple}>
                <Container size="xl" py={rem(56)}>
                    <Flex direction={"column"} align={"center"} justify={"center"}>
                        <Title mb={rem(40)} c={primaryColor} fw={"800"} style={{ fontSize: rem(36) }}>
                            Pilih Berdasarkan Daerah Pemilihan
                        </Title>
                        <Map mapWidth={mobile ? 400 : tablet ? 800 : 1150} onProvinceClick={handleProvinceClick} />
                    </Flex>
                </Container>
            </Box>
            <Container size={"xl"}>
                <Flex h={!mobile ? rem(44) : '100%'} mt={rem(56)} mb={!mobile ? rem(100) : rem(50)} gap={"xl"} direction={mobile ? "column" : "row"} align="center" justify={mobile || tablet ? 'center' : "start"}>
                    <Select
                        classNames={{ input: classes.input }}
                        placeholder="Categori"
                        data={categories.map(category => ({ value: category.id, label: category.position }))}
                        searchable
                        nothingFoundMessage="Jabatan tidak ditemukan..."
                        onChange={(value) => setSelectedCategory(value)}
                    />

                    <Select
                        classNames={{ input: classes.input }}
                        value={selectedProvince}
                        placeholder="Provinsi"
                        data={indonesiaProvinces.map(category => ({ value: category.id, label: category.title }))}
                        maxDropdownHeight={200}
                        searchable
                        clearable
                        nothingFoundMessage="Provinsi tidak ditemukan..."
                        onChange={(value) => setSelectedProvince(value)}
                    />
                    <Button onClick={() => handleSearch(1)} h={'100%'} px={rem(40)} py={rem(11)} style={{ fontSize: rem(16), backgroundColor: primaryColor, color: 'white', border: 'none', borderRadius: rem(8) }}>
                        <Text fw={'600'}>Search</Text>
                    </Button>
                </Flex>

                <Title ta={"center"} mb={rem(50)} c={primaryColor}>Klik Untuk Deskripsi Lebih Detail</Title>

                <Box pos="relative" pb={rem(150)} style={{ padding: mobile || tablet ? "0 12px" : "0" }}>
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
                size={mobile ? "100%" : "70%"} opened={modalVisible} onClose={close} withCloseButton={false}>
                {selectedPejabat !== undefined && <ModalDetailPejabat data={selectedPejabat} />}
            </Modal>
        </Box>
    );
};

export default Calon;