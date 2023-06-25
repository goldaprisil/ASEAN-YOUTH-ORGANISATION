import "./Pembayaran.css";
import qris from "./qris.png";
import dana from "./dana.webp";
import gopay from "./gopay.png";
import bca from "./bca.webp";
import bri from "./bri.png";
import Swal from "sweetalert2";
import { useGlobal } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

function Pembayaran() {
  const {donasi, setDonasi} = useGlobal();
  const {selectedPayment, setSelectedPayment} = useGlobal();

  const handleNumberInputChange = (e) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/\D/g, "");
    setDonasi(cleanedValue);
  };

  const navigate = useNavigate()

  const handlePaymentSelection = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleContinueToDonation = (e) => {
    e.preventDefault();
    const number = parseInt(donasi, 10);
    if (number < 10000 || selectedPayment === "" || donasi.trim() === "") {
      if (number < 10000) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Masukan nominal minimal 10000",
        });
      } else if (selectedPayment === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Silahkan pilih metode pembayaran",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Mohon isi jumlah donasi",
        });
      }
    } else {
      navigate("/accept")
    }
  };
  return (
    <div id="pembungkusUtama">
      <div id="wrapper4">
        <div id="pbks">
          <form>
            <p>Nominal Pembayaran</p>
            <input className="besar" type="text" id="number" name="number" placeholder="Rp." onChange={handleNumberInputChange} value={donasi} /> <span className="spanPembayaran">Nominal pembayaran RP. 10.000</span>
            <div>
              <p className="jenisPembayaran">Virtual Account (verifikasi otomatis, minimal nominal Rp. 10.000)</p>
              <div id="imgRadio">
                <img className="logo" src={qris} alt="" />
                <input className="radio" name="payment" type="radio" id="payment" onChange={handlePaymentSelection} />
              </div>
              <div id="imgRadio">
                <img className="logo" src={dana} alt="" />
                <input className="radio" name="payment" type="radio" id="payment" onChange={handlePaymentSelection} />
              </div>
              <div id="imgRadio">
                <img className="logo" src={gopay} alt="" />
                <input className="radio" type="radio" name="payment" id="payment" onChange={handlePaymentSelection} />
              </div>
            </div>
            <div>
              <p className="jenisPembayaran">Transfer Bank (verifikasi manual, minimal nominal Rp. 10.000)</p>
              <div id="imgRadio">
                <img className="logo" src={bca} alt="" />
                <input className="radio" type="radio" name="payment" id="payment" onChange={handlePaymentSelection} />
              </div>
              <div id="imgRadio">
                <img className="logo" src={bri} alt="" />
                <input className="radio" type="radio" name="payment" id="payment" onChange={handlePaymentSelection} />
              </div>
              <button className="btnDns" type="submit" onClick={handleContinueToDonation}>
                Lanjutkan Donasi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
