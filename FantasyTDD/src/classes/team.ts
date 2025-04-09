import { Player } from "./player";
import data from '../data'

let playersData = data;

export class Team {

    public players:Player[] = [];
    public totalRuns : number = 0;
    public totalFantasyPoints : number = 0;
    public totalCredits : number = 100;
    public totalBatsman = 0;
    public totalBowler = 0;
    public totalWicketKeeper = 0;
    public captain = "";
    public viceCaptain = "";
    public totalWicketGone : number = 0;
    public totalWicketTaken : number = 0;
    public totalBallsPlayed : number = 0;
    public totalBallsDelivered : number = 0;
    public currentBatsmanIndex : number = 0;
    public currentBowlerIndex : number = 6;

    constructor(private teamName:string) {
        this.validateTeamName(teamName);
    }

    getTeamName() : string {
        return this.teamName;
    }
    
    getPlayers() : Player[] {
        return this.players;
    }

    makeTeam() : boolean {
        if(this.players.length !== 11) {
            console.log("Required Players Is Not Selected...!\nFirst Add Players...!");
            return false;
        } else if(this.captain == "") {
            console.log("Please Select Captain...!");
            return false;
        }
        else if(this.viceCaptain == "") {
            console.log("Please Select Vice-Captain...!");
            return false;
        }

        return true;
    }

    addPlayer(indexOfPlayer : number) : boolean {
        
        if(this.players.length === 11) {
            console.log("Required Players Is Selected...!\nMake Your Team Now...!");
            return false;
        }

        if(playersData[indexOfPlayer].credit > this.totalCredits) {
            console.log("Sorry , You Don't Have Enough Credit...!", this.totalCredits);
            return false;
        }

        if(this.totalBatsman === 5 && playersData[indexOfPlayer].playingRole === "Batsman") {
            console.log("Required Batsman Is Selected...!");
            return false;
        }

        if(this.totalBowler === 5 && playersData[indexOfPlayer].playingRole === "Bowler") {
            console.log("Required Bowler Is Selected...!");
            return false;
        }

        if(this.totalWicketKeeper === 1 && playersData[indexOfPlayer].playingRole === "Wicketkeeper") {
            console.log("Required Wicket Keeper Is Selected...!");
            return false;
        }

        this.addPlayerInTeam(indexOfPlayer);

        return true;
    }

    selectCaptain(player:Player) : void {
        if(this.players.length !== 11) {
            console.log("Required Players Is Not Selected...!\nFirst Add Players...!");
            return;
        }
        this.captain = player.getName();
        player.setCaptain(true);
    }

    selectViceCaptain(player:Player) : void {
        if(this.players.length !== 11) {
            console.log("Required Players Is Not Selected...!\nFirst Add Players...!");
            return;
        }
        this.viceCaptain = player.getName();   
        player.setViceCaptain(true);
    }

    private addPlayerInTeam(indexOfPlayer:number) : void {
        const {name, playingRole, credit} = playersData[indexOfPlayer];

        this.totalCredits -= playersData[indexOfPlayer].credit;

        this.totalBatsman += (playingRole === "Batsman") ? 1 : 0;
        this.totalBowler += (playingRole === "Bowler") ? 1 : 0;
        this.totalWicketKeeper += (playingRole === "Wicketkeeper") ? 1 : 0;
    
        playersData = this.removePlayerFromPlayersData(indexOfPlayer);

        this.players.push(new Player(name, playingRole, credit, false, false));
    }

    printTeamDetails() : void {
        if(this.players.length !== 11) {
            console.log("Required Players Is Not Selected...!\nFirst Add Players...!");
            return;
        }
        console.log("Team Name : ", this.teamName);
        console.log("Player Details : ");
        this.printPlayerDetails();
    }

    private removePlayerFromPlayersData(randomIndex: number) {
        const newPlayersData = playersData.filter((currentPlayer, index) => {
            if(index != randomIndex) {
                return currentPlayer;
            }
        })
    
        return newPlayersData;
    }

    private printPlayerDetails() : void {
        this.players.forEach((player) => {
            console.log(`
                Name : ${player.getName()} ${player.isCaptain() ? "(Captain)" : ""} ${player.isViceCaptain() ? "(Vice-Captain)" : ""}
                Playing Role : ${player.getPlayingRole()}
                Total Runs : ${player.getTotalRuns()}
                Total Runs Given : ${player.getTotalGivenRuns()}
                Total Balls Played : ${player.getTotalBallsPlayed()}
                Total Over : ${Math.floor((player.getTotalBallsDelivered()) / 6)}.${(player.getTotalBallsDelivered()) % 6}
                Total Wicket Taken : ${player.getWicket()}
                Total Fantasy Points : ${player.getFantasyPoints()}
            `);
        })
    }

    validateTeamName(teamName : string) : any {
        teamName.trim();
        
        if(teamName == "") {
            throw new Error("Please Enter Valid Team Name !!!");
        }
    }

    getTotalWicketGone() : number {
        return this.totalWicketGone;
    }
    
    getTotalWicketTaken() : number {
        return this.totalWicketTaken;
    }

    getTotalBallsPlayed() : number {
        return this.totalBallsPlayed;
    }

    getTotalBallsDelivered() : number {
        return this.totalBallsDelivered;
    }

    nextBatsman() : Player {
        return this.players[this.currentBatsmanIndex++];
    }

    nextBowler() : Player {
        return this.players[this.currentBowlerIndex++];
    }
}