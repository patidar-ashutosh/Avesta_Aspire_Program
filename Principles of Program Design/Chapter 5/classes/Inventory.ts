import { Builder, Type, Wood } from "./enumTypes";
import { Guitar } from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";

export class Inventory {
    private guitars: Guitar[];

    constructor() {
        this.guitars = [];
    }
    
    addGuitar(serialNumber: string, price: number, builder: Builder, model: string, type: Type, numStrings:number, backWood: Wood, topWood: Wood): void {
        const spec = new GuitarSpec(builder, model, type, numStrings, backWood, topWood);
        const guitar = new Guitar(serialNumber, price, spec);
        this.guitars.push(guitar);
    }

    search(searchSpec: GuitarSpec): Guitar[] {
        let matchingGuitars : Guitar[] = [];
    
        matchingGuitars = this.guitars.filter((guitar) =>
          guitar.getSpec().matches(searchSpec)
        );
    
        return matchingGuitars;
    }
}