import React from "react";
import umuz from "../assets/img/uzum.uz.png";
import { Box, Image } from "@chakra-ui/react";

function Main1() {
  return (
    <div>
      <Box my={8} w={'100%'} >
        <Image borderRadius={'3px'} src={umuz}w={'100%'} />
      </Box>
    </div>
  );
}

export default Main1;
