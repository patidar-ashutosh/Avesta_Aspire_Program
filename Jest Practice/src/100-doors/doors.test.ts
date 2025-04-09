import { Door } from "./Door";

test("toggle the gates" , () => {

    let numberOfGate : number = 100;
    const door = new Door(numberOfGate);

    for(let number=1; number<=numberOfGate; number++) {
        door.toggleTheDoor(number);
    }

    const result = door.getResult();

    expect(result).toBe("@##@####@######@########@##########@############@##############@################@##################@");
});