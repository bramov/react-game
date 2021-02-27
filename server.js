const express = require('express');
const app = express();
const path = __dirname + '/client/build/';

app.use(express.static(path));
const prepareDataSet = () => {
  const codes = ['10C', '10H', 'AS', 'KC', 'QH'];
  const res = codes.map(el => ({
    code: el,
    id: null,
    open: false,
    active: true
  }))
  return res;
}

app.get('/', async (req, res) => {
  try {
    res.sendFile(__dirname + path + 'index.html')
  } catch (e) {
    res.status(500).json({ message: 'Похоже, билд реакта сломался'})
  }
})
app.get('/loadData', async (req, res) => {
  try {
    const data = prepareDataSet();
    res.json(data)
  } catch(e) {
    res.status(500).json({ message: 'Ошибка сервера' })
  }

})
app.listen(process.env.PORT || 5000, () => console.log(
  `server started at ${process.env.PORT ? process.env.PORT : 5000}`));
