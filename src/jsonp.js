class JsonP {
  initializer() {}

  jsonp(callbackSuccess, callbackError) {
    this.jsonCallbackName = Math.round(100000 * Math.random());

    let script = this.appendScript();

    window[this.jsonCallbackName] = ((data) => {
      this.removeScriptAndCallback(script);

      if (!data.erro) {
        callbackSuccess(data);
      } else {
        callbackError(data);
      }
    });
  }

  removeScriptAndCallback(script) {
    delete window[this.jsonCallbackName];
    document.body.removeChild(script);
  }
}

module.exports = JsonP;
