import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Img from "../assets/img/image.png";
import Drawe from "./burger";
import { BsFillGridFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sete, setSete] = useState(false);
  return (
    <div>
      <Box as="header">
        <Flex justify={"space-between"} align={"center"} my={5} gap={5}>
          <Box>
            <img src={Img} alt="" />
          </Box>
          <Flex display={{ base: "none", xl: "flex" }} gap={5}>
            <>
              <Button
                leftIcon={<BsFillGridFill />}
                colorScheme="teal"
                onClick={onOpen}
              >
                katalogo
              </Button>
              <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>katalog</DrawerHeader>

                  <DrawerBody>
                    <Grid templateColumns={'repeat(5,1fr)'}  >
                      <GridItem>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                      </GridItem>
                      <GridItem>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                      </GridItem>
                      <GridItem>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                      </GridItem>
                      <GridItem>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                      </GridItem>
                      <GridItem>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                        <Heading>logo</Heading>
                      </GridItem>

                    </Grid>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>

            <Input w={520} placeholder="Mahsulotlar va turkumlar izlash" />
          </Flex>
          <Box display={{ base: "none", xl: "flex" }} gap={5}>
            <Text>Kirish</Text>
            <Text>Saralangan</Text>
            <Text>Savat</Text>
          </Box>
          <Drawe />
        </Flex>
      </Box>
    </div>
  );
}

export default Header;
