class Calculator {
    private panelContents: string = "0";

    pressButton(b: string): void {
        if (b === "C") {
            this.panelContents = "0";
        } else {
            this.panelContents += b;
        }
    }

    pressMultipleButtons(buttons: string[]): void {
        this.panelContents += buttons.join("");
    }

    getPanelContents(): string {
        let contents = this.panelContents.replace(/^0+/, '');
        return contents || "0";
    }
}

export { Calculator };
