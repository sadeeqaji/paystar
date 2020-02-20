const { SaveMail } = require("../services/user");

module.exports = function saveEmailController() {
  this.saveEmail = (req, res, next) => {
    SaveMail(req.body.email)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      });
  };
};
