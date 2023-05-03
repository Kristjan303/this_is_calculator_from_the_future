import { countVowels } from "../f2";

describe("countVowels", () => {
    test("should count vowels in lowercase", () => {
        expect(countVowels("hello world")).toBe(3);
        expect(countVowels("typescript is awesome")).toBe(7);
        expect(countVowels("aouie")).toBe(5);
    });

    test("should count vowels in uppercase", () => {
        expect(countVowels("HELLO WORLD")).toBe(3);
        expect(countVowels("TYPESCRIPT IS AWESOME")).toBe(7);
        expect(countVowels("AOUIE")).toBe(5);
    });

    test("should count vowels in mixed case", () => {
        expect(countVowels("Hello World")).toBe(3);
        expect(countVowels("TypeScript is Awesome")).toBe(7);
        expect(countVowels("Aouie")).toBe(5);
    });

    test("should return 0 for empty string", () => {
        expect(countVowels("")).toBe(0);
    });

    test("should return 0 for text without vowels", () => {
        expect(countVowels("bcdfghjklmnpqrstvwxyz")).toBe(0);
    });
});
