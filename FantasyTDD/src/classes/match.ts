import { Player } from "./player";
import { Team } from "./team";

export class Match {

    public currentInning : number = 1;
    public battingTeam : Team | undefined;
    public bowlingTeam : Team | undefined;
    public currentBatsman : Player | undefined;
    public currentBowler : Player | undefined;

    toss(teamOne:Team, teamTwo:Team, tossType:string) : Team {
        const tossWinner : Team = tossType === "head" ? teamOne : teamTwo;

        console.log(`${tossWinner.getTeamName()} won the toss`);

        return tossWinner;
    }

    startMatch(battingTeam:Team, bowlingTeam:Team) : void {
        this.battingTeam = battingTeam;
        this.bowlingTeam = bowlingTeam;

        this.currentBatsman = this.battingTeam!.nextBatsman();
        this.currentBowler = this.bowlingTeam!.nextBowler();

        console.log("Match is started , play the first ball");
    }

    playBall() : boolean {

        if(this.currentInning === 1 && this.isFirstInningCompleted()) {
            return false;
        }

        if(this.currentInning === 2 && this.isSecondInningCompleted()) {
            return false;
        }

        let shot : string | number = this.generateShot();

        this.assignPoints(shot);

        this.printBallDetails(shot);

        if(shot === "W") {
            this.currentBatsman = this.battingTeam?.nextBatsman();
        }

        if(this.currentBowler!.getTotalBallsDelivered() === 6) {
            this.currentBowler = this.bowlingTeam?.nextBowler();
            console.log("Over is completed");
        }

        return true;
    }

    private printBallDetails(shot : string | number, ) : void {
        console.log(`batsman : ${this.currentBatsman!.getName()} , bowler : ${this.currentBowler!.getName()} , shot : ${shot} , batsman points : ${this.currentBatsman!.getFantasyPoints()} , bowler points : ${this.currentBowler!.getFantasyPoints()}`);
    }

    private generateShot() : string | number {
        let shotArrayOfCricket = [0, 1, 2, 3, 4, 6, "W"];

        let randomIndex = Math.floor(Math.random() * shotArrayOfCricket.length);

        return shotArrayOfCricket[randomIndex];
    }

    private assignPoints(shot:string|number) : void {

        this.currentBatsman!.totalBallsPlayed++;
        this.currentBowler!.totalBallsDelivered++;
        this.battingTeam!.totalBallsPlayed++;
        this.bowlingTeam!.totalBallsDelivered++;

        let fantasyPointsAchieveByBatsman = this.calculateBatsmanPoints(shot, this.currentBatsman!, this.currentBowler!, this.battingTeam!);

        let fantasyPointsAchieveByBowler = this.calculateBowlerPoints(shot, this.currentBatsman!, this.currentBowler!, this.battingTeam!, this.bowlingTeam!);

        this.currentBatsman!.fantasyPoints += fantasyPointsAchieveByBatsman;
        this.battingTeam!.totalFantasyPoints += fantasyPointsAchieveByBatsman;
        this.currentBowler!.fantasyPoints += fantasyPointsAchieveByBowler;
        this.bowlingTeam!.totalFantasyPoints += fantasyPointsAchieveByBowler;
    }

    private calculateBatsmanPoints(shot:string|number, batsman:Player, bowler:Player, battingTeam:Team) : number {
        let points : number = 0;

        if(shot !== "W" && typeof shot !== "string") {
            if(shot === 6) points = 8;
            else if(shot === 4) points = 5;
            else if(shot===1||shot===2||shot===3) points = 1;

            batsman.totalRuns += shot;
            battingTeam.totalRuns += shot;
            bowler.totalGivenRuns += shot;
        }

        if(batsman.isCaptain()) points *= 2;
        if(batsman.isViceCaptain()) points *= 1.5;

        return points;
    }

    private calculateBowlerPoints(shot:string|number, batsman:Player, bowler:Player, battingTeam:Team, bowlingTeam:Team) : number {
        let points : number = 0;

        if(shot === 0) points = 1;
        else if(shot === "W") {
            bowler.wicket++;
            points = 10;

            battingTeam.totalWicketGone++;
            bowlingTeam.totalWicketTaken++;

            if(batsman.getTotalRuns() === 0) {
                this.batsmanOutOnDuck(batsman, battingTeam);
            }
        }

        if (bowler.isCaptain()) points *= 2;
        if (bowler.isViceCaptain()) points *= 1.5;

        return points;
    }

    private batsmanOutOnDuck(batsman:Player, battingTeam:Team) : void {
        let points : number = -2;

        if (batsman.isCaptain()) points *= 2;
        if (batsman.isViceCaptain()) points *= 1.5;

        batsman.fantasyPoints += points;
        battingTeam.totalFantasyPoints += points;
    }

    private isFirstInningCompleted(): boolean {
        const isFirstInning = this.currentInning === 1;

        if (isFirstInning && (this.battingTeam!.totalWicketGone === 10 || this.battingTeam!.totalBallsPlayed === 30)) {
            return true;
        }

        return false;
    }

    private isSecondInningCompleted(): boolean {
        const isSecondInning = this.currentInning === 2;

        if (isSecondInning && (this.battingTeam!.totalRuns > this.bowlingTeam!.totalRuns || this.battingTeam!.totalBallsPlayed === 30 || this.battingTeam!.totalWicketGone === 10)) {
            return true;
        }

        return false;
    }

    getResult(team1: Team, team2: Team) : string {
        console.log("------------- Match is completed -------------");

        console.log(`${team1.getTeamName()} Fantasy Points : ${team1.totalFantasyPoints} , ${team2.getTeamName()} Fantasy Points : ${team2.totalFantasyPoints}`);

        if (team1.totalFantasyPoints > team2.totalFantasyPoints)
            return `${team1.getTeamName()} won the match`;

        if (team1.totalFantasyPoints < team2.totalFantasyPoints) 
            return `${team2.getTeamName()} won the match`;
        
        return "Match Is Draw";
    }

    changeInning() : void {

        console.log("------------- First inning is completed -------------");

        this.currentInning++;

        let temp = this.battingTeam;
        this.battingTeam = this.bowlingTeam;
        this.bowlingTeam = temp;

        this.battingTeam!.currentBatsmanIndex = 0;
        this.bowlingTeam!.currentBowlerIndex = 6;

        this.currentBatsman = this.battingTeam!.nextBatsman();
        this.currentBowler = this.bowlingTeam!.nextBowler();
    }
}