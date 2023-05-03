import {Isikukood} from "../k1";

describe("Isikukood", () => {
    it("should return birth year 2000 for code 50001010003", () => {
        expect(new Isikukood("50001010003").synniaasta()).toBe(2000);
    });

    it("should return birth year 1987 for code 38707280276", () => {
        expect(new Isikukood("38707280276").synniaasta()).toBe(1987);
    });

    it("should return birth year 1911 for code 11101010006", () => {
        expect(new Isikukood("11101010006").synniaasta()).toBe(1811);
    });

});
