import Config from '../../src/jcep';

describe('jcep', () => {
  describe('constructor function', () => {
    let instance = new Config();

    it('should have searchEl property', () => {
      expect(instance).to.have.property('searchEl');
    });

    it('should have appendScript property', () => {
      expect(instance).to.have.property('appendScript');
    });

    it('should have jsonp property', () => {
      expect(instance).to.have.property('jsonp');
    });

    it('should have request property', () => {
      expect(instance).to.have.property('request');
    });

    it('should have eventHandler property', () => {
      expect(instance).to.have.property('eventHandler');
    });

    it('should have search property', () => {
      expect(instance).to.have.property('search');
    });

    it('should have fillForm property', () => {
      expect(instance).to.have.property('fillForm');
    });
  });
});
