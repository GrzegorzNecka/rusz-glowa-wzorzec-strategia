import LatanieInterfejs from "./latanieInterfejs";

class Kaczka {
  constructor() {
    this.latanieInterfejs = new LatanieInterfejs();
  }

  plywaj() {
    console.log("pływaj");
  }

  wykonajLec() {
    console.log(this.latanieInterfejs.lec())
    
  }
}

export default Kaczka;
