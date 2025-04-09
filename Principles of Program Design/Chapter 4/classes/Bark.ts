export class Bark {
    private sound : string;

    constructor(sound:string) {
        this.sound = sound;
    }

    getSound() : string {
        return this.sound;
    }

    equals(bark:Bark) : boolean {
        if(bark instanceof Bark) {
            if(bark.getSound().toLowerCase() === this.getSound().toLowerCase()){
                return true;
            }
        }
        return false;
    }
}