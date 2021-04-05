class KwakanieInterfejs {
  constructor() {
    this.message = "kwacze domyślnie";
  }
  kwacz(message = this.message) {
    return message;
  }
}

// --------------------------------------------

class Kwakam extends KwakanieInterfejs {
  constructor() {
    super();
    this.message = "kwakam bo jestem żywa";
  }

  kwacz() {
    return super.kwacz(this.message);
  }
}

// --------------------------------------------

class Piszcze extends KwakanieInterfejs {
  constructor() {
    super();
    this.message = "piszczę ";
  }

  kwacz() {
    return super.kwacz(this.message);
  }
}

export { KwakanieInterfejs as default, Kwakam, Piszcze };
