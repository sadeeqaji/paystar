const model = require("../../models/user");

exports.SaveMail = email => {
  return new Promise((resolve, reject) => {
    model
      .findOne({ email: email })
      .then(exist => {
        if (exist) {
          reject({ success: false, message: "Sorry email already saved" });
        } else {
          model
            .create({email})
            .then(created => {
              if (created) {
                resolve({
                  success: true,
                  message: "You will hear from us once we go live"
                });
              } else {
                resolve({ success: false, message: "an error occur" });
              }
            })
            .catch(err => {
                console.log(err)
              resolve({ success: false, message: "an error occur" });
            });
        }
      })
      .catch(err => {
          console.log(err)
        resolve({ success: false, message: "an error occur" });
      });
  });
};
