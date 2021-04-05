import LatanieInterfejs, {
  LatamBoMamSkrzydla,
  NieLatam
} from "./latanieInterfejs";

import KwakanieInterfejs, { Kwakam, Piszcze } from "./kwakanieInterfejs";

class Kaczka {
  constructor() {
    this.latanieInterfejs = new LatanieInterfejs();
    this.kwakanieInterfejs = new KwakanieInterfejs();
  }

  plywaj() {
    return "pływaj";
  }

  wykonajLec() {
    return this.latanieInterfejs.lec();
  }

  wykonajKwacz() {
    return this.kwakanieInterfejs.kwacz();
  }
}

// --------------------------------------------

class DzikaKaczka extends Kaczka {
  constructor() {
    super();
    this.latanieInterfejs = new LatamBoMamSkrzydla();
    this.kwakanieInterfejs = new Kwakam();
  }
}

// --------------------------------------------

class GumowaKaczka extends Kaczka {
  constructor() {
    super();
    this.latanieInterfejs = new NieLatam();
    this.kwakanieInterfejs = new Piszcze();
  }
}

export { Kaczka as default, DzikaKaczka, GumowaKaczka };
