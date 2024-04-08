const sum = require("../src");
const assert = require("assert");

describe("#Testing main function", () => {
    let x, y , result;

    beforeEach(() => {
        x = 10;
        y = 32;
        result = sum(x, y);
    });

    it('should be 42', () => {
       assert.equal(result, 42);
    });
});
