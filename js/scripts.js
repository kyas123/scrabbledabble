var scrabble = function(word) {
var tally = 0;
var input = word.toUpperCase().split("");
var scoreKey = { "A": 1, "E": 1, "I": 1, "O": 1, "U": 1,
    "L": 1, "N": 1, "R": 1, "S": 1, "T":1,
    "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3,
    "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
    "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10 };

input.forEach(function(item) {
    tally += scoreKey[item];
});

return tally;
};

$(document).ready(function() {
    $("form#scrabble-dabble").submit(function(event){
        var wordInput = $("input#word").val();
        var result = scrabble(wordInput);

        $("#result").show();
        $(".score").text(result);
        event.preventDefault();

    });
});
