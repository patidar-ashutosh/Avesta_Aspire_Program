export class NumbersToWords {

    private ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    private teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    private tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    getNumberToWords(num:number) : string {
        if (num < 10) return this.ones[num];
        if (num < 20) return this.teens[num - 10];
        if (num < 100) return this.tens[Math.floor(num / 10)] + (num % 10 !== 0 ? `-${this.ones[num % 10]}` : "");
        
        if (num < 1000) {
          return this.ones[Math.floor(num / 100)] + " hundred" + (num % 100 !== 0 ? ` ${this.getNumberToWords(num % 100)}` : "");
        }
    
        if (num < 10000) {
          return this.ones[Math.floor(num / 1000)] + " thousand" + (num % 1000 !== 0 ? ` ${this.getNumberToWords(num % 1000)}` : "");
        }
    
        return "Number out of range!";
    }
}