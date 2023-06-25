import "./AcceptPembayaran.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { useGlobal } from "../../context/GlobalContext";
import { useState } from "react";
import axios from "axios";

function AcceptPembayaran() {
  const { email, setEmail } = useGlobal("");
  const { noRekening, setNoRekening } = useGlobal("");
  const { name, setName } = useGlobal("");
  const [harapan, setHarapan] = useState("");
  const [data, setData] = useState([]);

  const { donasi, setDonasi } = useGlobal();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleHarapan = (e) => {
    setHarapan(e.target.value);
  };
  const handleNumberChange = (e) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/\D/g, "");
    setNoRekening(cleanedValue);
  };

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || noRekening === "" || name === "")
      if (!validateEmail(email)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Masukan Email dengan benar",
        });
      } else if (noRekening === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Masukan No Virtaul Bank atau E-wallet",
        });
      } else if (name === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Masukan Nama kamu",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tolong masukan Email & Nama",
        });
      }
    else {
      Swal.fire({
        title: "Apakah kamu yakin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post("https://647db034af984710854a2301.mockapi.io/user", {
              name,
              email,
              noRekening,
              harapan,
              donasi,
            })
            .then((res) => {
              console.log("isi dari API", res);
              setData([...data, res.data]);
              setName("");
              setDonasi("");
              setHarapan("");
              setEmail("");
              setHarapan("");
            })
            .catch((err) => console.log(err));
          Swal.fire("Terima Kasih!", "Donasi yang anda berikan sudah berhasil", "success")
          .then(() => {
            window.location.href = "/donasi";
          });
        }
      });
    }
  };

  return (
    <div id="utama">
      <div id="pmbks">
        <div id="pmbksKedua">
          <div id="pmbksKetiga">
            <Form onSubmit={handleSubmit}>
              <p>Isi nominal Donasi</p>
              <input name="donasi" id="donasi" type="text" readOnly className="valueNominal" value={"Rp. " + donasi} />
              <input type="text" className="valueUsername" name="username" id="username" placeholder="Nama lengkap" value={name} onChange={handleUsernameChange} />
              <input type="text" value={email} onChange={handleEmailChange} className="inputEmail" name="email" id="email" placeholder="Alamat Email" />
              <input type="text" value={noRekening} onChange={handleNumberChange} className="inputEmail" name="rekening" id="noRekening" placeholder="No Rekening" />
              <div id="keiinginanUser">
                <p>Sembunyikan nama saya (donasi sebagai anonim)</p>
                <Form.Check type="switch" id="custom-switch" className="check" />
              </div>
              <p className="berdoa">Berdoa di Donasi ini (opsional)</p>
              <textarea
                className="textbox"
                name="harapan"
                id="harapan"
                placeholder="Tulis doa untuk penggalang dana atau dirimu sendiri  di sini. Biar doa kamu bisa  di lihat dan diamini oleh orang baik lainnya"
                onChange={handleHarapan}
                value={harapan}
              />
              <div className="btnFinish">
                <button type="submit" className="btnFinish">
                  Selesaikan Donasi
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptPembayaran;
