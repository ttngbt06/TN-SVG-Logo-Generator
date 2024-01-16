import { promises } from "fs";
import Shape from './Shape.js';
import Circle from './Circle.js';
import Triangle from './Triangle.js';
import Square from './Square.js';
import inquirer from "inquirer";

const { writeFile } = promises;

export default class LogoGenerator {
    async createAndSaveLogo(text, textColor, ShapeClass, shapeColor, fileName) {
        const shapeClassInstance = new ShapeClass();
        shapeClassInstance.setColor(shapeColor);
        shapeClassInstance.setText(text);
        shapeClassInstance.setTextColor(textColor); 
        
        const svg = shapeClassInstance.render();

        await writeFile(fileName, svg);
        console.log(`Logo saved to ${fileName}`);
    }

    async run() {
        const shapes = {
            Circle: Circle,
            Triangle: Triangle,
            Square: Square,
        };

        console.log("Welcome to the Logo Generator CLI");

        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "text",
                message: "Enter up to three characters for the text:",
                validate: (input) => input.length <= 3,
            },
            {
                type: "input",
                name: "textColor",
                message: "Enter the text color (keyword or hexadecimal):",
            },
            {
                type: "list",
                name: "shapeType",
                message: "Choose a shape:",
                choices: Object.values(shapes),
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Enter the shape color (keyword or hexadecimal): ",
            },
        ]);

        const fileName = "logo.svg";

        const selectedShape = shapes[answers.shapeType];
        if (selectedShape) {
            await this.createAndSaveLogo(
                answers.text,
                answers.textColor,
                selectedShape,
                answers.shapeColor,
                fileName
            );
        } else {
            console.log(`Invalid shape: ${answers.shapeType}`);
        }

        console.log("Generated logos successfully!");
    }
}
