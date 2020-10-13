var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  post: 3306,
  user: "root",
  password: "123456",
  database: "project_data",
});

exports.register = async (req, res) => {
  console.log(req.body);

  var userId = req.body["id"];
  var userPwd = req.body["password"];
  //var userPwdCheck = req.body["pwdCheck"];

  console.log(userId);
  console.log(userPwd);
  connection.query(
    `insert into project_data.user_data(id,pwd) values(?,?)`,
    [userId, userPwd],
    function (err, result, fields) {
      if (err) console.log(err);
      else {
          res.send("회원가입 성공");
      }
    }
  );

};