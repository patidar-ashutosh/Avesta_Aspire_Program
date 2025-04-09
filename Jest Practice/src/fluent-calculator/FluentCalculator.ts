export class FluentCalculator {
    public ans : number[] = [];
    public removeNumber : number[] = [];
    public isSave : boolean = false;

    seed(num:number) : void {
        this.ans.push(num);
    }
    
    add(num:number) : void {
        let sum = this.ans[this.ans.length - 1] + num;
        this.ans.push(sum);
        this.isSave = false;
    }

    minus(num:number) : void {
        let sub = this.ans[this.ans.length - 1] - num;
        this.ans.push(sub);
        this.isSave = false;
    }

    result() : number {
        return this.ans[this.ans.length-1];
    }

    undo() : void {
        if(!this.isSave) {
            if(this.ans.length > 1) {
                let n = this.ans.pop();
                if(n) this.removeNumber.push(n);
            }
        }
    }

    redo() : void {
        if(!this.isSave) {
            this.ans.push(this.removeNumber[this.removeNumber.length-1]);
            this.removeNumber.pop();
        }
    }

    save() : void {
        this.isSave = true;
    }
}