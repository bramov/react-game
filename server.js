const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = __dirname + '/client/build/';
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://dbUser:dbUserPassword@cluster0.i5zsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.json());
app.use(urlencodedParser);

const start = async () => {
  try {
    await client.connect();
  } catch (e) {
    console.error('problem', e)
  }
}
start();
app.use(express.static(path));

const prepareDataSet = (param) => {
  const codes = [
    '10C', '10D', '10H', '10S', 'AC',
    'AD', 'AH', 'AS', 'JC', 'JD',
    'JH', 'JS', 'KC', 'KD', 'KH',
    'KS', 'QC', 'QD', 'QH', 'QS'
  ].sort(() => Math.random() - 0.5).slice(0, param/2);
  return codes.map(el => ({
    code: el,
    id: null,
    open: false,
    active: true,
    won: false
  }));
}

app.get('/', async (req, res) => {
  try {
    res.sendFile(__dirname + path + 'index.html')
  } catch (e) {
    res.status(500).json({ message: 'Похоже, билд реакта сломался'})
  }
})
app.post('/updateData', urlencodedParser, async (req, res) => {
  try {
    const rating = client.db().collection('rating');
    await rating.insertOne({name: req.body.name, score: req.body.score, amount: req.body.amount});
    res.status(201).json({message: 'Успешно!'})
  } catch(e) {
    res.status(500).json({message: 'Ошибка MongoDB'})
  }
})
app.get('/loadScore', async (req, res) => {
  try {
    const data = client.db().collection('rating');
    const mode = req.query.mode;
    let scores;
    if (mode === 'all') {
      scores = await data.find({}).toArray();
    } else {
      scores = await data.find({amount: mode}).toArray();
    }

    res.json(scores);
  } catch(e) {
    res.status(500).json({ message: 'Ошибка MongoDB' })
  }
})
app.get('/loadData', async (req, res) => {
  try {
    const param = req.query.amount;
    const data = prepareDataSet(param);
    res.json(data)
  } catch(e) {
    res.status(500).json({ message: 'Ошибка сервера' })
  }
})
app.listen(process.env.PORT || 5000, () => console.log(
  `server started at ${process.env.PORT ? process.env.PORT : 5000}`));
