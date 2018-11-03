const db = require("../models");

// Defining methods for the ResultsController
module.exports = {

  findAll: function(req, res) {
    db.Result
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Result
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      console.log("CLICKED ON A RESULT");
      console.log(req);
    db.Result
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   delete: function(req, res) {
//       db.Result
//         .remove({})
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//   }

};
