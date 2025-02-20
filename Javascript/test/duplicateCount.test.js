import { duplicateCount } from '../src/index.js';
import { assert } from 'chai';

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(duplicateCount("abcde"), 0);
    assert.strictEqual(duplicateCount("aabbcde"), 2);
    assert.strictEqual(duplicateCount(""), 0);
    assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
    assert.strictEqual(duplicateCount("Indivisibility"), 1)
    assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  });
});