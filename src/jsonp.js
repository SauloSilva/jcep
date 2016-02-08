class JsonP {
  initializer() {}

  jsonp(callbackSuccess, callbackError) {
    this.jsonCallbackName = Math.round(100000 * Math.random());

    window[this.jsonCallbackName] = ((data) => {
      this.removeScriptAndCallback(script);
      callbackSuccess(data);
    });

    let script = this.appendScript();

    script.onerror = ((xhr) => {
      this.removeScriptAndCallback(script);
      callbackError(xhr);
    });
  }

  removeScriptAndCallback(script) {
    delete window[this.jsonCallbackName];
    document.body.removeChild(script);
  }
}

module.exports = JsonP;
