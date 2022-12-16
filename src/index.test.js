var expect = require("chai").expect;
var starwars = require("./index.js")

describe("starwars-names", function(){
    describe("all", function () {
        it("should be an array of string", function(){
            expect(starwars.all).to.be.satisfy(isArrayOfString);
            function isArrayOfString(array){
                return array.every(item=>typeof item === "string")
            }
        })

        it("should contain 'Kali", function(){
            expect(starwars.all).to.include("Kali");
        })
    })

    describe("random", ()=>{
        it("should return a random item from the starwars.all", function(){
            var randomItem = starwars.random();
            expect(starwars.all).to.include(randomItem)
        })

        it("should return an array of random items if passed a number", function(){
            var randomItems = starwars.random(3);
            expect(randomItems).to.have.length(4);
            randomItems.forEach(item => {
                expect(starwars.all).to.include(item)
            });
        })
    })

})


