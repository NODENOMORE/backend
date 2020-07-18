const term = require('./kraustruthy');
test("Checks if 'favorite' is Truthy.", () => {
    expect(term.favorite).not.toBeUndefined;
});
