// Triangle.js
import Shape from './Shape.js';

export default class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    const triangle = this.svg.polygon('150,0 300,200 0,200')
    .fill(this.color);

    const shapeCenterX = triangle.cx();
    const shapeCenterY = triangle.cy();

    this.svg.text(this.text).fill(this.textColor).center(shapeCenterX, shapeCenterY);

    return this.svg.svg();
  }
}
