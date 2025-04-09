import { Bark } from "./Bark";

export class DogDoor {
    private _open : boolean;
    private allowedBark : Bark[];

    constructor(){
        this._open = false;
        this.allowedBark = [];
    }

    open() : void {
        console.log("The dog door opens.");
        this._open = true;
    }

    close() : void {
        console.log("The dog door closes.");
        this._open = false;
    }

    isOpen() : boolean {
        return this._open;
    }

    setAllowedBark(bark:Bark) : void {
        this.allowedBark.push(bark);
    }

    getAllowedBark() : Bark[] {
        return this.allowedBark;
    }
}