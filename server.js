const express = require('express');


// Next initialize the application
const app = express();

// routing path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});