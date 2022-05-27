const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express')

const router = express.Router()
// routes/router.js
var db = require("../config/db.config");

router.post('/login', (req, res, next) => {
  const cin = req.body.cin;
  db.query(`SELECT * FROM employees WHERE cin=? and state='active';`, cin, (err, result) => {

    next
    // user does not exists
    if (err) {
      return res.status(400).send({
        msg: err
      });
    }
    if (result.length < 1) {
      return res.status(401).send({
        msg: 'Username or password is incorrect!'
      });
    }
    // check password
    bcrypt.compare(
      req.body.password,
      result[0]['password'],
      (bErr, bResult) => {
        // wrong password
        if (bErr) {
          return res.status(401).send({
            msg: 'Username or password is incorrect!'
          });
        }
        if (bResult) {
          const token = jwt.sign({
            cin: result[0].cin,
            email: result[0].email
          },
            'SECRETKEY', {
            expiresIn: '7d'
          }
          );
          return res.status(200).send({
            msg: 'Logged in!',
            token,
            user: result[0],
          });

        }
        return res.status(401).send({
          msg: 'Username or password is incorrect!'
        });
      }
    );
  }
  );
});
router.put('/session', (req, response) => {
  const cin = req.body.cin;
  db.query("update login set session_start =current_time where cin =?", cin, (err, res) => {

  if (err) {
    console.log("Error while updating the task" + err);
    response.status(401).json(err)
  } else {
    console.log("task updated successfully");
    response.status(200).json(res)
  }
})}
);

router.post('/sessionout/:userid', (data, response) => {
  let userid;
  userid = data;
  db.query("update login set session_out =current_time where user_id =?", [userid], (err, res) => {
console.log(data)
    if (err) {
      console.log("Error while updating the task" + err);
      response.status(401).json(err)
    } else {
      console.log("task updated successfully");
      response.status(200).json(res)
    }
  }
)}
);
router.get('/mail', (req, response) => {
  const mail = req.body.email;
  db.query("select * from employees where email =?", mail, (err, res) => {

    if (err) {
      console.log("Error while searching for mail" + err);
      response.status(401).json(err)
    } else {
      console.log(" mail founded");
      response.status(200).json(res)
    }
  })
}
);





module.exports = router