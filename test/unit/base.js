import Base from '../../src/base';

describe('Base', () => {
  let base;

  describe('constructor function', () => {
    let success = (() => {});
    let error = (() => {});

    describe('when triggerEventName is empty', () => {
      beforeEach(() => {
        base = new Base();
      });

      it('triggerEventName is false', () => {
        expect(base.triggerEventName).to.equal(false);
      });
    });

    describe('when triggerEventName exists', () => {
      beforeEach(() => {
        base = new Base({ triggerEventName: 'foo' });
      });

      it('returns name of the trigger event name', () => {
        expect(base.triggerEventName).to.equal('foo');
      });
    });

    describe('when elements is selector wrong', () => {
      beforeEach(() => {
        base = new Base({
          elements: {
            cepEl: '[name="test"]',
            streetEl: '[name="test"]',
            numberEl: '[name="test"]',
            neighborhoodEl: '[name="test"]',
            cityEl: '[name="test"]',
            stateEl: '[name="test"]',
          }
        });
      });

      it('cepEl does not exists in the DOM', () => {
        expect(base.cepEl).to.equal(undefined);
      });

      it('streetEl does not exists in the DOM', () => {
        expect(base.streetEl).to.equal(undefined);
      });

      it('numberEl does not exists in the DOM', () => {
        expect(base.numberEl).to.equal(undefined);
      });

      it('neighborhoodEl does not exists in the DOM', () => {
        expect(base.neighborhoodEl).to.equal(undefined);
      });

      it('cityEl does not exists in the DOM', () => {
        expect(base.cityEl).to.equal(undefined);
      });

      it('stateEl does not exists in the DOM', () => {
        expect(base.stateEl).to.equal(undefined);
      });
    });

    describe('when elements is present', () => {
      beforeEach(() => {
        base = new Base({
          elements: {
            cepEl: '[name="cep"]',
            streetEl: '[name="street"]',
            numberEl: '[name="number"]',
            neighborhoodEl: '[name="neighborhood"]',
            cityEl: '[name="city"]',
            stateEl: '[name="state"]',
          }
        });
      });

      it('cepEl exists in the DOM', () => {
        expect(base.cepEl).to.not.equal(undefined);
      });

      it('streetEl exists in the DOM', () => {
        expect(base.streetEl).to.not.equal(undefined);
      });

      it('numberEl exists in the DOM', () => {
        expect(base.numberEl).to.not.equal(undefined);
      });

      it('neighborhoodEl exists in the DOM', () => {
        expect(base.neighborhoodEl).to.not.equal(undefined);
      });

      it('cityEl exists in the DOM', () => {
        expect(base.cityEl).to.not.equal(undefined);
      });

      it('stateEl exists in the DOM', () => {
        expect(base.stateEl).to.not.equal(undefined);
      });
    });

    describe('when elements is empty', () => {
      beforeEach(() => {
        base = new Base();
      });

      it('cepEl exists in the DOM', () => {
        expect(base.cepEl).to.not.equal(undefined);
      });

      it('streetEl exists in the DOM', () => {
        expect(base.streetEl).to.not.equal(undefined);
      });

      it('numberEl exists in the DOM', () => {
        expect(base.numberEl).to.not.equal(undefined);
      });

      it('neighborhoodEl exists in the DOM', () => {
        expect(base.neighborhoodEl).to.not.equal(undefined);
      });

      it('cityEl exists in the DOM', () => {
        expect(base.cityEl).to.not.equal(undefined);
      });

      it('stateEl exists in the DOM', () => {
        expect(base.stateEl).to.not.equal(undefined);
      });
    });

    describe('when success callback is empty', () => {
      beforeEach(() => {
        base = new Base();
      });

      it('callbackSuccess is false', () => {
        expect(base.callbackSuccess).to.equal(false);
      });
    });

    describe('when success callback exists', () => {
      beforeEach(() => {
        base = new Base({ success: success });
      });

      it('returns callback of the callbackSuccess', () => {
        expect(base.callbackSuccess).to.equal(success);
      });
    });

    describe('when error callback is empty', () => {
      beforeEach(() => {
        base = new Base();
      });

      it('callbackError is false', () => {
        expect(base.callbackError).to.equal(false);
      });
    });

    describe('when error callback exists', () => {
      beforeEach(() => {
        base = new Base({ error: error });
      });

      it('returns callback of the callbackError', () => {
        expect(base.callbackError).to.equal(error);
      });
    });
  });

  describe('searchEl function', () => {
    beforeEach(() => {
      base = new Base();
    });

    describe('when selector el is empty', () => {
      it('selector el is equal to undefined', () => {
        let el = '';
        expect(base.searchEl({ el })).to.equal(undefined);
      });
    });

    describe('when selector el does not exists', () => {
      it('selector el is equal to undefined', () => {
        let el = '.wrong-el';
        expect(base.searchEl({ el })).to.equal(undefined);
      });
    });

    describe('when selector el is totally correct', () => {
      it('selector el is not equal to undefined', () => {
        let el = '[name="cep"]';
        expect(base.searchEl({ el })).to.not.equal(undefined);
      });
    });

    describe('when selector el is wrong but found by data attributes', () => {
      it('selector el is not equal to undefined', () => {
        let el = 'cep';
        expect(base.searchEl({ el })).to.not.equal(undefined);
      });
    });

    describe('when removeDiacritics is empty', () => {
      beforeEach(() => {
        base = new Base();
      });

      it('removeDiacritics is false', () => {
        expect(base.removeDiacritics).to.equal(false);
      });
    });

    describe('when removeDiacritics exists', () => {
      beforeEach(() => {
        base = new Base({ removeDiacritics: true });
      });

      it('returns the value passed on removeDiacritics option', () => {
        expect(base.removeDiacritics).to.equal(true);
      });
    });
  });
});
