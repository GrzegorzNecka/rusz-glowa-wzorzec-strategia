// Import stylesheets
import "./style.css";
import Kaczka, { DzikaKaczka } from "./kaczka";

const appDiv = document.getElementById("app");

// ------------------
const kaczka = new Kaczka();
kaczka.wykonajLec();

const dikaKaczka = new DzikaKaczka();
dikaKaczka.wykonajLec();

// ------------------
appDiv.innerHTML = `${dikaKaczka.wykonajLec()}`;
