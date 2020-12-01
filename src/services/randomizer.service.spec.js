const service = new Service();

describe('Service Methods', () => {
    describe('should be true when the name satisfy the condition', () => {
        it('1. AddToArray', () => {
            const input = ['Carlos','Antonio'];
            const expected = ['Carlos','Antonio','Paco'];
            const actual = service.addToArray(input,'Paco');
            expect(actual).toEqual(expected);
        });
        it('2. GetRandomNumber', () => {
            const actual = service.getRandomNumber(0,51);
            const regExp = /[0-9]|[0-5][0-1]/;
            const condition = regExp.test(actual);
            expect(condition).toBeTruthy();
        });
    });
});