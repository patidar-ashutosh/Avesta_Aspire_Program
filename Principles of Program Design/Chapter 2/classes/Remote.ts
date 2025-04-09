import { DogDoor } from "./DogDoor";

export class Remote {
    private door : DogDoor;

    constructor(door:DogDoor) {
        this.door = door;
    }

    async pressButton(msg:string) : Promise<void> {
        console.log("Pressing the remote control button...");
        if(!this.door.isOpen()){
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