// Triangle.test.js
import Triangle from './Triangle.js';

describe('Triangle class', () => {
    test('Triangle render method should return the correct SVG string with the given color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');

        const expectedSVG = '<polygon points="150,18 244,182 56,182" fill="blue" />';
        const actualSVG = triangle.render();

        expect(actualSVG).toEqual(expectedSVG);
    });
});
