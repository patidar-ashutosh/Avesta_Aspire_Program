import { Bark } from "./Bark";
import { DogDoor } from "./DogDoor";

export class BarkRecognizer {
    private door : DogDoor;

    constructor(door:DogDoor) {
        this.door = door;
    }

    async recognize(bark:Bark, msg:string) : Promise<void> {
        console.log("BarkRecognizer: Heard a '" + bark.getSound() + "'");

        let getAllowedBark = this.door.getAllowedBark();

        let result = getAllowedBark.find((currentBark) => {
            if(currentBark.equals(bark)) {
                return true;
            }
        })

        if(result) {
            this.door.open();

            return new Promise((res) => {
                setTimeout(() => {
                    console.log(msg);
                    this.door.close();
                    res();
                }, 5000);
            })
        } else {
            console.log("This dog is not allowed.");
        }
    }
}