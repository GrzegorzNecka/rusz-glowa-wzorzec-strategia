// Import stylesheets
import "./style.css";
import KwakanieInterfejs, { Kwakam, Piszcze } from "./kwakanieInterfejs";
import Kaczka, { DzikaKaczka, GumowaKaczka } from "./kaczka";

const appDiv = document.getElementById("app");

// ------------------
const kaczka = new Kaczka();
const dzikaKaczka = new DzikaKaczka();
const gumowaKaczka = new GumowaKaczka();

// ------------------

function kaczkaProgram(kaczka) {
  appDiv.innerHTML = `${kaczka.wykonajLec()} i ${kaczka.wykonajKwacz()} i ${kaczka.plywaj()}`;
}

kaczkaProgram(kaczka);
kaczkaProgram(gumowaKaczka);

kaczkaProgram(dzikaKaczka);
dzikaKaczka.ustawKwakanieInterfejs(new Piszcze());
kaczkaProgram(dzikaKaczka);
