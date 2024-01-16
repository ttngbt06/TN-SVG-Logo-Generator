// Square.js
import Shape from './Shape.js';

export default class Square extends Shape {
  constructor() {
    super();
    this.sizeMultiplier = 2;
  }

  render() {
    const square = this.svg
      .rect(150 * this.sizeMultiplier, 150 * this.sizeMultiplier)
      .fill(this.color)
      .center(150, 100);

    const shapeCenterX = square.cx();
    const shapeCenterY = square.cy();

    this.svg.text(this.text).fill(this.textColor).center(shapeCenterX, shapeCenterY);

    return this.svg.svg();
  }
}
