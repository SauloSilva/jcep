class AppendScript {
  initializer() {}

  get apiUrl() {
    let protocol = location.protocol === 'https:' ? 'https:' : 'http:';
    return `${protocol}//correiosapi.apphb.com/cep/${this.cep}`;
  }

  appendScript() {
    let script = document.createElement('script');
    script.src = this.apiUrl + (this.apiUrl.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + this.jsonCallbackName;
    document.body.appendChild(script);

    return script;
  }
}

module.exports = AppendScript;
