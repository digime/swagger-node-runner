module.exports = {
  api_key: function failure(req, res, next) {
    console.log("SARMA3")
    if (req.swagger.params.name.value === 'Scott') {
      console.log("SARMA4")
      next();
    } else {
      console.log("SARMA5")
      next(new Error('no way!'));
    }
  }
};
