const { describe, it } = intern.getInterface('bdd');
const { expect, assert } = intern.getPlugin('chai');

import { functionExample, classExample, constructorExample } from '../../src/example';

describe('Example', () => {

    describe('Function Example', () => {

        it('should be defined', () => {
            expect(functionExample).to.not.be.undefined;
        });
    
        it('should be a function', () => {
            expect(functionExample).to.be.a('function')
        });
    
        it('should be able to get x', () => {
            const result = functionExample(10)
            expect(result).to.equal(100);
        });

    });

    describe('Constructor Example', () => {

        it('should be defined', () => {
            expect(constructorExample).to.not.be.undefined;
        });
    
        it('should be a function', () => {
            expect(constructorExample).to.be.a('function')
        });
    
        it('should be able to get x', () => {
            const ex = new constructorExample(10)
            expect(ex.getX).to.be.a('function');
            assert.equal(ex.getX(), 10);
        });

    })

    describe('Class Example', () => {

        it('should be defined', () => {
            expect(classExample).to.not.be.undefined;
        });
    
        it('should be a function', () => {
            expect(classExample).to.be.a('function')
        });
    
        it('should be able to get x', () => {
            const ex = new classExample(10)
            expect(ex.getX).to.be.a('function');
            assert.equal(ex.getX(), 10);
        });

    });

});