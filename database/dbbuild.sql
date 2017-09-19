BEGIN;

DROP TABLE IF EXISTS notes, users, videos cascade;

/*
CREATE TABLE IF NOT EXISTS users (
  id            SERIAL        PRIMARY KEY,
  username      VARCHAR(15)   NOT NULL UNIQUE,
  password      VARCHAR(70)   NOT NULL
);
*/

CREATE TABLE IF NOT EXISTS videos (
  id            SERIAL        PRIMARY KEY,
  video_url     TEXT          NOT NULL, --actually we only need one of them, too lazy to change anyways
  thumbnail     TEXT          NOT NULL
);

CREATE TABLE IF NOT EXISTS notes (
  id            SERIAL        PRIMARY KEY,
  n_timestamp   INTEGER       NOT NULL,
  text_body     TEXT          NOT NULL,
  video_id      INTEGER       REFERENCES videos(id) ON UPDATE cascade DEFAULT 1
);

/*
INSERT INTO users (username, password) VALUES
('anonymous', '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW');
*/

INSERT INTO videos (video_url, thumbnail) VALUES
('tITwM5GDIAI', 'https://img.youtube.com/vi/tITwM5GDIAI/sddefault.jpg');

INSERT INTO videos (video_url, thumbnail) VALUES
('0fw5Cyh21TE', 'https://img.youtube.com/vi/0fw5Cyh21TE/sddefault.jpg');

INSERT INTO videos (video_url, thumbnail) VALUES
('KUdQ7gxU6Rg', 'https://img.youtube.com/vi/KUdQ7gxU6Rg/sddefault.jpg');

INSERT INTO videos (video_url, thumbnail) VALUES
('MVI87HzfskQ', 'https://img.youtube.com/vi/MVI87HzfskQ/sddefault.jpg');

INSERT INTO notes (n_timestamp, text_body, video_id) VALUES
(20, 'garbanzo, salt, cumin', 1);

COMMIT;
