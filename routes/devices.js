var express = require('express');
var router = express.Router();

const LIST_STATUS = ["disconnected", "connected", "healthy", "error"]

const LIST_DEVICE = [
  {
    id: 1,
    name: "Thiet bi 1",
    location: "Di An - Binh Duong",
    current_temperature: 30,
    status: LIST_STATUS[0],
    last_update: '2323-312'
  },
  {
    id: 2,
    name: "Thiet bi 2",
    location: "Thuan An - Binh Duong",
    current_temperature: 30,
    status: LIST_STATUS[0],
    last_update: '2323-312'
  },
  {
    id: 3,
    name: "Thiet bi 3",
    location: "Thu Dau Mot - Binh Duong",
    current_temperature: 30,
    status: LIST_STATUS[0],
    last_update: '2323-312'
  },
  {
    id: 4,
    name: "Thiet bi 4",
    location: "Thu Duc - Ho Chi Minh",
    current_temperature: 30,
    status: LIST_STATUS[0],
    last_update: '2323-312'
  },
  {
    id: 5,
    name: "Thiet bi 5",
    location: "Go Vap - Ho Chi Minh",
    current_temperature: 30,
    status: LIST_STATUS[0],
    last_update: '2323-312'
  },
  {
    id: 6,
    name: "Thiet bi 6",
    location: "Binh Thanh - Ho Chi Minh",
    current_temperature: 30,
    status: LIST_STATUS[0],
    last_update: '2323-312'
  },
  {
    id: 7,
    name: "Thiet bi 7",
    location: "Tan Uyen - Binh Duong",
    current_temperature: 30,
    status: LIST_STATUS[0],
    last_update: '2323-312'
  },
  {
    id: 8,
    name: "Thiet bi 8",
    location: "Ben Cat - Binh Duong",
    current_temperature: 30,
    status: LIST_STATUS[0],
    last_update: '2323-312'
  },

]


const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  const currentTime = new Date();
  const data = LIST_DEVICE.map(item => {
    const status = LIST_STATUS[getRandomNumber(0, 3)]
    const current_temperature = getRandomNumber(20, 40)
    return {
      ...item,
      last_update: currentTime,
      status,
      current_temperature

    }
  })
  res.json(data)
});
router.get('/:id', function (req, res, next) {
  const id = req?.params?.id
  console.log('re', id,)

  const item = LIST_DEVICE.find(i => i.id == id)
  console.log(item)

  if (!item) {
    return res.json({})
  }
  const currentTime = new Date();
  const status = LIST_STATUS[getRandomNumber(0, 3)]
  const current_temperature = getRandomNumber(20, 40)
  const finalItem = {
    ...item,
    last_update: currentTime,
    status,
    current_temperature
  }
  res.json(finalItem)
});

module.exports = router;
