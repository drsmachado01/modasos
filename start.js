const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 80;

// sendFile will go here
app.get('/', function(req, res) {
  console.log('Ok, passando por aqui e redirecionando para home');
  res.sendFile(path.join(__dirname, '/home.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
console.log('Server started at http://localhost:' + port);