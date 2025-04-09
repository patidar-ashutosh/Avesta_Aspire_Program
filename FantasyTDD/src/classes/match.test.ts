import { Match } from "./match";
import { Player } from "./player";
import { Team } from "./team";

describe("match toss", () => {
    let team1 : Team;
    let team2 : Team;
    let match : Match;

    beforeEach(() => {
        team1 = new Team("csk");
        team2 = new Team("mi");
        match = new Match();
    })

    it("should return team1 when call is 'head'", () => {
        expect(match.toss(team1, team2, "head")).toBe(team1);
    });

    it("should return team2 when call is not 'head'", () => {
        expect(match.toss(team1, team2, "tail")).toBe(team2);
    });
})

describe("start match", () => {
    let team1 : Team;
    let team2 : Team;
    let match : Match;

    beforeAll(() => {
        team1 = new Team("csk");
        team2 = new Team("mi");
        match = new Match();
    })

    it("add 11 player in team1", () => {
        expect(team1.addPlayer(0)).toBe(true);
        expect(team1.addPlayer(0)).toBe(true);
        expect(team1.addPlayer(1)).toBe(true);
        expect(team1.addPlayer(1)).toBe(true);
        expect(team1.addPlayer(1)).toBe(true);
        expect(team1.addPlayer(1)).toBe(true);
        expect(team1.addPlayer(1)).toBe(true);
        expect(team1.addPlayer(2)).toBe(true);
        expect(team1.addPlayer(2)).toBe(true);
        expect(team1.addPlayer(1)).toBe(true);
        expect(team1.addPlayer(7)).toBe(true);
    })

    it("add 11 player in team2", () => {
        expect(team2.addPlayer(0)).toBe(true);
        expect(team2.addPlayer(1)).toBe(true);
        expect(team2.addPlayer(1)).toBe(true);
        expect(team2.addPlayer(1)).toBe(true);
        expect(team2.addPlayer(1)).toBe(true);
        expect(team2.addPlayer(1)).toBe(true);
        expect(team2.addPlayer(2)).toBe(true);
        expect(team2.addPlayer(3)).toBe(true);
        expect(team2.addPlayer(3)).toBe(true);
        expect(team2.addPlayer(13)).toBe(true);
        expect(team2.addPlayer(24)).toBe(true);
    })

    it("start match", () => {
        match.startMatch(team1, team2);
    })

    describe("play ball", () => {
        
        beforeAll(() => {
            match.battingTeam = team1;
            match.bowlingTeam = team2;
            match.currentInning = 1;
    
            match.battingTeam.totalBallsPlayed = 0;
            match.battingTeam.totalWicketGone = 0;
            match.battingTeam.totalRuns = 0;
    
            match.bowlingTeam.totalBallsDelivered = 0;
            match.bowlingTeam.totalRuns = 0;
        })

        it("should we need to play ball if inning 1 is not completed", () => {
    
            const result = match.playBall();
    
            expect(result).toBe(true);
        })
    
        it("should we need to play ball if inning 1 is completed", () => {
            match.battingTeam!.totalWicketGone = 10;
    
            const result = match.playBall();
    
            expect(result).toBe(false);
        })
    
        it("should we need to play ball if match is not completed", () => {
            match.battingTeam!.totalRuns = 60;

            match.battingTeam = team2;
            match.bowlingTeam = team1;
            match.currentInning = 2;

            match.battingTeam.totalRuns = 10;
            match.battingTeam.totalBallsPlayed = 20;
            match.battingTeam.totalWicketGone = 1;

            const result = match.playBall();

            expect(result).toBe(true);
        })
    
        it("should we need to play ball if match is completed", () => {
            match.battingTeam!.totalRuns = 62;
    
            const result = match.playBall();
    
            expect(result).toBe(false);
        })
    })
  
    describe("check for result", () => {
        it("should declare team1 as winner if they have more points", () => {
            team1.totalFantasyPoints = 200;
            team2.totalFantasyPoints = 100;
            
            expect(match.getResult(team1, team2)).toBe(`${team1.getTeamName()} won the match`);
        })
    
        it("should declare team2 as winner if they have more points", () => {
            team1.totalFantasyPoints = 100;
            team2.totalFantasyPoints = 200;
            
            expect(match.getResult(team1, team2)).toBe(`${team2.getTeamName()} won the match`);
        })
    
        it("should declare draw if points are same", () => {
            team1.totalFantasyPoints = 100;
            team2.totalFantasyPoints = 100;
            
            expect(match.getResult(team1, team2)).toBe("Match Is Draw");
        })
    })

    describe("if first inning is completed or not", () => {
        
        beforeAll(() => {
            match.currentInning = 1;
        })

        it("should return true if inning is 1 and 10 wickets are gone", () => {
            match.battingTeam!.totalWicketGone = 10;
            expect((match as any).isFirstInningCompleted()).toBe(true);
        })
    
        it("should return true if inning is 1 and 30 balls are played", () => {
            match.battingTeam!.totalBallsPlayed = 30;    
            expect((match as any).isFirstInningCompleted()).toBe(true);
        })
    
        it("should return false if inning is 1 and inning is not completed", () => {
            match.battingTeam!.totalBallsPlayed = 15;
            match.battingTeam!.totalWicketGone = 5;
            expect((match as any).isFirstInningCompleted()).toBe(false);
        })
    })

    describe("if second inning is completed or not", () => {

        beforeAll(() => {
            match.battingTeam = team2;
            match.bowlingTeam = team1;
            match.currentInning = 2;
        })

        it("should return true if inning is 2 and batting team has more runs than bowling team", () => {
            match.currentInning = 2;
    
            match.battingTeam!.totalRuns = 100;
            match.bowlingTeam!.totalRuns = 50;
    
            expect((match as any).isSecondInningCompleted()).toBe(true);
        })
    
        it("should return true if inning is 2 and batting team played 30 balls", () => {
            match.currentInning = 2;
    
            match.battingTeam!.totalBallsPlayed = 30;
    
            expect((match as any).isSecondInningCompleted()).toBe(true);
        })
    
        it("should return true if inning is 2 and 10 wickets are gone", () => {
            match.currentInning = 2;
    
            match.battingTeam!.totalWicketGone = 10;
    
            expect((match as any).isSecondInningCompleted()).toBe(true);
        })
    
        it("should return false if inning is 2 and inning is not completed", () => {
            match.currentInning = 2;
    
            match.battingTeam!.totalBallsPlayed = 15;
            match.battingTeam!.totalRuns = 30;
            match.battingTeam!.totalWicketGone = 5;
    
            expect((match as any).isSecondInningCompleted()).toBe(false);
        })
    })

    describe("assert point", () => {

        beforeAll(() => {
            match.battingTeam!.totalFantasyPoints = 0;
            match.bowlingTeam!.totalFantasyPoints = 0;
            match.currentBatsman! = match.battingTeam!.players[0];
            match.currentBowler! = match.bowlingTeam!.players[6];
            match.currentBatsman!.totalBallsPlayed = 0;
            match.currentBowler!.totalBallsDelivered = 0;
            match.currentBatsman!.fantasyPoints = 0;
            match.currentBowler!.fantasyPoints = 0;
        })

        it("should assert point correctly if shot is 0", () => {
            let shot = 0;

            (match as any).assignPoints(shot);

            expect(match.currentBatsman!.totalBallsPlayed).toBe(1);
            expect(match.currentBowler!.totalBallsDelivered).toBe(1);

            expect(match.currentBatsman!.fantasyPoints).toBe(0);
            expect(match.currentBowler!.fantasyPoints).toBe(1);

            expect(match.battingTeam!.totalFantasyPoints).toBe(0);
            expect(match.bowlingTeam!.totalFantasyPoints).toBe(1);
        })

        it("should assert point correctly if shot is 1", () => {
            let shot = 1;

            (match as any).assignPoints(shot);

            expect(match.currentBatsman!.totalBallsPlayed).toBe(2);
            expect(match.currentBowler!.totalBallsDelivered).toBe(2);

            expect(match.currentBatsman!.fantasyPoints).toBe(1);
            expect(match.currentBowler!.fantasyPoints).toBe(1);

            expect(match.battingTeam!.totalFantasyPoints).toBe(1);
            expect(match.bowlingTeam!.totalFantasyPoints).toBe(1);
        })

        it("should assert point correctly if shot is 4", () => {
            let shot = 4;

            (match as any).assignPoints(shot);

            expect(match.currentBatsman!.totalBallsPlayed).toBe(3);
            expect(match.currentBowler!.totalBallsDelivered).toBe(3);

            expect(match.currentBatsman!.fantasyPoints).toBe(6);
            expect(match.currentBowler!.fantasyPoints).toBe(1);

            expect(match.battingTeam!.totalFantasyPoints).toBe(6);
            expect(match.bowlingTeam!.totalFantasyPoints).toBe(1);
        })

        it("should assert point correctly if shot is 6 and batsman is captain", () => {
            let shot = 6;
            match.currentBatsman!.setCaptain(true);

            (match as any).assignPoints(shot);

            expect(match.currentBatsman!.totalBallsPlayed).toBe(4);
            expect(match.currentBowler!.totalBallsDelivered).toBe(4);

            expect(match.currentBatsman!.fantasyPoints).toBe(22);
            expect(match.currentBowler!.fantasyPoints).toBe(1);

            expect(match.battingTeam!.totalFantasyPoints).toBe(22);
            expect(match.bowlingTeam!.totalFantasyPoints).toBe(1);
        })

        it("should assert point correctly if shot is W and bowler is captain", () => {
            let shot = "W";
            match.currentBowler!.setCaptain(true);

            (match as any).assignPoints(shot);

            expect(match.currentBatsman!.totalBallsPlayed).toBe(5);
            expect(match.currentBowler!.totalBallsDelivered).toBe(5);

            expect(match.currentBatsman!.fantasyPoints).toBe(22);
            expect(match.currentBowler!.fantasyPoints).toBe(21);

            expect(match.battingTeam!.totalFantasyPoints).toBe(22);
            expect(match.bowlingTeam!.totalFantasyPoints).toBe(21);
        })
    })

    describe("batsman point calculation", () => {
        let batsman : Player;
        let bowler : Player;

        beforeAll(() => {
            batsman = team1.players[1];
            bowler = team2.players[6];
            batsman.fantasyPoints = 0;
            bowler.fantasyPoints = 0;
        })

        it("should calculate batsman points correctly if shot is 6", () => {
            let shot = 6;
    
            expect((match as any).calculateBatsmanPoints(shot, batsman, bowler, team1)).toBe(8);
        })
    
        it("should calculate batsman points correctly if shot is 4", () => {
            let shot = 4;
    
            expect((match as any).calculateBatsmanPoints(shot, batsman, bowler, team1)).toBe(5);
        })
    
        it("should calculate batsman points correctly if shot is 1,2 or 3", () => {
            let shot = 2;
    
            expect((match as any).calculateBatsmanPoints(shot, batsman, bowler, team1)).toBe(1);
        })
    
        it("should calculate batsman points correctly if shot is 6 and batsman is captain", () => {
            let shot = 6;
            batsman.setCaptain(true);
    
            expect((match as any).calculateBatsmanPoints(shot, batsman, bowler, team1)).toBe(16);
        })
    
        it("should calculate batsman points correctly if shot is 6 and batsman is viceCaptain", () => {
            let shot = 6;
            
            batsman = team1.players[2];
            batsman.setViceCaptain(true);

            bowler = team2.players[1];
    
            expect((match as any).calculateBatsmanPoints(shot, batsman, bowler, team1)).toBe(12);
        })
    })

    describe("bowler point calculation", () => {
        let batsman : Player;
        let bowler : Player;

        beforeAll(() => {
            batsman = team1.players[2];
            bowler = team2.players[7];
            batsman.fantasyPoints = 0;
            bowler.fantasyPoints = 0;
            bowler.wicket = 0;

            team1.totalWicketGone = 0;
            team2.totalWicketTaken = 0;
        })

        it("should calculate bowler points correctly if shot is 0", () => {
            let shot = 0;
    
            expect((match as any).calculateBowlerPoints(shot, batsman, bowler, team1)).toBe(1);
        })
    
        it("should calculate bowler points correctly if shot is W", () => {
            let shot = "W";
    
            expect((match as any).calculateBowlerPoints(shot, batsman, bowler, team1, team2)).toBe(10);
    
            expect(bowler.wicket).toBe(1);
            expect(team1.totalWicketGone).toBe(1);
            expect(team2.totalWicketTaken).toBe(1);
        })
    
        it("should calculate bowler points correctly if shot is W and batsman is captain", () => {
            let shot = "W";

            bowler.setCaptain(true);
    
            expect((match as any).calculateBowlerPoints(shot, batsman, bowler, team1, team2)).toBe(20);
    
            expect(bowler.wicket).toBe(2);
            expect(team1.totalWicketGone).toBe(2);
            expect(team2.totalWicketTaken).toBe(2);
        })
    
        it("should calculate bowler points correctly if shot is W and batsman is viceCaptain", () => {
            let shot = "W";

            bowler = team2.players[1];
            bowler.setViceCaptain(true);
    
            expect((match as any).calculateBowlerPoints(shot, batsman, bowler, team1, team2)).toBe(15);
    
            expect(bowler.wicket).toBe(1);
            expect(team1.totalWicketGone).toBe(3);
            expect(team2.totalWicketTaken).toBe(3);
        })
    })

    describe("out on duct", () => {

        let batsman : Player;

        beforeEach(() => {
            batsman = team1.players[0];
            batsman.totalRuns = 0;
            batsman.fantasyPoints = 0;
            batsman.setCaptain(false);
            batsman.setViceCaptain(false);
        })

        it("should decrease totalFantasyPoints correctly if batsman is out on duck", () => {
            (match as any).batsmanOutOnDuck(batsman, team1);
    
            expect(batsman.fantasyPoints).toBe(-2);
        })
    
        it("should decrease totalFantasyPoints correctly if captain is out on duck", () => {
            batsman.setCaptain(true);

            (match as any).batsmanOutOnDuck(batsman, team1);
    
            expect(batsman.fantasyPoints).toBe(-4);
        })
    
        it("should decrease totalFantasyPoints correctly if viceCaptain is out on duck", () => {
            batsman.setViceCaptain(true);
            
            (match as any).batsmanOutOnDuck(batsman, team1);
    
            expect(batsman.fantasyPoints).toBe(-3);
        })
    })
})