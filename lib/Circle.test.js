// Circle.test.js
import Circle from './Circle.js';

describe('Circle class', () => {
  it('Circle render method should return the correct SVG string with the given color', () => {
    const circle = new Circle();
    circle.setColor('green');

    const expectedSVG = '<circle cx="150" cy="100" r="200" fill="green" />';
    const actualSVG = circle.render();

    expect(actualSVG).toEqual(expectedSVG);
  });
});
