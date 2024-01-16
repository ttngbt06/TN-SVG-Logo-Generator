// Circle.js
import Shape from './Shape.js';

export default class Circle extends Shape {
    constructor() {
        super();
        this.sizeMultiplier = 2;
    }

    render() {
        const circle = this.svg.circle(100 * this.sizeMultiplier).fill(this.color).center(150, 100);

        const shapeCenterX = circle.cx();
        const shapeCenterY = circle.cy();

        this.svg.text(this.text).fill(this.textColor).center(shapeCenterX, shapeCenterY);

        return this.svg.svg();
    }
}
