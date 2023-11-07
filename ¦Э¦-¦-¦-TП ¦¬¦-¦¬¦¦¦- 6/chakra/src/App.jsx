import Corusel from "./corusel/corusel";
import Header from "./header/header";
import { Container } from "@chakra-ui/react";
import Main from "./main/main";
import Products from "./producst/products";
import Main1 from "./main1/main1";
import Section from "./section/section";
import Bigbanner from "./bigbanner/bigbanner";
import Mainjsx from "./mainjsx/mainjsx";
import Center from "./center/center";
import Componts from "./componts/componts";
import Card from "./card/card";
import Footer from "./footer/footer";
  
function App() {
  return (
    <div>
      <Container maxW="container.xl">
        <Header />
        <Corusel />
        <Main/>
        <Products/>
        <Main1/>
        <Section/>
        <Bigbanner/>
        <Mainjsx/>
        <Center/>
      <Componts/>
      <Card/>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
