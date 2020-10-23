require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authModels = require('./models/authmodels');

// const errorHandler = require('./util/catch-and-log-errors');
// const logger = require('./util/logger');

const indexRouter = require('./routes/index');
const streamRouter = require('./routes/stream');
const addressRouter = require('./routes/addresses');
const assetRouter = require('./routes/assets');
const leaderBoardRouter = require('./routes/leaderboard');
const authRouter        = require('./routes/auth');
const surveillanceRouter = require('./routes/surveillance');
// const multichainService = require('./services/multichain');

const app = express();
const port = process.env.PORT || '3000';

app
  .use(bodyParser.json())
  .options('*', cors())
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  /*
   * Routes
   */
  .use('/', indexRouter)
  .use('/stream', streamRouter)
  .use('/address', addressRouter)
  .use('/asset', assetRouter)
  .use('/leaderboard', leaderBoardRouter)
  .use('/auth', authRouter)
  .use('/surveillance', surveillanceRouter)

// authModels.User.sync({force: true})
app.listen(port, () => {
  console.log(`Server started on port ${port}`);

//   await multichainService.init(app);
});

module.exports = app;