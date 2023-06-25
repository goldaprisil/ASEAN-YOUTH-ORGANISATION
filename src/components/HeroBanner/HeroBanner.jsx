import "./HeroBanner.css";
import { Container } from "react-bootstrap";

function HeroBanner() {
  return (
    <Container fluid className="wrapper px-0">
      <Container fluid className="hero-banner">
        <div className="WT">
          <p>Aksi Nyata Perubahan Nyata Donasikan dan Jadilah Pahlawan Bagi Masyarakat</p>
          <a href="#here" className="">
            Donasi Sekarang
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default HeroBanner;
