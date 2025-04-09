export class fizzBuzzWhiz {

    getFizzBuzzWhiz(number : number) : string {

        let answerString = "";

        answerString += (number % 3 === 0) ? "Fizz" : "";

        answerString += (number % 5 === 0) ? "Buzz" : "";

        answerString += (answerString !== "") ? this.isNumberPrime(number) ? "Whiz" : "" : "";

        return (answerString === "") ? String(number) : answerString;
    }

    private isNumberPrime(num : number) : Boolean {
        for(let i=2; i<num; i++) {
            if(num % i === 0) {
                return false;
            }
        }

        return true;
    }
}