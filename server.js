const express = require('express');
const mongoose = require('mongoose');
const foodRoutes = require('./routes/food');
const deliveryRoutes = require('./routes/delivery');
const taxiRoutes = require('./routes/taxi');

const app = express();
const port = 3000;

// 连接数据库
mongoose.connect('mongodb://localhost:27017/online-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('数据库连接成功'))
  .catch(err => console.error('数据库连接失败:', err));

// 中间件
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// 路由
app.use('/api/food', foodRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/taxi', taxiRoutes);

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});