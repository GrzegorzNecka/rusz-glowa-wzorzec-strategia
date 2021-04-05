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

export { LatanieInterfejs as default, LatamBoMamSkrzydla };
