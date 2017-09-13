const express = require('express'),
      app = express(),
      path = require('path'),
      PORT = process.env.PORT || 9001;

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'client','index.html'));
});

app.listen(PORT, ()=>{
  console.log(`magic is happening in http://localhost:${PORT}`);
});
