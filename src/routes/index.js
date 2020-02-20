const userRoutes = require("./user");

module.exports = function(router) {
  router.use("/save", userRoutes());

  return router;
};
