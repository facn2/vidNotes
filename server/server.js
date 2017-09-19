const app = require('./app'),
      PORT = process.env.PORT || 9001;

app.listen(PORT, ()=>{
  console.log(`magic is happening in http://localhost:${PORT}`);
});
