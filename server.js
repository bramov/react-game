const express = require('express');

const app = express();
const path = __dirname + '/client/build/';
app.use(express.static(path));

app.get('/', async (req, res) => {
  try {
    res.sendFile(__dirname + path + 'index.html')
  } catch (e) {
    res.status(500).json({ message: 'Похоже, что реакт не забилдился'})
  }
})
app.get('/loadData', async (req, res) => {
  try {
    const { data } = req.body;
    console.log(req.body);
  } catch(e) {
    res.status(500).json({ message: 'Сервер не отработал запрос, возможно не переданы параметры?' })
  }
})
app.listen(process.env.PORT || 5000, () => console.log(`server started at ${process.env.PORT}`));
