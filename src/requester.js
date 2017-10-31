class Requester {
  initializer() {}

  request() {
    if (this.triggerEventName) {
      this.dispatchEvent('beforeSend');
    }

    if (this.callbackBeforeSend) {
      this.callbackBeforeSend();
    }

    return new Promise((resolve, reject) => {
      this.jsonp(
        ((data) => { resolve(data); }),
        (error) => { reject(error); }
      );
    });
  }
}

module.exports = Requester;
