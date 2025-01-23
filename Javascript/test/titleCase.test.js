import { titleCase } from '../src/index.js';
import { assert } from 'chai';

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(titleCase('',''), '')
    assert.strictEqual(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
    assert.strictEqual(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
    assert.strictEqual(titleCase('the quick brown fox'), 'The Quick Brown Fox')
});
});
