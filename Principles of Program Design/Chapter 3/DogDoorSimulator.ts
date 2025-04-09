import { BarkRecognizer } from "./classes/BarkRecognizer";
import { DogDoor } from "./classes/DogDoor";
import { Remote } from "./classes/Remote";

async function main() : Promise<void> {
    const door = new DogDoor();
    const remote = new Remote(door);
    const recognizer = new BarkRecognizer(door);
    
    console.log("Fido starts barking.");
    await recognizer.recognize("Woof", "Fido has gone outside...");

    console.log("\nFido’s all done...");

    console.log("\nFido starts barking.");
    await recognizer.recognize("Woof", "Fido’s back inside...");
}

main();