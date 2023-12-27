/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from "react";
import {Container, Hed1, Paragraph} from "../../atoms/";
import About from "../../molecules/client/About";
import Templates from "../../templates";

function Home() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
        <Paragraph variant="subTitile">
          Selamat datang di halaman Beranda
        </Paragraph>
        <About />
      </Container>
    </Templates>
  );
}

export default Home;
