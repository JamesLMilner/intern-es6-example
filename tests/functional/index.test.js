const { before, describe, it } = intern.getInterface('bdd');
const { assert, expect } = intern.getPlugin('chai');

describe('Index Example', () => {

    before(async ({ remote }) => {
        await remote.get('../../src/index.html');
        await remote.setFindTimeout(5000);
        await remote.findByCssSelector('#functional');
    });

    it('should have a div', async ({ remote }) => {
        const name = await remote.findByCssSelector('#functional');
        expect(name).to.not.be.undefined;
    });

    it('should have text in the div', async ({ remote }) => {
        const name = await remote.findByCssSelector('#functional');
        const text = await name.getVisibleText()
        assert.strictEqual(text, "I am a div");
    });

});