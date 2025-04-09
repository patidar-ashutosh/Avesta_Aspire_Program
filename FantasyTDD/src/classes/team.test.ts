import { Team } from "./team";

describe("add players", () => {
    let team : Team;

    beforeAll(() => {
        team = new Team("csk");
    })

    it("if batsman is grater than 5", () => {
        expect(team.addPlayer(0)).toBe(true);
        expect(team.addPlayer(1)).toBe(true);
        expect(team.addPlayer(3)).toBe(true);
        expect(team.addPlayer(4)).toBe(true);
        expect(team.addPlayer(4)).toBe(true);
        // expect(team.addPlayer(4)).toBe(true);
    })

    it("if bowler is grater than 5", () => {
        expect(team.addPlayer(0)).toBe(true);
        expect(team.addPlayer(0)).toBe(true);
        expect(team.addPlayer(0)).toBe(true);
        expect(team.addPlayer(0)).toBe(true);
        expect(team.addPlayer(3)).toBe(true);
        // expect(team.addPlayer(1)).toBe(true);
    })

    it("if you not have Enough points", () => {
        // expect(team.addPlayer(8)).toBe(true);
    })

    it("if Wicketkeeper is grater than 2", () => {
        expect(team.addPlayer(35)).toBe(true);
        // expect(team.addPlayer(28)).toBe(true);
    })

    it("if player is grater than 11", () => {
        // expect(team.addPlayer(3)).toBe(true);
    })
})

describe("make team", () => {
    let team : Team;

    beforeAll(() => {
        team = new Team("mi");
    });

    it("add 11 player in team", () => {
        expect(team.addPlayer(0)).toBe(true);
        expect(team.addPlayer(0)).toBe(true);
        expect(team.addPlayer(1)).toBe(true);
        expect(team.addPlayer(1)).toBe(true);
        expect(team.addPlayer(1)).toBe(true);
        expect(team.addPlayer(1)).toBe(true);
        expect(team.addPlayer(1)).toBe(true);
        expect(team.addPlayer(2)).toBe(true);
        expect(team.addPlayer(2)).toBe(true);
        expect(team.addPlayer(3)).toBe(true);
        expect(team.addPlayer(9)).toBe(true);
    })

    it("if captain is not selected", () => {
        // expect(team.makeTeam()).toBe(false);
    })

    it("if vice captain is not selected", () => {
        // expect(team.makeTeam()).toBe(false);
    })

    it("if 11 player is not selected", () => {
        // expect(team.makeTeam()).toBe(false);
    })
})