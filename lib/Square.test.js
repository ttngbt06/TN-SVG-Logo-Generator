// Square.test.js
import Square from './Square.js';

describe('Square class', () => {
    test('Square render method should return the correct SVG string with the given color', () => {
        const square = new Square();
        square.setColor('yellow');

        const expectedSVG = '<rect width="300" height="300" x="0" y="0" fill="yellow" />';
        const actualSVG = square.render();

        expect(actualSVG).toEqual(expectedSVG);
    });
});
