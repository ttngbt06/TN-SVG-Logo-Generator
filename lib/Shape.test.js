// Shape.test.js
import Shape from './Shape';

describe('Shape', () => {
  let shape;

  beforeEach(() => {
    shape = new Shape();
  });

  test('setColor should set the color property', () => {
    const color = 'red';
    shape.setColor(color);

    expect(shape.color).toBe(color);
  });

  test('setText should set the text property', () => {
    const text = 'Hello, SVG!';
    shape.setText(text);

    expect(shape.text).toBe(text);
  });

  test('setTextColor should set the textColor property', () => {
    const textColor = 'blue';
    shape.setTextColor(textColor);

    expect(shape.textColor).toBe(textColor);
  });

  test('render should throw an error with "Method not implemented"', () => {
    expect(() => {
      shape.render();
    }).toThrowError('Method not implemented');
  });
});
