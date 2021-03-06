import aggregation from '../../src/aggregation';
import Base from '../../src/base';
import AppendScript from '../../src/append_script';
import JsonP from '../../src/jsonp';
import Requester from '../../src/requester';

describe('Requester', () => {
  describe('request function', () => {
    class Foo extends aggregation(Base, AppendScript, JsonP, Requester) {}
    let fooInstance;
    const CEP = '13324451';

    beforeEach(() => {
      fooInstance = new Foo();
    });

    it('when cep is valid, the success promisse return cep, tipoDeLogradouro, logradouro, bairro, cidade and estado', (done) => {
      fooInstance.cep = CEP;
      fooInstance.request().then((data) => {
        done();

        expect(data).to.include.keys('cep');
        expect(data.cep).to.equal(CEP);

        expect(data).to.include.keys('logradouro');
        expect(data.logradouro).to.equal('Rua Estado de São Paulo');

        expect(data).to.include.keys('bairro');
        expect(data.bairro).to.equal('Loteamento Terras de São Pedro e São Paulo');

        expect(data).to.include.keys('complemento');
        expect(data.bairro).to.equal('');

        expect(data).to.include.keys('cidade');
        expect(data.cidade).to.equal('Salto');

        expect(data).to.include.keys('estado');
        expect(data.estado).to.equal('SP');

        expect(data).to.include.keys('unidade');
        expect(data.estado).to.equal('');

        expect(data).to.include.keys('ibge');
        expect(data.estado).to.equal('3545209');

        expect(data).to.include.keys('gia');
        expect(data.estado).to.equal('6002');
      });
    });

    it('when cep is invalid, the error promisse return object for error', (done) => {
      fooInstance.cep = '00000000';

      fooInstance.request().then((data) => {}, (err) => {
        done();
        expect(true).to.be.true;
      });
    });
  });
});
