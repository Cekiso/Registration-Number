describe('Registration Number', function() {
    it('should be able to set and return registration number', function() {
        let registration = Reg();

        registration.setReg('CA 123-123');
        assert.equal(registration.Names(), 'CA 123-123');
    });
    it('should be able to set only one registration number even if it is added multiple times', function() {
        let registration = Reg();

        registration.setReg('CA 123-123');
        registration.setReg('CA 123-123');
        registration.setReg('CA 123-123');
        assert.equal(registration.Names(), 'CA 123-123');
    });
    it('should be able to set and return multiple registrations', function() {
        let registration = Reg();

        registration.setReg('CA 123-123');
        registration.setReg('CJ 123-123');
        registration.setReg('GP 123-123');
        assert.deepEqual(registration.Names(), ['CA 123-123', 'CJ 123-123', 'GP 123-123']);
    });
    it('should be able to filter registration numbers by town', function() {
        let registration = Reg();

        registration.setReg('CA 123-123');
        registration.setReg('CJ 123-123');
        registration.setReg('GP 123-123');
        assert.equal(registration.number("CA"), 'CA 123-123');
        assert.equal(registration.number("CJ"), 'CJ 123-123');
        assert.equal(registration.number("GP"), 'GP 123-123');

    });
});