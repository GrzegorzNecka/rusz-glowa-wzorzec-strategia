import LatanieInterfejs, { LatamBoMamSkrzydla } from "./latanieInterfejs";

class Kaczka {
  constructor() {
    this.latanieInterfejs = new LatanieInterfejs();
  }

  plywaj() {
    console.log("pływaj");
  }

  wykonajLec() {
    console.log(this.latanieInterfejs.lec());
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
