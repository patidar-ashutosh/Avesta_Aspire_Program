import { NumbersToWords } from "./NumbersToWords";

describe("Number to Words", () => {

    const obj = new NumbersToWords();

    it("single digit number", () => {
        expect(obj.getNumberToWords(1)).toBe("one");
        expect(obj.getNumberToWords(3)).toBe("three");
        expect(obj.getNumberToWords(7)).toBe("seven");
    });

    it("two digit number", () => {
        expect(obj.getNumberToWords(11)).toBe("eleven");
        expect(obj.getNumberToWords(27)).toBe("twenty-seven");
        expect(obj.getNumberToWords(99)).toBe("ninety-nine");
    });

    it("three digit number", () => {
        expect(obj.getNumberToWords(100)).toBe("one hundred");
        expect(obj.getNumberToWords(215)).toBe("two hundred fifteen");
        expect(obj.getNumberToWords(999)).toBe("nine hundred ninety-nine");
    });

    it("four digit number", () => {
        expect(obj.getNumberToWords(1000)).toBe("one thousand");
        expect(obj.getNumberToWords(4321)).toBe("four thousand three hundred twenty-one");
        expect(obj.getNumberToWords(9999)).toBe("nine thousand nine hundred ninety-nine");
    });

});