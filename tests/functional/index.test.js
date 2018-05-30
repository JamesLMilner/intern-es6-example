const { before, describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');

describe('Index Example', () => {

    before(async ({ remote }) => {
        console.log(remote);
        await remote.get('../../src/index.html');
        await remote.setFindTimeout(5000);
        await remote.findDisplayedByCssSelector('body.loaded');
    });

    it('should have a div', async ({ remote }) => {
        const name = await remote.findById('functional');
        const text = await name.getVisibleText()
        assert.strictEqual(text, "I am a div");
    });

});