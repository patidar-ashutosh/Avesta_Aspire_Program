export class IPValidator {
    isValid(ip:string) : boolean {

        const octets = ip.split(".");
        
        if(octets.length !== 4) {
            return false;
        }
        
        for(let i=0; i<octets.length; i++) {
            if(octets[i] === "") return false;

            let num = Number(octets[i]);
            if(isNaN(num)) return false;
            
            if(num < 0 || num > 255) {
                return false;
            } else if(octets[i].startsWith("0") && octets[i].length > 1) {
                return false;
            }
        }

        // special case: `0.0.0.0` and `255.255.255.255`
        if(ip === "0.0.0.0" || ip === "255.255.255.255") {
            return false;
        }

        return true;
    }

}