import { Builder, Type, Wood } from "./enumTypes";

export class GuitarSpec {
    private builder: Builder;
    private model: string;
    private type: Type;
    private numStrings: number;
    private backWood: Wood;
    private topWood: Wood;

    constructor(builder: Builder, model: string, type: Type, numStrings:number, backWood: Wood, topWood: Wood) {
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.numStrings = numStrings;
        this.backWood = backWood;
        this.topWood = topWood;
    }

    getBuilder() : Builder {
        return this.builder;
    }
    
    getModel() : string {
        return this.model;
    }
    
    getType() : Type {
        return this.type;
    }
    
    getNumStrings() : number {
        return this.numStrings;
    }
    
    getBackWood() : Wood {
        return this.backWood;
    }
    
    getTopWood() : Wood {
        return this.topWood;
    }

    matches(otherSpec: GuitarSpec) : boolean {
        const matchesBuilder = this.builder === otherSpec.getBuilder();
    
        const matchesModel = this.model.toLowerCase() === otherSpec.getModel().toLowerCase();
    
        const matchesType = this.type === otherSpec.getType();
    
        const numStrings = this.numStrings === otherSpec.getNumStrings();
    
        const matchesBackWood = this.backWood === otherSpec.getBackWood();
    
        const matchesTopWood = this.topWood === otherSpec.getTopWood();
    
        return (matchesBuilder && matchesModel && matchesType && numStrings && matchesBackWood && matchesTopWood);
    }
}