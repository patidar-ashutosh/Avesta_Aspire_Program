abstract class Instrument {
    private serialNumber: string;
    private price: number;

    constructor(serialNumber: string, price: number) {
        this.serialNumber = serialNumber;
        this.price = price;
    }

    getSerialNumber() : string {
        return this.serialNumber;
    }

    getPrice() : number {
        return this.price;
    }

    setPrice(price:number) : void {
        this.price = price;
    }
}