var clear = require("clear-code");

exports.getFriday = function (req, res) {
  var question = clear.clear(req.body.question, 255);
  var answer = 'Вопрос не распознан';
  var date = new Date();
  var currentDay = date.getDay();

  if ((question.search('пятница') != -1) && (question.search('?') != -1)) {
    if (currentDay !== 5){
      currentDay = "sorry bro, to day is not friday =(";
    }else {
      currentDay = "Happy bro! To day is friday!";
    }
  }else {
    currentDay = "I don't understand you question... Try again broc";
  }

  res.send({date:currentDay});
};