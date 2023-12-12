// import {
//   Modal,
//   Title,
//   Text,
//   Image,
//   Flex,
//   Group,
//   List,
//   Blockquote,
//   Badge,
//   Divider,
//   ScrollArea,
//   rem,
// } from "@mantine/core";
// import React, { useEffect, useState } from "react";
// import {
//   lightPurple,
//   primaryColor,
//   secondaryColor,
// } from "../../../public/colors";
// import { useMediaQuery } from "@mantine/hooks";
// import { theme } from "../../../theme";
// import { PrimaryButton } from "../Button";

// import { IconInfoCircle } from "@tabler/icons-react";

// interface ModalDetailProps {
//   data: any;
// }

// const ModalDetailAnggota: React.FC<ModalDetailProps> = (data: any) => {
//   const imgUrl = `../../assets/images/${data.image}`;
//   const icon = <IconInfoCircle />;

//   const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
//   const tablet = useMediaQuery(`(max-width: ${theme.breakpoints?.md})`);

//   const ListItem = data.details.map((item: any) => (
//     <React.Fragment key={item.id}>
//       <Flex direction="row" ta="justify" pr={mobile ? "" : rem(12)}>
//         <a href={item.link.href}>
//           <Badge size="lg" mr={rem(12)} color={secondaryColor}>
//             {item.link.year}
//           </Badge>
//         </a>{" "}
//         <Group>
//           <Text>{item.text}</Text>
//           {item.quote.length > 0 &&
//             item.quote.map((quote: any) => (
//               <Blockquote
//                 color={primaryColor}
//                 cite={`– ${data.name}`}
//                 icon={icon}
//                 mt="sm"
//               >
//                 {quote}
//               </Blockquote>
//             ))}
//         </Group>
//       </Flex>
//       <Divider my={rem(12)} />
//     </React.Fragment>
//   ));

//   return (
//     <Flex
//       direction={mobile ? "column" : "row"}
//       align="flex-start"
//       gap="md"
//       p={rem(12)}
//     >
//       <Group ta="center">
//         <Image
//           w="225px"
//           m="auto"
//           src={`../../assets/images/photos/${data.image}`}
//         />

//         <Title c={primaryColor}>{data.name}</Title>
//         <Text w="100%">{data.label}</Text>
//       </Group>
//       <div>
//         <ScrollArea h={mobile ? "100vh" : "50vh"}>
//           <Flex direction="column">{ListItem}</Flex>
//         </ScrollArea>
//         <Flex direction="row" align="flex-end" justify="space-between">
//           <Blockquote color={lightPurple}>
//             {data.fakta.length > 0 && <Text></Text>}
//           </Blockquote>
//           <PrimaryButton text={"Tutup"} radius={"md"} />
//         </Flex>
//       </div>
//     </Flex>
//   );
// };

// export default ModalDetailAnggota;
