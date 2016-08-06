let {sum} =require('../main');
describe('xxx',function () {
    it('sum',function () {
        let array =[1,2,3,4,5];
        let total = sum(array);
        expect(total).toEqual(15);
    })
});