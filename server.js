const express = require('express');

const app = express();
app.get('/loadData', async (req, res) => {
  try {
    const { data } = req.body;
  } catch(e) {
    res.status(500).json({ message: 'Ошибка сервера, попробуйте еще раз!' })
  }
})
app.listen(process.env.PORT || 5000, () => console.log('server started'));
