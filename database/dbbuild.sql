BEGIN;

DROP TABLE IF EXISTS notes, users, videos cascade;

CREATE TABLE IF NOT EXISTS users (
  id            SERIAL        PRIMARY KEY,
  username      VARCHAR(15)   NOT NULL UNIQUE,
  password      VARCHAR(70)   NOT NULL
);

CREATE TABLE IF NOT EXISTS videos (
  id            SERIAL        PRIMARY KEY,
  title         TEXT          NOT NULL,
  thumbnail     TEXT          NOT NULL,
  duration      INTEGER       NOT NULL,
  author        TEXT          NOT NULL,
  description   TEXT          NOT NULL,
  user_id       INTEGER       REFERENCES users(id) ON UPDATE cascade DEFAULT 1
);

CREATE TABLE IF NOT EXISTS notes (
  id            SERIAL        PRIMARY KEY,
  n_timestamp   INTEGER       NOT NULL,
  text_body     TEXT          NOT NULL,
  user_id       INTEGER       REFERENCES users(id) ON UPDATE cascade DEFAULT 1,
  video_id      INTEGER       REFERENCES videos(id) ON UPDATE cascade DEFAULT 1
);

INSERT INTO users (username, password) VALUES
('anonymous', '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW');

INSERT INTO videos (title, thumbnail, duration, author, description, user_id) VALUES
('Falafel', 'hard', 20, 'garbanzo, salt, cumin', 'arabic', 1);

INSERT INTO notes (n_timestamp, text_body, user_id, video_id) VALUES
(20, 'garbanzo, salt, cumin', 1, 1);

COMMIT;
