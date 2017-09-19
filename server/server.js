const express = require('express'),
      app = express(),
      path = require('path'),
      bp = require('body-parser'),
      {addVideo, getGallery, getNotes, addNotes} = require('./query/queries'),
      PORT = process.env.PORT || 9001;

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));


app.use(bp.urlencoded({extended: true}));

app.get('/getGallery', (req, resp) => {
  console.log('hit get gallery');
  getGallery()
  .then(res => resp.send(res))
  .catch(err => console.log(err));
});

app.post('/getnotes', (req, resp)=>{
  console.log('hit get notes');
  getNotes(req.body.video_id)
  .then(res => resp.send(res))
  .catch(err => console.log(err));
});

app.post('/addnotes', (req, res)=>{
  addNotes(req.body.timestamp, req.body.text, req.body.video_id)
  .then(res => resp.send(res))
  .catch(err => console.log(err));
});

app.post('/add', (req, res)=>{
  addVideo(req.body.url)
  .then(res => console.log(res))
  .catch(err => console.log(err));
  res.send(req.body); //for debugging
});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'client','index.html'));
});

app.listen(PORT, ()=>{
  console.log(`magic is happening in http://localhost:${PORT}`);
});
