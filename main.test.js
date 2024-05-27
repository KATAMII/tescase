const{fizzbuzz} = require("./main")
describe("fizzbuzz",()=>{
    it("should return fizz for numbers divisible by 3",()=>{
        expect(fizzbuzz(3)).toBe("fizz");
    })
    it("should return buzz for numbers divisible by 5",()=>{
        expect(fizzbuzz(5)).toBe("buzz");
    })
    it("should return fizzbuzz for numbers divisible by 3 and 5",()=>{
        expect(fizzbuzz(15)).toBe("fizzbuzz");  
    })
    it("should return the number for numbers not divisible by 3 or 5",()=>{
        expect(fizzbuzz(4)).toBe(4);
    })
})