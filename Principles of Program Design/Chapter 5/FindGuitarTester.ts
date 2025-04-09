import { GuitarSpec } from "./classes/GuitarSpec";
import { Inventory } from "./classes/Inventory";
import { Builder, Type, Wood } from './classes/enumTypes';

const inventory = new Inventory();

// Adding guitars with GuitarSpec
const spec1 = new GuitarSpec(Builder.Fender, "Stratocaster", Type.Electric, 12, Wood.Alder, Wood.Alder);

// Adding guitar
inventory.addGuitar("12345", 1500, Builder.Fender, "Stratocaster", Type.Electric, 12, Wood.Alder, Wood.Alder);

inventory.addGuitar("67890", 1200, Builder.Gibson, "Les Paul", Type.Electric, 12, Wood.Mahogany, Wood.Maple);

// Searching for guitars
const matchingGuitars = inventory.search(spec1);

if (matchingGuitars.length > 0) {
    console.log("Matching Guitars:");

    matchingGuitars.forEach((guitar) => {
        console.log(
            `${guitar.getSpec().getModel()}, Serial: ${guitar.getSerialNumber()}, Price: ${guitar.getPrice()}`
        );
    });
} else {
    console.log("No matching guitars found.");
}