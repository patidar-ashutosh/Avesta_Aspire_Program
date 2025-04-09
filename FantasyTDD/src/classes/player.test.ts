import { Player } from "./player"

describe("create a player", () => {
    it("create player", () => {
        const player = new Player("Rohit Sharma", "Batsman", 10, false, false);

        expect(player.getName()).toBe("Rohit Sharma");
        expect(player.getPlayingRole()).toBe("Batsman");
        expect(player.getCredit()).toBe(10);
        expect(player.isCaptain()).toBe(false);
        expect(player.isViceCaptain()).toBe(false);

        expect(player.getTotalRuns()).toBe(0);
        expect(player.getTotalGivenRuns()).toBe(0);
        expect(player.getTotalBallsPlayed()).toBe(0);
        expect(player.getTotalBallsDelivered()).toBe(0);
        expect(player.getWicket()).toBe(0);
        expect(player.getFantasyPoints()).toBe(0);
    })
})