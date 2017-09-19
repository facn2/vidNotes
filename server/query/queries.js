const db = require('../../database/dbConnection');

const addVideo = videoID => {
  const thumbnail = `https://img.youtube.com/vi/${videoID}/sddefault.jpg`
  const insertVideo = 'INSERT INTO videos (video_url, thumbnail) VALUES ($1, $2)';
  return db.query(insertVideo, [videoID, thumbnail]);
};

const addNotes = (timestamp, text, video_id) => {
  const insertNotes = 'INSERT INTO notes (n_timestamp, text_body, video_id) VALUES ($1, $2, $3)';
  return db.query(insertNotes, [timestamp, text, video_id]);
};

const getGallery = () => {
  const getThumbnails = 'SELECT thumbnail FROM videos ORDER BY id DESC';
  return db.query(getThumbnails);
}

const getNotes = video_id => {
  const getNotes = 'SELECT n_timestamp, text_body FROM notes WHERE video_id = $1';
  return db.query(getNotes, [video_id]);
}

module.exports = {
  addVideo,
  getGallery,
  getNotes,
  addNotes
}
