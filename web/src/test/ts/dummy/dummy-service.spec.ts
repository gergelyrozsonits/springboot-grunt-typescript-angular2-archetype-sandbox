import { DummyService } from "dummy/dummy-service"

describe('dummy service test suit', () => {
    var underTest:DummyService;
    
    //This will be called before running each spec
    beforeEach(function() {
        underTest = new DummyService();
    });

    it('test spec', function() {
        expect(underTest.double(2)).toEqual(4);
    });
});