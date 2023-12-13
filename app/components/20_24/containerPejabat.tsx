import { Collapse, Flex, ScrollArea, rem } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import BoxPejabat from "./itemPejabat";
import { useDisclosure } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Autoplay from 'embla-carousel-autoplay';

interface containerPejabatProps {
  data: any;
  isVertical: boolean;
}

const ContainerPejabat: React.FC<containerPejabatProps> = ({
  data,
  isVertical,
}) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const dataPejabat = data.map((item: any) => (
    <React.Fragment key={item.id}>
      <BoxPejabat data={item} />
    </React.Fragment>
  ));

  const caroselPejabat = data.map((item: any) => (
    <Carousel.Slide key={item.id} pt={10} pb={10}>
      <BoxPejabat data={item} />
    </Carousel.Slide>
  ));
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <>
      {isVertical ? (
        <Collapse in={opened}>
          <Flex wrap="wrap" gap="md" align="center" justify="center" w="100%">
            {dataPejabat}
          </Flex>
        </Collapse>
      ) : ( 
        <Carousel
          orientation={"horizontal"}
          slideGap={"md"}
          slideSize={"10%"}
          align="start"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          loop
        >
            {caroselPejabat}
        </Carousel>
        // <ScrollArea w="100%">
        //   <Flex direction="row" gap="md" p={rem(20)}>
        //     {dataPejabat}
        //   </Flex>
        // </ScrollArea>
      )}
    </>
  );
};

export default ContainerPejabat;
