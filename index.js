// Import stylesheets
import "./style.css";
import Kaczka, { DzikaKaczka } from "./kaczka";
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// WZORZEC STRATEGIA //

const kaczka = new Kaczka();
kaczka.wykonajLec();

const dikaKaczka = new DzikaKaczka();
dikaKaczka.wykonajLec();
