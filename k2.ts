class Calculator {
    private panelContents: string = "0";
    private lastOperation: string | null = null;

    private calculate(): void {
        const parts = this.panelContents.split("*");
        const result = parts.reduce((prev: string, curr: string): string => {
            return (parseFloat(prev) * parseFloat(curr)).toString();
        });
        this.panelContents = result;
    }

    private handleMultiply(): void {
        if (/^\d/.test(this.panelContents)) {
            if (this.lastOperation === "*") {
                this.calculate();
            }
            this.lastOperation = "*";
            this.panelContents += "*";
        } else {
            const lastNumber = this.panelContents.match(/\d+$/)?.[0] || "0";
            this.panelContents = lastNumber + "*";
        }
    }

    pressButton(b: string): void {
        if (b === "C") {
            this.panelContents = "0";
            this.lastOperation = null;
        } else if (b === "*") {
            this.handleMultiply();
        } else {
            this.panelContents += b;
        }
    }

    pressMultipleButtons(buttons: string[]): void {
        this.panelContents += buttons.join("");
    }

    getPanelContents(): string {
        const strippedContents = this.panelContents.replace(/^0+/, '');
        return strippedContents !== '' ? strippedContents : '0';
    }
}

export { Calculator };
