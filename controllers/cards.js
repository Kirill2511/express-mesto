const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch(() => {
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.send(card))
    .catch(() => res.status(400).send({ message: 'Переданы некорректные данные в метод создания карточки' }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params._id)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      return res.status(200).send(card);
    })
    .catch(() => {
      res.status(400).send({ message: 'Переданы некорректные данные' });
    });
};
