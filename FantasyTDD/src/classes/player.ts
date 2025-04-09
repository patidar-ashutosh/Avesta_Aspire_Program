export class Player {

    public totalRuns:number = 0;
    public totalGivenRuns:number = 0;
    public wicket:number = 0;
    public totalBallsPlayed:number = 0;
    public totalBallsDelivered:number = 0;
    public fantasyPoints:number = 0.0;

    constructor(private name:string, private playingRole:string, private credit:Number, private captain:boolean, private viceCaptain:boolean) {}

    getName() : string {
        return this.name;
    }

    getPlayingRole() : string {
        return this.playingRole;
    }

    getCredit() : Number {
        return this.credit;
    }

    isCaptain() : boolean {
        return this.captain;
    }

    setCaptain(isCaptain : boolean) : void {
        this.captain = isCaptain;
    }

    isViceCaptain() : boolean {
        return this.viceCaptain;
    }

    setViceCaptain(isViceCaptain : boolean) : void {
        this.viceCaptain = isViceCaptain;
    }

    getTotalRuns() : number {
        return this.totalRuns;
    }
    
    getTotalGivenRuns() : number {
        return this.totalGivenRuns;
    }
    
    getTotalBallsPlayed() : number {
        return this.totalBallsPlayed;
    }
 
    getTotalBallsDelivered() : number {
        return this.totalBallsDelivered;
    }

    getWicket() : number {
        return this.wicket;
    }

    getFantasyPoints() : number {
        return this.fantasyPoints;
    }
}