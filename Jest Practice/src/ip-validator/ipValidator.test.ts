import { IPValidator } from "./IPValidator";

describe("IPv1 test", () => {
    
    const ip = new IPValidator();
    
    it("should return true for valid IPv4 address", () => {
      expect(ip.isValid("192.168.1.1")).toBe(true);
      expect(ip.isValid("8.8.8.8")).toBe(true);
      expect(ip.isValid("0.15.12.11")).toBe(true);
      expect(ip.isValid("100.154.128.111")).toBe(true);
      expect(ip.isValid("250.254.208.200")).toBe(true);
    });

    it("should return false for not 4 blocks", () => {
      expect(ip.isValid("192.168.1")).toBe(false);
      expect(ip.isValid(".1.1.1")).toBe(false);
      expect(ip.isValid("")).toBe(false);
      expect(ip.isValid("5..10.56")).toBe(false);
    });

    it("should return false for invalid block number", () => {
      expect(ip.isValid("192.168.1.256")).toBe(false);
      expect(ip.isValid("256.1.1.1")).toBe(false);
      expect(ip.isValid("1.1.1.256")).toBe(false);
    });

    it("should return false for leading zeros", () => {
      expect(ip.isValid("120.05.1.1")).toBe(false);
      expect(ip.isValid("05.5.1.1")).toBe(false);
      expect(ip.isValid("5.5.1.01")).toBe(false);
      expect(ip.isValid("5.5.1.00")).toBe(false);
    });
    
    it("should return false for invalid characters", () => {
      expect(ip.isValid("192.168.1.1a")).toBe(false);
      expect(ip.isValid("5f.5.1.1")).toBe(false);
      expect(ip.isValid("5.8f.1.1")).toBe(false);
    });
    
    it("should return false for negative numbers", () => {
      expect(ip.isValid("192.168.1.-1")).toBe(false);
      expect(ip.isValid("-5.56.1.1")).toBe(false);
    });
    
    it("should return false for all 0 and 255", () => {
      expect(ip.isValid("0.0.0.0")).toBe(false);
      expect(ip.isValid("255.255.255.255")).toBe(false);
    });
});