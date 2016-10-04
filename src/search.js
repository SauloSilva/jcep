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
    this.streetEl.value = `${data.tipoDeLogradouro} ${data.logradouro}`;
    this.neighborhoodEl.value = data.bairro;
    var cityValue = data.cidade;
    if (this.removeDiacritics) {
      cityValue = this.replaceDiacritics(cityValue);
    }
    this.cityEl.value = cityValue;
    this.stateEl.value = data.estado;

    this.numberEl.focus();
  }

  replaceDiacritics(str) {
    str = str.replace(/[ÁÀÂÃÄ]/g, 'A');
    str = str.replace(/[áàâãä]/g, 'a');
    str = str.replace(/[ÉÈÊË]/g, 'E');
    str = str.replace(/[éèêë]/g, 'e');
    str = str.replace(/[ÍÌÎÏ]/g, 'I');
    str = str.replace(/[íìîï]/g, 'i');
    str = str.replace(/[ÓÒÔÕÖ]/g, 'O');
    str = str.replace(/[óòôõö]/g, 'o');
    str = str.replace(/[ÚÙÛÜ]/g, 'U');
    str = str.replace(/[úùûü]/g, 'u');
    str = str.replace(/[Ç]/g, 'C');
    return str.replace(/[ç]/g, 'c');
  }
}

module.exports = Search;
