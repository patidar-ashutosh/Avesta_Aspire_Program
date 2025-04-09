import { fizzBuzzWhiz } from "./fizzBuzzWhiz";

describe("fizz Buzz Whiz", () => {

    const fz = new fizzBuzzWhiz();

    it("Return Fizz if the number is divisible by 3", () => {
        expect(fz.getFizzBuzzWhiz(9)).toBe("Fizz");
        expect(fz.getFizzBuzzWhiz(6)).toBe("Fizz");
    });

    it("Return Buzz if the number is divisible by 5", () => {
        expect(fz.getFizzBuzzWhiz(50)).toBe("Buzz");
        expect(fz.getFizzBuzzWhiz(20)).toBe("Buzz");
    });

    it("Return FizzBuzz if the number is divisible by both 3 and 5", () => {
        expect(fz.getFizzBuzzWhiz(15)).toBe("FizzBuzz");
        expect(fz.getFizzBuzzWhiz(30)).toBe("FizzBuzz");
        expect(fz.getFizzBuzzWhiz(75)).toBe("FizzBuzz");
    });

    it("If a number is prime return Whiz with answer string", () => {
        expect(fz.getFizzBuzzWhiz(3)).toBe("FizzWhiz");
        expect(fz.getFizzBuzzWhiz(5)).toBe("BuzzWhiz")
    })

    it("Return the number as string if no rule matches", () => {
        expect(fz.getFizzBuzzWhiz(1)).toBe("1");
        expect(fz.getFizzBuzzWhiz(2)).toBe("2");
        expect(fz.getFizzBuzzWhiz(4)).toBe("4");
    })

});