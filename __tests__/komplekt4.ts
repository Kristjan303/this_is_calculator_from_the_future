function countAs(str: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "A") {
            count++;
        }
    }
    return count;
}
describe("countAs", () => {
    test("should count uppercase 'A' letters", () => {
        expect(countAs("AABCD")).toBe(2);
        expect(countAs("BADCAD")).toBe(2);
        expect(countAs("BCDEFG")).toBe(0);
    });

    test("should count lowercase 'a' letters", () => {
        expect(countAs("aabbccd")).toBe(2);
        expect(countAs("bcdaaa")).toBe(3);
        expect(countAs("cdefg")).toBe(0);
    });
});
