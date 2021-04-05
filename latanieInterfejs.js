class LatanieInterfejs {
  constructor() {
    this.message = "lecę domyślnie";
  }
  lec(message = this.message) {
    return message;
  }
}

// --------------------------------------------

class LatamBoMamSkrzydla extends LatanieInterfejs {
  constructor() {
    super();
    this.message = "lecę bo mam skrzydła";
  }

  lec() {
    return super.lec(this.message);
  }
}

// --------------------------------------------

class NieLatam extends LatanieInterfejs {
  constructor() {
    super();
    this.message = "nie latam bo jestem z plastiku";
  }

  lec() {
    return super.lec(this.message);
  }
}

export { LatanieInterfejs as default, LatamBoMamSkrzydla, NieLatam };
