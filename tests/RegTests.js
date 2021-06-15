describe('Registration Number', function() {
    it('should be able to set and return registration number', function() {
        let registration = Reg();

        registration.setReg('CA 123 123');
        assert.equal(registration.Names(), 'CA 123 123');
    });
    it('should be able to set only one registration number even if it is added multiple times', function() {
        let registration = Reg();

        registration.setReg('CA 123 123');
        registration.setReg('CA 123 123');
        registration.setReg('CA 123 123');
        assert.equal(registration.Names(), 'CA 123 123');
    });
    it('should be able to set and return multiple registrations', function() {
        let registration = Reg();

        registration.setReg('CA 123 123');
        registration.setReg('CJ 12312');
        registration.setReg('GP 123-123');
        assert.deepEqual(registration.Names(), ['CA 123 123', 'CJ 12312', 'GP 123-123']);
    });
    it('should be able to filter registration numbers by town', function() {
        let registration = Reg();

        registration.setReg('CA 123 123');
        registration.setReg('CJ 123 123');
        registration.setReg('GP 123 123');
        assert.equal(registration.number("CA"), 'CA 123 123');
        assert.equal(registration.number("CJ"), 'CJ 123 123');
        assert.equal(registration.number("GP"), 'GP 123 123');

    });
    describe('Error message', function() {
        it('should be able to return an error message for an empty input field', function() {
            let registration = Reg();


            assert.equal(registration.error(""), 'Please enter a valid registration number e.g CA XXX XXX');
        });
        it('should be able to return an error message for numbers', function() {
            let registration = Reg();


            assert.equal(registration.error("4587453"), 'Please enter a valid registration number e.g CA XXX XXX');
        });
        it('should be able to return an error message for two registration numbers', function() {
            let registration = Reg();


            assert.equal(registration.error('ca 123 123 ca 678 909'), 'Please enter a valid registration number e.g CA XXX XXX');
        });
        it('should be able to return an error message for town that is not included in the list', function() {
            let registration = Reg();


            assert.equal(registration.error('WC 123'), 'Please enter a valid registration number e.g CA XXX XXX');
        });
        it('should be able to return an error message for when there no registration numbers found while filtering ',
            function() {
                let registration = Reg();


                assert.equal(registration.errorhandling(), 'No registration number added');
            });
    });
});