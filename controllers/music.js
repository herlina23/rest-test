const Music = require("../models/Music");

module.exports = {
  index: (req, res) => {
    Music.find()
      .then(music => res.json(music))
      .catch(err => console.log(err));
  },
  show: (req, res) => {
    Music.findById(req.params.id)
      .then(music => res.json(music))
      .catch(err => console.log(err));
  },
  update: (req, res) => {
    Music.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body.music },
      { new: true }
    )
      .then(music => res.json(music))
      .catch(err => console.log(err));
  },
  store: (req, res) => {
    Music.create({ ...req.body.music })
      .then(music => res.json(music))
      .catch(err => console.log(err));
  },
  destroy: (req, res) => {
    Music.findOneAndDelete({ _id: req.params.id })
      .then(music => res.json(music))
      .catch(err => console.log(err));
  }
};
