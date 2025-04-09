export class Door {
    
    public door : boolean[];

    constructor(numberOfGate:number) {
        this.door = new Array(numberOfGate).fill(false);
    }
    
    toggleTheDoor(number: number) : void {
        for(let i=number-1; i<this.door.length; i+=number) {
            this.door[i] = !this.door[i];
        }
    }

    getResult() : string {
        let result = this.createResult();
        return result;
    }

    private createResult() : string {
        let result = "";
        for (let i=0; i<this.door.length; i++) {
            result += this.door[i] ? "@" : "#";
        }
        return result;
    }

}