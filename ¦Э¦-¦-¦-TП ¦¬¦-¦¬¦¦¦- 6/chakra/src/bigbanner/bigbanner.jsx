import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Bigbanner() {
  const [statt, setStatt] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setStatt(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <Box>
        <Text mb={"15px"}  color={'red.500'} fontSize={'30px'} >Xammasi auto uchun</Text>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(4,1fr)",
          }}
          gap={"10px"}
          w={"100%"}
        >
          {statt.slice(0, 4).map((photo) => (
            <GridItem
              border={"1px solid gray"}
              p={"10px"}
              mb={"10px"}
              key={photo.id}
              w={"100%"}
              borderRadius={10}
            >
              <Image borderRadius={10} src={photo.url} w={"100%"} />
              <Text>{photo.title}</Text>
              <Text>{photo.thumbnailUrl}</Text>
              <Text>{photo.lbumId}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Bigbanner;
