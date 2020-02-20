const saveEmailController = require("../controllers/saveEmailController.js");

const router = require("express").Router();

module.exports = function() {
  const saveEmailCtrl = new saveEmailController();
  router.post("/email", saveEmailCtrl.saveEmail);

  return router;
};
