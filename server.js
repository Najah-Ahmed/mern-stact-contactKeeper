const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json({ msg: 'welcome to the contectKeeper API....' });
});
//Define Router
app.use('/api/users', require('./Route/users'));
app.use('/api/auth', require('./Route/auth'));
app.use('/api/contact', require('./Route/contact'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at Port ${PORT}`));
