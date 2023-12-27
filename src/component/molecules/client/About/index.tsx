import {Paragraph} from "../../../atoms";

function About() {
  return (
    <>
      <div className="mt-5 rounded-xl overflow-hidden shadow-lg">
        <img src="../image/hero 1.jpg" alt="company profile" />
      </div>
      <div className="mt-10">
        <Paragraph className="text-base leading-10 text-justify">
          Badan Pusat Statistik Kabupaten Hulu Sungai Tengah Jl. Keramat Manjang
          No. 10 Barabai, 71313 Kalimantan Selatan. Badan Pusat Statistik adalah
          Lembaga Pemerintah Non-Departemen yang bertanggung jawab langsung
          kepada Presiden. Sebelumnya, BPS merupakan Biro Pusat Statistik, yang
          dibentuk berdasarkan UU Nomor 6 Tahun 1960 tentang Sensus dan UU Nomer
          7 Tahun 1960 tentang Statistik. Sebagai pengganti kedua UU tersebut
          ditetapkan UU Nomor 16 Tahun 1997 tentang Statistik. Berdasarkan UU
          ini yang ditindaklanjuti dengan peraturan perundangan dibawahnya,
          secara formal nama Biro Pusat Statistik diganti menjadi Badan Pusat
          Statistik.
          <a
            href="https://ppid.bps.go.id/app/konten/6307/Profil-BPS.html"
            className="text-dangerH"
          >
            View more...
          </a>
        </Paragraph>
      </div>
    </>
  );
}

export default About;
