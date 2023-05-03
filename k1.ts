export class Isikukood{
    constructor(protected kood:string){}

    synniaasta() {
        const year = parseInt(this.kood.substring(1, 3));
        const century = parseInt(this.kood[0]);

        if (century === 1 || century === 2) {
            return 1800 + year;
        } else if (century === 3 || century === 4) {
            return 1900 + year;
        } else if (century === 5 || century === 6) {
            return 2000 + year;
        } else {
            return 2100 + year;
        }
    }


    sugu(){
        return parseInt(this.kood[0]) % 2 == 0 ? "N" : "M";
    }
}
