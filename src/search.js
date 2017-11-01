class Search {
  initializer() {
    this.eventHandler();
  }

  eventHandler() {
    if (!this.cepEl) { return; };

    this.cepEl.addEventListener('change', (() => {
      this.cep = this.cepEl.value;
      this.search();
    }), false);
  }

  search() {
    this.request().then((data) => {
      if (this.callbackSuccess) {
        this.callbackSuccess(data);
      }

      if (this.triggerEventName) {
        this.dispatchEvent('success', data);
      } else {
        this.fillForm(data);
      }
    }, (err) => {
      if (this.callbackError) {
        this.callbackError(err);
      }

      if (this.triggerEventName) {
        this.dispatchEvent('error', err);
      }
    });
  }

  dispatchEvent(type, detail) {
    let event = new CustomEvent(`${this.triggerEventName}:${type}`, {
      detail: detail
    });

    document.dispatchEvent(event);
  }

  fillForm(data) {
    this.streetEl.value = data.logradouro;
    this.neighborhoodEl.value = data.bairro;
    this.cityEl.value = data.localidade;
    this.stateEl.value = data.uf;

    if (this.complementEl) {
      this.complementEl.value = data.complemento;
    }

    this.numberEl.focus();
  }
}

module.exports = Search;
