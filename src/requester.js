class Requester {
  initializer() {}

  request() {
    return new Promise((resolve, reject) => {
      this.jsonp(
        ((data) => {
          resolve(data);
        }),
        (error) => {
          reject(error);
        }
      );
    });
  }
}

module.exports = Requester;
