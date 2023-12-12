import { Collapse, Flex, ScrollArea, rem } from "@mantine/core";
import React, { useEffect, useState } from "react";
import BoxPejabat from "./itemPejabat";
import { useDisclosure } from "@mantine/hooks";

interface containerPejabatProps {
  data: any;
  isVertical: boolean;
}

const ContainerPejabat: React.FC<containerPejabatProps> = ({
  data,
  isVertical,
}) => {
  const dataPejabat = data.map((item: any) => (
    <React.Fragment key={item.id}>
      <BoxPejabat data={item} />
    </React.Fragment>
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
        <ScrollArea w="100%">
          <Flex direction="row" gap="md" p={rem(20)}>
            {dataPejabat}
          </Flex>
        </ScrollArea>
      )}
    </>
  );
};

export default ContainerPejabat;
