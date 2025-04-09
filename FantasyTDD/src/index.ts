import { Match } from "./classes/match";
import { Team } from "./classes/team";

const team1 = new Team("csk");
const team2 = new Team("mi");

team1.addPlayer(0);
team1.addPlayer(0);
team1.addPlayer(1);
team1.addPlayer(1);
team1.addPlayer(1);
team1.addPlayer(1);
team1.addPlayer(1);
team1.addPlayer(2);
team1.addPlayer(2);
team1.addPlayer(1);
team1.addPlayer(7);
team1.selectCaptain(team1.players[0]);
team1.selectViceCaptain(team1.players[1]);
team1.makeTeam();
// team1.printTeamDetails();


team2.addPlayer(0);
team2.addPlayer(1);
team2.addPlayer(1);
team2.addPlayer(1);
team2.addPlayer(1);
team2.addPlayer(1);
team2.addPlayer(2);
team2.addPlayer(3);
team2.addPlayer(3);
team2.addPlayer(13);
team2.addPlayer(24);
team2.selectCaptain(team2.players[4]);
team2.selectViceCaptain(team2.players[5]);
team2.makeTeam();
// team2.printTeamDetails();

const match = new Match();
const tossWinner = match.toss(team1, team2, "head");

let battingTeam = tossWinner;
let bowlingTeam = tossWinner === team1 ? team2 : team1;

match.startMatch(battingTeam, bowlingTeam);

for(let ball=1; ball<=30; ball++) {
    if(!match.playBall()) {
        break;
    }
}

match.changeInning();

for(let ball=1; ball<=30; ball++) {
    if(!match.playBall()) {
        break;
    }
}

console.log(match.getResult(team1, team2));