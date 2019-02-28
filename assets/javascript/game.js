let wins = 0;
let losses = 0;
let targetScore;
let score;
let gemValues;
let gemImgs =["gem1", "gem2", "gem3", "gem4", "gem5", "gem6", "gem7", "gem8"]


  let resetGame = () => {
    gemValues = [];
    score = 0;
    targetScore = Math.floor(Math.random() * 100);
    for (let x = 0; x < 8; x++){
    gemValues.push(Math.floor(Math.random() * 10));
    };
    $("#target-score").text(targetScore);
  };

let newGame = () => {
  for (let i = 0; i < gemValues.length; i++) {
    let gemImage = $("<img>");
    gemImage.addClass("gem-image");
    gemImage.attr("src", ("./assets/images/" + gemImgs[i] +".png" ))
    gemImage.attr("data-gemvalue", gemValues[i]);
    $("#gems").append(gemImage);
  }
};
  resetGame();
  newGame();


  $(".gem-image").on("click", function() {


    let gemValue = ($(this).attr("data-gemvalue"));

    gemValue = parseInt(gemValue);
    score += gemValue;


    if (score === targetScore) {
      wins++;
      resetGame();
    }

    else if (score >= targetScore) {
      losses++;
      resetGame();
    }

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#your-score").text(score);

  });

 