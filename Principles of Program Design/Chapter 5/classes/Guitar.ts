import { GuitarSpec } from "./GuitarSpec";

export class Guitar {

    private spec: GuitarSpec;

    constructor(spec: GuitarSpec) {
        this.spec = spec;
    }

    getSpec() : GuitarSpec {
        return this.spec;
    }   
}