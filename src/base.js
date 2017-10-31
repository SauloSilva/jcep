class Base {
  constructor(object = {}) {
    let {
      triggerEventName = false,
      elements = false,
      success: callbackSuccess,
      error: callbackError,
      beforeSend: callbackBeforeSend,
    } = object;

    let {
      cepEl = 'cep',
      streetEl = 'street',
      numberEl = 'number',
      neighborhoodEl = 'neighborhood',
      complementEl = 'complement',
      cityEl = 'city',
      stateEl = 'state'
    } = elements;

    this.cepEl = cepEl;
    this.streetEl = streetEl;
    this.numberEl = numberEl;
    this.neighborhoodEl = neighborhoodEl;
    this.complementEl = complementEl;
    this.cityEl = cityEl;
    this.stateEl = stateEl;

    this.triggerEventName = triggerEventName;
    this.callbackSuccess = callbackSuccess || false;
    this.callbackError = callbackError || false;
    this.callbackBeforeSend = callbackBeforeSend || false;
  }

  set cepEl(el) {
    this._cepEl = this.searchEl({ el });
  }

  get cepEl() {
    return this._cepEl;
  }

  set streetEl(el) {
    this._streetEl = this.searchEl({ el });
  }

  get streetEl() {
    return this._streetEl;
  }

  set neighborhoodEl(el) {
    this._neighborhoodEl = this.searchEl({ el });
  }

  get neighborhoodEl() {
    return this._neighborhoodEl;
  }

  set complementEl(el) {
    this._complementEl = this.searchEl({ el });
  }

  get complementEl() {
    return this._complementEl;
  }

  set cityEl(el) {
    this._cityEl = this.searchEl({ el });
  }

  get cityEl() {
    return this._cityEl;
  }

  set stateEl(el) {
    this._stateEl = this.searchEl({ el });
  }

  get stateEl() {
    return this._stateEl;
  }

  set numberEl(el) {
    this._numberEl = this.searchEl({ el });
  }

  get numberEl() {
    return this._numberEl;
  }

  set triggerEventName(triggerEventName) {
    this._triggerEventName = triggerEventName;
  }

  get triggerEventName() {
    return this._triggerEventName;
  }

  set callbackSuccess(callbackSuccess) {
    this._callbackSuccess = callbackSuccess;
  }

  get callbackSuccess() {
    return this._callbackSuccess;
  }

  set callbackError(callbackError) {
    this._callbackError = callbackError;
  }

  get callbackError() {
    return this._callbackError;
  }

  set callbackBeforeSend(callbackBeforeSend) {
    this._callbackBeforeSend = callbackBeforeSend;
  }

  get callbackBeforeSend() {
    return this._callbackBeforeSend;
  }

  set cep(cep) {
    this._cep = cep.match(/[0-9]/g).join('');
  }

  get cep() {
    return this._cep;
  }

  set jsonCallbackName(prefix) {
    return this._jsonCallbackName = `jsonp_callback_${prefix}`;
  }

  get jsonCallbackName() {
    return this._jsonCallbackName;
  }

  searchEl({ el }) {
    let element;

    if (el) {
      element = document.querySelectorAll(el)[0];

      if (!element) {
        let elWithoutSpecialChar = el.match(/[a-zA-Z]/g).join('');
        element = document.querySelectorAll(`[data-${elWithoutSpecialChar}]`)[0];
      }
    }

    return element;
  }
}

module.exports = Base;
