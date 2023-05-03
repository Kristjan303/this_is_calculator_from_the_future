import { Calculator } from "../k2";

let calcobj: Calculator | null = null;

beforeEach(() => {
    calcobj = new Calculator();
});

test("empty init", () => {
    expect(calcobj?.getPanelContents()).toBe("0");
});

test("simple input 1", () => {
    calcobj?.pressButton("7");
    expect(calcobj?.getPanelContents()).toBe("7");
});

test("simple input 2", () => {
    calcobj?.pressButton("8");
    expect(calcobj?.getPanelContents()).toBe("8");
});

test("multiple symbols input 1", () => {
    calcobj?.pressMultipleButtons(["7", "8"]);
    expect(calcobj?.getPanelContents()).toBe("78");
});

test("multiple symbols input 2", () => {
    calcobj?.pressMultipleButtons(["3", "2"]);
    expect(calcobj?.getPanelContents()).toBe("32");
});

test("multiple symbols input 3", () => {
    calcobj?.pressButton("1");
    calcobj?.pressButton("2");
    calcobj?.pressButton("3");
    expect(calcobj?.getPanelContents()).toBe("123");
});

test("clear panel", () => {
    calcobj?.pressButton("3");
    calcobj?.pressButton("2");
    calcobj?.pressButton("C");
    expect(calcobj?.getPanelContents()).toBe("0");
});

test("zero on startup", () => {
    expect(calcobj?.getPanelContents()).toBe("0");
});

test("zero on clear", () => {
    calcobj?.pressButton("7");
    calcobj?.pressButton("C");
    expect(calcobj?.getPanelContents()).toBe("0");
});
