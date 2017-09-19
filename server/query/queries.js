const db = require('../../database/dbConnection');

const addVideo = videoID => {
  const thumbnail = `https://img.youtube.com/vi/${videoID}/sddefault.jpg`
  const insertVideo = 'INSERT INTO videos (video_url, thumbnail) VALUES ($1, $2)';
  return db.query(insertVideo, [videoID, thumbnail]);
};

const getGallery = () => {
  const getThumbnails = 'SELECT DISTINCT thumbnail FROM videos'; //this is a quick and dirty fix for duplicate entry of video
  //need to sort videos in desc order as well
  return db.query(getThumbnails);
}

const getNotes = () => {
  
}

module.exports = {
  addVideo,
  getGallery
}
