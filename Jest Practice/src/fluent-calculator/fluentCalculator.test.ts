import { FluentCalculator } from "./FluentCalculator"

describe("Fluent Calculator", () => {
    const calculator = new FluentCalculator();
    
    it("perform operations", () => {
        calculator.seed(10);

        calculator.add(5); // 15
        expect(calculator.result()).toBe(15);

        calculator.minus(2); // 13 
        expect(calculator.result()).toBe(13);

        calculator.undo(); // 15
        calculator.undo(); // 10
        expect(calculator.result()).toBe(10);

        calculator.add(8); // 18
        expect(calculator.result()).toBe(18);

        calculator.save();

        calculator.undo();
        calculator.redo();
        expect(calculator.result()).toBe(18);

        calculator.add(10); // 28
        calculator.undo(); // 18
        calculator.redo(); // 28
        expect(calculator.result()).toBe(28);
    })
    
})