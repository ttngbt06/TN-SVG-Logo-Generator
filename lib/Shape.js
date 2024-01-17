// Shape.js
import { createSVGWindow } from 'svgdom';
import { SVG, registerWindow } from '@svgdotjs/svg.js';

export default class Shape {
    constructor() {
        const window = createSVGWindow();
        const document = window.document;
        registerWindow(window, document);

        this.svg = SVG().namespace("http://www.w3.org/2000/svg");
        this.svg.attr({ width: 300, height: 200 });
        this.color = '';
        this.text = '';
        this.textColor = '';
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    render() {
        throw new Error('Method not implemented');
    }
}
