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
    let count;

    beforeEach(() => {
      count = 0;
      fooInstance = new Foo();
    });

    it('contains cep valid, include cep, logradouro, bairro, localidade, uf, unidade, ibge and gia keys', (done) => {
      fooInstance.cep = CEP;

      success = ((data) => {
        expect(data).to.include.keys('cep');
        expect(data.cep).to.equal('13324-451');

        expect(data).to.include.keys('logradouro');
        expect(data.logradouro).to.equal('Rua Estado de São Paulo');

        expect(data).to.include.keys('bairro');
        expect(data.bairro).to.equal('Loteamento Terras de São Pedro e São Paulo');

        expect(data).to.include.keys('complemento');
        expect(data.complemento).to.equal('');

        expect(data).to.include.keys('localidade');
        expect(data.localidade).to.equal('Salto');

        expect(data).to.include.keys('uf');
        expect(data.uf).to.equal('SP');

        expect(data).to.include.keys('unidade');
        expect(data.unidade).to.equal('');

        expect(data).to.include.keys('ibge');
        expect(data.ibge).to.equal('3545209');

        expect(data).to.include.keys('gia');
        expect(data.gia).to.equal('6002');

        expect(window[fooInstance.jsonCallbackName]).to.be.undefined;
        expect(document.querySelectorAll('body script').length).to.be.zero;

        if (count < 1) {
          done();
        }

        count += 1;
      });

      fooInstance.jsonp(success, error);
    });

    it('when cep wrong, callback error has been called and delete script tag', (done) => {
      fooInstance.cep = '00000000';

      error = ((data) => {
        expect(data.erro).to.be.true;
        expect(window[fooInstance.jsonCallbackName]).to.be.undefined;
        expect(document.querySelectorAll('body script').length).to.be.zero;

        if (count < 1) {
          done();
        }

        count += 1;
      });

      fooInstance.jsonp(success, error);
    });
  });
});
