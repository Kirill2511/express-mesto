const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch((err) => {
      res.status(404).send({ message: `Запрашиваемый ресурс не найден ${err}` });
    });
};

module.exports.getUser = (req, res) => {
  User.findById(req.params._id)
    .orFail(new Error('Не найдено'))
    .then((user) => res.status(200).send({ user }))
    .catch(() => {
      res.status(404).send({ message: 'Введён неправильный id' });
    });
};
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch(() => res.status(400).send({ message: 'Переданы некорректные данные в метод создания карточки или пользователя' }));
};
