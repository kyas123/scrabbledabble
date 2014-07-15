describe("scrabble",function(){
  it("input of a single letter should return it's associated number value",function(){
    scrabble("A").should.equal(1);
 });
  it("input of a word should add together the values of each individual letter", function(){
    scrabble("ePicOdus").should.equal(13);
  });
});
