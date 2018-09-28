exports.getFriday = function (req, res) {
  var question = toString(req.body.question);
  console.log(req.body);

  if (('abcdefgh'.search('def') != -1)) {

  }
  res.send(question);
};