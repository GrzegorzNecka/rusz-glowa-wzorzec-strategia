// Import stylesheets
import "./style.css";
import Kaczka, { DzikaKaczka, GumowaKaczka } from "./kaczka";

const appDiv = document.getElementById("app");

// ------------------
const kaczka = new Kaczka();
const dikaKaczka = new DzikaKaczka();
const gumowaKaczka = new GumowaKaczka();

// ------------------

function kaczkaProgram(kaczka) {
  appDiv.innerHTML = `${kaczka.wykonajLec()} i ${kaczka.wykonajKwacz()}`;
}

kaczkaProgram(kaczka);
kaczkaProgram(dikaKaczka);
kaczkaProgram(gumowaKaczka);
