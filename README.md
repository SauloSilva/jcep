# jCep

[![Travis build status](http://img.shields.io/travis/jcep/jcep.svg?style=flat)](https://travis-ci.org/jcep/jcep)
[![Code Climate](https://codeclimate.com/github/jcep/jcep/badges/gpa.svg)](https://codeclimate.com/github/jcep/jcep)
[![Test Coverage](https://codeclimate.com/github/jcep/jcep/badges/coverage.svg)](https://codeclimate.com/github/jcep/jcep)

## About jcep

Jcep is a library to helpful a search address by CEP on Brazil.
No dependency with **jQuery** or anything.

## How to use

It's very simple. Look by example:

```javascript
new jcep();
```

### Elements by data attributes

If you using data attributes on your html, this library working
with auto-detect of elements on page. Eg.

**HTML**

```html
<form action="#">
  CEP:          <input type="text" data-cep="cep">
  Street:       <input type="text" data-street="street">
  Number:       <input type="text" data-number="number">
  Neighborhood: <input type="text" data-neighborhood="neighborhood">
  City:         <input type="text" data-city="city">
  State:        <input type="text" data-state="state">
</form>
```

**JavaScript**

```js
new jcep();
```

**Obs:** If you not specify any callbacks, this library will automatically
fill your form with results of search.

### Specify elements

If you choose specify elements, you ought to use by this way:

**JavaScript**

```js
new jcep({
  elements: {
    cepEl: '.cep',
    streetEl: '.street',
    numberEl: '.number',
    neighborhoodEl: '.neighborhood',
    cityEl: '.city',
    stateEl: '.state'
  }
});
```

## Callbacks by functions

You can configure jcep to working with functions to returns results. See for explanation about this callbacks.

### Success

You can use success callback to get result of search.
The result is sent with params for success function. Eg

```js
new jcep({
  ...
  success: function(data) { console.log(data) },
  ...
});
```

### Error

You can use error callback to warn about errors.
The error message is sent with params for error function. Eg

```js
new jcep({
  ...
  error: function(error) { console.error(error) },
  ...
});
```

## Callbacks by events

You can configure callback by events

### Success

If you can receive results of search by events, it's easy. Eg.

```js
new jcep({
  triggerEventName: 'test'
});

document.addEventListener('test:success', function(data) {
  console.log('results: ', data);
})
```

### Error

If you can receive error message of search by events, it's easy. Eg.

```js
new jcep({
  triggerEventName: 'test'
});

document.addEventListener('test:error', function(error) {
  console.error('error: ', error);
})
```

**Obs:** The event names contains, name (you specified on configuration) with
prefix (`:success` or `:error`). Be careful don't forget the prefix
in the end of event name

## [Demo](./example/index.html)

## Contributors

- Saulo Santiago ([SauloSilva](https://github.com/SauloSilva))
