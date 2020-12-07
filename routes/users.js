const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/read-file');

const users = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  readFile(users)
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
});
router.get('/:id', (req, res) => {
  readFile(users)
    .then((data) => {
      const userId = data.find((user) => user._id === req.params.id);
      if (!userId) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(userId);
    })
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
});

module.exports = router;
