import {
  Box,
  Flex,
  Heading,
  Wrap,
  Text,
  WrapItem,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        mt={18}
      >
        <Flex gap={3} flexDirection={"column"}>
          <Heading size={"md"}>Biz haqimizda</Heading>
          <WrapItem>Topishrish punktlari</WrapItem>
          <WrapItem>Vakansiyalar</WrapItem>
        </Flex>
        <Flex gap={3} flexDirection={"column"}>
          <Heading size={"md"}>Foydalanuvchilarga</Heading>
          <WrapItem> biz bilan boglanish</WrapItem>
          <WrapItem>savol-javob</WrapItem>
        </Flex>
        <Flex gap={3} flexDirection={"column"}>
          <Heading size={"md"}>Tadbirkorlarga</Heading>
          <WrapItem>Uzumda soting</WrapItem>
          <WrapItem>Vakansiyalar</WrapItem>
        </Flex>
        <Flex gap={3} flexDirection={"column"}>
          <Heading size={"md"}>Ilovani yuklab olish</Heading>
          <Flex gap={5}>
            <Text display={"flex"} alignItems={"center"} gap={1}>
              {" "}
              <AiFillApple /> AppStore{" "}
            </Text>
            <Text display={"flex"} alignItems={"center"} gap={1}>
              <FaGooglePlay /> Google Play{" "}
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </div>
  );
}

export default Footer;
