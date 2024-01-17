import fs from 'fs/promises';
import LogoGenerator from './LogoGenerator';
import Circle from './Circle';
import Triangle from './Triangle';
import Square from './Square';

jest.mock('fs/promises');

describe('LogoGenerator', () => {
  let logoGenerator;

  beforeEach(() => {
    logoGenerator = new LogoGenerator();
  });

  describe('createAndSaveLogo', () => {
    it('should create and save a logo successfully', async () => {
      const mockSvg = '<svg>Mock SVG Content</svg>';
      const mockFileName = 'mockLogo.svg';

      const mockShapeInstance = {
        setColor: jest.fn(),
        setText: jest.fn(),
        setTextColor: jest.fn(),
      };

      const mockShapeClassInstance = {
        render: jest.fn().mockReturnValue(mockSvg),
      };

      jest.spyOn(Shape.prototype, 'render').mockImplementation(() => mockSvg);
      jest.spyOn(Shape.prototype, 'setColor');
      jest.spyOn(Shape.prototype, 'setText');
      jest.spyOn(Shape.prototype, 'setTextColor');

      jest.spyOn(Circle.prototype, 'render').mockImplementation(() => mockSvg);

      fs.writeFile.mockResolvedValue();

      await logoGenerator.createAndSaveLogo('ABC', 'red', Circle, 'blue', mockFileName);

      expect(mockShapeInstance.setColor).toHaveBeenCalledWith('blue');
      expect(mockShapeInstance.setText).toHaveBeenCalledWith('ABC');
      expect(mockShapeInstance.setTextColor).toHaveBeenCalledWith('red');

      expect(mockShapeClassInstance.render).toHaveBeenCalled();
      expect(fs.writeFile).toHaveBeenCalledWith(mockFileName, mockSvg);

      expect(console.log).toHaveBeenCalledWith(`Logo saved to ${mockFileName}`);
    });
  });

  describe('run', () => {
    it('should generate logos successfully for a valid shape', async () => {
      const mockAnswers = {
        text: 'ABC',
        textColor: 'red',
        shapeType: 'Circle',
        shapeColor: 'blue',
      };

      jest.spyOn(inquirer, 'prompt').mockResolvedValue(mockAnswers);

      const mockShape = {
        render: jest.fn(),
      };

      jest.spyOn(logoGenerator, 'createAndSaveLogo').mockResolvedValue();

      await logoGenerator.run();

      expect(inquirer.prompt).toHaveBeenCalled();
      expect(logoGenerator.createAndSaveLogo).toHaveBeenCalledWith(
        mockAnswers.text,
        mockAnswers.textColor,
        Circle,
        mockAnswers.shapeColor,
        'logo.svg'
      );
      expect(console.log).toHaveBeenCalledWith('Generated logos successfully!');
    });

    it('should handle invalid shape', async () => {
      const mockAnswers = {
        text: 'ABC',
        textColor: 'red',
        shapeType: 'InvalidShape',
        shapeColor: 'blue',
      };

      jest.spyOn(inquirer, 'prompt').mockResolvedValue(mockAnswers);
      jest.spyOn(console, 'log');

      await logoGenerator.run();

      expect(inquirer.prompt).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith(`Invalid shape: ${mockAnswers.shapeType}`);
    });
  });
});
