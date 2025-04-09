import { DogDoor } from "./DogDoor";

export class Remote {
    private door : DogDoor;

    constructor(door:DogDoor) {
        this.door = door;
    }

    pressButton() : void {
        console.log("Pressing the remote control button...");
        if(!this.door.isOpen()){
            this.door.open();
        } else {
            this.door.close();
        }
    }
}