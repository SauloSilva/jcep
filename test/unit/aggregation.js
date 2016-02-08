import aggregation from '../../src/aggregation';

describe('aggregation', () => {
  class Base {
    constructor() {}
    baseExample() {}
  }

  class MixingExample {
    initializer() {}
    mixingExample() {}
  }

  class Foo extends aggregation(Base, MixingExample) {}
  let fooInstance;

  describe('constructor', () => {
    beforeEach(() => {
      fooInstance = new Foo();
      spy(Foo.prototype, 'mixingExample');
      spy(Foo.prototype, 'baseExample');
    });

    it('should mixingExample have been run once', () => {
      fooInstance.mixingExample();
      expect(fooInstance.mixingExample).to.have.been.calledOnce;
    });

    it('should baseExample have been run once', () => {
      fooInstance.baseExample();
      expect(fooInstance.baseExample).to.have.been.calledOnce;
    });
  });
});
