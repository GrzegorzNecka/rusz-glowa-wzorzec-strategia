// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// WZORZEC STRATEGIA //


// klasa abstrakcyjna, która nigdy nie będzie publiczna
class AbstractKaczka {
  constructor(latanieInterfejs, kwakanieInterfejs) {
    this.latanieInterfejs = latanieInterfejs;
    this.kwakanieInterfejs = kwakanieInterfejs;
  }

  plywaj(){
    console.log('pływaj')
  }
  wykonajKwacz(){
    kwakanieInterfejs.kwacz()
  }
   wykonajLeć(){
    latanieInterfejs.lec()
  }
}


class DzikaKaczka extends AbstractKaczka {
constructor() {
    super()

  }
}