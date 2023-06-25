import "./List.css";
import imgdonasi from "./imgdonasi.png";
import banjir from "./banjir.jpg";
import { useNavigate } from "react-router-dom";
useNavigate

function List() {
  return (
    <div className="wrapper3">
      <div className="dukungan">
        <div>
          <p id="here">Berikan dukunganmu dan kepedulianmu</p>
        </div>
      </div>
      <div className="pembungkusDonasi">
        <div className="berikanDonasi">
          <div className="pb">
            <img className="imgdns" src={imgdonasi} alt="" />
            <div className="judulDonasi">
              <p>Bantu Kesejahteraan anak-anak di bagian timur Indonesia</p>
              <div id="wrapperDonasi">
                <p className="deskripsiDonasi2">
                  Tantangan utama yang dihadapi oleh ekonomi di Indonesia bagian timur adalah keterbatasan akses ke pasar, infrastruktur yang terbatas, serta tingkat pendidikan dan keterampilan yang rendah. Hal ini menghambat pertumbuhan
                  ekonomi dan pengembangan sektor industri yang lebih maju.
                </p>
              </div>
              <a href="/pembayaran" className="btnDonasi">
                Donasi
              </a>
            </div>
          </div>
        </div>
        <div className="berikanDonasi">
          <div className="pb">
            <img className="imgdns" src={banjir} alt="" />
            <div className="judulDonasi">
              <p>Bantu masyarakat yang terkana dampak bencana alam</p>
              <div id="wrapperDonasi">
                <p className="deskripsiDonasi2">
                  Bencana alam dapat menyebabkan kerugian ekonomi yang signifikan. Infrastruktur seperti jalan, jembatan, dan bangunan dapat rusak atau hancur, menghambat aktivitas ekonomi dan mobilitas penduduk. Sektor industri dan
                  pertanian juga dapat terpengaruh, mengakibatkan penurunan produksi, hilangnya mata pencaharian, dan meningkatnya tingkat pengangguran.
                </p>
              </div>
              <a href="/pembayaran" className="btnDonasi">
                Donasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
