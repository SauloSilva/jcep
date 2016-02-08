import aggregation from '../../src/aggregation';
import Base from '../../src/base';
import AppendScript from '../../src/append_script';
import JsonP from '../../src/jsonp';

describe('JsonP', () => {
  describe('jsonp function', () => {
    class Foo extends aggregation(Base, AppendScript, JsonP) {}
    let fooInstance;
    let success;
    let error;
    const CEP = '13324451';

    beforeEach(() => {
      fooInstance = new Foo();
    });

    it('when cep valid, include cep, tipoDeLogradouro, logradouro, bairro, cidade, estado keys', (done) => {
      fooInstance.cep = CEP;

      success = ((data) => {
        done();

        expect(data).to.include.keys('cep');
        expect(data.cep).to.equal(CEP);

        expect(data).to.include.keys('tipoDeLogradouro');
        expect(data.tipoDeLogradouro).to.equal('Rua');

        expect(data).to.include.keys('logradouro');
        expect(data.logradouro).to.equal('Estado de São Paulo');

        expect(data).to.include.keys('bairro');
        expect(data.bairro).to.equal('Loteamento Terras de São Pedro e São Paulo');

        expect(data).to.include.keys('cidade');
        expect(data.cidade).to.equal('Salto');

        expect(data).to.include.keys('estado');
        expect(data.estado).to.equal('SP');

        expect(window[fooInstance.jsonCallbackName]).to.be.undefined;
        expect(document.querySelectorAll('body script')).to.be.empty;
      });

      fooInstance.jsonp(success, error);
    });

    it('when cep wrong callback error has been called', (done) => {
      fooInstance.cep = '00000000';

      error = ((err) => {
        done();

        expect(true).to.be.true;
      });

      fooInstance.jsonp(success, error);
    });

    it('when success callback called, jsonCallback function and script, both has been removed', (done) => {
      fooInstance.cep = CEP;

      success = ((data) => {
        done();
        expect(window[fooInstance.jsonCallbackName]).to.be.undefined;
        expect(document.querySelectorAll('body script')).to.be.empty;
      });

      fooInstance.jsonp(success, error);

      expect(window[fooInstance.jsonCallbackName]).to.not.be.undefined;
      expect(document.querySelectorAll('body script')).to.not.be.empty;
    });

    it('when error callback called, jsonCallback function and script, both has been removed', (done) => {
      fooInstance.cep = '00000000';

      error = ((err) => {
        done();
        expect(window[fooInstance.jsonCallbackName]).to.be.undefined;
        expect(document.querySelectorAll('body script')).to.be.empty;
      });

      fooInstance.jsonp(success, error);
      expect(window[fooInstance.jsonCallbackName]).to.not.be.undefined;
      expect(document.querySelectorAll('body script')).to.not.be.empty;
    });
  });
});
