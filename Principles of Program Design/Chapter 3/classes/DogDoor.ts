export class DogDoor {
    private _open : boolean;

    constructor(){
        this._open = false;
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
}