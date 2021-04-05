import LatanieInterfejs, { LatamBoMamSkrzydla } from "./latanieInterfejs";

class Kaczka {
  constructor() {
    this.latanieInterfejs = new LatanieInterfejs();
  }

  plywaj() {
    return "pływaj";
  }

  wykonajLec() {
    return this.latanieInterfejs.lec();
  }
}

// --------------------------------------------

class DzikaKaczka extends Kaczka {
  constructor() {
    super();
    this.latanieInterfejs = new LatamBoMamSkrzydla();
  }
}

export { Kaczka as default, DzikaKaczka };
