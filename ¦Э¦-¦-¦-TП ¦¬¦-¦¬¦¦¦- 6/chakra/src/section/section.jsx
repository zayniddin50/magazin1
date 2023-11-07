import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Section() {
  const [stat, setStat] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setStat(res.data))
      .catch((error) => console.log(error));
  });

  return <div>
      <Box >
        <Text fontSize={'30px'} mb={'15px'} color={'gray'} >Halol muddatli to'lov</Text>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(4,1fr)",
          }}
          gap={'10px'}
          w={'100%'}
        >
          {stat.slice(0, 4).map((photo) => (
            <GridItem
              border={"1px solid gray"}
              p={"10px"}
              mb={"10px"}
              key={photo.id}
              w={"100%"}
              borderRadius={10}
            >
              <Image  borderRadius={10} src={photo.url} w={"100%"} />
              <Text>{photo.title}</Text>
              <Text>{photo.thumbnailUrl}</Text>
              <Text>{photo.lbumId}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
  </div>;
}

export default Section;
