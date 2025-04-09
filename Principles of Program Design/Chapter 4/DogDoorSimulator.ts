import { Bark } from "./classes/Bark";
import { BarkRecognizer } from "./classes/BarkRecognizer";
import { DogDoor } from "./classes/DogDoor";
import { Remote } from "./classes/Remote";

async function main() : Promise<void> {
    const door = new DogDoor();

    door.setAllowedBark(new Bark("rowlf"));
    door.setAllowedBark(new Bark("rooowlf"));
    door.setAllowedBark(new Bark("rawlf"));
    door.setAllowedBark(new Bark("woof"));

    const recognizer = new BarkRecognizer(door);
    const remote = new Remote(door);
    
    console.log("Bruce starts barking.");
    await recognizer.recognize(new Bark("rowlf"), "Bruce has gone outside...");

    console.log("\nBruce’s all done...");

    console.log("A small dog starts barking.");
    await recognizer.recognize(new Bark("yip"), "");

    console.log("Bruce starts barking.");
    await recognizer.recognize(new Bark("rooowlf"), "Bruce’s back inside...");
}

main();