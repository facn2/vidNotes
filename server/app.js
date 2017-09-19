const express = require('express'),
      app = express(),
      path = require('path'),
      bp = require('body-parser'),
      {addVideo, getGallery, getNotes, addNotes} = require('./query/queries');


app.use(express.static(path.join(__dirname, '..', 'client', 'public')));


app.use(bp.urlencoded({extended: true}));

app.get('/getGallery', (req, resp) => {
  getGallery()
  .then(res => resp.send(res))
  .catch(err => console.log(err));
});

app.post('/getnotes', (req, resp)=>{
  getNotes(req.body.video_id)
  .then(res => resp.send(res))
  .catch(err => console.log(err));
});

app.post('/addnotes', (req, resp)=>{
  addNotes(req.body.timestamp, req.body.text, req.body.video_id)
  .then(res => console.log('successfully added notes'))
  .catch(err => console.log(err));
});

app.post('/add', (req, resp)=>{
  addVideo(req.body.url)
  .then(res => console.log('successfully added video'))
  .catch(err => console.log(err));
});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'client','index.html'));
});

module.exports = app;
