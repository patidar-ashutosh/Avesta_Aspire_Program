import { DogDoor } from "./classes/DogDoor";
import { Remote } from "./classes/Remote";

async function main() : Promise<void>{
    const door = new DogDoor();
    const remote = new Remote(door);
    
    console.log("Fido barks to go outside...");
    await remote.pressButton("Fido has gone outside...");
    
    console.log("\nFido’s all done...");
    
    console.log("\nFido’s starts barking...");
    await remote.pressButton("Fido’s back inside...");
}

main();