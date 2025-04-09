import { DogDoor } from "./DogDoor";

export class BarkRecognizer {
    private door : DogDoor;

    constructor(door:DogDoor) {
        this.door = door;
    }

    async recognize(bark:string, msg:string) : Promise<void> {
        console.log("BarkRecognizer: Heard a '" + bark + "'");
        if(bark === "Woof") {
            this.door.open();

            return new Promise((res) => {
                setTimeout(() => {
                    console.log(msg);
                    this.door.close();
                    res();
                }, 5000);
            })
        }
    }
}