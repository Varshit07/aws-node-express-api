const cube = require('./cube');

test('cube of 6 is equal to 216', () => {
    expect(cube(6)).toBe(216);
});

test('cube of -6 is equal to -216', () => {
    expect(cube(-6)).toBe(-216);
});