import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";

import { CiMenuBurger } from "react-icons/ci";
function Drawe() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        display={{ base: "block", xl: "none" }}
        fontSize={20}
        leftIcon={<CiMenuBurger />}
        variant={"unstyled"}
        colorScheme="teal"
        onClick={onOpen}
      >
        {" "}
      </Button>
      <Drawer isOpen={isOpen} placement="rigth" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo</DrawerHeader>
          <Wrap>
            <WrapItem>home</WrapItem>
            <WrapItem>about</WrapItem>
            <WrapItem>contact</WrapItem>
          </Wrap>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Drawe;
