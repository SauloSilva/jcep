import AppendScript from '../../src/append_script';

describe('AppendScript', () => {
  describe('constructor function', () => {
    let script;
    let src;
    const CEP = '13324451';

    window.test = ((data) => {
      return data;
    });

    beforeEach(() => {
      script = new AppendScript();

      script.cep = CEP;
      script.jsonCallbackName = 'test';

      script = script.appendScript();
      src = script.src;
    });

    afterEach(() => {
      document.body.removeChild(script);
    });

    it('src contains correiosapi URL', () => {
      expect(src).to.contain('correiosapi.apphb.com/cep');
    });

    it('src contains callback', () => {
      expect(src).to.contain('callback');
    });

    it('tagName is script', () => {
      expect(script.tagName).to.contain('SCRIPT');
    });
  });
});
